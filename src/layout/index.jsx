import React from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { ReasonToChooseUs } from "../sections/ReasonToChooseUs";
import CollaborationAndPartners from "../sections/CollaborationAndPartners";
import BlogsAndNews from "../sections/BlogsAndNews";
import LetsGetStarted from "../sections/LetsGetStarted";
export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <ReasonToChooseUs/>
      <CollaborationAndPartners />
      <BlogsAndNews />
      <LetsGetStarted />
      <Footer />
    </>
  );
};
