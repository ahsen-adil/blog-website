"use client"
import { FormEvent, useState } from "react";
import Image from "next/image";
import img from "../../../../quiz.jpg";
import { SiVercel } from "react-icons/si";  
import { FaGithub } from "react-icons/fa";  
import { FaLinkedin } from "react-icons/fa";  
import Link from "next/link";

export default function Quiz() {
    
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
            className="lg:w-4/6 md:w-3/6 lg:h-[400px] w-5/6 mb-10 object-cover object-center rounded-lg shadow-lg border-4 border-[#FFB200] hover:scale-105 transition-transform duration-300 ease-in-out"
            alt="hero"
                        src={img}
                    />
                    <div className="text-center lg:w-2/3 w-full">
                       
                        <div className="mb-8 leading-relaxed">
                            <h1 className="text-4xl font-bold text-[#FFB200]">Developing a Programming Languages Quiz App with TypeScript, Node.js, Chalk, and Inquirer 🧠💻</h1>
                            <p className="text-xl">
                                I am excited to share my latest project: a programming languages quiz app powered by TypeScript, Node.js, Chalk, and Inquirer! This interactive command-line application tests users knowledge of various programming languages, making it a fun and educational tool for developers and coding enthusiasts.
                            </p>

                            <h2 className="text-3xl mt-6 font-bold text-[#FFB200]">How It Works 🤔</h2>
                            <p className="text-xl">
                                The quiz app presents users with a series of questions about different programming languages. By leveraging Inquirer, I created an engaging interface that allows users to select answers and receive immediate feedback on their performance. Chalk enhances the user experience with colorful outputs.
                            </p>

                            <h2 className="text-3xl mt-6 font-bold text-[#FFB200]">Key Features 🌟</h2>

                            <h3 className="text-3xl mt-4 ">Diverse Question Set:</h3>
                            <p className="text-xl">
                                The quiz includes a variety of questions covering syntax, concepts, and characteristics of popular programming languages, providing a comprehensive challenge for users.
                            </p>

                            <h3 className="text-3xl mt-4">Interactive Gameplay:</h3>
                            <p className="text-xl">
                                Users navigate through the quiz by answering multiple-choice questions. Each question is displayed with clear options, making it easy to participate.
                            </p>

                            <h3 className="text-3xl mt-4">Immediate Feedback:</h3>
                            <p className="text-xl">
                                After each question, users receive instant feedback on whether their answer was correct or incorrect, along with an explanation to enhance learning.
                            </p>

                            <h3 className="text-3xl mt-4">Visual Enhancements with Chalk:</h3>
                            <p className="text-xl">
                                The use of Chalk allows me to format the terminal output with vibrant colors, making the quiz visually appealing and engaging.
                            </p>

                            <h3 className="text-3xl mt-4">Error Handling:</h3>
                            <p className="text-xl">
                                The app includes error handling to manage invalid inputs or unexpected situations, ensuring a smooth user experience throughout the quiz.
                            </p>

                            <h2 className="text-3xl mt-6 font-bold text-[#FFB200]">Learning Experience 📚</h2>
                            <p className="text-xl">
                                Creating this quiz app was an excellent opportunity to reinforce my skills in TypeScript and Node.js while exploring the intricacies of user interaction in command-line applications. I learned how to structure questions and answers, manage user input effectively, and provide meaningful feedback using Inquirer and Chalk. This project also deepened my understanding of quiz logic and data organization.
                            </p>

                            <h2 className="text-3xl mt-6 font-bold text-[#FFB200]">Conclusion 🚀</h2>
                            <p className="text-xl">
                                This programming languages quiz app project showcases the capabilities of TypeScript, Node.js, Chalk, and Inquirer in creating an engaging and educational command-line experience. It was a rewarding challenge, and I am excited to share it with fellow developers and anyone looking to test their programming knowledge!
                            </p>

                            <p className="text-xl mt-4">
                                Stay tuned for more updates as I continue to develop new projects and refine my coding skills. Id love to hear your thoughts and feedback on this quiz app! 💬😊
                            </p>
                        </div>

                        <div className="flex justify-center space-x-8 bg-[#FFB200] p-3 rounded-lg shadow-lg">
                        <p className="text-2xl font-bold text-black">Check :</p> 
                            <Link href="https://my-portfolio-snowy-six-35.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <SiVercel className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition duration-300 ease-in-out" />
                            </Link>
                            <Link href="/" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition duration-300 ease-in-out" />
                            </Link>
                            <Link href="https://www.linkedin.com/posts/ahsan-adil-48522b290_coding-programing-nodejs-activity-7201587681418477569-CeBI?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-blue-700 text-3xl hover:text-blue-500 bg-gray-100 p-2 rounded-md transition duration-300 ease-in-out" />
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
    )
}
