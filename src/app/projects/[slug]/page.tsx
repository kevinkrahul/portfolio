"use client";
import { useState, useEffect, use } from "react";
import { motion } from "framer-motion";
import jsonData from "@/components/Projects/data.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

import NotFound from "@/app/not-found";
import Image from "next/image";
import BlurImage from "../../../../public/kevin/blur.jpg";
// import FixedButon from "@/components/FixedButton";

type Project = {
  slug: string;
  title: string;
  tech: string[];
  year: string | number;
  preview?: string;
  code?: string;
  desc: string[];
  images: string[];
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

function ScrollDownButton() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (
      scrollTop <
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight
    ) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
      setIsAtBottom(true);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setIsAtBottom(false);
    }
  };

  return (
    <div className="fixed bottom-5 overflow-hidden left-0 right-0 flex justify-center items-center mb-10">
      <motion.div
        className="h-10 w-10 bg-neutral-900 rounded-full flex justify-center items-center cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleScroll}
      >
        <FontAwesomeIcon
          icon={isAtBottom ? faChevronUp : faChevronDown}
          className="text-white text-2xl"
        />
      </motion.div>
    </div>
  );
}

function Page({ params }: PageProps) {
  const [data, setData] = useState<Project | "404" | null>(null);
const { slug } = use(params);

  useEffect(() => {
  import("@/components/Projects/data.json")
    .then((module) => {
      const selectedData = (module.default.Projects as Project[]).find(
        (item) => item.slug === slug
      );
      setData(selectedData ?? "404");
    })
    .catch(() => setData("404"));
}, [slug]);


  if (data === "404") {
    return <NotFound />;
  } else if (!data) {
    return (
      <div className="relative overflow-hidden min-h-screen w-full gap-4 p-10 flex justify-center items-center flex-col mb-10 ">
        <div className="min-h-screen flex justify-center items-center w-full">
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 w-full">
            <div className="flex justify-center items-start flex-col mb-5 space-y-10 w-full p-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"
                ></div>
              ))}
            </div>
            <div className="flex justify-start items-start flex-col mb-5 w-full p-4">
              <div className="animate-pulse duration-500 shadow-lg bg-neutral-400 rounded w-full h-full"></div>
            </div>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 p-5 md:p-20 w-full h-auto">
          <div className="w-full h-auto aspect-video">
            <div className="animate-pulse duration-500 shadow-lg bg-neutral-400 h-full w-full rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full gap-4 p-5 md:p-10 flex justify-center items-center flex-col mb-10 ">
      {/* <FixedButon href="/projects"> */}
        {/* <FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" /> */}
      {/* </FixedButon> */}
      <ScrollDownButton />
      <div className="flex justify-center items-center">
        <div className="mx-auto grid md:gap-5 grid-cols-1 md:grid-cols-2 ">
          <div className="h-auto py-20 md:py-0 sm:min-h-0 flex justify-center items-start flex-col md:mb-5 space-y-3 md:space-y-10 mx-auto">
            <div>
              <h2 className="uppercase dark:text-gray-50 font-normal text-lg tracking-[8px] text-neutral-400">
                Project
              </h2>
              <h1 className="text-4xl font-medium dark:text-gray-300 text-neutral-900">
                {data.title}
              </h1>
            </div>
            <div>
              <h2 className="uppercase font-normal text-lg dark:text-gray-50 tracking-[8px] text-neutral-400">
                Technology
              </h2>
              <p className="text-2xl font-normal dark:text-gray-300 text-neutral-900">
                {data.tech.join(", ")}
              </p>
            </div>
            <div>
              <h2 className="uppercase font-normal dark:text-gray-50 text-lg tracking-[8px] text-neutral-400">
                Year
              </h2>
              <p className="text-2xl font-normal dark:text-gray-300 text-neutral-900">{data.year}</p>
            </div>
            {data.preview && (
              <div>
                <h2 className="uppercase font-normal dark:text-gray-50 text-lg tracking-[8px] text-neutral-400">
                  Preview
                </h2>
                <p className="text-2xl font-normal dark:text-gray-300 text-neutral-900">
                  <a
                    href={data.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Preview{" "}
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="ml-3"
                    />
                  </a>
                </p>
              </div>
            )}
            {data.code && (
              <div>
                <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                  Source Code
                </h2>
                <p className="text-2xl font-normal text-neutral-900">
                  <a href={data.code} target="_blank" rel="noopener noreferrer">
                    Github{" "}
                    <FontAwesomeIcon icon={faGithub} className="ml-3" />
                  </a>
                </p>
              </div>
            )}
          </div>
          <div className="flex justify-start items-start flex-col mb-5 ">
            <h2 className="uppercase font-normal dark:text-gray-50 text-lg tracking-[8px] text-neutral-400">
              Description
            </h2>
            {data.desc.map((desc, index) => (
              <p
                key={index}
                className="text-xl text-justify dark:text-gray-300 tracking-wide font-normal text-gray-500 mb-5"
              >
                {desc}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto w-full p-1 md:p-20">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
    {data.images.map((image, index) => (
      <div
        key={index}
        className="relative w-full max-w-[1000px] aspect-video bg-neutral-100 rounded-lg overflow-hidden flex justify-center items-center"
      >
        <Image
          src={image}
          alt={`Project Image ${index + 1}`}
          className="object-contain w-full h-full"
          width={1920}
          height={1080}
          placeholder="blur"
          blurDataURL={BlurImage.src}
        />
      </div>
    ))}
  </div>
</div>

    </div>
  );
}

export default Page;
