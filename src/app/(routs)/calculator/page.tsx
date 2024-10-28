"use client"
import { FormEvent, useState } from "react";
import Image from "next/image";
import img from "../../../../calculator.avif";
import { SiVercel } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Calculator() {
  
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
      <section className="bg-black text-gray-300 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image
            className="lg:w-4/6 md:w-3/6 w-5/6 lg:h-[400px] mb-10 object-cover object-center rounded-lg shadow-lg border-4 border-[#FFB200] hover:scale-105 transition-transform duration-300 ease-in-out"
            alt="hero"
            src={img}
          />
          <div className="text-center lg:w-2/3 w-full">
           
            <div className="mb-8 leading-relaxed">
              <h1 className="text-4xl font-bold mb-4 text-[#FFB200]">
                Building a Simple Calculator with TypeScript and Inquirer 💻
              </h1>
              <p className="text-xl mb-4">
                I &apos;m excited to share one of my recent projects: a simple calculator powered by TypeScript and Inquirer! This project combines my love for coding with a practical tool that can perform basic arithmetic operations right in your terminal.
              </p>

              <h2 className="text-3xl font-semibold mb-4 text-[#FFB200]">What It Does 🤔</h2>
              <p className="text-xl mb-4">
                The calculator allows users to perform fundamental operations such as addition, subtraction, multiplication, and division. Using Inquirer, I created an interactive command-line interface that guides users through their calculations, making the experience engaging and user-friendly.
              </p>

              <h2 className="text-3xl font-semibold mb-4 text-[#FFB200]">Key Features 🌟</h2>

              <h3 className="text-3xl font-semibold mb-2">Interactive User Interface:</h3>
              <p className="text-xl mb-4">
                Users can input their calculations directly in the terminal, thanks to Inquirer prompts. This makes the interaction feel smooth and intuitive.
              </p>

              <h3 className="text-3xl font-semibold mb-2">Error Handling:</h3>
              <p className="text-xl mb-4">
                The calculator includes error handling to ensure that users receive clear messages if they input invalid data or attempt to divide by zero. This feature enhances the overall usability of the application.
              </p>

              <h3 className="text-3xl font-semibold mb-2">Basic Arithmetic Operations:</h3>
              <p className="text-xl mb-4">
                The calculator supports addition, subtraction, multiplication, and division, providing a quick and easy way to perform everyday calculations.
              </p>

              <h2 className="text-3xl font-semibold mb-4 text-[#FFB200]">Learning Experience 📚</h2>
              <p className="text-xl mb-4">
                Building this calculator was not only a fun exercise in TypeScript but also a great opportunity to explore how Inquirer can be used to create interactive command-line applications. It helped me solidify my understanding of TypeScript features while enhancing my skills in handling user input effectively.
              </p>

              <h2 className="text-3xl font-semibold mb-4 text-[#FFB200]">Conclusion 🚀</h2>
              <p className="text-xl mb-4">
                This simple calculator project showcases the power of TypeScript and Inquirer in creating user-friendly terminal applications. I am thrilled with how it turned out and excited to share it with you!
              </p>

              <p className="text-xl mb-4">
                Stay tuned for more updates on my projects as I continue to explore and innovate in the world of programming. Your feedback is always welcome, so let me know what you think! 💬😊
              </p>
            </div>

            <div className="flex justify-center space-x-8 bg-[#FFB200] p-3 rounded-lg shadow-lg">
              <p className="text-2xl font-bold text-black">Check :</p>
              <Link href="https://my-portfolio-3itb.vercel.app/" target="_blank" rel="noopener noreferrer">
                <SiVercel className="text-black  text-3xl hover:text-gray-400 transition-colors duration-300" />
              </Link>
              <Link href="https://github.com/ahsen-adil/calculator-typescript.git" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-black bg-gray-100 text-3xl hover:text-gray-400 transition-colors duration-300" />
              </Link>
              <Link href="https://www.linkedin.com/posts/ahsan-adil-48522b290_nodejs-npm-developertools-activity-7199573430264864768-Mw4K?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-black bg-gray-100 text-3xl hover:text-gray-400 transition-colors duration-300" />
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
