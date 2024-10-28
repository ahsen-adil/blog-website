"use client"
import { FormEvent, useState } from "react";
import Image from "next/image";
import img from "../../../../currency-converter.jpg";
import { SiVercel } from "react-icons/si";  
import { FaGithub } from "react-icons/fa";  
import { FaLinkedin } from "react-icons/fa";  
import Link from "next/link";

export default function CurrencyConverter() {
    
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
                            <h1 className="text-3xl font-bold mb-4 text-[#FFB200]">Building a Currency Converter with TypeScript, Node.js, and Inquirer 💱💻</h1>
                            <p className="text-xl mb-4">
                                I am excited to unveil my latest project: a currency converter powered by TypeScript, Node.js, and Inquirer! This interactive command-line application allows users to convert amounts between different currencies, making it a handy tool for travelers and finance enthusiasts alike.
                            </p>

                            <h2 className="text-3xl font-semibold mb-2 text-[#FFB200]">How It Works 🤔</h2>
                            <p className="text-xl mb-4">
                                The currency converter fetches real-time exchange rates and enables users to input an amount they wish to convert. Using Inquirer, I designed a user-friendly interface that guides users through the conversion process seamlessly.
                            </p>

                            <h2 className="text-3xl font-semibold mb-2 text-[#FFB200]">Key Features 🌟</h2>

                            <h3 className="text-2xl font-semibold mb-1">Real-Time Exchange Rates:</h3>
                            <p className="text-xl mb-4">
                                The application retrieves the latest exchange rates from a reliable API, ensuring that users always have access to up-to-date conversion information.
                            </p>

                            <h3 className="text-2xl font-semibold mb-1">Currency Selection:</h3>
                            <p className="text-xl mb-4">
                                Users can choose from a variety of currencies to convert between. The app provides a list of available currencies, making it easy for users to find what they need.
                            </p>

                            <h3 className="text-2xl font-semibold mb-1">Conversion Calculation:</h3>
                            <p className="text-xl mb-4">
                                After inputting the amount to be converted, users receive an instant calculation based on the current exchange rate. This feature provides quick and accurate results for various currency conversions.
                            </p>

                            <h3 className="text-2xl font-semibold mb-1">Error Handling:</h3>
                            <p className="text-xl mb-4">
                                The application includes error handling to manage invalid inputs or issues with retrieving exchange rates. This ensures a smooth user experience and helps users understand any problems that arise.
                            </p>

                            <h2 className="text-3xl font-semibold mb-2 text-[#FFB200]">Learning Experience 📚</h2>
                            <p className="text-xl mb-4">
                                Creating this currency converter was a valuable project that enhanced my skills in TypeScript and Node.js. I learned how to interact with APIs to fetch real-time data and manage user input effectively using Inquirer. This project also deepened my understanding of currency conversion logic and how to handle asynchronous operations in Node.js.
                            </p>

                            <h2 className="text-3xl font-semibold mb-2 text-[#FFB200]">Conclusion 🚀</h2>
                            <p className="text-xl mb-4">
                                This currency converter project showcases the capabilities of TypeScript, Node.js, and Inquirer in building practical command-line applications. It was a rewarding experience, and I am excited to share it with anyone interested in coding or finance!
                            </p>

                            <p className="text-xl mb-4">
                                Stay tuned for more updates as I continue to develop new projects and expand my programming skills. Id love to hear your thoughts and feedback on this project! 💬😊
                            </p>
                        </div>

                        <div className="flex justify-center space-x-8 bg-[#FFB200] p-3 rounded-lg shadow-lg">
                        <p className="text-2xl font-bold text-black">Check :</p> 
                            <Link href="https://my-portfolio-3itb.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <SiVercel className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition-transform duration-300 hover:scale-105" />
                            </Link>
                            <Link href="https://github.com/ahsen-adil/Currency-converter-typescript.git" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition-transform duration-300 hover:scale-105" />
                            </Link>
                            <Link href="https://www.linkedin.com/posts/ahsan-adil-48522b290_coding-programing-nodejs-activity-7200547532312104960-iU-U?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-blue-700 text-3xl hover:text-blue-500 bg-gray-100 p-2 rounded-md transition-transform duration-300 hover:scale-105" />
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
