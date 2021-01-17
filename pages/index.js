import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Next js test blog</h1>
        <Link href="/test">
          <a>test blog post</a>
        </Link>
        <Link href="/test2">
          <a>second blog post</a>
        </Link>

      </div>
    </>
  );
}
