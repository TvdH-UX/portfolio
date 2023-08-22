import { Project } from "../components/Project";
import NodeScapePreview from "../images/NodeScapePreview.png";
import NodeScapePhoto1 from "../images/NodeScapeSingleSignOn.png";

const title = "NodeScape";
const year = "2023";
const tools = "JavaScript, React, HTML & CSS, Git, AWS";
const link = "";
const photo = NodeScapePreview;
const introduction =
  "Tijdens het leren van React en het maken van mijn trivia applicatie werd ik ook gevraagd mee te werken aan een app die het IT landschap van Qquest in kaart kon brengen. Het betreft een full-stack applicatie wat ik met 2 andere developers begon en wat is gegroeid naar een team van developers en testers met een product owner. Met deze app wordt essentiële informatie over applicaties getoond die binnen het bedrijf gebruikt of gemaakt zijn gericht op het beheer onderhouden.";
const header1 = "Iteratie 1";
const paragraph1 =
  "Een statische versie van het IT landschap vormde het begin van de itlandschap app. Aan het begin van het project kwamen we voor het vraagstuk te staan hoe we de statische versie naar code zouden vertalen. Eerst heb ik geprobeerd dit met CSS grid te realiseren, maar waarbij de vraag opkwam hoe we daar elementen op in konden laden. Uiteindelijk heb ik het idee opgebracht dit in een tabel te doen in plaats van met css grid, aangezien we daar geen tijdige oplossing voor konden vinden. Een andere van mijn werkzaamheden in de app was om een afbeelding uniek te maken wanneer deze wordt geüpload. Dit was een uitdaging omdat de functie omgebouwd moest worden en de verandering problemen veroorzaakte met het versturen van de data uit het formulier naar onze database. Door de code te refactoren en functies te verplaatsen naar aparte files heb ik het mijzelf overzichtelijker gemaakt en zo kon ik het probleem verhelpen. \nTijdens het project heb ik nog meer met refactoren bezig geweest, zoals het refactoren van volledige pagina's, waarbij ik de code samenvoegde van de pagina's waar men een app kan toevoegen of diens informatie kan bijwerken. Die code was op veel plekken hetzelfde, het was een mooie uitdaging om de code tot één te voegen en de paramaters dynamisch te maken. Daarnaast heb ik ook veel kennis opgedaan over hoe je de performance van een React app zo hoog mogelijk houdt door elementen alleen te laten re-renderen wanneer daar een verandering plaats vindt.";
const projectPhoto1 = NodeScapePhoto1;
const header2 = "NodeScape";
const paragraph2 = `Toen versie 0 alle functionaliteiten bevatte is er besloten versie 1 van de grond af aan op te bouwen, met de opgedane kennis en ervaring met React. Om te beginnen heb ik in Figma een ontwerp en styleguide gemaakt voor de applicatie als leidraad bij het ontwikkelen. Ook werd de app omgedoopt tot NodeScape, een pakkendere naam dan Itlandschap app. Bij deze nieuwe versie wordt flexibiliteit voorop gesteld; zo is de gebruiker niet gelimiteerd tot het toevoegen van apps, maar kan álles in de app gezet worden, een app, maar dus ook een SLA of beheerder. Door op zulke ‘nodes’ te klikken wordt de tabel ingeladen om alle gerelateerde nodes te tonen die samen dus alle relevante informatie laten zien. Een andere functionaliteit waar ik aan gewerkt heb is het inloggen zonder wachtwoord door middel van AWS lambda functies en het gebruik van cookies. Het duurde een tijd voordat we alles goed verbonden en werkend hadden, wat het extra tof maakt dat het nu werkt.`;
const header3 = "Versie 1.0";
const paragraph3 =
  "Ook tijdens deze versie ben ik veel verantwoordelijk voor de structuur van de pagina met behulp van HTML & CSS en hamer ik op de gebruikservaring van de app. Daarnaast heb ik de API methodes gebouwd in AWS waarmee men nodes kan toevoegen en verwijderen. \nTot nu toe heb ik met deze iteratie veel geleerd wat betreft efficiënter en netter schrijven van code. Ook heb ik veel geleerd over verschillende AWS services en het gebruiken van lambda functies. Ik vind het erg leerzaam om aan een full-stack applicatie te werken met andere developers en testers en om rekening te moeten houden met het samenspel tussen front- en back-end. De volgende items op het Kanban bord waar ik aan ga werken zijn het aanpassen van nodes en het toevoegen van een alert systeem wanneer bijvoorbeeld een licentie verloopt of dergelijke.";
const previousProject = "trivia";
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
      projectSubheader3={header3}
      projectP3={paragraph3}
      previousProject={previousProject}
      nextProject={nextProject}
    />
  );
}
