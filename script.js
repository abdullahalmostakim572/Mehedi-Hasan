const translations = {
  de: {
    navAbout:"Profil",navExperience:"Erfahrung",navEducation:"Ausbildung",navContact:"Kontakt",navCta:"Kontakt aufnehmen",
    eyebrow:"GASTRONOMIE · ZÜRICH, SCHWEIZ",heroIntro:"Gastfreundschaft mit",heroEm:"Erfahrung & Haltung.",
    heroText:"Ich bin Mehedi Hasan, ausgebildeter Restaurationsfachmann EFZ und erfahrener Chef de Rang. Seit vielen Jahren bin ich in der Gastronomie in Zürich und Umgebung tätig.",
    heroButton1:"Berufserfahrung entdecken",heroButton2:"Lebenslauf herunterladen",meta1:"Restaurationsfachmann",meta2:"Niederlassungsbewilligung C",meta3:"Sprachen",
    photoHint:"PORTRÄTFOTO HIER EINFÜGEN",photoSub:"Ersetze später assets/mehedi-photo.jpg",note:"Bereit für neue Herausforderungen",scroll:"WEITER ENTDECKEN",
    aboutKicker:"ÜBER MICH",aboutTitle:"Ein starker Service beginnt mit echter Aufmerksamkeit.",aboutText:"Mit langjähriger Berufserfahrung in Restaurants und Hotelbetrieben in Zürich und Umgebung bringe ich eine fundierte Ausbildung und vielseitige Einblicke in die Schweizer Gastronomie mit. Meine berufliche Laufbahn umfasst unterschiedliche Gastronomiebetriebe und Serviceumfelder.",
    fact1Label:"Ausbildung",fact2Label:"Standort",fact3Label:"Aufenthaltsstatus",experienceKicker:"BERUFLICHER WERDEGANG",experienceTitle:"Erfahrung, die<br><em>Vertrauen schafft.</em>",experienceSub:"Meine beruflichen Stationen in der Schweizer Gastronomie.",today:"heute",currentRole:"AKTUELLE POSITION",olderToggle:"Frühere Berufserfahrung anzeigen <span>＋</span>",
    educationKicker:"AUSBILDUNG & KENNTNISSE",educationTitle:"Fundament aus<br><em>Ausbildung & Praxis.</em>",languages:"SPRACHEN",fluent:"Fliessend",native:"Muttersprache",additional:"WEITERE ANGABEN",permit:"Aufenthaltsbewilligung",license:"Führerausweis",since:"In der Schweiz seit",interests:"INTERESSEN",
    contactKicker:"KONTAKT",contactTitle:"Lassen Sie uns<br><em>ins Gespräch kommen.</em>",contactText:"Für berufliche Möglichkeiten und Fragen erreichen Sie mich gerne direkt.",downloadCv:"Lebenslauf herunterladen",backTop:"Zurück nach oben ↑"
  },
  en: {
    navAbout:"About",navExperience:"Experience",navEducation:"Education",navContact:"Contact",navCta:"Get in touch",
    eyebrow:"HOSPITALITY · ZURICH, SWITZERLAND",heroIntro:"Hospitality shaped by",heroEm:"experience & care.",
    heroText:"I’m Mehedi Hasan, a qualified hospitality professional (EFZ) and experienced Chef de Rang. I have built my career in restaurants and hotels in Zurich and the surrounding region.",
    heroButton1:"Explore experience",heroButton2:"Download CV",meta1:"Qualified hospitality professional",meta2:"Swiss C residence permit",meta3:"Languages",
    photoHint:"ADD PORTRAIT PHOTO HERE",photoSub:"Later replace assets/mehedi-photo.jpg",note:"Open to new opportunities",scroll:"SCROLL TO EXPLORE",
    aboutKicker:"ABOUT ME",aboutTitle:"Excellent service starts with genuine attention.",aboutText:"With many years of professional experience in restaurants and hotels in Zurich and the surrounding region, I bring formal vocational training and a broad background in Swiss hospitality. My career includes a range of hospitality businesses and service environments.",
    fact1Label:"Qualification",fact2Label:"Location",fact3Label:"Residence status",experienceKicker:"CAREER JOURNEY",experienceTitle:"Experience that<br><em>builds trust.</em>",experienceSub:"My professional journey in Swiss hospitality.",today:"present",currentRole:"CURRENT POSITION",olderToggle:"Show earlier experience <span>＋</span>",
    educationKicker:"EDUCATION & QUALIFICATIONS",educationTitle:"A foundation in<br><em>training & practice.</em>",languages:"LANGUAGES",fluent:"Fluent",native:"Native",additional:"ADDITIONAL DETAILS",permit:"Residence permit",license:"Driving licence",since:"In Switzerland since",interests:"INTERESTS",
    contactKicker:"CONTACT",contactTitle:"Let’s start a<br><em>conversation.</em>",contactText:"Please feel free to contact me regarding professional opportunities or any questions.",downloadCv:"Download CV",backTop:"Back to top ↑"
  }
};
let currentLang="de";
document.getElementById("langToggle").addEventListener("click",()=>{
  currentLang=currentLang==="de"?"en":"de";
  document.documentElement.lang=currentLang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(translations[currentLang][key]) el.innerHTML=translations[currentLang][key];
  });
  document.getElementById("langToggle").textContent=currentLang==="de"?"EN":"DE";
});
document.getElementById("year").textContent=new Date().getFullYear();
const menu=document.getElementById("menuToggle"), nav=document.querySelector(".nav");
menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open?"true":"false");menu.textContent=open?"×":"☰";});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu.setAttribute("aria-expanded","false");menu.textContent="☰";}));
const portrait=document.getElementById("portrait"), placeholder=document.getElementById("photoPlaceholder");
portrait.addEventListener("load",()=>{placeholder.style.display="none";});
