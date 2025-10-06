"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import CustomMarquee from "@/components/Marquee/marquee";
import Marquee from "react-fast-marquee";
import MyImg from "../../public/kevin/kevin.svg";
import { BsSpotify } from "react-icons/bs";
// import getNowPlayingItem from '@/utils/spotify';
import { motion } from "framer-motion";
import { FiDownloadCloud } from "react-icons/fi";
// import { Meteors } from '@/components/Meteors/meteors';
import { Badge } from "@/components/Badge/badge";
import { skills } from "@/data/index";
import { AnimatedCursor } from "@/components/Cursor/cursor";
import Skills from "@/components/Skills/skills";

const Hero = (props: any): any => {
  const [loading, setLoading] = useState<any>(true);
  const [result, setResult] = useState<any>({});

  useEffect(() => {
    Promise.all([
      // getNowPlayingItem(
      //   props.client_id,
      //   props.client_secret,
      //   props.refresh_token
      // )
    ]).then((results: any) => {
      setResult(results[0]);
      setLoading(false);
    });
  });

  return (
    // <React.Fragment>
    <>
      {/* <div className=" flex justify-center items-center my-5">
        <Badge
          text="Buy Next JS Portfolio Templates & More"
          url="https://www.buymeacoffee.com/bawanthathilan"
        />
      </div> */}
      <div className="flex w-full h-auto justify-center">
        <div className="relative h-[1224px] md:h-[clamp(300px,90vw,680px)] w-[clamp(300px,90vw,1140px)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 auto-rows-auto gap-5">
          {/* Left Profile Card */}
          <div className="group border border-grey-200 dark:border-[#27272a] col-span-1 sm:col-span-2 md:col-span-2 row-span-1 md:row-span-3 bg-secondary rounded-2xl p-8 flex flex-col gap-5 cursor-pointer dark:bg-darkBg relative">
            <div className="bg-red-400 relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden">
              <Image
                loading="lazy"
                src={MyImg}
                alt="my"
                className="rounded-2xl object-cover"
                fill
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl">
                <span className="font-medium text-textSecondary titleFont">
                  hey, I'm
                </span>
                <br />
                <span className="font-bold text-primary titleFont dark:text-white">
                  Kevin Rahul K 👋
                </span>
              </h1>
            </div>
          </div>

          {/* About Me Section */}
          <div className="col-span-1 sm:col-span-2 md:col-span-3 row-span-1 md:row-span-2 bg-secondary border border-grey-200 dark:border-[#27272a] rounded-2xl p-6 flex flex-col justify-between dark:bg-darkBg relative overflow-hidden">
            <p className="text-primary font-bold text-2xl md:text-4xl dark:text-white">
              Software Engineer, Tech Blogger and{" "}
              <span className="text-textSecondary">Traveller</span>, opensource
              enthusiast, minimalist, and Pop Music in search of flow.
            </p>
            <div className="flex flex-col sm:flex-row justify-start md:justify-between gap-4 mt-6">
              <a
                aria-label="download cv"
                href="https://drive.google.com/drive/folders/191j6y4c-BGXbQJD_Lp5nZW7JnGIe2NDS?usp=sharing"
                target="_blank"
                className="cv shadow-[0_10px_50px_rgba(8,_112,_184,_0.7)] bg-primary text-black dark:text-white font-medium flex items-center px-5 py-3 rounded-xl gap-4 dark:bg-secondary dark:text-primary"
              >
                <FiDownloadCloud />
                Download CV
              </a>
              <a
                aria-label="buy me coffee"
                href="https://www.buymeacoffee.com/bawanthathilan"
              >
                <img
                  loading="lazy"
                  alt="buy me coffee logo"
                  src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=bawanthathilan&button_colour=FFDD00&font_colour=000000&font_family=Poppins&outline_colour=000000&coffee_colour=ffffff"
                />
              </a>
            </div>
          </div>

          {/* Tools Section */}
          <div className="col-span-1 sm:col-span-2 md:col-span-3 row-span-1 bg-secondary dark:bg-darkBg relative group cursor-pointer rounded-2xl p-5 h-[250px] md:h-[300px] flex flex-col justify-between">
            <h1 className="text-lg md:text-xl font-medium">
              Tools and Tech I daily use
            </h1>
            <div className="flex flex-col gap-4">
              <CustomMarquee direction="right">
                <div className="flex gap-5">
                  {skills.slice(0, 4).map((skill, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-md border border-opacity-20 border-blue-500/40"
                    >
                      <skill.icon className="w-10 h-10 opacity-50" />
                    </div>
                  ))}
                </div>
              </CustomMarquee>
              <CustomMarquee direction="left">
                <div className="flex gap-5">
                  {skills.slice(4, 9).map((skill, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-md border border-opacity-20 border-blue-500/40"
                    >
                      <skill.icon className="w-10 h-10 opacity-50" />
                    </div>
                  ))}
                </div>
              </CustomMarquee>
            </div>
          </div>

        </div>
      </div>

      {/* Second page */}

      <Skills />
    </>
  );
};

export default Hero;
