import React from "react";
import SingleTools from "./SingleTools";
import { BsTools, BsScrewdriver } from "react-icons/bs";
import { DiMootoolsBadge, DiMootools } from "react-icons/di";

import { IoHardwareChipSharp } from "react-icons/io5";
import { FaHardHat } from "react-icons/fa";
import { GiCorkscrew, GiScrew } from "react-icons/gi";

const ToolsSection = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-5">Our Tools</h1>
      <section className="grid md:grid-cols-5 gap-16 items-center">
        <SingleTools icon={<BsTools />} />
        <SingleTools icon={<DiMootoolsBadge />} />
        <SingleTools icon={<DiMootools />} />
        <SingleTools icon={<GiScrew />} />
        <SingleTools />
        <SingleTools />
        <SingleTools icon={<IoHardwareChipSharp />} />
        <SingleTools icon={<FaHardHat />} />
        <SingleTools icon={<BsScrewdriver />} />
        <SingleTools icon={<GiCorkscrew />} />
      </section>
    </>
  );
};

export default ToolsSection;
