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
                  sourceUrl
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
    post.node.featuredImage,
  ]);
  let postsConverted = [];

  posts.forEach((element) => {
    let featuredImage = null;
    if (element[3] !== null) {
      featuredImage = element[3].node.sourceUrl;
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
    return (
      <>
        {/* All post cards */}
        <div className={blogStyles.blog}>
          <div className={blogStyles.posts}>
            {postsConverted.map((post) => (
              // Each post card :
              <div className={blogStyles.post} key={post.id}>
                <Link href="/blog/[id]" as={`/blog/${post.id}`}>
                  {/* Title of each post card */}
                  <div className={blogStyles.h2Container}>
                    <h2>{post.title}</h2>
                    {/* date */}
                    {/* <h4 style={{ padding: "0 10px" }}>{post.date}</h4> */}
                  </div>
                  <div className={blogStyles.imageContainer}>
                    <Image
                      src={post.featuredImage || "https://picsum.photos/400"}
                      alt="image"
                      style={{ objectFit: "cover" }}
                      width={350}
                      height={350}
                    ></Image>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default blog;
