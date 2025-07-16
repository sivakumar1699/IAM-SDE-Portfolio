import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
      font-medium text-lg dark:text-light dark:border-light sm:text-base"
    >
      <Layout className="py-6 flex items-center justify-between lg:flex-col">
        <span>{new Date().getFullYear()} &copy; Siva Kumar Choutametla</span>

        <Link
          href="mailto:choutametlasivakumar@gmail.com"
          target="_blank"
          className="underline underline-offset-2 mt-2 lg:mt-1"
        >
          Contact Me
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;