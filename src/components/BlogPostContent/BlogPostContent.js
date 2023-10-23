import CustomMDX from "../CustomMDX";

function BlogPostContent({ source, postSlug }) {
  return <CustomMDX source={source} postSlug={postSlug} />;
}

export default BlogPostContent;
