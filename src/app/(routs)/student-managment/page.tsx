"use client"
import { FormEvent, useState } from "react";
import Image from "next/image";
import img from "../../../../student-managment.avif";
import { SiVercel } from "react-icons/si";  
import { FaGithub } from "react-icons/fa";  
import { FaLinkedin } from "react-icons/fa";  
import Link from "next/link";

export default function StudentManagement() {
    
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
                            <h1 className="text-4xl font-bold text-[#FFB200]">Building a Student Management System with TypeScript, Node.js, Chalk, and Inquirer 🎓💻</h1>
                            <p className="text-xl mt-4">
                                I am excited to share my latest project: a student management system powered by TypeScript, Node.js, Chalk, and Inquirer! This interactive command-line application is designed to help educators and administrators manage student records efficiently, making it a practical tool for schools and educational institutions.
                            </p>

                            <h2 className="text-3xl mt-6 font-bold text-[#FFB200]">How It Works 🤔</h2>
                            <p className="text-xl mt-4">
                                The student management system allows users to perform various operations, such as adding new students, viewing student records, updating details, and deleting records. Using Inquirer, I created a user-friendly interface, while Chalk enhances the visual experience with colorful terminal outputs.
                            </p>

                            <h2 className="text-3xl mt-6 font-bold text-[#FFB200]">Key Features 🌟</h2>
                            
                            <h3 className="text-2xl mt-4">Add New Students:</h3>
                            <p className="text-xl">
                                Users can easily add new student records by inputting relevant information, such as name, age, and grade. This feature streamlines the process of keeping track of students.
                            </p>

                            <h3 className="text-2xl mt-4">View Student Records:</h3>
                            <p className="text-xl">
                                The application displays a list of all registered students, allowing users to see essential information at a glance. This feature helps educators quickly access student data.
                            </p>

                            <h3 className="text-2xl mt-4">Update Student Details:</h3>
                            <p className="text-xl">
                                Users have the option to update existing student records, ensuring that information remains accurate and up to date. This functionality is crucial for maintaining reliable records.
                            </p>

                            <h3 className="text-2xl mt-4">Delete Student Records:</h3>
                            <p className="text-xl">
                                The application allows users to remove student records that are no longer needed, helping to keep the database clean and manageable.
                            </p>

                            <h3 className="text-2xl mt-4">Visual Enhancements with Chalk:</h3>
                            <p className="text-xl">
                                The use of Chalk adds color and formatting to terminal outputs, making the user experience more engaging and visually appealing.
                            </p>

                            <h3 className="text-2xl mt-4">Error Handling:</h3>
                            <p className="text-xl">
                                The application includes error handling for various scenarios, such as invalid inputs or attempting to delete non-existent records. This ensures a smooth user experience and helps users understand any issues that arise.
                            </p>

                            <h2 className="text-3xl mt-6 font-bold text-[#FFB200]">Learning Experience 📚</h2>
                            <p className="text-xl mt-4">
                                Developing this student management system was an excellent opportunity to strengthen my skills in TypeScript and Node.js while also exploring how to enhance command-line applications with libraries like Chalk. I learned how to structure a simple database system, handle user input effectively, and apply CRUD (Create, Read, Update, Delete) operations in a practical context.
                            </p>

                            <h2 className="text-3xl mt-6 font-bold text-[#FFB200]">Conclusion 🚀</h2>
                            <p className="text-xl mt-4">
                                This student management system project showcases the capabilities of TypeScript, Node.js, Chalk, and Inquirer in creating functional and visually appealing command-line applications. It was a rewarding experience, and I am eager to share it with educators and developers interested in managing student data more effectively!
                            </p>

                            <p className="text-xl mt-4">
                                Stay tuned for more updates as I continue to develop new projects and refine my programming skills. Id love to hear your thoughts and feedback on this project! 💬😊
                            </p>
                        </div>

                        <div className="flex justify-center space-x-8 bg-[#FFB200] p-3 rounded-lg shadow-lg">
                        <p className="text-2xl font-bold text-black">Check :</p> 
                            <Link href="https://my-portfolio-3itb.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <SiVercel className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition-colors duration-300" />
                            </Link>
                            <Link href="https://github.com/ahsen-adil/Student-managment-system-typescript.git" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition-colors duration-300" />
                            </Link>
                            <Link href="https://www.linkedin.com/posts/ahsan-adil-48522b290_coding-programing-nodejs-activity-7201062496189743105-j795?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
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
