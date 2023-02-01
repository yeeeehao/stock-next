import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hao Ye Page</title>
      </Head>
      <h1>Hao Ye page</h1>
      <p>This is a simple page for Hao</p>
      <Link href={"/about"}>About</Link>
    </>
  );
}
