"use client"
import { FormEvent, useState } from "react";
import Image from "next/image";
import img from "../../../../bike-website.png";
import { SiVercel } from "react-icons/si";  
import { FaGithub } from "react-icons/fa";  
import { FaLinkedin } from "react-icons/fa";  
import Link from "next/link";

export default function Bike_web() {
  
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
              <h1 className="text-4xl font-bold mb-4 text-[#FFB200]">
                Unveiling My Latest Project - A Stunning Bike Website! 🚴‍♂️🌟
              </h1>
              <p className="text-xl mb-4">
                 i am thrilled to announce the launch of my latest project, an amazing bike website crafted with Next.js and Tailwind CSS! This project has been an incredible journey, allowing me to push my web development skills to new heights while creating a visually engaging and responsive interface. Let me take you through the features that make this website stand out!
              </p>

              <h2 className="text-3xl font-semibold mb-4 text-[#FFB200]">A Sleek and Responsive Design 🎨</h2>
              <p className="text-xl mb-4">
                Using Next.js and Tailwind CSS, I was able to design a modern and sleek interface that looks great on any device. Tailwind utility-first approach enabled me to customize styles easily, ensuring that every element is both functional and visually appealing. The result? A seamless experience for users as they navigate through the site.
              </p>

              <h2 className="text-3xl font-semibold mb-4 text-[#FFB200]">Stunning Scroll Animations with AOS 🎢</h2>
              <p className="text-xl mb-4">
                To elevate the user experience further, I integrated stunning scroll animations using the AOS (Animate On Scroll) library. With each scroll, users are treated to a visual journey that enhances the overall storytelling of the website. This dynamic interaction not only keeps visitors engaged but also makes browsing feel lively and enjoyable.
              </p>

              <h2 className="text-3xl font-semibold mb-4 text-[#FFB200]">Captivating Typewriter Effect 💻💫</h2>
              <p className="text-xl mb-4">
                Another exciting feature is the typewriter effect, which I implemented using a specialized library. This effect brings my content to life, creating an engaging narrative as text appears dynamically on the screen. It adds a unique touch that draws users in and keeps them interested in what is next.
              </p>

              <h2 className="text-3xl font-semibold mb-4 text-[#FFB200]">Enhancing Interaction with an AI Chatbot 🤖💬</h2>
              <p className="text-xl mb-4">
                But thats not all! I incorporated an AI chatbot to enhance user interaction and provide instant support. This feature transforms the website from being purely informational to an interactive platform where users can ask questions and receive immediate assistance. it is a fantastic way to ensure that visitors feel supported and engaged while exploring everything the site has to offer.
              </p>

              <h2 className="text-3xl font-semibold mb-4 text-[#FFB200]">A Journey of Growth and Passion 🚀💖</h2>
              <p className="text-xl mb-4">
                Working on this bike website has not only honed my web development skills but also deepened my passion for creating seamless digital experiences. Each feature, from design to interactivity, reflects my dedication to crafting websites that are not just functional but also enjoyable to use.
              </p>

              <p className="text-xl mb-4">
                I am excited to share this project with you and can not wait to hear your thoughts and feedback! Your insights are invaluable as I continue to grow in my web development journey. Thank you for checking it out! 💬😊
              </p>
            </div>

            <div className="flex justify-center space-x-8 bg-[#FFB200] p-3 rounded-lg shadow-lg">
              <p className="text-2xl font-bold text-black">Check :</p> 
              <Link href="https://bikes-shop-seven.vercel.app/" target="_blank" rel="noopener noreferrer">
                <SiVercel className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition-colors duration-200" />
              </Link>
              <Link href="https://github.com/ahsen-adil/bikes-shop.git" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition-colors duration-200" />
              </Link>
              <Link href="https://www.linkedin.com/posts/ahsan-adil-48522b290_ai-chatbot-smit-activity-7250896776214315008-gxNC?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-700 text-3xl hover:text-blue-500 bg-gray-100 p-2 rounded-md transition-colors duration-200" />
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
