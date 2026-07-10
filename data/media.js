/* =========================================================
   MEDIA & OUTREACH DATA
   category: "tv" | "press" | "radio" | "podcast" | "video" | "reel"
   outlet: name shown as the small label (e.g. "Canal TVU")
   embed:
     - video   → a YouTube video ID (e.g. "HKdivN7HA9c")
     - podcast → a Spotify episode ID (e.g. "0RCQrgVotk3C2U1FAy7oQ6")
     - reel    → the FULL Instagram reel permalink URL
                 (e.g. "https://www.instagram.com/reel/XXXXXXXXXXX/")
   "video", "podcast" and "reel" items appear as carousels on the
   Outreach page. Everything else (tv, press, radio) appears as a
   simple list.
   ========================================================= */

const MEDIA_ITEMS = [
  // --- Television (TVU and other channels) ---
  {
    category: "tv",
    outlet: "Canal TVU — Universidad de Concepción",
    tvu: true,
    title: "Entrevista a Dra. Catalina Morales-Yáñez: sismología en la gestión del riesgo",
    date: "2022",
    url: "https://achigeo.cl/seminario-achigeo-2022-la-sismologia-en-la-gestion-del-riesgo/",
    note: "Programa de entrevistas de Canal TVU sobre sismología y gestión del riesgo en Chile."
  },
  {
    category: "tv",
    outlet: "TVU — Audiovisual DGEO UdeC",
    tvu: true,
    title: "Monólogo científico — Concurso Nacional Solo de Ciencia",
    date: "2023–2024",
    url: "https://www.dgeo.udec.cl/audiovisual/",
    note: "Participación del Departamento de Geofísica UdeC en piezas audiovisuales y entrevistas de divulgación emitidas por TVU."
  },
  {
    category: "press",
    outlet: "Caritas Chile",
    title: "¿Estamos preparados para enfrentar un terremoto en Chile?",
    date: "2021",
    url: "http://www.caritaschile.org/detalle.php?id=44500"
  },
  {
    category: "press",
    outlet: "Precursor",
    title: "Precursor oficializa su funcionamiento con masivo evento online",
    date: "2021",
    url: "https://www.precursor.cl/precursor-oficializa-su-funcionamiento-con-masivo-evento-online/"
  },
  {
    category: "press",
    outlet: "Precursor",
    title: "Tesistas exponen avances de sus investigaciones para aportar a Precursor",
    date: "2021",
    url: "https://www.precursor.cl/tesistas-exponen-avances-de-sus-investigaciones-para-aportar-a-precursor/"
  },
  {
    category: "press",
    outlet: "Instagram — After Geocientificxs",
    title: "After geocientificxs",
    date: "2020",
    url: "https://www.instagram.com/p/CHIX-WPB4kt/"
  },
  {
    category: "press",
    outlet: "Blog GeoLatinas",
    title: "El terremoto del COVID-19",
    date: "2020",
    url: "https://geolatinas.weebly.com/blog/june-22nd-2020"
  },
  {
    category: "press",
    outlet: "CIGIDEN",
    title: "Conversatorio sobre mujeres y ciencia reunió a más de 70 investigadoras, académicas y estudiantes",
    date: "2020",
    url: "https://www.cigiden.cl/conversatorio-sobre-mujeres-y-ciencia-reunio-a-mas-70-investigadoras-academicas-y-estudiantes-de-chile-y-latinoamerica/"
  },
  {
    category: "press",
    outlet: "Departamento de Geofísica, Universidad de Chile",
    title: "Egresados del Departamento de Geofísica organizan ciclo de charlas sobre Geociencias",
    date: "2019",
    url: "http://www.dgf.uchile.cl/noticias/165337/egresados-del-dgf-organizan-ciclo-de-charlas-sobre-geociencias"
  },
  {
    category: "press",
    outlet: "ED413, Université de Strasbourg",
    title: "Archives du congrès des doctorants 2008–2019 — Comité d'organisation",
    date: "2018",
    url: "https://ed413.unistra.fr/francais/congres-des-doctorants/article/archives-du-congres-des-doctorants?lang=fr"
  },
  {
    category: "press",
    outlet: "Universidad de Concepción",
    title: "Seminario UDEC: Nuevos Desafíos para la Ciencia en Gestión de Riesgo",
    date: "2013",
    url: "https://www.dgeo.udec.cl/extension/seminarios/seminarios-2013/"
  },
  {
    category: "press",
    outlet: "Agenda Conce",
    title: "Seminario: Nuevos Desafíos para la Ciencia en Gestión de Riesgo",
    date: "2013",
    url: "https://www.agendaconce.cl/seminario-nuevos-desafios-para-la-ciencia-en-gestion-de-riesgo-auditorio-alamiro-robledo-facultad-de-ciencias-fisicas-y-matematicas-udec-concepcion-2013"
  },
  {
    category: "press",
    outlet: "PDN Universidad de Valparaíso",
    title: "Expertos en modelación atmosférica se reunieron para analizar relevante área de la meteorología",
    date: "2013",
    url: "https://pdn.uv.cl/?id=4589"
  },

  // --- Radio ---
  { category: "radio", outlet: "Radio U. de Chile — Rocadictos", title: "GeoLatinas", date: "", url: "https://radio.uchile.cl/programas/rocadictos/626968/" },
  { category: "radio", outlet: "Radio U. de Chile — Rocadictos", title: "Woman Day", date: "", url: "https://radio.uchile.cl/programas/rocadictos/619329/" },

  // --- Podcasts (Spotify embeds) ---
  { category: "podcast", outlet: "Spotify", title: "Podcast episode", embed: "0RCQrgVotk3C2U1FAy7oQ6" },
  { category: "podcast", outlet: "Spotify", title: "Podcast episode", embed: "4HGx6z3Xwidcbvm3bbmRT1" },
  { category: "podcast", outlet: "Spotify", title: "Podcast episode", embed: "2x7RlPhTwVX1jjVN6WQAFB" },

  // --- Recorded talks / videos (YouTube embeds) ---
  { category: "video", outlet: "YouTube", title: "Recorded talk", embed: "HKdivN7HA9c" },
  { category: "video", outlet: "YouTube", title: "Recorded talk", embed: "wxmGysI-9JU" },
  { category: "video", outlet: "YouTube", title: "Recorded talk", embed: "VlBongd9xeQ" },
  { category: "video", outlet: "YouTube", title: "Recorded talk", embed: "WV2xcjHTrEk" },
  { category: "video", outlet: "YouTube", title: "Recorded talk", embed: "wQXB006r0Cw" },
  { category: "video", outlet: "YouTube", title: "Recorded talk", embed: "e94Bf5-F5DQ" },
  { category: "video", outlet: "YouTube", title: "Recorded talk", embed: "yRdQnZIEdcY" },

  // --- Instagram Reels ---
  { category: "reel", outlet: "Instagram", title: "Reel", embed: "https://www.instagram.com/reels/DHqZMlsxmjo/" },
  { category: "reel", outlet: "Instagram", title: "Reel", embed: "https://www.instagram.com/reel/DSIuyPBjwpI/" },
  { category: "reel", outlet: "Instagram", title: "Reel", embed: "https://www.instagram.com/reel/DMtHebFRnUk/" },
  { category: "reel", outlet: "Instagram", title: "Reel", embed: "https://www.instagram.com/reel/DR26yqjDSP1/" },
];

const SCICOMM_TALKS = [
  { title: "¿Quiénes hacen ciencia?", venue: "Charla en Colegio Ciudad de Frankfurt, Santiago, Chile" },
  { title: "¿Qué onda con las ondas?", venue: "Taller virtual internacional de Ciencias para Jóvenes, UNAM, México" },
  { title: "Seismology and PhD studies", venue: "Skype with a Scientist — schools from Germany, USA and Spain" },
  { title: "Diversity", venue: "PDI Autumn Session — Conference for international IdeX students, France" },
  { title: "Earthquake source characterization accounting for 3D structure", venue: "PDI entry days — Reception conference for international IdeX students, France" }
];

const CONFERENCE_ORG = [
  { year: 2021, title: "Conversaciones Precursoras", url: "https://www.precursor.cl/conferenciasprecursoras/" },
  { year: 2020, title: "Geocharlas T3", url: "https://geocharlast3.weebly.com/" },
  { year: 2019, title: "Is Science equal?", url: "https://web.facebook.com/events/2402908089942941/" },
  { year: 2018, title: "Conference for international IdeX students", url: "" },
  { year: 2017, title: "Congrès des doctorants ED 413", url: "http://eost.u-strasbg.fr/stue/Files/CDD_Program_2017.pdf" }
];
