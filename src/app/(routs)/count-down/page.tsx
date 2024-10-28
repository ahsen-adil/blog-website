"use client"
import { FormEvent, useState } from "react";
import Image from "next/image";
import img from "../../../../countdown.jpg";
import { SiVercel } from "react-icons/si";  
import { FaGithub } from "react-icons/fa";  
import { FaLinkedin } from "react-icons/fa";  
import Link from "next/link";

export default function Count_down() {
    
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
                            <h1 className="text-3xl font-bold mb-4 text-[#FFB200]">Building a Countdown Timer with TypeScript, Node.js, Chalk, and Inquirer ⏳💻</h1>
                            <p className="text-xl mb-4">
                                I am excited to share my latest project: a countdown timer powered by TypeScript, Node.js, Chalk, and Inquirer! This interactive command-line application helps users track time for various tasks, events, or personal goals, making it a practical tool for time management enthusiasts.
                            </p>
                            
                            <h2 className="text-3xl font-semibold mb-2 text-[#FFB200]">How It Works 🤔</h2>
                            <p className="text-xl mb-4">
                                The countdown timer allows users to set a specific duration for the timer, and once initiated, it counts down to zero while displaying the remaining time in a visually appealing format. Using Inquirer, I created an intuitive interface that guides users through the setup process, while Chalk enhances the visual experience with colorful output.
                            </p>

                            <h2 className="text-3xl font-semibold mb-2 text-[#FFB200]">Key Features 🌟</h2>

                            <h3 className="text-2xl font-semibold mb-1">Customizable Countdown:</h3>
                            <p className="text-xl mb-4">
                                Users can easily set the duration for the countdown timer in minutes and seconds, allowing for personalized time tracking for any activity.
                            </p>

                            <h3 className="text-2xl font-semibold mb-1">Visual Countdown Display:</h3>
                            <p className="text-xl mb-4">
                                As the timer counts down, the remaining time is displayed in real-time, providing users with clear and immediate feedback.
                            </p>

                            <h3 className="text-2xl font-semibold mb-1">Completion Notification:</h3>
                            <p className="text-xl mb-4">
                                Once the timer reaches zero, users receive a notification in the terminal, letting them know that the countdown has finished.
                            </p>

                            <h3 className="text-2xl font-semibold mb-1 ">Visual Enhancements with Chalk:</h3>
                            <p className="text-xl mb-4">
                                The use of Chalk adds color and formatting to the terminal output, making the countdown more engaging and visually appealing.
                            </p>

                            <h3 className="text-2xl font-semibold mb-1">Error Handling:</h3>
                            <p className="text-xl mb-4">
                                The application includes error handling to manage invalid inputs, ensuring users can only set valid durations for the timer.
                            </p>

                            <h2 className="text-3xl font-semibold mb-2 text-[#FFB200]">Learning Experience 📚</h2>
                            <p className="text-xl mb-4">
                                Building this countdown timer was a valuable opportunity to enhance my skills in TypeScript and Node.js. I gained experience in handling asynchronous operations, managing user input effectively with Inquirer, and providing real-time feedback in the terminal. This project also deepened my understanding of time manipulation and control flow in programming.
                            </p>

                            <h2 className="text-3xl font-semibold mb-2 text-[#FFB200] ">Conclusion 🚀</h2>
                            <p className="text-xl mb-4">
                                This countdown timer project showcases the capabilities of TypeScript, Node.js, Chalk, and Inquirer in creating functional and visually appealing command-line applications. It was a rewarding experience, and I am excited to share it with anyone looking to improve their time management skills!
                            </p>

                            <p className="text-xl mb-4">
                                Stay tuned for more updates as I continue to develop new projects and refine my programming abilities. Id love to hear your thoughts and feedback on this countdown timer! 💬😊
                            </p>
                        </div>

                        <div className="flex justify-center space-x-8 bg-[#FFB200] p-3 rounded-lg shadow-lg">
                        <p className="text-2xl font-bold text-black">Check :</p> 
                            <Link href="https://my-portfolio-3itb.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <SiVercel className="text-black text-3xl bg-gray-100 hover:text-gray-400 transition-colors duration-200 p-2 rounded-md" />
                            </Link>
                            <Link href="https://github.com/ahsen-adil/count-down-timer-typescript.git" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-black text-3xl bg-gray-100 hover:text-gray-400 transition-colors duration-200 p-2 rounded-md" />
                            </Link>
                            <Link href="https://www.linkedin.com/posts/ahsan-adil-48522b290_coding-programing-nodejs-activity-7201968873342922755-UqdY?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-blue-700 bg-gray-100 text-3xl hover:text-gray-400 transition-colors duration-200 p-2 rounded-md" />
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
