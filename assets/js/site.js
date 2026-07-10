/* =========================================================
   SITE.JS — shared interactive behaviour.
   Depends on the data files in /data being loaded first.
   ========================================================= */

function renderStats(targetId){
  const el = document.getElementById(targetId);
  if(!el || typeof SITE_STATS === "undefined") return;
  const hIndexCard = SITE_STATS.hIndex
    ? `<div class="stat-card"><div class="n">${SITE_STATS.hIndex}</div><div class="label">h-index</div></div>`
    : "";
  el.innerHTML = `
    <div class="stat-card"><div class="n">${SITE_STATS.citations}+</div><div class="label">Citations</div></div>
    ${hIndexCard}
    <div class="stat-card"><div class="n">${SITE_STATS.publicationsCount}</div><div class="label">Journal articles</div></div>
    <div class="stat-card"><div class="n">${SITE_STATS.conferenceCount}+</div><div class="label">Talks &amp; posters</div></div>
    <div class="stat-card"><div class="n">${SITE_STATS.mediaCount}+</div><div class="label">Media appearances</div></div>
  `;
  const note = document.getElementById(targetId + "-note");
  if(note){
    note.innerHTML = `Citation count is a manual snapshot from <a href="${SITE_STATS.scholarUrl}" target="_blank" rel="noopener">Google Scholar</a> as of ${SITE_STATS.asOf} — Scholar profiles can't be auto-embedded, so this updates whenever <code>data/site-data.js</code> is edited.`;
  }
}

/* ---------------- Publications ---------------- */
let pubFilter = "all";
let pubSearch = "";

function pubMatches(p, isConf){
  const text = (isConf ? (p.title + " " + p.venue) : (p.title + " " + p.authors + " " + p.venue)).toLowerCase();
  if(pubSearch && !text.includes(pubSearch.toLowerCase())) return false;
  if(pubFilter === "all") return true;
  if(pubFilter === "journal") return !isConf;
  if(pubFilter === "conference") return isConf;
  if(pubFilter === "prep") return p.__prep === true;
  return true;
}

function renderPublications(){
  const list = document.getElementById("pub-list");
  if(!list) return;
  let html = "";

  if(pubFilter === "prep"){
    const items = IN_PREPARATION.filter(t => !pubSearch || t.toLowerCase().includes(pubSearch.toLowerCase()));
    html = items.length
      ? `<ul class="list-ticked">${items.map(t => `<li>${t}</li>`).join("")}</ul>`
      : `<p class="pub-empty">No matches.</p>`;
    list.innerHTML = html;
    return;
  }

  if(pubFilter === "events"){
    if(typeof EVENTS === "undefined"){
      list.innerHTML = `<p class="pub-empty">No matches.</p>`;
      return;
    }
    const items = EVENTS.filter(e => !pubSearch || (e.title + " " + e.venue + " " + e.role).toLowerCase().includes(pubSearch.toLowerCase()));
    list.innerHTML = items.length ? `<div class="timeline">${items.map(e => `
      <div class="t-item ${e.type === "workshop" ? "is-workshop" : ""}">
        <div class="t-date">${e.year} <span class="t-tag">${e.type.replace("-", " ")}</span></div>
        <h3 style="margin-bottom:2px;">${e.page ? `<a href="${e.page}">${e.title}</a>` : e.title}</h3>
        <p class="pub-meta">${e.role} — ${e.venue}</p>
        ${e.url ? `<a class="card-link" href="${e.url}" target="_blank" rel="noopener">Event details →</a>` : ""}
      </div>
    `).join("")}</div>` : `<p class="pub-empty">No matches — try another filter or search term.</p>`;
    return;
  }

  const journalRows = JOURNAL_ARTICLES.filter(p => pubMatches(p, false)).map(p => `
    <div class="pub-item">
      <div class="pub-year">${p.year}</div>
      <div>
        <div class="pub-title">${p.title}</div>
        <div class="pub-meta">${p.authors}</div>
        <div class="pub-meta">${p.venue}${p.link ? ` — <a href="${p.link}" target="_blank" rel="noopener">read paper</a>` : ""}</div>
        <span class="pub-type">Journal article</span>
      </div>
    </div>
  `);

  const confRows = CONFERENCE_WORK.filter(p => pubMatches(p, true)).map(p => `
    <div class="pub-item">
      <div class="pub-year">${p.year}</div>
      <div>
        <div class="pub-title">${p.title}</div>
        <div class="pub-meta">${p.venue}</div>
        <span class="pub-type conf">${p.kind}</span>
      </div>
    </div>
  `);

  const rows = [...journalRows, ...confRows];
  list.innerHTML = rows.length ? rows.join("") : `<p class="pub-empty">No matches — try another filter or search term.</p>`;
}

function setPubFilter(filter, btn){
  pubFilter = filter;
  document.querySelectorAll("#pub-filters .chip").forEach(c => c.classList.remove("active"));
  if(btn) btn.classList.add("active");
  renderPublications();
}

function setPubSearch(value){
  pubSearch = value;
  renderPublications();
}

/* ---------------- Outreach / Media ---------------- */
let mediaFilter = "all";

function mediaEmbedFrame(m){
  if(m.category === "podcast"){
    return `<iframe src="https://open.spotify.com/embed/episode/${m.embed}?utm_source=generator&theme=0" title="${m.title}" loading="lazy" allow="encrypted-media" referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
  }
  if(m.category === "reel"){
    // Instagram refuses to render its live embed inside a page it doesn't
    // recognize as a genuine top-level site — that's exactly the "will not
    // allow ... to display the page" message. Rather than gamble on that
    // working for every visitor/browser, show a reliable reel-shaped card
    // that opens the real reel on Instagram in a new tab. No embed, no
    // error possible.
    return `
      <a href="${m.embed}" target="_blank" rel="noopener" class="reel-card">
        <span class="reel-play">▶</span>
        <span class="reel-label">Watch on Instagram</span>
      </a>`;
  }
  // video (YouTube). youtube-nocookie.com + referrerpolicy avoids most cases of
  // "Error 153", which happens when the page is opened as a local file
  // (file://...) instead of served over http(s), or nested inside another
  // preview iframe. Serving the site itself over http(s) (e.g. GitHub Pages)
  // resolves any remaining cases — see the permanent "Watch on YouTube" link
  // below every card as a fallback either way.
  return `<iframe src="https://www.youtube-nocookie.com/embed/${m.embed}?rel=0" title="${m.title}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}

function mediaOpenLink(m){
  if(m.category === "reel") return ""; // the reel card itself is already the link
  const label = m.category === "podcast" ? "Listen on Spotify ↗" : "Watch on YouTube ↗";
  const url = m.category === "podcast"
    ? `https://open.spotify.com/episode/${m.embed}`
    : `https://www.youtube.com/watch?v=${m.embed}`;
  return `<a class="media-open-link" href="${url}" target="_blank" rel="noopener">${label}</a>`;
}

function renderCarousel(containerId, category){
  const el = document.getElementById(containerId);
  if(!el || typeof MEDIA_ITEMS === "undefined") return;
  const items = MEDIA_ITEMS.filter(m => m.category === category && m.embed);
  if(!items.length){
    el.innerHTML = `<p class="carousel-empty">No ${category === "reel" ? "Instagram Reels" : category + " items"} yet — add one to <code>data/media.js</code> and it appears here automatically.</p>`;
    return;
  }
  const cardClass = category === "podcast" ? "is-podcast" : category === "reel" ? "is-reel" : "";
  el.innerHTML = items.map((m, i) => `
    <div class="carousel-card ${cardClass}">
      <div class="media-frame" id="${containerId}-frame-${i}">${mediaEmbedFrame(m)}</div>
      <div class="media-body">
        <div class="media-outlet${m.tvu ? " tvu" : ""}">${m.outlet}</div>
        <div class="media-title">${m.title}</div>
        ${mediaOpenLink(m)}
      </div>
    </div>
  `).join("");
}

function scrollCarousel(containerId, dir){
  const el = document.getElementById(containerId);
  if(!el) return;
  const card = el.querySelector(".carousel-card");
  const step = card ? card.offsetWidth + 18 : 300;
  el.scrollBy({ left: dir * step * 2, behavior: "smooth" });
}

function renderMedia(){
  const list = document.getElementById("press-list");
  if(!list || typeof MEDIA_ITEMS === "undefined") return;

  const listCategories = ["tv", "press", "radio"];
  const items = MEDIA_ITEMS.filter(m => listCategories.includes(m.category) && (mediaFilter === "all" || m.category === mediaFilter));

  list.innerHTML = items.length ? items.map(m => `
    <li>
      <a href="${m.url}" target="_blank" rel="noopener">${m.title}</a>
      <span class="src">${m.outlet}${m.tvu ? " · TVU" : ""}${m.date ? " · " + m.date : ""}</span>
      ${m.note ? `<div class="pub-meta" style="margin-top:4px;">${m.note}</div>` : ""}
    </li>
  `).join("") : `<li class="pub-empty">No items in this category yet.</li>`;
}

function setMediaFilter(filter, btn){
  mediaFilter = filter;
  document.querySelectorAll("#media-filters .chip").forEach(c => c.classList.remove("active"));
  if(btn) btn.classList.add("active");
  renderMedia();
}

/* ---------------- Events ---------------- */
let eventFilter = "all";

function renderEvents(){
  const el = document.getElementById("events-timeline");
  if(!el || typeof EVENTS === "undefined") return;
  const items = EVENTS.filter(e => eventFilter === "all" || e.type === eventFilter);
  el.innerHTML = items.length ? items.map(e => `
    <div class="t-item ${e.type === "workshop" ? "is-workshop" : ""}">
      <div class="t-date">${e.year} <span class="t-tag">${e.type.replace("-", " ")}</span></div>
      <h3 style="margin-bottom:2px;">${e.page ? `<a href="${e.page}">${e.title}</a>` : e.title}</h3>
      <p class="pub-meta">${e.role} — ${e.venue}</p>
      ${e.url ? `<a class="card-link" href="${e.url}" target="_blank" rel="noopener">Event details →</a>` : ""}
    </div>
  `).join("") : `<p class="pub-empty">No events in this category yet.</p>`;
}

function setEventFilter(filter, btn){
  eventFilter = filter;
  document.querySelectorAll("#event-filters .chip").forEach(c => c.classList.remove("active"));
  if(btn) btn.classList.add("active");
  renderEvents();
}
