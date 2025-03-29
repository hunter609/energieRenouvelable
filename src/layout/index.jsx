import React from "react";
import { Footer } from "./footer";
import { Hero } from "../sections/Hero";
import { ReasonToChooseUs } from "../sections/ReasonToChooseUs";
import CollaborationAndPartners from "../sections/CollaborationAndPartners";
import BlogsAndNews from "../sections/BlogsAndNews";
import LetsGetStarted from "../sections/LetsGetStarted";
import EcosystemsSensitization from "../sections/EcosystemsSensitization";

export const MainLayout = () => {
  return (
    <>
      <Hero />
      <ReasonToChooseUs/>
      <CollaborationAndPartners />
      <BlogsAndNews />
      <LetsGetStarted />
      <EcosystemsSensitization />
      <Footer />
    </>
  );
};
