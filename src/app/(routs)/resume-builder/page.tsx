"use client"
import { FormEvent, useState } from "react";
import Image from "next/image";
import img from "../../../../resume-builder.png";
import { SiVercel } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Resume_builder() {
    
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
                            <h1 className="text-3xl font-bold text-[#FFB200]">
                                🚀 Achieving Milestones 3, 4, and 5: Unveiling My Dynamic Resume Builder!
                            </h1>
                            <p className="text-xl text-gray-300 mt-4">
                                I am excited to announce that I have successfully completed milestones 3, 4, and 5 in my web development journey! 🎉 I built a dynamic resume builder that showcases editable functionality, URL generation, and PDF download capabilities. This innovative tool enables users to create and customize their resumes in real-time, and I am thrilled to share the details of this project!
                            </p>

                            <h2 className="text-2xl font-semibold text-[#FFB200] mt-6">
                                Real-Time Customization ✏️
                            </h2>
                            <p className="text-xl text-gray-300 mt-4">
                                One of the standout features of my dynamic resume builder is its ability to allow users to edit and save changes instantly. Whether you want to update your work experience, add new skills, or change the layout, this tool makes the process seamless. Users can see their modifications in real-time, making it easy to create a resume that truly reflects their unique professional journey. 🔄
                            </p>

                            <h2 className="text-2xl font-semibold text-[#FFB200] mt-6">
                                Unique URL Generation 🔗
                            </h2>
                            <p className="text-xl text-gray-300 mt-4">
                                In today digital age, sharing your resume is essential. With my resume builder, users can generate a unique URL to share their resume with others effortlessly. This feature not only enhances accessibility but also allows potential employers or connections to view and interact with the resume online. It is an excellent way to make a lasting impression! 🌍
                            </p>

                            <h2 className="text-2xl font-semibold text-[#FFB200] mt-6">
                                Professional-Grade PDF Downloads 📄
                            </h2>
                            <p className="text-xl text-gray-300 mt-4">
                                Another significant milestone in this project is the ability for users to download a professional-grade PDF version of their resumes with just a few clicks. This feature ensures that users can easily share their resumes in a format that is universally accepted and looks polished. It is a convenient way to make sure your resume is ready for any opportunity! 💼
                            </p>

                            <h2 className="text-2xl font-semibold text-[#FFB200] mt-6">
                                Demonstrating My Expertise 💪
                            </h2>
                            <p className="text-xl text-gray-300 mt-4">
                                Through this project, I have demonstrated my expertise in front-end development, user experience design, and functionality integration. Each milestone has challenged me to think creatively and enhance my problem-solving skills. By focusing on user-friendly design and robust functionality, I have taken my skills to the next level. This project has not only improved my technical abilities but also my understanding of how to create tools that truly benefit users. 🌟
                            </p>

                            <h2 className="text-2xl font-semibold text-[#FFB200] mt-6">
                                Looking Ahead 🔮
                            </h2>
                            <p className="text-xl text-gray-300 mt-4">
                                With the completion of this dynamic resume builder, I am eager to tackle more complex projects and further refine my skills. I believe this tool represents a significant step in my development journey, and I look forward to exploring new technologies and design principles to elevate my work even more.
                            </p>
                        </div>

                        <div className="flex justify-center space-x-8 bg-[#FFB200] p-3 rounded-lg shadow-lg">
                        <p className="text-2xl font-bold text-black">Check :</p>
                            <Link href="https://milenston5.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <SiVercel className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition-transform transform hover:scale-110" />
                            </Link>
                            <Link href="https://github.com/ahsen-adil/milenston5.git" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition-transform transform hover:scale-110" />
                            </Link>
                            <Link href="https://www.linkedin.com/posts/ahsan-adil-48522b290_coding-programing-nodejs-activity-7238656079742595073-sicZ?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-blue-700 text-3xl hover:text-blue-500 bg-gray-100 p-2 rounded-md transition-transform transform hover:scale-110" />
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
