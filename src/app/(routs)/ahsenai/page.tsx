"use client"
import { FormEvent, useState } from "react";
import Image from "next/image";
import img from "../../../../ahsen-ai.png";
import { SiVercel } from "react-icons/si";  
import { FaGithub } from "react-icons/fa";  
import { FaLinkedin } from "react-icons/fa";  
import Link from "next/link";

export default function Ahsenai() {
    
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
            alt="hero"
                        src={img}
                    />
                    <div className="text-center lg:w-2/3 w-full">
                        
                        <div className="mb-8 leading-relaxed text-white">
                            <h1 className="text-4xl font-bold mb-4 text-[#FFB200]">
                                Building an Interactive Chatbot Using React, Vite, and the Gemini API 🚀
                            </h1>
                            <p className="text-xl mb-4">
                                In todays digital landscape, chatbots are transforming how users engage with platforms, making interactions more fluid, personal, and responsive. i am thrilled to share my latest project, where I built a dynamic chatbot using React and Vite, integrated with the powerful Gemini API. 🌟 Lets dive into the features that make this chatbot a unique blend of innovative technology and modern design.
                            </p>
                            <h2 className="text-3xl font-semibold mb-2 text-[#FFB200]">A Seamless Conversation Experience 💬</h2>
                            <p className="text-xl mb-4">
                                At the heart of this project is the chatbots Interactive Chat Interface. Users can effortlessly input their questions, and the chatbot responds in real-time, making conversations feel natural and dynamic. The use of React ensures smooth rendering, while Vite lightning-fast build process enables snappy performance.
                            </p>
                            <p className="text-xl mb-4">
                                Whether users are curious about general knowledge, coding queries, or any other topic, the chatbot delivers meaningful, insightful answers. This not only enhances engagement but also promotes learning and exploration, encouraging users to return for more conversations.
                            </p>

                            <h2 className="text-3xl font-semibold mb-2 text-[#FFB200]">Focus on Accessibility & Responsiveness 📱</h2>
                            <p className="text-xl mb-4">
                                In todays mobile-first world, ensuring that applications work flawlessly across devices is essential. My chatbot is built with Responsive Design in mind, meaning it adapts seamlessly to any screen size—whether you are using a desktop, tablet, or mobile device.
                            </p>
                            <p className="text-xl mb-4">
                                Every user deserves an accessible interface, so I have prioritized making the chatbot intuitive for all users, regardless of their device. The UI automatically adjusts, ensuring a fluid and accessible experience across platforms.
                            </p>

                            <h2 className="text-3xl font-semibold mb-2 text-[#FFB200]">Aesthetic and Engaging Interface 🎨✨</h2>
                            <p className="text-xl mb-4">
                                In addition to its functionality, this chatbot is also visually appealing. I have utilized Modern Aesthetics to create a sleek, polished look. Smooth gradients, subtle animations, and a clean layout not only elevate the user experience but also make the chatbot enjoyable to interact with. These elements combine to provide users with a platform that feels modern, professional, and exciting.
                            </p>

                            <h2 className="text-3xl font-semibold mb-2 text-[#FFB200]">The Power of Gemini API 🔮</h2>
                            <p className="text-xl mb-4">
                                What powers the intelligent responses in this chatbot is the Gemini API. It allows for in-depth, contextual answers to user queries, enhancing the conversational experience. Integrating such a powerful API ensures that users can engage in meaningful and informative exchanges, setting the stage for deeper learning and interaction.
                            </p>

                            <h2 className="text-3xl font-semibold mb-2 text-[#FFB200]">Why This Project Matters</h2>
                            <p className="text-xl mb-4">
                                This chatbot is more than just a project; it is a step towards utilizing cutting-edge technology to foster exploration, learning, and communication. The integration of React and Vite provides performance, while the Gemini API offers substance. Together, they form a platform that is engaging, educational, and fun to use.
                            </p>

                            <p className="text-xl mb-4">
                                I am excited to see how this project evolves and grows, and I look forward to exploring even more innovative ways to enhance user experience through technology. Stay tuned for more updates! 🚀🌟
                            </p>
                        </div>

                        <div className="flex justify-center space-x-8 bg-[#FFB200] p-3 rounded-lg shadow-lg">
                        <p className="text-2xl font-bold text-black">Check :</p>
                            <Link href="https://gemini-api-lemon.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <SiVercel className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition duration-300" />
                            </Link>
                            <Link href="https://github.com/ahsen-adil/gemini-api.git" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition duration-300" />
                            </Link>
                            <Link href="https://www.linkedin.com/posts/ahsan-adil-48522b290_geminiapi-chatbot-ai-activity-7248677651467423744-MZta?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
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
