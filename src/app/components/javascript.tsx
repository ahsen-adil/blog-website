import Image from "next/image";
import github_search from "../../../github-profile-search.png";
import resume from "../../../resume.png";
import resume1 from "../../../resume-builder.png";
import Link from "next/link";
import { FaEye, FaCommentDots, FaArrowRight, FaFileAlt, FaGithub, FaTools } from "react-icons/fa"; // Imported new icons

export default function Javascript() {
  return (
    <>
      <section className="text-gray-100 bg-[#0B192C] body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full bg-[#1E3E62] border-2 border-[#FFB200] rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-500">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg transition-transform duration-500 ease-in-out hover:scale-110"
                  src={resume}
                  alt="My Resume"
                />
                <div className="p-6">
                  <h2 className="flex items-center tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    <FaFileAlt className="mr-2 text-indigo-400" /> 
                    My Resume
                  </h2>
                  <h1 className="flex items-center title-font text-2xl font-bold text-[#FFB200] mb-3">
                    <FaFileAlt className="mr-2 text-[#FFB200]" /> 
                    My Resume
                  </h1>
                  <p className="leading-relaxed mb-3">
                  a static resume using HTML, CSS, and TypeScript! This project not only marked a significant step ...                  </p>
                  <div className="flex items-center justify-center">
                    <Link href="/resume" className="bg-[#FFB200] text-white px-3 py-2 rounded-full shadow-lg inline-flex items-center text-lg hover:bg-bg-[#c48900] transition-colors duration-300">
                      Read More
                      <FaArrowRight className="ml-2 transition-transform duration-300 hover:translate-x-1" />
                    </Link>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <FaEye className="mr-1" /> 1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <FaCommentDots className="mr-1" /> 6
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full bg-[#1E3E62] border-2 border-[#FFB200] rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-500">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg transition-transform duration-500 ease-in-out hover:scale-110"
                  src={github_search}
                  alt="Github Profile Search App"
                />
                <div className="p-6">
                  <h2 className="flex items-center tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    <FaGithub className="mr-2 text-indigo-400" /> 
                    Github Profile Search
                  </h2>
                  <h1 className="flex items-center title-font text-2xl font-bold text-[#FFB200] mb-3">
                    <FaGithub className="mr-2 text-[#FFB200]" />
                    Github Profile Search 
                  </h1>
                  <p className="leading-relaxed mb-3">
                  a GitHub Profile Search Application built using HTML, CSS, and JavaScript! This application is designed ...                  </p>
                  <div className="flex items-center justify-center">
                    <Link href="/github-search" className="bg-[#FFB200] text-white px-3 py-2 rounded-full shadow-lg inline-flex items-center text-lg hover:bg-bg-[#c48900] transition-colors duration-300">
                      Read More
                      <FaArrowRight className="ml-2 transition-transform duration-300 hover:translate-x-1" />
                    </Link>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <FaEye className="mr-1" /> 1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <FaCommentDots className="mr-1" /> 6
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full bg-[#1E3E62] border-2 border-[#FFB200] rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-500">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg transition-transform duration-500 ease-in-out hover:scale-110"
                  src={resume1}
                  alt="Resume Builder"
                />
                <div className="p-6">
                  <h2 className="flex items-center tracking-widest text-xs title-font font-medium text-indigo-300 mb-1">
                    <FaTools className="mr-2 text-indigo-400" /> 
                    Resume Builder
                  </h2>
                  <h1 className="flex items-center title-font text-2xl font-bold text-[#FFB200] mb-3">
                    <FaTools className="mr-2 text-[#FFB200]" />
                    Resume Builder
                  </h1>
                  <p className="leading-relaxed mb-3">
                  a dynamic resume builder that showcases editable functionality, URL generation, and PDF download capabilities ...                  </p>
                  <div className="flex items-center justify-center">
                    <Link href="/resume-builder" className="bg-[#FFB200] text-white px-3 py-2 rounded-full shadow-lg inline-flex items-center text-lg hover:bg-bg-[#c48900] transition-colors duration-300">
                      Read More
                      <FaArrowRight className="ml-2 transition-transform duration-300 hover:translate-x-1" />
                    </Link>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <FaEye className="mr-1" /> 1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <FaCommentDots className="mr-1" /> 6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
