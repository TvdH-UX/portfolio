import { Project } from "../components/Project";
import TalentDexPreview from "../images/TalentDexPreview.png";
import TalentDexPhoto1 from "../images/TalentDexFeedbackGeven.png";

const title = "TalentDex";
const year = "2023";
const tools = "Java, Selenium, Cucumber, Mendix";
const link = "";
const photo = TalentDexPreview;
const introduction =
  "Om beter te worden met test automatisering werk ik mee aan het interne TalentDex project. De TalentDex is onze interne app waarbij het rooster wordt vastgelegd en je trainers feedback kunt geven tijdens je trainingsperiode en andersom trainees wanneer je training geeft. Hierbij werk ik in een DevOps team.";
const header1 = "Inventariseren";
const paragraph1 =
  "Toen ik begon met het automatiseren van de tests bekeek ik eerst welke testen er al waren. Aangezien er een tijd lang niets aan veranderd was betreft de automatisering heb ik eerst de oude nog relevante scenario’s weer werkend gemaakt. Vervolgens heb ik de scenario’s uitgewerkt die door een collega tester waren opgesteld. Hierbij liep ik vaak tegen het probleem aan dat mijn xpath selector het element niet selecteerde. Dit loste ik op door veel verschillende manieren van selecteren te gebruiken. Zo wordt nu getest of men feedback in kan vullen, of de feedback vanuit de view van de ontvanger overeenkomt met de input van de verstuurder en of de feedback succesvol verwijderd kan worden.";
const projectPhoto1 = TalentDexPhoto1;
const header2 = "Blik vooruit";
const paragraph2 =
  "Tot nu toe heb ik met veel trial and error geleerd over het selecteren van verschillende soorten elementen. Daarnaast heb ik geleerd met Cucumber goeie scenario’s met bijhorende stappen te formuleren en deze met de onderliggende Java Selenium code te doorlopen. Op dit moment ben ik bezig met het verder uitwerken en automatiseren van scenario’s voor nieuwe features.";
const header3 = "";
const paragraph3 = "";
const previousProject = "nodescape";
const nextProject = "trivia";

export function TalentDex() {
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
