import React from "react";
import { Footer } from "./footer";
import { Hero } from "../sections/Hero";
import { ReasonToChooseUs } from "../sections/ReasonToChooseUs";
import { Products } from "../sections/Products";
import CollaborationAndPartners from "../sections/CollaborationAndPartners";
import BlogsAndNews from "../sections/BlogsAndNews";
import LetsGetStarted from "../sections/LetsGetStarted";
import EcosystemsSensitization from "../sections/EcosystemsSensitization";
import LeadingTheWay from "../sections/LeadingTheWay";

export const MainLayout = () => {
  return (
    <>
      <Hero />
      <ReasonToChooseUs/>
      <Products />
      <CollaborationAndPartners />
      <BlogsAndNews />
      <LetsGetStarted />
      <EcosystemsSensitization />
      <LeadingTheWay />
      <Footer />
    </>
  );
};
