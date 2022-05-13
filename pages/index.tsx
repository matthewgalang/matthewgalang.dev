import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Matthew Galang</title>
        <meta name="description" content="Matthew Galang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full w-full flex flex-col items-center justify-center space-y-4">
        <h1 className="text-5xl font-bold">Matthew Galang</h1>
        <ul className="flex w-full justify-center space-x-4">
          <li>
            <Link href="https://www.linkedin.com/in/matthew-galang/">
              <a className="hover:text-blue-600 transition-colors duration-300">LinkedIn</a>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/matthewgalang">
              <a className="hover:text-blue-600 transition-colors duration-300">Github</a>
            </Link>
          </li>
          <li>
            <Link href="https://soundcloud.com/mtthwsctt">
              <a className="hover:text-blue-600 transition-colors duration-300">SoundCloud</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
