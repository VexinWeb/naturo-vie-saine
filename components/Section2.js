import React from "react";
import section2Styles from "../styles/Section2.module.scss";
import Collapse from "./CollapseButton";

const Section2 = () => {
  return (
    <div className={section2Styles.section2}>
      <h2>Pourquoi consulter ?</h2>
      <br />
      <p>
        Les personnes consultent souvent un naturopathe pour obtenir des
        conseils sur l&lsquo;alimentation, la santé physique, le stress, le
        sommeil et d&lsquo;autres aspects de leur mode de vie qui peuvent
        affecter leur santé et leur bien-être général. Nous recommandons des
        traitements naturels, des suppléments nutritifs et des techniques de
        relaxation pour aider à soulager les symptômes de différents troubles de
        santé. Nous nous veillons à renforcer le corps et à d&lsquo;aider à
        prévenir tout trouble.
      </p>
      <br />
      <Collapse
        title="Alimentation"
        initialOpened={false}
        text="L'alimentation joue un rôle crucial dans la prévention et le traitement de la maladie. On considère que les aliments que nous mangeons ont un impact direct sur notre bien-être physique et mental, et peuvent aider à maintenir ou à améliorer notre santé.
        
        Dans une société où nombre d'aliments sont transformés, avec des additifs alimentaires et des ingrédients artificiels, nous serons amenés à étudier une alimentation adaptée à vos besoins.  
        
        Nous réflérchissons ensemble à une gamme de fruits, légumes, grains entiers, protéines et graisses saines, en fonction de vos besoins individuels et de vos goûts, plutôt que de suivre un régime restrictif ou un plan alimentaire prédéterminé."
      />
      <Collapse
        title="Activité physique"
        initialOpened={false}
        text="L'activité physique est cruciale. Nous visons ainsi à maintenir un équilibre poids santé, à renforcer le système immunitaire et à améliorer la qualité du sommeil et réduire le stress. 
        Grâce à nos échanges, nous atteignons l'adaptation individuelle, la motivation et la persévérance."
      />
      <Collapse
        title="Stress"
        initialOpened={false}
        text="Le stress est un facteur de risque pour la santé, qui affecte le bien-être physique et mental. 
        
       Pour gérer le stress, nous vous proposerons des techniques de relaxation, telles que notamment l'activité physique régulière et adaptée ainsi que la cohérence cardiaque. Nous travaillerons également sur un cadre de sommeil et une alimentation équilibrée, sans oublier des activités agréables et un entourage positif afin de maintenir un état émotionnel équilibré."
      />
      <Collapse
        title="Sommeil"
        initialOpened={false}
        text="Le sommeil est essentiel. 
        Afin de dormir suffisamment chaque nuit pour se sentir reposé et énergique le lendemain, nous vous proposons de créer un environnement paisible et confortable, et de suivre une routine de coucher régulière. Les plantes adaptées vous sont proposées en soutien"
      />
    </div>
  );
};

export default Section2;
