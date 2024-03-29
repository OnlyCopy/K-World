import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Canvas from '../Components/Canvas';
import Footer from '../Components/Footer';
import Hoops from '../images/Hoops.gif';
import Script from 'next/script';


export default function Home() {
  return (
    <div>
      <Head>
        <title>K Pierre&apos;s World</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="z-0">
      </div>
      <main>
        <div className="w-full h-full z-10 absolute top-0">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center">
              <div className="animated my-3">
                <Image draggable="false" width={0} height={0} src={Hoops} alt="" />
              </div>
              <div className="slogan">
                <h1 className="text-white text-3xl">&quot;K Pierre This Is Your World&quot;</h1>
              </div>
              <div className="navigation mt-3">
                <ul className="flex flex-col space-y-3 text-white text-2xl align-center">
                  <li className="hover:text-green-300">
                      <Link href="/music">Music</Link>
                  </li>
                  <li className="hover:text-green-300">
                      <Link href="/contact">Contact</Link>
                  </li>
                  <li className="hover:text-green-300">
                      <Link href="/shop">Shop</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="w-full absolute justify-center bottom-0 z-10">
        <Footer />
      </div>

    </div>
  )
}
