/* =========================================================
   PUBLICATIONS DATA
   To add a paper: copy an object inside JOURNAL_ARTICLES and
   edit the fields. To add a talk/poster: do the same inside
   CONFERENCE_WORK. Nothing else needs to change — the
   Publications page reads this file and renders the list,
   filters and counts automatically.
   ========================================================= */

const JOURNAL_ARTICLES = [
  {
    year: 2025,
    authors: "Marchant, G., Benavente, R., Becerra-Carreño, V., Crempien, J., <b>Morales-Yáñez, C.</b>",
    title: "Characterizing Spatial Correlations in Coseismic Slip Distributions: A Data Driven Bayesian Inference Approach",
    venue: "Geophysical Journal International, 240(1), 763–778",
    link: "https://academic.oup.com/gji/article/240/1/763/7900675"
  },
  {
    year: 2024,
    authors: "Wang, X., Wei, S., <b>Morales-Yáñez, C.</b>, Duputel, Z., Chen, L., Hao, T., Zhao, L.",
    title: "Plate interface geometry complexity and persistent heterogeneous coupling revealed by a high-resolution earthquake focal mechanism catalog",
    venue: "Earth and Planetary Science Letters, 637, 118726",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0012821X24001596"
  },
  {
    year: 2023,
    authors: "González-Vidal, D., Moreno, M., Sippl, C., Baez, J.C., Ortega-Culaciati, F., Lange, D., Tilmann, F., Socquet, A., Bolte, J., Hormazabal, J., Langlais, M., <b>Morales-Yáñez, C.</b>, Melnick, D., Benavente, R., Münchmeyer, J., Araya, R., Heit, B.",
    title: "Relation between oceanic plate structure, patterns of interplate locking and microseismicity in the 1922 Atacama Seismic Gap",
    venue: "Geophysical Research Letters, 50(15), e2023GL103565",
    link: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2023GL103565"
  },
  {
    year: 2023,
    authors: "Ojeda, J., <b>Morales-Yáñez, C.</b>, Ducret, G., Ruiz, S., Grandin, R., Doin, M.-P., Vigny, C., Nocquet, J.-M.",
    title: "Seismic and aseismic slip during the 2006 Copiapó swarm in North-Central Chile",
    venue: "Journal of South American Earth Sciences",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0895981123000093"
  },
  {
    year: 2022,
    authors: "<b>Morales-Yáñez, C.</b>, Bustamante, L., Benavente, R., Sippl, C., Moreno, M.",
    title: "B-value variations in the Central Chile seismic gap assessed by a Bayesian transdimensional approach",
    venue: "Scientific Reports, 12(1), 1–12",
    link: "https://www.nature.com/articles/s41598-022-25338-4"
  },
  {
    year: 2022,
    authors: "<b>Morales-Yáñez, C.</b>, Duputel, Z., Rivera, L.",
    title: "Exploring the link between large earthquakes and magma transport at the onset of the Mayotte volcano-seismic crisis",
    venue: "Comptes Rendus. Géoscience, 354(S2), 1–16",
    link: "https://comptes-rendus.academie-sciences.fr/geoscience/articles/10.5802/crgeos.150/"
  },
  {
    year: 2020,
    authors: "<b>Morales-Yáñez, C.</b>, Duputel, Z., Rivera, L.",
    title: "Impact of 3-D Earth structure on W-phase CMT parameters",
    venue: "Geophysical Journal International, 223(2), 1432–1445",
    link: "https://academic.oup.com/gji/article-abstract/223/2/1432/5893793"
  }
];

const IN_PREPARATION = [
  "Pasten Araya, F., <b>Morales-Yáñez, C.</b>, Rivera, E., Ruiz, S., Cabrera, L., Novoa, MJ., Salazar, P. — Trapped rupture from intermediate-depth earthquakes, evidenced by persistent microseismicity.",
  "Stankiewicz, M., Salazar, R., Sakarya, O., Horodecki, K., Múñoz, A., <b>Morales-Yáñez, C.</b>, Viveros-Carrasco, J., Czechlewski, M., Horodecki, P. — Quantum amplification of semi-random sequences obtained from seismic events.",
  "<b>Morales-Yáñez, C.</b>, Benavente, R., Cummins, P., Sambridge, M., Hawkins, R. — A data-driven Bayesian methodology to estimate 2D b-value variations.",
  "Merino, J.P., <b>Morales-Yáñez, C.</b>, Benavente, R., Castro, S., Ortega-Culaciati, F., Donoso, F., Moreno, M. — A Bayesian transdimensional approach for Characterizing Transients in GNSS time series.",
  "Diaz, N., <b>Morales-Yáñez, C.</b>, Ruiz, J., Ortega-Culaciati, F., Rivera, L. — Retrieving source-time function from near-field records in northern Chile."
];

const CONFERENCE_WORK = [
  { year: 2026, title: "b-transD: Spatial and temporal variation of b-value and their uncertainty using Bayesian trans-dimensional inference", venue: "European Geosciences Union General Assembly, Vienna, Austria", kind: "Talk", link: "https://meetingorganizer.copernicus.org/EGU26/EGU26-8613.html" },

  { year: 2025, title: "Contributed talk", venue: "VII Coloquio sobre Señales Geofísicas de Terremotos y Volcanes (GSEV), Valparaíso, Chile", kind: "Talk", link: "https://sites.google.com/view/gsev/program?authuser=0" },
  { year: 2025, title: "Contributed talk", venue: "IV Congreso de Amenaza Sísmica (GIASIS), Chile", kind: "Talk", link: "https://sites.google.com/view/ivcongresoamenaza/programa?authuser=0" },
  { year: 2025, title: "2D Bayesian transdimensional inversion for b-value variations", venue: "European Geosciences Union General Assembly, Vienna, Austria", kind: "Talk", link: "https://meetingorganizer.copernicus.org/EGU25/EGU25-14527.html" },
  { year: 2025, title: "Evaluation of the Coulomb stress changes between the 1960 Concepción and Valdivia earthquakes in southern Chile", venue: "European Geosciences Union General Assembly, Vienna, Austria", kind: "Supervising", link: "https://meetingorganizer.copernicus.org/EGU25/EGU25-497.html" },
  { year: 2025, title: "Seismicity of the south-western South American margin through a machine learning automated approach", venue: "European Geosciences Union General Assembly, Vienna, Austria", kind: "Co-Inv", link: "https://meetingorganizer.copernicus.org/EGU25/EGU25-14177.html" },
  { year: 2025, title: "Characterizing the plate interface with microseismicity: Central Chile", venue: "European Geosciences Union General Assembly, Vienna, Austria", kind: "Co-Inv", link: "https://meetingorganizer.copernicus.org/EGU25/EGU25-6600.html" },

  { year: 2024, title: "Analyzing the participation and representation of women scientists in geosciences at the academic level", venue: "V Assembly of the Latin American and Caribbean Seismological Commission, San José, Costa Rica", kind: "Talk", link: "https://web.cvent.com/event/570bf8ac-3864-46be-af3f-9a152d88afdf/websitePage:8131fba7-08ee-456a-a3c4-e518254a9ea4" },
  { year: 2024, title: "A data-driven Bayesian methodology to estimate 2D b-value variations", venue: "V Assembly of the Latin American and Caribbean Seismological Commission, San José, Costa Rica", kind: "Talk", link: "https://web.cvent.com/event/570bf8ac-3864-46be-af3f-9a152d88afdf/websitePage:8131fba7-08ee-456a-a3c4-e518254a9ea4" },
  { year: 2024, title: "Data-driven Bayesian transdimensional methodology to estimate 2D b-value variations", venue: "American Geophysical Union Fall Meeting, Washington D.C., USA", kind: "Talk", link: "https://agu.confex.com/agu/agu24/meetingapp.cgi/Paper/1637651" },
  { year: 2024, title: "A Bayesian transdimensional approach for Characterizing Transients in GNSS time series", venue: "American Geophysical Union Fall Meeting, Washington D.C., USA", kind: "Poster", link: "https://agu.confex.com/agu/agu24/meetingapp.cgi/Paper/1637269" },
  { year: 2024, title: "From the Surface to the Mantle: Integrating Geophysical, Seismological, and Tectonics Perspectives Along the South American Margin", venue: "American Geophysical Union Fall Meeting, Washington D.C., USA", kind: "Convener", link: "https://agu.confex.com/agu/agu24/meetingapp.cgi/Session/239713" },

  { year: 2023, title: "Let's work together: Geomatics and Seismology", venue: "Congreso de Aplicaciones de la Geomática y Observación de la Tierra, Los Ángeles, Chile", kind: "Talk" },
  { year: 2023, title: "A data-driven Bayesian methodology to estimate 2D b-value variations", venue: "XVI Congreso Geológico Chileno, Santiago, Chile", kind: "Talk", link: "https://congresogeologicochileno.cl/wp-content/uploads/2023/11/Programa-Congreso-Geologico-2023-1.pdf" },
  { year: 2023, title: "Análisis de la participación y representatividad de investigadoras en la academia de las geociencias", venue: "XVI Congreso Geológico Chileno, Santiago, Chile", kind: "Talk", link: "https://congresogeologicochileno.cl/wp-content/uploads/2023/11/Programa-Congreso-Geologico-2023-1.pdf" },
  { year: 2023, title: "Impacto de las RRSS en la divulgación de las geociencias: Caso de estudio — terremotos", venue: "XVI Congreso Geológico Chileno, Santiago, Chile", kind: "Co-Inv", link: "https://congresogeologicochileno.cl/wp-content/uploads/2023/11/Programa-Congreso-Geologico-2023-1.pdf" },
  { year: 2023, title: "Fundación Geonautas: únete a explorar nuestro Planeta Tierra", venue: "XVI Congreso Geológico Chileno, Santiago, Chile", kind: "Co-Inv", link: "https://congresogeologicochileno.cl/wp-content/uploads/2023/11/Programa-Congreso-Geologico-2023-1.pdf" },
  { year: 2023, title: "Exploring the link between large earthquakes and magma transport at the onset of the Mayotte volcano-seismic crisis", venue: "5th Colloquium on Geophysical Signatures of Earthquakes and Volcanoes, Santiago, Chile", kind: "Talk" },

  { year: 2022, title: "B-value variations in the Central Chile seismic gap assessed by a Bayesian transdimensional approach", venue: "AGU Fall Meeting, Chicago, USA", kind: "Talk", link: "https://agu.confex.com/agu/fm22/meetingapp.cgi/Paper/1082959" },
  { year: 2022, title: "Estimating correlation lengths of megathrust events: A Bayesian model selection approach", venue: "AGU Fall Meeting, Chicago, USA", kind: "Co-Inv", link: "https://agu.confex.com/agu/fm22/meetingapp.cgi/Paper/1078737" },
  { year: 2022, title: "Seismological and Geodetic constraints on the 2006 Copiapó, northern Chile, seismic swarm", venue: "IV Assembly of the Latin American and Caribbean Seismological Commission, Quito, Ecuador", kind: "Co-Inv" },

  { year: 2021, title: "Characterizing variations in b-value by using a Bayesian transdimensional approach", venue: "AGU Fall Meeting 2021", kind: "Talk", link: "https://agu.confex.com/agu/fm21/meetingapp.cgi/Paper/907102" },
  { year: 2021, title: "A trans-dimensional approach to robustly identify earthquake-cycle transient surface displacements: Applications for the Chilean margin", venue: "AGU Fall Meeting 2021", kind: "Co-Inv", link: "https://agu.confex.com/agu/fm21/meetingapp.cgi/Paper/983404" },
  { year: 2021, title: "Characterizing variations in the B-value by using a Bayesian transdimensional approach", venue: "Simposio Actualización de la Geología de Chile (SAGChi), online", kind: "Poster" },
  { year: 2021, title: "Uncertainty due to 3D heterogeneities — a look at W-phase CMT inversions in South America", venue: "IV Colloquium on Geophysical Signatures of Earthquakes and Volcanoes, virtual", kind: "Talk" },

  { year: 2020, title: "#GeoHackeo, the GeoLatinas hackathon — Testing our Digital Literacy toolkit", venue: "AGU Fall Meeting 2020", kind: "Co-Inv", link: "https://agu.confex.com/agu/fm20/meetingapp.cgi/Paper/735299" },
  { year: 2020, title: "Geolatinas Digital Literacy Toolkit: A Diverse Community Developing Coding Skills for the Open Source World", venue: "AGU Fall Meeting 2020", kind: "Co-Inv", link: "https://agu.confex.com/agu/fm20/meetingapp.cgi/Paper/702493" },
  { year: 2020, title: "Moving Beyond the Standard: A Transdisciplinary Virtual Event for Early-Career Scientists", venue: "AGU Fall Meeting 2020", kind: "Convener", link: "https://agu.confex.com/agu/fm20/meetingapp.cgi/Session/102053" },

  { year: 2019, title: "3D CMT Inversion of Mw ≥ 5 Earthquakes during the Mayotte Seismic Crisis", venue: "AGU Fall Meeting, San Francisco, USA", kind: "Poster", link: "https://agu.confex.com/agu/fm19/meetingapp.cgi/Paper/536346" },
  { year: 2019, title: "Impact of 3D Earth's structures on W-phase CMT parameters", venue: "AGU Fall Meeting, San Francisco, USA", kind: "Poster", link: "https://agu.confex.com/agu/fm19/meetingapp.cgi/Paper/515380" },

  { year: 2018, title: "Inversion of the source-time function for earthquakes in northern Chile using different least squares regularization methods", venue: "AGU Fall Meeting, Washington D.C., USA", kind: "Co-Inv", link: "https://agu.confex.com/agu/fm18/meetingapp.cgi/Paper/400071" },
  { year: 2018, title: "Effects of 3D Earth structure on W-phase CMT parameters", venue: "Congrès des doctorants ED413, Strasbourg, France", kind: "Talk" },
  { year: 2018, title: "Simultaneous inversion of the seismic moment tensor and temporal source function for earthquakes in northern Chile", venue: "XV Congreso Geológico Chileno, Concepción, Chile", kind: "Co-Inv" },
  { year: 2018, title: "Effects of different earth's structures on W-phase CMT parameters", venue: "ESC General Assembly, Valletta, Malta", kind: "Poster" },

  { year: 2017, title: "Effects of 3D Earth structure on W-phase CMT parameters", venue: "Congrès des doctorants ED413, Strasbourg, France", kind: "Poster" },
  { year: 2017, title: "Effects of 3D Earth structure on W-phase CMT parameters", venue: "EGU General Assembly, Vienna, Austria", kind: "Poster", link: "https://meetingorganizer.copernicus.org/EGU2017/EGU2017-14679.pdf" },
  { year: 2017, title: "Retrieving source-time function and seismic moment tensor from near-field records", venue: "EGU General Assembly, Vienna, Austria", kind: "Poster", link: "https://meetingorganizer.copernicus.org/EGU2017/EGU2017-15138.pdf" },

  { year: 2016, title: "Retrieving source-time function and seismic moment tensor from near-field records", venue: "AGU Fall Meeting, San Francisco, USA", kind: "Poster", link: "https://agu.confex.com/agu/fm16/meetingapp.cgi/Paper/189566" },

  { year: 2013, title: "Inclusion of Geoscience in the Disaster Risk Management in Chile", venue: "X APRU Research Symposium on Multi-Hazards Around the Pacific Rim, Santiago, Chile", kind: "Talk" },
  { year: 2013, title: "Nuevos desafíos para la ciencia en gestión de riesgos", venue: "Internal Seminar, Universidad de Concepción, Chile", kind: "Talk" },
  { year: 2013, title: "WRF-Fire: Una opción al modelamiento de incendios forestales", venue: "II Encuentro de Modelación Atmosférica, Valparaíso, Chile", kind: "Talk" }
];
