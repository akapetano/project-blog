import Rss from "rss";

import { BLOG_TITLE, BLOG_DESCRIPTION, SITE_URL } from "@/constants";
import { getBlogPostList } from "@/helpers/file-helpers";

export async function GET() {
  const blogPosts = await getBlogPostList();

  const feed = new Rss({
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    feed_url: `${SITE_URL}/rss.xml`,
    site_url: SITE_URL,
    language: "en",
  });

  blogPosts.forEach((blogPost) => {
    feed.item({
      title: blogPost?.title,
      description: blogPost?.abstract,
      url: `${SITE_URL}/${blogPost?.slug}`,
      guid: `${SITE_URL}/${blogPost?.slug}`,
      date: blogPost?.publishedOn,
    });
  });

  return new Response(feed.xml(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
