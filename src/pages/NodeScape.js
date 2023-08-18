import { Project } from "../components/Project";
import NodeScapePreview from "../images/NodeScapePreview.png";
import NodeScapePhoto1 from "../images/NodeScapeSingleSignOn.png";

const title = "NodeScape";
const year = "2023";
const tools = "JavaScript, React, HTML & CSS, Git, AWS";
const link = "Binnenkort";
const photo = NodeScapePreview;
const introduction =
  "Tijdens het leren van React en het maken van mijn trivia applicatie werd ik ook gevraagd mee te werken aan een app die het IT landschap van Qquest in kaart kon brengen. Dit project doe ik met twee collega's en betreft een full-stack applicatie. Met deze app wordt essentiële informatie over applicaties getoond die binnen het bedrijf gebruikt of gemaakt zijn gericht op het beheer onderhouden.";
const header1 = "Aan de slag";
const paragraph1 =
  "Aan het begin van het project kwamen we voor het vraagstuk te staan hoe we het beste een grid met alle applicaties zouden kunnen maken. Eerst heb ik geprobeerd dit met CSS grid te realiseren, maar waarbij de vraag opkwam hoe we daar elementen op in konden laden. Uiteindelijk heb ik het idee opgebracht dit in een tabel te doen in plaats van met css grid, aangezien we daar geen tijdige oplossing voor konden vinden. Een andere van mijn werkzaamheden in de app was om een afbeelding uniek te maken wanneer deze wordt geüpload. Dit was een uitdaging omdat de functie omgebouwd moest worden en de verandering problemen veroorzaakte met het versturen van de data uit het formulier naar onze database. Door de code te refactoren en functies te verplaatsen naar aparte files heb ik het mijzelf overzichtelijker gemaakt en zo kon ik het probleem verhelpen. \nTijdens het project ben ik nog meer met refactoren bezig geweest, zoals het refactoren van volledige pagina's, waarbij ik de code samenvoegde van de pagina's waar men een app kan toevoegen of diens informatie kan bijwerken. Die code was op veel plekken hetzelfde, het was een mooie uitdaging om de code tot één te voegen en de paramaters dynamisch te maken. Daarnaast heb ik ook veel kennis opgedaan over hoe je de performance van een React app zo hoog mogelijk houdt door elementen alleen te laten re-renderen wanneer daar een verandering plaats vindt.";
const projectPhoto1 = NodeScapePhoto1;
const header2 = "Takeaways";
const paragraph2 = `Tijdens dit project heb ik veel geleerd wat betreft het samenwerken met twee andere developers. Ik heb geleerd beter code te lezen, aangezien er zoveel wegen zijn die naar Rome leiden om een functionaliteit te implementeren en mijn collega's toch anders code schreven dan ik. Daarnaast heb ik ook geleerd om beter af te stemmen wie welke functionaliteit of probleem op gaat pakken om zo git conflicten te voorkomen. Ten slotte was het zeer leerzaam om aan een full-stack applicatie te werken en rekening te houden met het samenspel tussen front- en back-end.`;
const nextProject = "talentdex";

export function NodeScape() {
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
      nextProject={nextProject}
    />
  );
}
