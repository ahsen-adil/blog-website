"use client"
import { FormEvent, useState } from "react";
import Image from "next/image";
import img from "../../../../ice-cream-website.png";
import { SiVercel } from "react-icons/si";  
import { FaGithub } from "react-icons/fa";  
import { FaLinkedin } from "react-icons/fa";  
import Link from "next/link";

export default function IceCreamWeb() {
  
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
        <section className="bg-black text-gray-100 body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <Image
            className="lg:w-4/6 md:w-3/6 w-5/6 lg:h-[400px] mb-10 object-cover object-center rounded-lg shadow-lg border-4 border-[#FFB200] hover:scale-105 transition-transform duration-300 ease-in-out"
            alt="hero"
              src={img}
            />
            <div className="text-center lg:w-2/3 w-full">

              <div className="mb-8 leading-relaxed">
                <h1 className="text-3xl font-bold mb-4 text-[#FFB200]">
                  Welcome to Our Vibrant Ice Cream World! 🌈🍦
                </h1>
                <p className="text-xl mb-6">
                  Step into our vibrant ice cream world, crafted with love using Next.js and Tailwind CSS! 💖 Imagine a place where flavors come alive, and every scroll is a delightful treat. Join me as I take you through the delicious features of this sweet project!
                </p>

                <h1 className="text-3xl font-bold mb-4 text-[#FFB200]">Indulge in Our Flavorful Features 🍨</h1>
                
                <h2 className="text-3xl font-semibold mb-4 text-[#FFB200]">✨ Dialogflow-Powered AI Chatbot</h2>
                <p className="text-xl mb-6">
                  At the heart of our ice cream world is a Dialogflow-powered AI chatbot integrated with Kommunicate. This delightful feature allows visitors to interact with the chatbot, asking questions about flavors, ingredients, and more. It brings a personal touch to the experience, ensuring that every visitor feels welcomed and engaged.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-[#FFB200]">✨ AOS and Typewriter Effects</h2>
                <p className="text-xl mb-6">
                  Every scroll through our site is a visual delight, thanks to the AOS (Animate On Scroll) and typewriter effects. These animations make the browsing experience as sweet as ice cream, turning each visit into a treat for your eyes! With smooth transitions and captivating visuals, users will feel like they are exploring a whimsical ice cream paradise.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-[#FFB200]">✨ Fast and Responsive Design</h2>
                <p className="text-xl mb-6">
                  We have ensured that our website is not just beautiful but also fast and responsive. Indulge in seamless treats every time, no matter where you are or what device you use! With Tailwind CSS utility-first approach, the design adapts flawlessly to any screen size, guaranteeing an enjoyable experience for everyone.
                </p>

                <h1 className="text-3xl font-bold mb-4 text-[#FFB200]">A Sweet Journey Awaits 🍰</h1>
                <p className="text-xl mb-6">
                  Creating this ice cream website has been a journey filled with creativity and passion. Each feature reflects my dedication to crafting engaging digital experiences that delight user&apos;s.
                </p>

                <p className="text-xl mb-6">
                  I&apos;m excited to share this project with you and look forward to your thoughts and feedback! Your insights are invaluable as I continue to grow and innovate in my web development journey. Thank you for joining me on this sweet adventure! 💬😊
                </p>
              </div>

              <div className="flex justify-center space-x-8 bg-[#FFB200] p-3 rounded-lg shadow-lg">
              <p className="text-2xl font-bold text-black">Check :</p> 
                <Link href="https://ice-cream-web-tau.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <SiVercel className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition-transform duration-300 hover:scale-110" />
                </Link>
                <Link href="https://github.com/ahsen-adil/ice-cream-web.git" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition-transform duration-300 hover:scale-110" />
                </Link>
                <Link href="https://www.linkedin.com/posts/ahsan-adil-48522b290_ai-smit-coding-activity-7247547945250631680--3G_?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-blue-700 text-3xl hover:text-blue-500 bg-gray-100 p-2 rounded-md transition-transform duration-300 hover:scale-110" />
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
