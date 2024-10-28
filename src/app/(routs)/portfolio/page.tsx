"use client"
import { FormEvent, useState } from "react";
import Image from "next/image";
import img from "../../../../portfolio.png";
import { SiVercel } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Portfolio() {
    
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
                            <h1 className="text-3xl font-bold mb-4 text-[#FFB200]">
                                Reaching Milestone 2 - My Portfolio is Live! 🌟
                            </h1>
                            <p className="text-xl mb-6">
                                I’m beyond excited to announce the launch of my latest portfolio, marking a significant achievement in my web development journey! 🚀 From start to finish, this project has been crafted with attention to detail and a passion for modern web technologies. Built with Next.js, Tailwind CSS, Shadcn, and React Icons, it showcases my evolving skills and commitment to delivering high-quality web experiences. Let me take you through what makes this portfolio truly stand out!
                            </p>

                            <h1 className="text-3xl font-bold mb-4 text-[#FFB200]">
                                Built with the Latest Tech Stack ⚙️
                            </h1>
                            <p className="text-xl mb-6">
                                At the core of this project are cutting-edge technologies that allow for both aesthetic appeal and performance:
                            </p>

                            <ul className="text-xl mb-6 list-disc list-inside">
                                <li><strong>Next.js:</strong> This framework helped streamline the development process, offering server-side rendering and enhanced performance.</li>
                                <li><strong>Tailwind CSS:</strong> With Tailwind utility-first approach, styling the components was a breeze, allowing for a highly customized and responsive design.</li>
                                <li><strong>Shadcn and React Icons:</strong> These added the perfect finishing touches to make the design pop with smooth icons and UI components that fit perfectly within the overall aesthetic.</li>
                            </ul>

                            <h1 className="text-3xl font-bold mb-4 text-[#FFB200]">
                                Custom AI Chatbot - A Personalized Experience 🤖✨
                            </h1>
                            <p className="text-xl mb-6">
                                One of the most exciting and unique features of this portfolio is the integration of a custom AI chatbot built with Dialogflow. This chatbot adds an interactive, personalized layer to the user experience, allowing visitors to ask questions about my skills, projects, and expertise.
                            </p>

                            <p className="text-xl mb-6">
                                Imagine visiting a portfolio and being able to chat directly with an AI assistant to inquire about a developers background or explore their work. It is something I have not seen in many portfolios, and I am proud to offer this functionality. It brings a futuristic, interactive element that truly sets the project apart.
                            </p>

                            <h1 className="text-3xl font-bold mb-4 text-[#FFB200]">
                                Robust Contact Section with Form Validation 📧✅
                            </h1>
                            <p className="text-xl mb-6">
                                No portfolio is complete without a way for users to reach out, and I have paid special attention to the contact section. I integrated robust form validation to ensure that any message sent—including the sender name and email—gets delivered straight to my inbox without any issues. This seamless communication flow enhances user experience and makes connecting with me easy and reliable.
                            </p>

                            <h1 className="text-3xl font-bold mb-4 text-[#FFB200]">
                                What is Next? 💬🚀
                            </h1>
                            <p className="text-xl mb-6">
                                This milestone is a major step in my journey, but it is just the beginning. I am eager to hear your feedback and thoughts on the project. Your insights will help me continue to grow, refine, and innovate as I push forward into more advanced and exciting web development projects.
                            </p>

                            <p className="text-xl">
                                Thank you for taking the time to check out my portfolio, and I look forward to your valuable feedback! 🌟
                            </p>
                        </div>

                        <div className="flex justify-center space-x-8 bg-[#FFB200] p-3 rounded-lg shadow-lg">
                        <p className="text-2xl font-bold text-black">Check :</p>
                            <Link href="https://my-portfolio-snowy-six-35.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <SiVercel className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition-transform transform hover:scale-110" />
                            </Link>
                            <Link href="https://github.com/ahsen-adil/my-portfolio.git" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition-transform transform hover:scale-110" />
                            </Link>
                            <Link href="https://www.linkedin.com/posts/ahsan-adil-48522b290_smit-web3-coding-activity-7241752972819394560-FfLu?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-blue-700 text-3xl hover:text-blue-500 bg-gray-100 p-2 rounded-md transition-transform transform hover:scale-110" />
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
