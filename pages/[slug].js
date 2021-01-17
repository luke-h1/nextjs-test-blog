import React from "react";
import fs from "fs";
import path from "path";

const Post = ({ slug, content }) => {
  return (
    <div>
      <h1>Slug for post:{slug}</h1>
			<div className='blog-content'>
				<pre>
					{content}
				</pre>
			</div>
    </div>
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
  // console.log(`Paths: ${paths}`);
  console.log(`Files: ${files}`);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const content = fs.readFileSync(path.join("posts", slug + ".md")).toString();

  return {
    props: {
			content,
			slug,
    },
  };
};

export default Post;
