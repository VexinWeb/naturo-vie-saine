import React from "react";
import section1Styles from "../styles/Section1.module.scss";
import Image from "next/image";

const Section1 = () => {
  return (
    <div className={section1Styles.section1}>
      <div className={section1Styles.section1ImageContainer}>
        <Image
          src="/tree.png"
          alt="Arbre"
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 50vw,
          (max-width: 1200px) 50vw,
          25vw"
          fill
        ></Image>
      </div>
      <div className={section1Styles.section1Right}>
        <h2>Qu&apos;est-ce que la naturopathie ?</h2>
        <p>
          La naturopathie est une pratique de médecine alternative qui vise à
          promouvoir la santé et le bien-être en utilisant des méthodes
          naturelles. Les naturopathes sont formés pour aider les gens à
          améliorer leur santé en utilisant des techniques naturelles telles que
          l&apos;alimentation saine, l&apos;exercice, les herbes et autres
          suppléments naturels, et les techniques de relaxation comme le yoga et
          la méditation. Ils s&apos;efforcent également de comprendre et de
          traiter les causes sous-jacentes de la maladie plutôt que simplement
          de soulager les symptômes. La naturopathie est souvent utilisée en
          complément d&apos;autres formes de soins de santé, mais elle peut
          également être utilisée comme une forme de soins primaires.
        </p>
      </div>
    </div>
  );
};

export default Section1;
