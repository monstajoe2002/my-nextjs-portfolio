import Head from "next/head";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Head>
        <title>My portfolio</title>
        <meta name="og:title" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="text-light-blue-100 p-60 justify-start text-5xl font-semibold leading-[1.25]">
        Hello world,<br /> my name is <br /><div className="text-dark-blue-100">Youssef Amr.</div>
        <div className="text-sm text-black font-normal">
          A.K.A <strong>MONSTAJOE</strong>*
        </div>
        <div className="text-sm text-black font-normal">
          *Yes, my name is all caps because I <strong>LIKE</strong> it bb. <br/>
          Also, I used to produce music so this was my handle.
        </div>
        <div className="flex place-content-end transition-opacity after:ease-linear ">
            <img className=" max-h-[25%] max-w-[25%] rounded-xl" src="/me.jpg" alt="me" />
        </div>
      </div>

    </>
  )
}
