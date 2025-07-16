import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="IAM Engineer"
              company="Cognizant"
              companyLink="https://www.cognizant.com/"
              time="Sep 2021-Dec 2023"
              address="Hyderabad, India"
              work="I’ve worked as an IAM Engineer with hands-on experience implementing 
              identity governance solutions using SailPoint IdentityIQ. I played a key role in 
              onboarding applications into the platform by integrating connectors like Active Directory(AD), 
              Oracle Unified Directory (OUD), JDBC, and Web Services. My responsibilities included configuring
              aggregation jobs, defining identity lifecycle policies, and developing automated provisioning and 
              deprovisioning workflows.
              I collaborated closely with cross-functional teams to define access certifications, 
              streamline role-based access controls (RBAC), and support compliance with audit requirements.
              Additionally, I contributed to internal framework enhancements, policy enforcement, 
              and testing automation. My efforts helped strengthen the organization's access management 
              capabilities while improving operational efficiency through secure automation."
            />

            <Details
              position="Identity and Access Management Intern"
              company="Cognizant"
              companyLink="https://www.cognizant.com/"
              time="Feb 2021 - Aug 2021"
              address="Hyderabad, India"
              work="Completed an intensive internship program focused on Identity and Access Management 
              fundamentals, including access governance, identity lifecycle, and compliance concepts. 
              Successfully completed all mandatory technical and process-oriented trainings required 
              to be part of an enterprise-scale IAM implementation team. Gained exposure to 
              SailPoint IdentityIQ concepts such as identity cubes, policies, certification campaigns, and 
              provisioning flows. Actively participated in shadowing real-time configuration and testing activities, 
              laying a strong foundation for transitioning into hands-on project work during the trainee phase."
            />
          </ul>
        </div>
        </div>
    );
};

export default Experience;
