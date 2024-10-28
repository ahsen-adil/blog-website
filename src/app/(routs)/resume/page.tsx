"use client"
import { FormEvent, useState } from "react";
import Image from "next/image";
import img from "../../../../resume.png";
import { SiVercel } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Resume() {
    
 const [comments, setComments] = useState<string[]>([]);
 const [comment, setComment] = useState<string>('');

 const addComment = (e: FormEvent) => {
   e.preventDefault();
   if (comment.trim()) {
     setComments([...comments, comment]); 
     setComment(''); 
   }
 };

    return (
        <>
            <section className="bg-black text-gray-200 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <Image
            className="lg:w-4/6 md:w-3/6 w-5/6 lg:h-[400px] mb-10 object-cover object-center rounded-lg shadow-lg border-4 border-[#FFB200] hover:scale-105 transition-transform duration-300 ease-in-out"
            alt="hero"
                        src={img}
                    />
                    <div className="text-center lg:w-2/3 w-full">
                        
                        <div className="mb-8 leading-relaxed">
                            <h1 className="text-3xl font-bold text-[#FFB200]">
                                Building a Static Resume with HTML, CSS, and TypeScript
                            </h1>
                            <p className="text-xl mt-4">
                                I am thrilled to share that I have successfully completed my first milestone in web development—building a static resume using HTML, CSS, and TypeScript! 🚀 This project not only marked a significant step in my coding journey but also allowed me to showcase my front-end development skills in a practical way.
                            </p>

                            <h2 className="text-2xl font-semibold text-[#FFB200] mt-6">
                                Showcasing My Skills 🌟
                            </h2>
                            <p className="text-xl mt-4">
                                Creating a resume is more than just putting together a list of experiences; it is about presenting oneself in a way that is visually appealing and easy to navigate. In this project, I focused on designing a layout that effectively highlights my skills, education, and professional journey. By leveraging HTML for structure, CSS for styling, and TypeScript for enhanced functionality, I was able to create a responsive design that looks great on various devices. 📱💻
                            </p>

                            <h2 className="text-2xl font-semibold text-[#FFB200] mt-6">
                                Responsive and Visually Appealing Design 🎨
                            </h2>
                            <p className="text-xl mt-4">
                                I aimed to make my resume not just informative but also engaging. Using CSS, I implemented a clean and modern aesthetic that reflects my personal style. The responsive design ensures that whether viewed on a desktop or a mobile device, my resume maintains its integrity and readability. This experience has greatly improved my understanding of responsive web design principles, which are crucial in today mobile-first world. 🌍
                            </p>

                            <h2 className="text-2xl font-semibold text-[#FFB200] mt-6">
                                Deployment on Vercel 🚀
                            </h2>
                            <p className="text-xl mt-4">
                                One of the most exciting aspects of this project was deploying my resume on Vercel. This platform provided me with a seamless way to host my project, making it accessible worldwide. 🌐 It was a fulfilling experience to see my work come to life on the internet, allowing potential employers and connections to view my portfolio with just a click. 🖱️
                            </p>

                            <h2 className="text-2xl font-semibold text-[#FFB200] mt-6">
                                Strengthening My Portfolio 💪
                            </h2>
                            <p className="text-xl mt-4">
                                Completing this project has not only enhanced my technical skills but also strengthened my portfolio. It is a tangible representation of my capabilities as a front-end developer. As I continue to learn and grow in this field, I believe this resume will serve as a solid foundation for showcasing my future projects. 📈
                            </p>

                            <h2 className="text-2xl font-semibold text-[#FFB200] mt-6">
                                Looking Ahead 🔮
                            </h2>
                            <p className="text-xl mt-4">
                                With this achievement under my belt, I am more motivated than ever to take on new challenges in web development. I look forward to building more complex projects, deepening my knowledge of JavaScript and frameworks, and continuously improving my design skills. Each milestone is a step toward becoming a proficient developer, and I can not wait to see where this journey takes me next. ✨
                            </p>
                        </div>

                        <div className="flex justify-center space-x-8 bg-[#FFB200] p-3 rounded-lg shadow-lg">
                        <p className="text-2xl font-bold text-black">Check :</p>
                            <Link href="https://milenston1-2.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <SiVercel className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition duration-300" />
                            </Link>
                            <Link href="https://github.com/ahsen-adil/milenston1-2.git" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition duration-300" />
                            </Link>
                            <Link href="https://www.linkedin.com/posts/ahsan-adil-48522b290_hackathon-coding-programing-activity-7238450348170838017-uIv3?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-blue-700 text-3xl hover:text-blue-500 bg-gray-100 p-2 rounded-md transition duration-300" />
                            </Link>
                        </div>
                        
 <div className="flex flex-col items-center bg-gray-black p-6">
      <div className="bg-[#0B192C] p-6 rounded-lg shadow-lg lg:w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4 text-center text-[#FFB200]">Comments Section</h1>

        <form onSubmit={addComment} className="mb-6">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment..."
            className="w-full p-3 border border-gray-300 bg-[#1E3E62] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full mt-4 bg-[#FFB200] text-white py-2 rounded-lg hover:bg-[#c48900] transition duration-200"
          >
            Add Comment
          </button>
        </form>

        <div className="space-y-4">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="p-4 bg-[#1E3E62] rounded-lg shadow-sm">
                <p className="text-gray-100">{comment}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-100">No comments yet. Be the first to comment!</p>
          )}
        </div>
      </div>
    </div>
                    </div>
                </div>
            </section>
        </>
    );
}
