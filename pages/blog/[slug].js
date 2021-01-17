import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";

const Post = ({ htmlString, data }) => {
  return (
    <>
    <div style={{ marginTop: '15rem' }}>
      <Head>
        <title>My Test blog | {data.title}</title>
      </Head>
      <div>
        <h1>Blog Post title: {data.title}</h1>
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: htmlString }}
        />
      </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  console.log(files);
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  console.log(`Files: ${files}`);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithFrontmatter = fs
    .readFileSync(path.join("posts", slug + ".md"))
    .toString();

  const parsedMarkdown = matter(markdownWithFrontmatter);

  const htmlString = marked(parsedMarkdown.content);

  return {
    props: {
      htmlString,
      data: parsedMarkdown.data,
    },
  };
};

export default Post;
