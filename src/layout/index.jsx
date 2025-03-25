import React from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { ReasonToChooseUs } from "../sections/ReasonToChooseUs";
export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <ReasonToChooseUs/>
      <Footer />
    </>
  );
};
