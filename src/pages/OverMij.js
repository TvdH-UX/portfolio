import styles from "./OverMij.module.css";
import photoThomas from "../images/Thomas.png";

export function OverMij() {
  return (
    <div className={styles.container}>
      <div className={styles.mainSection}>
        <h1>Over mij</h1>
        <hr />
        <p>
          Hoi, ik ben Thomas van den Heuvel, een Developer, Tester en UX/UI
          Designer.
          <br />
          <br />
          Wat bij mij op nummer één staat is de eindgebruiker en dat is terug te
          zien in mijn educatie. Ik studeerde Communicatie & Multimedia Design
          aan de HAN University of Applied Sciences in de richting van
          Interaction Design waar ik leerde over UX/UI Design met
          gebruikersonderzoek en gebruikerstesten als kern. Deze kennis heb ik
          verder uitgebreid met de New Media Design Master op de Tilburg
          Universiteit. Hierna besloot ik verder de IT in te duiken; via
          zelfstudie en bij Qquest heb ik mij verdiept in development en testen.
          Met díe achtergrond creëer ik oplossingen.
          <br />
          <br />
          In mijn vrije tijd ontdek ik graag nieuwe muziek, het liefste stuit ik
          hierbij op een album dat ik van begin tot eind leuk vind. Daarnaast
          game ik graag en ben ik een aantal keren per week in de sportschool te
          vinden. Echter, het leukste blijft toch dingen met mijn vrienden doen;
          naar de bios, een pretpark, een bordspel spelen en of een nieuw recept
          proberen!
        </p>
      </div>
      <div className={styles.photoSection}>
        <img src={photoThomas} alt="Thomas met Max" />
      </div>
    </div>
  );
}
