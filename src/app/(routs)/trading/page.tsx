"use client"
import { FormEvent, useState } from "react";
import Image from "next/image";
import img from "../../../../trading.png";
import { SiVercel } from "react-icons/si";  
import { FaGithub } from "react-icons/fa";  
import { FaLinkedin } from "react-icons/fa";  
import Link from "next/link";

export default function Trading() {
    
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
                            <h1 className="text-4xl font-bold text-[#FFB200]">My Journey in Building a Real-Time Trading Website with React.js</h1>
                            <p className="text-xl">
                                Embarking on my first project in React.js has been both challenging and rewarding. Having worked with Next.js, I already had experience with the React.js framework, but building a real-time trading website allowed me to dive deeper into React’s core features and see its power firsthand. 😎
                            </p>

                            <h2 className="text-3xl mt-6 font-bold text-[#FFB200]">Data Fetching and Real-Time Market Updates 📊</h2>
                            <p className="text-xl">
                                A major part of this project involved implementing real-time data retrieval from market APIs. This feature is crucial for a trading website, where users rely on up-to-the-minute updates to make informed decisions. By leveraging modern JavaScript frameworks, I was able to integrate this feature seamlessly, ensuring that the data being displayed is always fresh and accurate.
                            </p>

                            <p className="text-xl">
                                With React component-driven architecture, the process of fetching and rendering this data became highly efficient. I could fetch data at regular intervals, update state dynamically, and ensure the UI responded instantly to the incoming data, creating a smooth, real-time user experience.
                            </p>

                            <h2 className="text-3xl mt-6 font-bold text-[#FFB200]">Why React.js for This Project? 🚀</h2>
                            <p className="text-xl">
                                Even though I have worked extensively with Next.js, React.js provided the ideal level of flexibility for this project. Here why:
                            </p>

                            <ul className="text-xl list-disc list-inside mt-4">
                                <li>**Component Reusability:** React ability to break down the interface into reusable components made it easier to manage the different sections of the trading platform, like stock listings, price charts, and user dashboards.</li>
                                <li>**State Management:** React state management capabilities made handling and updating real-time data much smoother. I could keep track of different stocks, their prices, and other market metrics, ensuring that the user interface reflected the most recent changes without unnecessary re-renders.</li>
                                <li>**Developer-Friendly Ecosystem:** React vast ecosystem of tools and libraries made integrating features such as real-time data fetching and API communication straightforward and efficient.</li>
                            </ul>

                            <h2 className="text-3xl mt-6 text-[#FFB200]">Key Features of the Trading Website</h2>
                            <p className="text-xl">
                                Here are a few standout features that make this trading platform both functional and user-friendly:
                            </p>

                            <ul className="text-xl list-disc list-inside mt-4">
                                <li>**Real-Time Data Updates:** Fetching live data from market APIs ensures users are always updated with the latest market trends.</li>
                                <li>**Dynamic Interface:** The use of React component-driven architecture allows for a highly dynamic and responsive user interface.</li>
                                <li>**Smooth Performance:** By using React state management and modern JavaScript, I have optimized the performance for a fast and reliable experience.</li>
                            </ul>

                            <h2 className="text-3xl mt-6 font-bold text-[#FFB200]">From Next.js to React.js: A Natural Transition</h2>
                            <p className="text-xl">
                                While Next.js provides powerful features like server-side rendering and API routes, working directly with React.js on this project was a great way to strengthen my foundational knowledge. Next.js is essentially a React.js framework, so the transition was natural. I could still utilize React declarative approach to building UI, but with more control over the client-side aspects of the application.
                            </p>

                            <h2 className="text-3xl mt-6 font-bold text-[#FFB200]">Looking Ahead 🔮</h2>
                            <p className="text-xl">
                                Building this real-time trading platform in React.js has been an exciting journey. It taught me not only how to handle real-time data fetching but also how to fine-tune user interfaces for performance and interactivity. As I continue to refine the project, I am excited to explore further possibilities such as adding more advanced trading features, enhancing the design, and maybe even diving into WebSockets for ultra-low-latency updates!
                            </p>

                            <p className="text-xl mt-4">
                                This project marks a significant step forward in my React.js journey, and I can not wait to see where it takes me next! 🚀
                            </p>
                        </div>

                        <div className="flex justify-center space-x-8 bg-[#FFB200] p-3 rounded-lg shadow-lg">
                        <p className="text-2xl font-bold text-black">Check :</p> 
                            <Link href="https://trading-website-phi.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <SiVercel className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition duration-300 ease-in-out" />
                            </Link>
                            <Link href="https://github.com/ahsen-adil/my-app.git" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition duration-300 ease-in-out" />
                            </Link>
                            <Link href="https://www.linkedin.com/posts/ahsan-adil-48522b290_coding-programing-nodejs-activity-7229805651944697856-L-ia?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-blue-700 text-3xl hover:text-blue-500 bg-gray-100 p-2 rounded-md transition duration-300 ease-in-out" />
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
