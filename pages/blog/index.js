import React from "react";
import Link from "next/link";
import { gql } from "@apollo/client";
import client from "../../apollo-client";
import htmlParser from "../utils/htmlParser";
import Image from "next/image";
import styles from "../../styles/Layout.module.scss";
import blogStyles from "../../styles/Blog.module.scss";
// import { withAssetPrefix } from "next/asset";

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
    // post.node.featuredImage.node.link,
    post.node.featuredImage,
    /*console.log(post.node.featuredImage), // null*/
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

  // const assetPrefix = withAssetPrefix("");

  // const imageUrl = this.props.myimage || "https://picsum.photos/350";

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
                    <h3 style={{ padding: "0 10px" }}>{post.title}</h3>

                    {/* date */}
                    {/* <h4 style={{ padding: "0 10px" }}>{post.date}</h4> */}
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
                      // src={post.featuredImage || "https://picsum.photos/400"}
                      src={post.featuredImage || "https://picsum.photos/400"}
                      // src={
                      //   post.featuredImage === null
                      //     ? "https://picsum.photos/350"
                      //     : post.featuredImage
                      // }
                      // src={
                      //   post.featuredImage === null
                      //     ? "https://picsum.photos/350"
                      //     : `${assetPrefix}post.featuredImage`
                      // }
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
