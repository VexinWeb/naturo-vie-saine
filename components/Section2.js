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
        conseils sur l'alimentation, l'exercice physique, le stress, le sommeil
        et d'autres aspects de leur mode de vie qui peuvent affecter leur santé
        et leur bien-être général. Un naturopathe peut également recommander des
        traitements naturels tels que des herbes, des suppléments nutritifs et
        des techniques de relaxation pour aider à soulager les symptômes de
        différents troubles de santé. Les naturopathes sont souvent considérés
        comme une forme de médecine alternative, et leur approche de la santé
        est généralement basée sur l'utilisation de méthodes naturelles pour
        renforcer le corps et aider à prévenir la maladie.
      </p>
      <br />
      <Collapse
        title="Alimentation"
        initialOpened={false}
        text="En naturopathie, l'alimentation joue un rôle crucial dans la prévention et le traitement de la maladie. On considère que les aliments que nous mangeons ont un impact direct sur notre bien-être physique et mental, et peuvent aider à maintenir ou à améliorer notre santé. Selon la naturopathie, il est important de manger des aliments frais et biologiques autant que possible, et d'éviter les aliments transformés, les additifs alimentaires et les aliments contenant des ingrédients artificiels. On recommande également de suivre un régime alimentaire équilibré et varié, qui comprend une gamme de fruits, légumes, grains entiers, protéines et graisses saines. En naturopathie, on encourage également les individus à écouter leurs besoins alimentaires et à manger en fonction de leurs propres besoins individuels, plutôt que de suivre un régime restrictif ou un plan alimentaire prédéterminé."
      />
      <Collapse
        title="Activité physique"
        initialOpened={false}
        text="En naturopathie, l'activité physique est considérée comme un élément crucial de la santé globale. On recommande aux individus de pratiquer une activité physique régulière pour maintenir un poids santé, renforcer le système immunitaire, améliorer la qualité du sommeil et réduire le stress. Selon la naturopathie, il est important de trouver une activité physique qui convient à chaque individu et qui est agréable, afin de favoriser la motivation et la persévérance. On suggère de varier les activités physiques et de les adapter aux saisons et aux différents stades de la vie. En naturopathie, on encourage également les individus à marcher régulièrement, à respirer de l'air frais et à passer du temps en plein air, autant que possible, afin de profiter des bienfaits de la nature sur le bien-être physique et mental."
      />
      <Collapse
        title="Stress"
        initialOpened={false}
        text="En naturopathie, le stress est considéré comme un facteur de risque pour la santé, qui peut affecter le bien-être physique et mental de manière négative. Selon la naturopathie, il est important de gérer le stress de manière efficace afin de prévenir ou de réduire ses effets sur la santé. Pour aider à gérer le stress, on recommande aux individus de pratiquer des techniques de relaxation, telles que la méditation, le yoga ou la respiration profonde, de pratiquer une activité physique régulière, de dormir suffisamment et de manger une alimentation saine. En naturopathie, on suggère également de trouver des activités agréables et de s'entourer de personnes positives et de soutien afin de maintenir un état émotionnel équilibré."
      />
      <Collapse
        title="Sommeil"
        initialOpened={false}
        text="En naturopathie, le sommeil est considéré comme un élément crucial de la santé globale. On recommande de dormir suffisamment chaque nuit pour se sentir reposé et énergique le lendemain. Selon la naturopathie, il est important de créer un environnement de sommeil paisible et confortable, et de suivre une routine de coucher régulière."
      />
    </div>
  );
};

export default Section2;
