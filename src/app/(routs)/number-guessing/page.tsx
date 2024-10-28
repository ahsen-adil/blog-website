"use client"
import { FormEvent, useState } from "react";
import Image from "next/image";
import img from "../../../../number-guessing.jpg";
import { SiVercel } from "react-icons/si";  
import { FaGithub } from "react-icons/fa";  
import { FaLinkedin } from "react-icons/fa";  
import Link from "next/link";

export default function Number() {
    
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
            className="lg:w-4/6 md:w-3/6 w-5/6 lg:h-[400px] h-[400px] mb-10 object-cover object-center rounded-lg shadow-lg border-4 border-[#FFB200] hover:scale-105 transition-transform duration-300 ease-in-out"
            alt="hero"
                        src={img}
                    />
                    <div className="text-center lg:w-2/3 w-full">

                        <div className="mb-8 leading-relaxed">
                            <h1 className="text-3xl font-bold mb-4 text-[#FFB200]">
                                Creating a Number Guessing Game with TypeScript, Node.js, and Inquirer 🎮💻
                            </h1>
                            <p className="text-xl mb-6">
                                I am excited to share my latest interactive project: a number guessing game powered by TypeScript, Node.js, and Inquirer! This fun and engaging game challenges players to guess a randomly generated number within a specified range, all through a user-friendly command-line interface.
                            </p>

                            <h1 className="text-3xl font-bold mb-4 text-[#FFB200]">How It Works 🤔</h1>
                            <p className="text-xl mb-6">
                                In this game, the computer generates a random number between a defined range (for example, 1 to 100). Players take turns guessing the number, and the game provides feedback on whether their guess is too high, too low, or correct.
                            </p>

                            <h1 className="text-3xl font-bold mb-4 text-[#FFB200]">Key Features 🌟</h1>
                            
                            <h2 className="text-3xl font-semibold mb-4">Interactive Gameplay:</h2>
                            <p className="text-xl mb-6">
                                The game utilizes Inquirer to create an interactive experience, prompting players for their guesses and providing instant feedback. This engaging interface keeps players involved and motivated to continue playing.
                            </p>

                            <h2 className="text-3xl font-semibold mb-4 text-[#FFB200]">Dynamic Difficulty:</h2>
                            <p className="text-xl mb-6">
                                Players can choose the range for the number to be guessed, allowing for various difficulty levels. This feature caters to both beginners and seasoned gamers, making the game accessible to everyone.
                            </p>

                            <h2 className="text-3xl font-semibold mb-4 text-[#FFB200]">Replayability:</h2>
                            <p className="text-xl mb-6">
                                After a player successfully guesses the number, they have the option to play again. This encourages repeated play and adds to the overall fun of the game.
                            </p>

                            <h1 className="text-3xl font-bold mb-4 text-[#FFB200]">Learning Experience 📚</h1>
                            <p className="text-xl mb-6">
                                Developing this number guessing game was a fantastic opportunity to strengthen my skills in TypeScript and Node.js. I learned how to handle user input effectively using Inquirer while also implementing game logic to provide an enjoyable experience. The project reinforced my understanding of random number generation and conditional statements.
                            </p>

                            <h1 className="text-3xl font-bold mb-4 text-[#FFB200]">Conclusion 🚀</h1>
                            <p className="text-xl mb-6">
                                This number guessing game project demonstrates the power of TypeScript, Node.js, and Inquirer in creating interactive terminal applications. It was a rewarding experience, and I can not wait to share it with fellow developers and gamers alike!
                            </p>

                            <p className="text-xl mb-6">
                                Stay tuned for more updates on my projects as I continue to explore new ideas and enhance my coding skills. Your feedback is always welcome, so let me know what you think! 💬😊
                            </p>
                        </div>

                        <div className="flex justify-center space-x-8 bg-[#FFB200] p-3 rounded-lg shadow-lg">
                        <p className="text-2xl font-bold text-black">Check :</p> 
                            <Link href="https://my-portfolio-3itb.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <SiVercel className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition-colors" />
                            </Link>
                            <Link href="https://github.com/ahsen-adil/number-guessing-game-typescript.git" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition-colors" />
                            </Link>
                            <Link href="https://www.linkedin.com/posts/ahsan-adil-48522b290_coding-programing-nodejs-activity-7199734008987934721-wF1r?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-blue-700 text-3xl hover:text-blue-500 bg-gray-100 p-2 rounded-md transition-colors" />
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
