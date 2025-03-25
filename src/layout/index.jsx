import React from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { Hero } from "../sections/Hero";
import { ReasonToChooseUs } from "../sections/ReasonToChooseUs";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ReasonToChooseUs/>
      <Footer />
    </>
  );
};
