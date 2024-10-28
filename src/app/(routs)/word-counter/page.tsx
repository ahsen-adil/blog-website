"use client"
import { FormEvent, useState } from "react";
import Image from "next/image";
import img from "../../../../word-counter.jpg";
import { SiVercel } from "react-icons/si";  
import { FaGithub } from "react-icons/fa";  
import { FaLinkedin } from "react-icons/fa";  
import Link from "next/link";

export default function WordCounter() {
    
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
            className="lg:w-4/6 md:w-3/6 w-5/6 mb-10 lg:h-[400px] object-cover object-center rounded-lg shadow-lg border-4 border-[#FFB200] hover:scale-105 transition-transform duration-300 ease-in-out"
            alt="hero"
                    src={img}
                />
                <div className="text-center lg:w-2/3 w-full">
                    
                    <div className="mb-8 leading-relaxed">
                        <h1 className="text-3xl font-bold text-[#FFB200]">Creating a Word Counter with TypeScript, Node.js, and Inquirer 📊💻</h1>
                        <p className="text-xl">
                            I am thrilled to share my latest project: a word counter powered by TypeScript, Node.js, and Inquirer! This interactive command-line application helps users analyze text by counting the number of words, characters, and even sentences, making it a useful tool for writers, editors, and students alike.
                        </p>

                        <h2 className="text-3xl mt-6 font-bold text-[#FFB200]">How It Works 🤔</h2>
                        <p className="text-xl">
                            The word counter application allows users to input a block of text, providing detailed statistics about that text. By leveraging Inquirer, I created a user-friendly interface that makes it easy to analyze the content.
                        </p>

                        <h2 className="text-3xl mt-6 font-bold text-[#FFB200]">Key Features 🌟</h2>
                        
                        <h3 className="text-3xl mt-4 font-semibold">Text Input:</h3>
                        <p className="text-xl">
                            Users can input their text directly into the terminal, making it simple to analyze any content they wish to review.
                        </p>

                        <h3 className="text-3xl mt-4 font-semibold">Word and Character Count:</h3>
                        <p className="text-xl">
                            The application calculates the total number of words and characters in the provided text. This feature is particularly useful for writers who need to adhere to specific word limits.
                        </p>

                        <h3 className="text-3xl mt-4 font-semibold">Sentence Count:</h3>
                        <p className="text-xl">
                            In addition to counting words and characters, the application also counts the number of sentences in the text. This provides a more comprehensive analysis for users.
                        </p>

                        <h3 className="text-3xl mt-4 font-semibold">Error Handling:</h3>
                        <p className="text-xl">
                            The application includes error handling to manage cases where the input might be empty or invalid. This ensures that users receive clear feedback and can make necessary adjustments.
                        </p>

                        <h2 className="text-3xl mt-6 font-bold text-[#FFB200]">Learning Experience 📚</h2>
                        <p className="text-xl">
                            Building this word counter was an excellent opportunity to enhance my skills in TypeScript and Node.js. I gained hands-on experience with string manipulation and learned how to process user input effectively using Inquirer. This project also reinforced my understanding of basic programming concepts, such as loops and conditionals.
                        </p>

                        <h2 className="text-3xl mt-6 font-bold text-[#FFB200]">Conclusion 🚀</h2>
                        <p className="text-xl">
                            This word counter project showcases the capabilities of TypeScript, Node.js, and Inquirer in creating practical command-line applications. It was a rewarding experience, and I am excited to share it with fellow developers and writers looking for an easy way to analyze their text!
                        </p>

                        <p className="text-xl mt-4">
                            Stay tuned for more updates as I continue to explore new projects and improve my coding skills. Id love to hear your thoughts and feedback on this project! 💬😊
                        </p>
                    </div>

                    <div className="flex justify-center space-x-8 bg-[#FFB200] p-3 rounded-lg shadow-lg">
                    <p className="text-2xl font-bold text-black">Check :</p> 
                        <Link href="https://my-portfolio-snowy-six-35.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <SiVercel className="text-black bg-gray-100 text-3xl hover:text-gray-600 transition-transform duration-200" />
                        </Link>
                        <Link href="https://github.com/ahsen-adil/Word-counter-typescript.git" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-black bg-gray-100 text-3xl hover:text-gray-600 transition-transform duration-200" />
                        </Link>
                        <Link href="https://www.linkedin.com/posts/ahsan-adil-48522b290_coding-programing-nodejs-activity-7200853285380014080-jsI5?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-blue-700 bg-gray-100 text-3xl hover:text-blue-500 transition-transform duration-200" />
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
