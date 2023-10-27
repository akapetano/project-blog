import { MDXRemote } from "next-mdx-remote/rsc";
import COMPONENT_MAP from "@/helpers/mdx-components";

export default function CustomMDX({ source }) {
  return <MDXRemote source={source} components={COMPONENT_MAP} />;
}
