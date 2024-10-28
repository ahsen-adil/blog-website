"use client"
import { FormEvent, useState } from "react";
import Image from "next/image";
import img from "../../../../daraz.png";
import { SiVercel } from "react-icons/si";  
import { FaGithub } from "react-icons/fa";  
import { FaLinkedin } from "react-icons/fa";  
import Link from "next/link";

export default function Daraz(){
    
 const [comments, setComments] = useState<string[]>([]);
 const [comment, setComment] = useState<string>('');

 const addComment = (e: FormEvent) => {
   e.preventDefault();
   if (comment.trim()) {
     setComments([...comments, comment]); 
     setComment(''); 
   }
 };

    return(
        <>
        <section className="bg-black text-gray-200 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <Image
            className="lg:w-4/6 md:w-3/6 w-5/6 lg:h-[400px] mb-10 object-cover object-center rounded-lg shadow-lg border-4 border-[#FFB200] hover:scale-105 transition-transform duration-300 ease-in-out"
            alt="Daraz"
                    src={img}
                />
                <div className="text-center lg:w-2/3 w-full">

                    <div className="mb-8 leading-relaxed">
                        <h1 className="text-4xl font-bold mb-4 text-[#FFB200]">
                            Building a Daraz Clone with HTML, CSS, Bootstrap, and Slick.js 🛒💻
                        </h1>
                        <p className="text-lg mb-6">
                            I am excited to share that I recently completed an assignment where I developed a clone of Daraz using HTML, CSS, Bootstrap, and Slick.js! 🎉 This project was a fantastic opportunity for me to enhance my web development skills, focusing on creating a responsive design and interactive user experience.
                        </p>

                        <h2 className="text-3xl font-semibold mb-4 text-[#FFB200]">How It Works 🤔</h2>
                        <p className="text-lg mb-6">
                            This Daraz clone offers a visually appealing layout that mimics the look and feel of the original e-commerce platform. Using Bootstrap, I ensured that the website is fully responsive, adapting seamlessly to different screen sizes for mobile, tablet, and desktop users. Slick.js enabled me to implement smooth sliders and carousels, which are essential for showcasing products in an engaging way.
                        </p>

                        <h2 className="text-3xl font-semibold mb-4 text-[#FFB200]">Key Features 🌟</h2>

                        <h3 className="text-2xl font-semibold mb-2">Responsive Design:</h3>
                        <p className="text-lg mb-6">
                            Thanks to Bootstrap powerful grid system, the site is mobile-friendly and looks great on any device. The layout adjusts to provide an optimal viewing experience, ensuring easy navigation for users on smartphones and desktops alike.
                        </p>

                        <h3 className="text-2xl font-semibold mb-2">Interactive Sliders and Carousels:</h3>
                        <p className="text-lg mb-6">
                            With Slick.js, I added sleek sliders and carousels to display featured products and promotions. The smooth transitions enhance the user experience, making the site more dynamic and visually engaging.
                        </p>

                        <h3 className="text-2xl font-semibold mb-2">User-Friendly Interface:</h3>
                        <p className="text-lg mb-6">
                            The clone incorporates a clean and intuitive design, making it easy for users to browse through categories, view product details, and navigate the site effortlessly.
                        </p>

                        <h3 className="text-2xl font-semibold mb-2">Enhanced Visual Appeal:</h3>
                        <p className="text-lg mb-6">
                            With CSS styling and Bootstrap’s pre-built components, I was able to create a polished, professional look that closely resembles the Daraz platform, providing a familiar and seamless user experience.
                        </p>

                        <h2 className="text-3xl font-semibold mb-4 text-[#FFB200]">Learning Experience 📚</h2>
                        <p className="text-lg mb-6">
                            This project was a great learning experience for me, as I got to apply my knowledge of responsive web design and interactive elements. By working with Bootstrap, I gained a deeper understanding of creating fluid layouts, while Slick.js taught me how to implement visually engaging sliders and carousels that enhance site functionality.
                        </p>

                        <h2 className="text-3xl font-semibold mb-4 text-[#FFB200]">Conclusion 🚀</h2>
                        <p className="text-lg mb-6">
                            Completing this Daraz clone has not only strengthened my technical skills but also boosted my confidence in taking on more complex projects in the future. The project was a rewarding challenge, and I am excited to apply what I have learned to future endeavors in web development.
                        </p>

                        <p className="text-lg mb-6">
                            I am eager to continue growing in the field, and I look forward to tackling even more ambitious projects. Id love to hear your thoughts and feedback on this Daraz clone! 💬😊
                        </p>
                    </div>

                    <div className="flex justify-center space-x-8 bg-[#FFB200] p-3 rounded-lg shadow-lg">
                    <p className="text-2xl font-bold text-black">Check :</p> 
                        <Link href="https://daraz-clone-mocha.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <SiVercel className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition-transform duration-300 transform hover:scale-105" />
                        </Link>
                        <Link href="https://github.com/ahsen-adil/Daraz-Clone.git" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition-transform duration-300 transform hover:scale-105" />
                        </Link>
                        <Link href="https://www.linkedin.com/posts/ahsan-adil-48522b290_smit-daraz-darazclone-activity-7249452004278718465-jUjv?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-blue-700 text-3xl hover:text-blue-500 bg-gray-100 p-2 rounded-md transition-transform duration-300 transform hover:scale-105" />
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
