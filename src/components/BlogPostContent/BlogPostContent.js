import DivisionGroupsDemo from "@/components/DivisionGroupsDemo";
import CircularColorsDemo from "@/components/CircularColorsDemo";

import { MDXRemote } from "next-mdx-remote/rsc";

function getBlogPostComponents(postSlug) {
  switch (postSlug) {
    case "css-font-size": {
      return null;
    }
    case "javascript-closures": {
      return null;
    }
    case "javascript-modulo-operator": {
      return { DivisionGroupsDemo, CircularColorsDemo };
    }
    case "react-and-css": {
      return null;
    }
    default:
      break;
  }
}

function BlogPostContent({ source, postSlug }) {
  const components = getBlogPostComponents(postSlug);

  return <MDXRemote source={source} components={components} />;
}

export default BlogPostContent;
