import React from "react";

import BlogSummaryCard from "@/components/BlogSummaryCard";

import styles from "./homepage.module.css";
import { getBlogPostList } from "@/helpers/file-helpers";

export const metadata = {
  title: "Bites & Bytes",
  description: "A wonderful blog about JavaScript",
};

async function Home() {
  const blogPosts = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>
      {blogPosts && Array.isArray(blogPosts)
        ? blogPosts.map(({ slug, title, abstract, publishedOn }) => (
            <BlogSummaryCard
              key={slug}
              slug={slug}
              title={title}
              abstract={abstract}
              publishedOn={publishedOn}
            />
          ))
        : null}
    </div>
  );
}

export default Home;
