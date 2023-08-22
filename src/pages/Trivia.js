import { Project } from "../components/Project";
import TriviaPreview from "../images/TriviaPreview.png";
import TriviaPhoto1 from "../images/TriviaVoorkeuren.png";

const title = "Trivia";
const year = "2023";
const tools = "JavaScript, React, HTML & CSS, GIT";
const link = "https://tvdh-ux.github.io/trivia/";
const photo = TriviaPreview;
const introduction =
  "Na het afronden van de trainingsperiode bij Qquest ging ik aan de slag met het leren van JavaScript en React. Om deze kennis te concretiseren heb ik een Trivia applicatie gemaakt met een publieke api.";
const header1 = "Voet aan de grond krijgen";
const paragraph1 =
  "Aan het begin van het project begon ik met dummy data om er eerst voor te zorgen dat ik de informatie over de verschillende categorieën, vragen en antwoorden naar de correcte componenten doorgaf. Componenten zijn binnen React herhaalbare stukken code welke specifieke informatie kunnen ontvangen. Toen dat gelukt was ging ik aan de slag met het inladen van de data via de publieke api. Hierbij liep ik tegen het probleem aan dat mijn app crashte wanneer ik direct de informatie doorgaf aan hun componenten. Dit heb ik verholpen door het inladen asynchroon te maken en zo de app te laten wachten tot de informatie was ingeladen.";
const projectPhoto1 = TriviaPhoto1;
const header2 = "Hoe kan het beter?";
const paragraph2 =
  "Om te kijken of ik goed aan het werk was heb ik een van mijn collega's binnen Qquest gevraagd om mij feedback en tips en tricks te geven over development an sich en met React specifiek. Met deze tips en tricks en nieuwe inzichten uit de React cursus die ik tegelijkertijd aan het volgen was kon ik de app steeds een stuk uitgebreider maken. Zo heb ik custom hooks toe kunnen voegen binnen de applicatie; een algemene fetch data functie die ik op meerdere plekken in de applicatie kan gebruiken. Richting het einde van het project ben ik ook bezig geweest met het refactoren van de code. Dit uitte zich in individuele componenten die zo veel mogelijk hun eigen specifieke functie hadden en ook gemakkelijk aangepast kunnen worden. \nNa het voltooien van de applicatie heb ik een koffiedemo gegeven om te laten zien wat ik had gemaakt voor belangstellenden binnen Qquest.";
const header3 = "Voorwaards!";
const paragraph3 =
  "Met dit project heb ik veel geleerd; ik heb mijn basis in JavaScript uitgebreid, geleerd hoe ik met een api moet werken en steeds nieuwe concepten toegepast die ik uit de cursus leerde of aangeleerd kreeg via mijn collega. Daarnaast heb ik ook mijn communicatieve vaardigheden opgeschroefd met betrekking tot het plannen van feedback sessies en het geven van een presentatie over de gemaakte app. Ten slotte heb ik veel van de kennis mee kunnen nemen naar het itlandschap project wat voor een deel parallel liep en waar ik direct geavanceerde React functionaliteiten aan kon dragen.";
const previousProject = "talentdex";
const nextProject = "nodescape";

export function Trivia() {
  return (
    <Project
      projectTitle={title}
      projectYear={year}
      projectTools={tools}
      projectLink={link}
      projectPhoto={photo}
      projectIntroduction={introduction}
      projectSubheader1={header1}
      projectP1={paragraph1}
      projectPhoto1={projectPhoto1}
      projectSubheader2={header2}
      projectP2={paragraph2}
      projectSubheader3={header3}
      projectP3={paragraph3}
      previousProject={previousProject}
      nextProject={nextProject}
    />
  );
}
