import Link from "next/link";
import fs from "fs";

const index = ({ slugs }) => {
  return (
    <>
      <div
        style={{
          marginTop: "5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Next js test blog</h1>
        {slugs.map((slug) => (
          <Link key={slug} href={`/blog/${slug}`}>
            <a>{slug}</a>
          </Link>
        ))}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");

  return {
    props: {
      slugs: files.map((filename) => filename.replace(".md", "")),
    },
  };
};

export default index;
