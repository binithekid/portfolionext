import Head from "next/head";
import Landing from "@/components/landing";
import MidSection from "@/components/midSection";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Head>
        <title>Masonry Group</title>
        <meta
          name='description'
          content='My portfolio website built using Next JS and Typescript'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Landing darkMode={darkMode} setDarkMode={setDarkMode} />
      <MidSection darkMode={darkMode} />
    </>
  );
}
