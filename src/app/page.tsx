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
import ProjectCard from "@/components/Projects/ProjectCard";
import Projects from "@/components/Projects/data.json" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Hero = (props: any): any => {
  const [loading, setLoading] = useState<any>(true);
  const [result, setResult] = useState<any>({});
  const projects=Projects.Projects.filter((item)=>item.show===true);

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

      {/* Projects */}
      <div className=" w-screen container mx-auto px-10">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
              Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Explore my technical skills across different domains. Click on any
              category to see the specific technologies and tools I work with.
            </p>
          </motion.div>
      </div>
      <div className="w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10 cursor-pointer">	
          {projects.map((project, index) => (
						<ProjectCard 
              key={index}
							project={project}
							index={index}
							activeCategory={1}
						/>
					))}
			</div>


      {/* Contact */}
      <div className=" w-screen mb-[5vw] md:w-auto flex flex-col justify-center items-center text-center px-10 overflow-hidden">
									<motion.h2
										className="bg-white lg:bg-transparent bg-opacity-50 px-2 md-px-0 text-black text-4xl md:text-7xl font-bold mb-3"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.1,
											type: "spring",
										}}>
										Get In Touch
									</motion.h2>
									{/* <Hr /> */}
									<motion.p
										className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] md:mb-5"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.2,
											type: "spring",
										}}>
										Feel free to contact me if you have any{" "}
										<span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
											questions or just want to say hi.
										</span>
									</motion.p>
									<motion.p
										className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.3,
											type: "spring",
										}}>
										<a href="mailto:Alvalen.shafel04@gmail.com?subject=Hello&body=Hello Alvalens,">
											alvalen.shafel04@gmail.com
										</a>
									</motion.p>
									{/* icons */}
									<div className="flex justify-center items-center space-x-4">
										<motion.a
											href="mailto:Alvalen.shafel04@gmail.com?subject=Hello&body=Hello Alvalens,"
											className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
											initial={{ y: 40, opacity: 0 }}
											whileInView={{ y: 0, opacity: 1 }}
											transition={{
												y: { delay: 0.1 },
												opacity: { delay: 0.2 },
											}}>
											<FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
										</motion.a>

										<motion.a
											href="https://github.com/Alvalens"
											target="_blank"
											rel="noopener noreferrer"
											className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
											initial={{ opacity: 0, y: 40 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{
												y: { delay: 0.2 },
												opacity: { delay: 0.3 },
											}}>
											<FontAwesomeIcon icon={faGithub} className="text-3xl" />
										</motion.a>
										<motion.a
											href="https://www.instagram.com/alvalens_/"
											target="_blank"
											rel="noopener noreferrer"
											className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
											initial={{ opacity: 0, y: 40 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{
												y: { delay: 0.3 },
												opacity: { delay: 0.4 },
											}}>
											<FontAwesomeIcon
												icon={faInstagram}
												className="text-3xl"
											/>
										</motion.a>
										<motion.a
											href="https://www.linkedin.com/in/alvalen-shafel-8a081a254/"
											target="_blank"
											rel="noopener noreferrer"
											className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
											initial={{ opacity: 0, y: 40 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{
												y: { delay: 0.4 },
												opacity: { delay: 0.5 },
											}}>
											<FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
										</motion.a>
										<motion.a
											href="https://discordapp.com/users/bloody#6118"
											target="_blank"
											rel="noopener noreferrer"
											className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
											initial={{ opacity: 0, y: 40 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{
												y: { delay: 0.5 },
												opacity: { delay: 0.6 },
											}}>
											<FontAwesomeIcon icon={faDiscord} className="text-3xl" />
										</motion.a>
									</div>
			</div>
      <span>
        <hr  className="shadow-2xl shadow-black"/>
      <p className="flex items-center py-1 text-lg font-mono opacity-80 flex-col text center mx-auto">
                @ 2025 kevin Rahul
      </p>
        
      </span>
    </>
  );
};

export default Hero;
