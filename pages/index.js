import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>My portfolio</title>
        <meta name="og:title" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="text-light-blue-100 m-60 text-5xl font-semibold leading-[1.25]">
        Hello world,<br/> my name is <br/><div className="text-dark-blue-100">Youssef Amr.</div>
      </div>
    </>
  )
}
