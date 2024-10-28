"use client"
import { FormEvent, useState } from "react";
import Image from "next/image";
import { SiVercel } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import img from "../../../../adventure-game.avif";
import Link from "next/link";

export default function AdventureGame() {

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
      <section className="text-gray-200 body-font bg-black min-h-screen">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image
            className="lg:w-4/6 md:w-3/6 w-5/6 lg:h-[400px] mb-10 object-cover object-center rounded-lg shadow-lg border-4 border-[#FFB200] hover:scale-105 transition-transform duration-300 ease-in-out"
            alt="adventure game"
            src={img}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-[#FFB200]">
              Creating an Adventure Game with TypeScript | Node.js | Chalk and Inquirer 🏞️💻
            </h1>
            <div className="mb-8 leading-relaxed text-lg text-gray-300">
              <p className="text-xl mb-4">
                I am thrilled to share my latest project: an adventure game powered by TypeScript | Node.js | Chalk | and Inquirer! This interactive command-line game takes players on an exciting journey filled with challenges and decisions, allowing them to immerse themselves in a world of adventure and creativity.
              </p>

              <h2 className="text-3xl font-semibold mb-2 text-[#FFB200]">How It Works 🤔</h2>
              <p className="text-xl mb-4">
                In this adventure game, players navigate through various scenarios by making choices that impact the outcome of their journey. Utilizing Inquirer, I created a dynamic interface that prompts players for decisions while Chalk adds vibrant colors to enhance the overall experience.
              </p>

              <h2 className="text-3xl font-semibold mb-2 text-[#FFB200]">Key Features 🌟</h2>

              <h3 className="text-2xl font-semibold mb-1">Engaging Storyline:</h3>
              <p className="text-xl mb-4">
                The game features a captivating narrative that guides players through different locations and challenges, keeping them engaged and motivated to progress.
              </p>

              <h3 className="text-2xl font-semibold mb-1">Choice-Driven Gameplay:</h3>
              <p className="text-xl mb-4">
                Players are faced with a series of choices that affect their adventure. Each decision leads to different outcomes, encouraging replayability and exploration of various paths.
              </p>

              <h3 className="text-2xl font-semibold mb-1">Interactive Prompts:</h3>
              <p className="text-xl mb-4">
                Using Inquirer, I designed an intuitive interface that prompts players to make decisions, creating a seamless interaction that feels natural and engaging.
              </p>

              <h3 className="text-2xl font-semibold mb-1">Visual Enhancements with Chalk:</h3>
              <p className="text-xl mb-4">
                The use of Chalk adds color and style to the text displayed in the terminal, making the gameplay more visually appealing and enhancing the immersive experience.
              </p>

              <h3 className="text-2xl font-semibold mb-1">Error Handling:</h3>
              <p className="text-xl mb-4">
                The game includes error handling to manage invalid inputs or unexpected situations, ensuring that players receive clear feedback and can continue their adventure without frustration.
              </p>

              <h2 className="text-3xl font-semibold mb-2 text-[#FFB200]">Learning Experience 📚</h2>
              <p className="text-xl mb-4">
                Building this adventure game was an excellent opportunity to explore storytelling in programming while honing my skills in TypeScript and Node.js. I learned how to manage game states, structure narratives, and create engaging user interactions using Inquirer and Chalk. This project also deepened my understanding of logic and decision-making processes in programming.
              </p>

              <h2 className="text-3xl font-semibold mb-2 text-[#FFB200]">Conclusion 🚀</h2>
              <p className="text-xl mb-4">
                This adventure game project showcases the capabilities of TypeScript, Node.js, Chalk, and Inquirer in creating immersive command-line experiences. It was a rewarding endeavor, and I’m excited to share it with fellow gamers and developers interested in the art of storytelling through code!
              </p>

              <p className="text-xl mb-4">
                Stay tuned for more updates as I continue to explore new projects and enhance my programming skills. I’d love to hear your thoughts and feedback on this adventure game! 💬😊
              </p>
            </div>

            <div className="flex justify-center space-x-8 bg-[#FFB200] p-3 rounded-lg shadow-lg">
              <p className="text-2xl font-bold text-black">Check :</p>
              <Link
                href="https://my-portfolio-3itb.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiVercel className="text-black text-3xl hover:text-gray-800 bg-white p-2 rounded-md transition-transform duration-300 hover:scale-110" />
              </Link>
              <Link
                href="https://github.com/ahsen-adil/adventure-game-typescript.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-black text-3xl hover:text-gray-800 bg-white p-2 rounded-md transition-transform duration-300 hover:scale-110" />
              </Link>
              <Link
                href="https://www.linkedin.com/posts/ahsan-adil-48522b290_coding-programing-nodejs-activity-7201493991756816384-vqYF?utm_source=share&utm_medium=member_desktop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-blue-700 text-3xl hover:text-blue-500 bg-white p-2 rounded-md transition-transform duration-300 hover:scale-110" />
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
