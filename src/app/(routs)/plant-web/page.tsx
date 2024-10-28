"use client"
import { FormEvent, useState } from "react";
import Image from "next/image";
import img from "../../../../plant-website.png";
import { SiVercel } from "react-icons/si";  
import { FaGithub } from "react-icons/fa";  
import { FaLinkedin } from "react-icons/fa";  
import Link from "next/link";

export default function Plant() {
    
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
                            <h1 className="text-3xl font-bold mb-4 text-[#FFB200]">
                                Discover Our Advanced AI-Powered Plant Website! 🌱🤖
                            </h1>
                            <p className="text-xl mb-6">
                                I am excited to share that we have integrated an advanced AI-powered chatbot into our plant website, trained on Dialogflow and powered by Kommunicate! This innovative feature enhances user interaction, providing instant and accurate answers to all your plant-related queries. Lets dive into the details of this project and explore the fantastic features it offers!
                            </p>

                            <h1 className="text-3xl font-bold mb-4 text-[#FFB200]">Built with a Modern Tech Stack 💻</h1>
                            <p className="text-xl mb-6">
                                Our plant website is constructed using Next.js, TypeScript, and Tailwind CSS, ensuring a modern and scalable tech stack. This combination allows us to create a responsive, high-performance website that adapts seamlessly to any device.
                            </p>

                            <h1 className="text-3xl font-bold mb-4 text-[#FFB200]">Key Features of Our Plant Website 🌿</h1>

                            <h2 className="text-3xl font-semibold mb-4">Instant Answers:</h2>
                            <p className="text-xl mb-6">
                                Leveraging artificial intelligence and machine learning algorithms, our chatbot is designed to provide quick and accurate responses to users questions. Whether you are curious about plant care, types, or specific details, the chatbot is ready to assist!
                            </p>

                            <h2 className="text-3xl font-semibold mb-4">User-Friendly Interface:</h2>
                            <p className="text-xl mb-6">
                                The website features an intuitive design, making it easy for users to browse through plant details and images. The clean layout ensures that information is readily accessible, enhancing the overall user experience.
                            </p>

                            <h2 className="text-3xl font-semibold mb-4">Multi-Platform Support:</h2>
                            <p className="text-xl mb-6">
                                Our website is optimized for various devices, allowing users to explore plant information and interact with the chatbot from desktops, tablets, or smartphones. No matter where you are, you can enjoy a seamless browsing experience.
                            </p>

                            <h2 className="text-3xl font-semibold mb-4">Text/Voice Question/Answer Capabilities:</h2>
                            <p className="text-xl mb-6">
                                To make interactions even more engaging, our chatbot supports both text and voice question/answer functionalities. Users can choose how they want to communicate, whether it is typing their queries or speaking them aloud, making it a versatile tool for plant enthusiasts.
                            </p>

                            <h1 className="text-3xl font-bold mb-4 text-[#FFB200]">Explore Plant Details and More! 🌼</h1>
                            <p className="text-xl mb-6">
                                Our website is not just about the chatbot; users can browse a wide range of plant details, including images and care instructions. This comprehensive resource is perfect for both novice plant parents and seasoned horticulturists looking to expand their green thumbs.
                            </p>

                            <p className="text-xl mb-6">
                                Building this plant website has been a fulfilling journey, combining my passion for web development with the love of nature. I can not wait for you to explore the features and experience the seamless integration of AI technology!
                            </p>

                            <p className="text-xl mb-6">
                                Your feedback is invaluable, so I look forward to hearing your thoughts and suggestions. Thank you for visiting our plant website! 💬😊
                            </p>
                        </div>

                        <div className="flex justify-center space-x-8 bg-[#FFB200] p-3 rounded-lg shadow-lg">
                        <p className="text-2xl font-bold text-black">Check :</p> 
                            <Link href="https://plant-website-theta.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <SiVercel className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition-colors duration-300" />
                            </Link>
                            <Link href="https://github.com/ahsen-adil/plant-website.git" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition-colors duration-300" />
                            </Link>
                            <Link href="https://www.linkedin.com/posts/ahsan-adil-48522b290_smit-ai-chatbot-activity-7244949276244463617-bFDu?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-blue-700 text-3xl hover:text-blue-500 bg-gray-100 p-2 rounded-md transition-colors duration-300" />
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
