"use client"
import { FormEvent, useState } from "react";
import Image from "next/image";
import img from "../../../../food.png";
import { SiVercel } from "react-icons/si";  
import { FaGithub } from "react-icons/fa";  
import { FaLinkedin } from "react-icons/fa";  
import Link from "next/link";

export default function Food() {
    
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
                            Blog: Building a Stunning Food Website with AOS Animations, CSS, and HTML 🍽️✨
                        </h1>
                        <p className="text-xl mb-6">
                            I am thrilled to share my latest project: a food website featuring stunning scroll animations powered by AOS (Animate On Scroll), CSS, and HTML! 😊💥 This project was an exciting opportunity to create a visually appealing and interactive website that draws users in with smooth animations and a clean, modern design.
                        </p>
                        
                        <h2 className="text-3xl font-semibold mb-4 text-[#FFB200]">How It Works 🤔</h2>
                        <p className="text-xl mb-6">
                            The website showcases a variety of food options with engaging scroll-triggered animations. As users explore the site, elements like images, text, and icons come to life with beautiful transitions, creating an immersive browsing experience. The combination of AOS animations and custom CSS enhances the overall design, making the site dynamic and fun to navigate.
                        </p>

                        <h2 className="text-3xl font-semibold mb-4 text-[#FFB200]">Key Features 🌟</h2>
                        <p className="text-xl mb-4">
                            <strong>Smooth Scroll Animations with AOS:</strong> Using AOS, I implemented scroll-triggered animations that bring the content to life. As users scroll through the page, different elements smoothly fade in, slide up, or zoom, adding a sense of depth and movement to the site.
                        </p>

                        <p className="text-xl mb-4">
                            <strong>Clean and Modern Design:</strong> With a focus on simplicity and elegance, the sites layout is clean and visually appealing. The combination of HTML and CSS allows for a structured and well-organized design that is easy to navigate.
                        </p>

                        <p className="text-xl mb-4">
                            <strong>Interactive User Experience:</strong> The scroll animations not only make the site visually engaging but also enhance user interaction, keeping visitors interested as they explore the different sections of the website.
                        </p>

                        <p className="text-xl mb-4">
                            <strong>Responsive Layout:</strong> The website is designed to be fully responsive, ensuring that it looks great on all devices, from smartphones to desktops. CSS media queries were used to adjust the layout for different screen sizes, providing a consistent and enjoyable experience for all users.
                        </p>

                        <h2 className="text-3xl font-semibold mb-4 text-[#FFB200]">Learning Experience 📚</h2>
                        <p className="text-xl mb-6">
                            Working on this food website allowed me to deepen my understanding of CSS animations and AOS. I learned how to integrate AOS into a project and customize animations to fit the sites design. Additionally, I gained experience in creating smooth and visually appealing transitions that enhance user engagement.
                        </p>

                        <h2 className="text-3xl font-semibold mb-4 text-[#FFB200]">Conclusion 🚀</h2>
                        <p className="text-xl mb-6">
                            This food website project showcases the power of AOS animations and CSS in creating a dynamic and interactive browsing experience. I am excited to share it with everyone and hope you enjoy the smooth scroll animations as much as I enjoyed building them!
                        </p>

                        <p className="text-xl mb-6">
                            Id love to hear your feedback on this project and can not wait to keep pushing the boundaries of web design in future projects! 💬😊
                        </p>
                    </div>
                </div>
                <div className="flex justify-center space-x-8 bg-[#FFB200] w-[800px] p-3 rounded-lg shadow-lg">
                <p className="text-2xl font-bold text-black">Check :</p> 
                    <Link href="https://food-responsive-website.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <SiVercel className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md" />
                    </Link>
                    <Link href="https://github.com/ahsen-adil/food-responsive-website.git" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md" />
                    </Link>
                    <Link href="https://www.linkedin.com/posts/ahsan-adil-48522b290_coding-programing-nodejs-activity-7226907655288553472-u5cm?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-blue-700 text-3xl hover:text-blue-500 bg-gray-100 p-2 rounded-md" />
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
        </section>
    );
}







