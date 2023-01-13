import React from "react";
import Link from "next/link";
import { gql } from "@apollo/client";
import client from "../../apollo-client";
import htmlParser from "../utils/htmlParser";
import Image from "next/image";

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
    console.log(post.node.featuredImage), // null
  ]);
  let postsConverted = [];

  posts.forEach((element) => {
    postsConverted.push({
      id: element[0],
      title: element[1],
      content: element[2],
      featuredImage: element[3],
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
        <div>
          {postsConverted.map((post) => (
            <div
              key={post.id}
              style={{
                width: "300px",
                height: "300px",
                backgroundColor: "grey",
                margin: "50px",
              }}
            >
              <Link href="/blog/[id]" as={`/blog/${post.id}`}>
                <h2 style={{ padding: "10px" }}>{post.title}</h2>
                {post.content.map((element, index) => {
                  return React.createElement(
                    element.tag,
                    // { key: element.text },
                    { key: index },
                    element.text
                  );
                })}
              </Link>
            </div>
          ))}
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
