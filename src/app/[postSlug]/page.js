import React from "react";

import BlogHero from "@/components/BlogHero";
import styles from "./postSlug.module.css";
import BlogPostContent from "@/components/BlogPostContent";
import BlogPostContentWrapper from "@/components/BlogPostContent/BlogPostContentWrapper/BlogPostContentWrapper";
import { loadBlogPost } from "@/helpers/file-helpers";
import { BLOG_TITLE } from "@/constants";

export async function generateMetadata({ params }) {
  const postSlug = params.postSlug;

  const { frontmatter } = await loadBlogPost(postSlug);
  const { title, abstract } = frontmatter;

  return {
    title: `${BLOG_TITLE} • ${title}`,
    description: abstract,
  };
}

async function BlogPost({ params }) {
  const postSlug = params.postSlug;
  const { frontmatter, content } = await loadBlogPost(postSlug);
  const { title, publishedOn } = frontmatter;

  return (
    <article className={styles.wrapper}>
      <BlogHero title={title} publishedOn={publishedOn} />
      <BlogPostContentWrapper className={styles.page}>
        <BlogPostContent source={content} postSlug={postSlug} />
      </BlogPostContentWrapper>
    </article>
  );
}

export default BlogPost;
