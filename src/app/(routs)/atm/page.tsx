"use client"
import { FormEvent, useState } from "react";
import Image from "next/image";
import img from "../../../../atm.jpg";
import { SiVercel } from "react-icons/si";  
import { FaGithub } from "react-icons/fa";  
import { FaLinkedin } from "react-icons/fa";  
import Link from "next/link";

export default function Atm() {

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
            <section className="text-gray-200 body-font bg-black">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <Image
            className="lg:w-4/6 md:w-3/6 w-5/6 lg:h-[400px] mb-10 object-cover object-center rounded-lg shadow-lg border-4 border-[#FFB200] hover:scale-105 transition-transform duration-300 ease-in-out"
            alt="ATM Simulator"
                        src={img}
                    />
                    <div className="text-center lg:w-2/3 w-full">
                       
                        <div className="mb-8 leading-relaxed text-white">
                            <h1 className="text-4xl font-bold mb-4 text-[#FFB200]">Building an ATM Machine Simulator with TypeScript, Node.js, and Inquirer 💻🏦</h1>
                            <p className="text-xl mb-4">
                                 i am thrilled to introduce my latest project: an ATM machine simulator powered by TypeScript, Node.js, and Inquirer! This interactive terminal application allows users to experience the functionalities of a real ATM, making banking tasks feel more engaging and accessible.
                            </p>

                            <h2 className="text-3xl font-semibold mb-2 text-[#FFB200]">How It Works 🤔</h2>
                            <p className="text-xl mb-4">
                                The ATM simulator offers users a variety of banking functions, such as checking their balance, depositing funds, withdrawing cash, and exiting the application. Using Inquirer, I created a user-friendly command-line interface that guides users through these banking transactions.
                            </p>

                            <h2 className="text-3xl font-semibold mb-2 text-[#FFB200]">Key Features 🌟</h2>
                            
                            <h3 className="text-3xl font-semibold mb-2">User Authentication:</h3>
                            <p className="text-xl mb-4">
                                Users can start by entering a predefined PIN to access their account, simulating the authentication process of a real ATM.
                            </p>

                            <h3 className="text-3xl font-semibold mb-2">Banking Operations:</h3>
                            <ul className="text-xl list-disc ml-6 mb-4">
                                <li><strong>Check Balance:</strong> Users can view their current account balance.</li>
                                <li><strong>Deposit Funds:</strong> Users can deposit a specified amount into their account.</li>
                                <li><strong>Withdraw Cash:</strong> Users can withdraw a specified amount, with built-in validation to ensure they have sufficient funds.</li>
                            </ul>

                            <h3 className="text-3xl font-semibold mb-2">Error Handling:</h3>
                            <p className="text-xl mb-4">
                                The application includes error handling for various scenarios, such as entering an incorrect PIN, attempting to withdraw more money than available, or inputting invalid amounts. This ensures a smooth user experience and prevents frustration.
                            </p>

                            <h2 className="text-3xl font-semibold mb-2 text-[#FFB200]">Learning Experience 📚</h2>
                            <p className="text-xl mb-4">
                                Creating this ATM machine simulator was a valuable learning experience that deepened my understanding of TypeScript and Node.js. I gained hands-on experience in managing user input and applying conditional logic to simulate real-world banking transactions. Additionally, I improved my skills in error handling and data validation, which are crucial in any application involving financial transactions.
                            </p>

                            <h2 className="text-3xl font-semibold mb-2 text-[#FFB200]">Conclusion 🚀</h2>
                            <p className="text-xl mb-4">
                                This ATM machine simulator project showcases the capabilities of TypeScript, Node.js, and Inquirer in building interactive command-line applications. It was a fun and educational endeavor, and 1 am excited to share it with others who are interested in coding and banking concepts!
                            </p>

                            <p className="text-xl mb-4">
                                Stay tuned for more updates as I continue to develop new projects and enhance my programming skills. Id love to hear your feedback, so let me know what you think! 💬😊
                            </p>
                        </div>

                        <div className="flex justify-center space-x-8 bg-[#FFB200] p-3 rounded-lg shadow-lg">
                        <p className="text-2xl font-bold text-black">Check :</p> 
                            <Link href="https://my-portfolio-3itb.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <SiVercel className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition duration-300" />
                            </Link>
                            <Link href="https://github.com/ahsen-adil/ATM-Machine-typescript.git" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition duration-300" />
                            </Link>
                            <Link href="https://www.linkedin.com/posts/ahsan-adil-48522b290_coding-programing-nodejs-activity-7200110348442480640-kowg?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
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
