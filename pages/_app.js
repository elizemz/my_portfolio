import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <div className=" text-white h-screen">
      <Header />
      <img className="pfp" src="https://cdn.discordapp.com/attachments/1027414362547298374/1154707538193940560/Untitled35_20230922170455.png"/>
        <div className="head">
        <motion.div
          initial={{ x: 0, opacity: 0, scale: 1 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 4 }}
          className="flex justify-between"
        >
        <Link className="ml-3" href="/">
          home
        </Link>
          <Link className="ml-3" href="/about">
            about me
          </Link>
          <Link className="ml-3" href="/contact">
            contact
          </Link>
        </motion.div></div>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
