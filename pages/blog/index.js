import React from "react";
import Link from "next/link";
import { gql } from "@apollo/client";
import client from "../../apollo-client";
import htmlParser from "../utils/htmlParser";
import Image from "next/image";
import styles from "../../styles/Layout.module.scss";
import blogStyles from "../../styles/Blog.module.scss";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        posts {
          edges {
            node {
              id
              title
              content
              date
              featuredImage {
                node {
                  link
                }
              }
            }
          }
        }
      }
    `,
  });
  return {
    props: {
      data,
    },
  };
}

function blog({ data }) {
  const posts = data.posts.edges.map((post) => [
    post.node.id,
    post.node.title,
    htmlParser(post.node.content),
    // post.node.featuredImage.node.link,
    post.node.featuredImage,
    /*console.log(post.node.featuredImage), // null*/
  ]);
  let postsConverted = [];

  posts.forEach((element) => {
    let featuredImage = null;
    if (element[3] !== null) {
      featuredImage = element[3].node.link;
    }
    postsConverted.push({
      id: element[0],
      title: element[1],
      content: element[2],
      featuredImage: featuredImage,

    });
  });

  console.log(postsConverted);

  {
    /* posts.map((post) => {
      //   console.log(post.content); // Ok sans le title (h1)
      const elementsArray = htmlParser(post.content);
      console.log(elementsArray); // OK
    }); */
    return (
      <>
        {/* <h1>Blog alimenté par Wordpress</h1> */}
        {/* All post cards */}
        <div className={blogStyles.blog}>
          <div className={blogStyles.posts}>
            {postsConverted.map((post) => (
              // Each post card :
              <div className={blogStyles.post} key={post.id}>
                <Link href="/blog/[id]" as={`/blog/${post.id}`}>
                  {/* Title of each post card */}
                  <div className={blogStyles.h2Container}>
                    <h2 style={{ padding: "10px" }}>{post.title}</h2>
                  </div>
                  {/* Content of each post card */}
                  {/* {post.content.map((element, index) => {
                  return React.createElement(
                    element.tag,
                    // { key: element.text },
                    { key: index },
                    element.text
                  );
                })} */}
                  <div className={blogStyles.imageContainer}>
                    <Image
                      src="https://picsum.photos/300"
                      alt="lorem picsum random image"
                      style={{
                        width: "100%",
                        maxHeight: "400px",
                        objectFit: "cover",
                      }}
                      fill
                      sizes="(max-width: 768px) 50vw,
                    (max-width: 1200px) 50vw,
                    25vw"
                    ></Image>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* <div>
          {elementsArray.map((element, index) => {
            return React.createElement(
              element.tag,
              { key: index },
              element.text
            );
          })}
        </div> */}
      </>
    );
  }
}

export default blog;
