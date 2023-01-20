import React from "react";
import { gql } from "@apollo/client";
import client from "../../apollo-client";
import htmlRawParser from "../utils/htmlRawParser";
import Image from "next/image";
import articleStyles from "../../styles/Article.module.scss";
import styles from "../../styles/Layout.module.scss";

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
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: gql`
      query ($id: ID!) {
        post(id: $id) {
          title
          content
        }
      }
    `,
    variables: { id: params.id },
  });
  return {
    props: {
      data,
    },
  };
}

const HtmlNode = ({ tag, html }) => {
  const Tag = tag;
  return <Tag dangerouslySetInnerHTML={{ __html: html }}></Tag>;
};

const Post = ({ data }) => {
  //Ici, il faut traiter {data} pour afficher le contenu du post.
  const elementsArray = htmlRawParser(data.post.content);
  // console.log(elementsArray);
  console.log(data.post);
  return (
    <main className={styles.main}>
      <div className={articleStyles.articleContainer}>
        <h1>{data.post.title}</h1>
        {/* <h3>{data.post.date}</h3> */}
        <div className={articleStyles.articleElements}>
          {elementsArray.map((element, index) => {
            if (element.tag === "img") {
              return (
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
            }
            return (
              <HtmlNode tag={element.tag} html={element.html} key={index} />
            );
          })}
        </div>
      </div>
    </main>
  );
};
export default Post;
