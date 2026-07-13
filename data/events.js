/* =========================================================
   EVENTS DATA
   type: "workshop" | "congress" | "seminar" | "talk-series"
   page: optional — link to a dedicated event page/microsite,
   e.g. "events/andesnet-2026.html" built from
   events/template.html. Leave "" if there's no dedicated page.
   ========================================================= */

const EVENTS = [
  {
    year: 2026,
    type: "workshop",
    title: "DAS Workshop — Training on Distributed Acoustic Sensing for Earthquake Research",
    role: "Lead organizer",
    venue: "Universidad de Concepción, Chile · Sep 2–4, 2026",
    url: "",
    page: "events/das-workshop-2026.html"
  },
  {
    year: 2023,
    type: "workshop",
    title: "How to work with seismological data with any computer",
    role: "Instructor",
    venue: "GIASIS Conference",
    url: "",
    page: ""
  },
  {
    year: 2023,
    type: "talk-series",
    title: "AndesNet Scientific Discussion Meetings",
    role: "Committee member",
    venue: "AndesNet — Red de geocientistas de la zona de subducción chilena",
    url: "https://andesnetinfo.wixsite.com/andesnet",
    page: ""
  },
  {
    year: "2021 - 2022",
    type: "talk-series",
    title: "Conversaciones Precursoras",
    role: "Co-organizer",
    venue: "Proyecto Anillo Precursor",
    url: "https://www.precursor.cl/conferenciasprecursoras/",
    page: ""
  },
  {
    year: 2020,
    type: "talk-series",
    title: "Geocharlas T3",
    role: "Co-organizer",
    venue: "Geocharlas T3 Talks Project",
    url: "https://geocharlast3.weebly.com/",
    page: ""
  },
  {
    year: 2019,
    type: "congress",
    title: "Is Science Equal?",
    role: "Co-organizer",
    venue: "Public event, Chile",
    url: "https://web.facebook.com/events/2402908089942941/",
    page: ""
  },
  {
    year: 2018,
    type: "congress",
    title: "Conference for international IdeX students",
    role: "Organizing committee",
    venue: "PDI entry days, France",
    url: "",
    page: ""
  },
  {
    year: 2017,
    type: "congress",
    title: "Congrès des doctorants ED 413",
    role: "Organizing committee",
    venue: "Université de Strasbourg, France",
    url: "http://eost.u-strasbg.fr/stue/Files/CDD_Program_2017.pdf",
    page: ""
  }

  /* --- HOW TO ADD A NEW EVENT ---
  {
    year: 2026,
    type: "workshop",          // workshop | congress | seminar | talk-series
    title: "Name of the event",
    role: "Organizer",
    venue: "Host institution, City",
    url: "https://event-website.example",
    page: "events/your-event-2026.html"   // or "" if none
  },
  */
];
