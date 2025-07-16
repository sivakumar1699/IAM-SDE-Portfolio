import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, link, github }) => {
  return (
    <article className="relative flex w-full flex-col lg:flex-col justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light p-12 shadow-2xl dark:border-light dark:bg-dark lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]" />

      {/* Removed image */}

      <div className="flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">{type}</span>
        <Link href={link} target="_blank" className="underline-offset-2 hover:underline">
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">{title}</h2>
        </Link>
        <p className="my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10" aria-label={`${title} github link`}>
            <GithubIcon />
          </Link>
          <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base" aria-label={`${title}`}>
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, link, github }) => {
  return (
    <article className="relative flex w-full flex-col items-center justify-center rounded-2xl rounded-br-2xl border border-solid border-dark bg-light p-6 shadow-2xl dark:border-light dark:bg-dark xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />

      {/* Removed image here */}

      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
        <Link href={link} target="_blank" className="underline-offset-2 hover:underline">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>
        <div className="flex w-full items-center justify-between">
          <Link href={link} target="_blank" className="rounded text-lg font-medium underline md:text-base" aria-label={title}>
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6" aria-label={title}>
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Siva Kumar Choutametla | Projects</title>
        <meta name="description" content="Explore projects by Siva Kumar Choutametla in IAM, Java, Spring Boot, and Full-Stack Development." />
      </Head>

      <TransitionEffect />
      <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Building Secure & Scalable Solutions!" className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Spring Boot Application"
                title="Product Management System using Spring Boot MVC"
                github="https://github.com/sivakumar1699/Product-Management-System-Using-Spring-Boot-MVC"
                link="https://github.com/sivakumar1699/Product-Management-System-Using-Spring-Boot-MVC"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="Spring Boot Security Project"
                title="API Authentication & Authorization with Spring Security"
                summary="Built secure authentication and authorization mechanisms using role-based access control. Implemented Spring Security filters for structured and scalable API protection."
                github="https://github.com/sivakumar1699/SpringSecureApplication"
                link="https://github.com/sivakumar1699/SpringSecureApplication"
              />
            </div>

          </div>
        </Layout>
      </main>
    </>
  );
}