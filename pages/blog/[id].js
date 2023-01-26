import React from "react";
import { gql } from "@apollo/client";
import client from "../../apollo-client";
import htmlRawParser from "../utils/htmlRawParser";
import Image from "next/image";
import articleStyles from "../../styles/Article.module.scss";
import styles from "../../styles/Layout.module.scss";
import dynamic from "next/dynamic";
const HtmlNode = dynamic(() => import("/components/HtmlNode"), { ssr: false });

export async function getStaticPaths() {
  // Fetch the IDs of all posts from the server
  const { data } = await client.query({
    query: gql`
      query {
        posts {
          edges {
            node {
              id
            }
          }
        }
      }
    `,
  });
  // Generate a path for each post ID
  const paths = data.posts.edges.map((post) => ({
    params: { id: post.node.id.toString() },
  }));
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: gql`
      query ($id: ID!) {
        post(id: $id) {
          title
          content
          date
        }
      }
    `,
    variables: { id: params.id },
  });
  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}

const Post = ({ data }) => {
  //Ici, il faut traiter {data} pour afficher le contenu du post.
  const elementsArray = htmlRawParser(data.post.content);
  let componentsArray = [];
  elementsArray.forEach((element, index) => {
    if (element.tag === "img") {
      componentsArray.push(
        <div className={articleStyles.imageContainer} key={index}>
          <Image
            key={index}
            src={element.src}
            alt={element.alt}
            style={{
              objectFit: "cover",
              // margin: "25px 0",
              width: "100%",
              // width: "680px",
              height: "100%",
            }}
            fill
          />
        </div>
      );
    } else {
      componentsArray.push(
        <HtmlNode tag={element.tag} html={element.html} key={index} />
      );
    }
  });
  return (
    <main className={styles.main}>
      <div className={articleStyles.articleContainer}>
        <h1>{data.post.title}</h1>
        {/* <h3>Article posté le {data.post.date}</h3> */}
        <div className={articleStyles.articleElements}>{componentsArray}</div>
      </div>
    </main>
  );
};
export default Post;
