"use client"
import { FormEvent, useState } from "react";
import Image from "next/image";
import img from "../../../../github-profile-search.png";
import { SiVercel } from "react-icons/si";  
import { FaGithub } from "react-icons/fa";  
import { FaLinkedin } from "react-icons/fa";  
import Link from "next/link";

export default function Github() {
    
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
            alt="Screenshot of the GitHub Profile Search Application"
                        src={img}
                    />
                    <div className="text-center lg:w-2/3 w-full">

                        <div className="mb-8 leading-relaxed">
                            <h1 className="text-3xl font-bold mb-4 text-[#FFB200]">
                                Blog: Introducing My GitHub Profile Search Application! 💥
                            </h1>
                            <p className="text-xl mb-6">
                                i am excited to share my latest project: a GitHub Profile Search Application built using HTML, CSS, and JavaScript! 😊 This application is designed to help users easily connect with developers and explore their open-source contributions.
                            </p>

                            <h2 className="text-3xl font-semibold mb-4 text-[#FFB200]">Why GitHub Profile Search? 🧐</h2>
                            <p className="text-xl mb-6">
                                In today digital age, finding and connecting with developers is more important than ever. My goal with this project was to create a simple yet powerful tool that allows users to search for GitHub profiles effortlessly. By leveraging GitHub API, I aimed to provide users with a seamless experience for retrieving and displaying vital information in real-time.
                            </p>

                            <h2 className="text-3xl font-semibold mb-4 text-[#FFB200]">What is Inside? 🌟</h2>
                            <p className="text-xl mb-4">
                                <strong>Intuitive Search Functionality:</strong> Users can input any GitHub username and instantly view the corresponding profile. The search bar is easy to use, ensuring that users can find the information they need quickly.
                            </p>
                            <p className="text-xl mb-4">
                                <strong>Clean and Modern UI:</strong> The application features a clean and modern user interface, designed with a focus on aesthetics and usability. This makes it not only functional but also visually appealing.
                            </p>
                            <p className="text-xl mb-4">
                                <strong>Dynamic Data Display:</strong> By using JavaScript to fetch and render profile data directly from the GitHub API, the application ensures that users receive up-to-date information about the profiles they are searching for.
                            </p>

                            <h2 className="text-3xl font-semibold mb-4 text-[#FFB200]">Learning Experience 📚</h2>
                            <p className="text-xl mb-6">
                                Working on this project has been incredibly rewarding! It allowed me to refine my skills in web development and API integration. I gained valuable experience in handling asynchronous data fetching and rendering dynamic content, which are essential skills in modern web development.
                            </p>

                            <h2 className="text-3xl font-semibold mb-4 text-[#FFB200]">Conclusion 🚀</h2>
                            <p className="text-xl mb-6">
                                I invite you to check out my GitHub Profile Search Application! Your feedback and insights would mean a lot to me as I continue to grow in this field. I am excited about the possibilities this project presents and look forward to enhancing it further in the future!
                            </p>

                            <p className="text-xl mb-6">
                                Thank you for your support! 💗
                            </p>
                        </div>

                        <div className="flex justify-center space-x-8 bg-[#FFB200] p-3 rounded-lg shadow-lg">
                        <p className="text-2xl font-bold text-black">Check:</p> 
                            <Link href="https://github-search-beige-kappa.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <SiVercel className="text-black text-3xl hover:text-gray-400 bg-gray-100 p-2 rounded-md transition duration-300 transform hover:scale-110" />
                            </Link>
                            <Link href="https://github.com/ahsen-adil/github-search.git" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-black text-3xl hover:text-gray-400 bg-gray-100 p-2 rounded-md transition duration-300 transform hover:scale-110" />
                            </Link>
                            <Link href="https://www.linkedin.com/posts/ahsan-adil-48522b290_ai-smit-javascript-activity-7251619264648863744-ZJEn?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-blue-400 text-3xl hover:text-blue-300 bg-gray-100 p-2 rounded-md transition duration-300 transform hover:scale-110" />
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
