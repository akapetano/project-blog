import { lazy } from "react";
const DivisionGroupsDemo = lazy(() =>
  import("@/components/DivisionGroupsDemo")
);
const CircularColorsDemo = lazy(() =>
  import("@/components/CircularColorsDemo")
);
import CodeSnippet from "../CodeSnippet";
import { MDXRemote } from "next-mdx-remote/rsc";

const basicComponents = { pre: CodeSnippet };

function getBlogPostComponents(postSlug) {
  switch (postSlug) {
    case "css-font-size": {
      return { ...basicComponents };
    }
    case "javascript-closures": {
      return { ...basicComponents };
    }
    case "javascript-modulo-operator": {
      return { ...basicComponents, DivisionGroupsDemo, CircularColorsDemo };
    }
    case "react-and-css": {
      return { ...basicComponents };
    }
    default:
      break;
  }
}

export default function CustomMDX({ source, postSlug }) {
  const components = getBlogPostComponents(postSlug);

  return <MDXRemote source={source} components={components} />;
}
