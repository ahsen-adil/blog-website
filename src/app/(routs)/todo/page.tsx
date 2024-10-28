"use client"
import { FormEvent, useState } from "react";
import Image from "next/image";
import img from "../../../../todo.jpg";
import { SiVercel } from "react-icons/si";  
import { FaGithub } from "react-icons/fa";  
import { FaLinkedin } from "react-icons/fa";  
import Link from "next/link";

export default function Todo() {
    
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
                        <h1 className="text-4xl font-bold text-[#FFB200]">Creating a Todo List Application with TypeScript, Node.js, and Inquirer 📝💻</h1>
                        <p className="text-xl">
                            I am excited to share my latest project: a todo list application powered by TypeScript, Node.js, and Inquirer! This interactive terminal-based app helps users manage their tasks effectively, providing a simple and efficient way to keep track of what needs to be done.
                        </p>
                        <h2 className="text-3xl mt-6 font-bold text-[#FFB200]">How It Works 🤔</h2>
                        <p className="text-xl">
                            The todo list application allows users to add, view, update, and delete tasks through a user-friendly command-line interface. Utilizing Inquirer, I created a seamless experience that guides users through each step of managing their tasks.
                        </p>

                        <h2 className="text-3xl mt-6 font-bold text-[#FFB200]">Key Features 🌟</h2>
                        
                        <h3 className="text-2xl mt-4">Add Tasks:</h3>
                        <p className="text-xl">
                            Users can easily add new tasks to their todo list by inputting the task description, making it simple to keep track of their responsibilities.
                        </p>

                        <h3 className="text-2xl mt-4">View Tasks:</h3>
                        <p className="text-xl">
                            The application displays all current tasks, allowing users to see what they need to accomplish at a glance. This feature helps in prioritizing tasks effectively.
                        </p>

                        <h3 className="text-2xl mt-4">Update Tasks:</h3>
                        <p className="text-xl">
                            Users have the option to update existing tasks, whether it is marking them as complete or modifying the task description. This flexibility ensures that users can adapt their lists as needed.
                        </p>

                        <h3 className="text-2xl mt-4">Delete Tasks:</h3>
                        <p className="text-xl">
                            Users can remove tasks they no longer need to complete, keeping their todo list clean and relevant.
                        </p>

                        <h3 className="text-2xl mt-4">Persistence:</h3>
                        <p className="text-xl">
                            I implemented a basic method to store tasks, ensuring that they remain accessible even after the application is closed. This feature adds to the usability of the app and makes it more practical for daily use.
                        </p>

                        <h2 className="text-3xl mt-6 font-bold text-[#FFB200]">Learning Experience 📚</h2>
                        <p className="text-xl">
                            Developing this todo list application was an excellent opportunity to strengthen my skills in TypeScript and Node.js. I learned how to manage user input and data storage effectively while building a user-friendly command-line interface with Inquirer. This project also enhanced my understanding of how to structure a simple application and implement CRUD (Create, Read, Update, Delete) functionality.
                        </p>

                        <h2 className="text-3xl mt-6 font-bold text-[#FFB200]">Conclusion 🚀</h2>
                        <p className="text-xl">
                            This todo list application project showcases the power of TypeScript, Node.js, and Inquirer in creating interactive terminal applications. It was a rewarding experience, and 1 am eager to share it with others who are looking for effective ways to manage their tasks!
                        </p>

                        <p className="text-xl mt-4">
                            Stay tuned for more updates as I continue to explore new projects and develop my coding skills. Id love to hear your thoughts and feedback on this project! 💬😊
                        </p>
                    </div>

                    <div className="flex justify-center space-x-8 bg-[#FFB200] p-3 rounded-lg shadow-lg">
                    <p className="text-2xl font-bold text-black">Check :</p> 
                        <Link href="https://my-portfolio-3itb.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <SiVercel className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition duration-300 ease-in-out" />
                        </Link>
                        <Link href="https://github.com/ahsen-adil/TODO-List-typescript.git" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition duration-300 ease-in-out" />
                        </Link>
                        <Link href="https://www.linkedin.com/posts/ahsan-adil-48522b290_coding-programing-nodejs-activity-7200192919121625088-PO9m?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
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
    );
}
