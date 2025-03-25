import React from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { ReasonToChooseUs } from "../sections/ReasonToChooseUs";
import CollaborationAndPartners from "../sections/CollaborationAndPartners";
export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <ReasonToChooseUs/>
      <CollaborationAndPartners />
      <Footer />
    </>
  );
};
