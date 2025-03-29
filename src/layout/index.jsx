import React from "react";
import { Footer } from "./footer";
import { Hero } from "../sections/Hero";
import { ReasonToChooseUs } from "../sections/ReasonToChooseUs";

export const MainLayout = () => {
  return (
    <>
      <Hero />
      <ReasonToChooseUs/>
      <Footer />
    </>
  );
};
