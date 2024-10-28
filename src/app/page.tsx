"use client";
import Image from 'next/image';
import { useState } from 'react';
import img from "../../mee.jpg";
import Html from './components/html&css';
import Javascript from './components/javascript';
import Typescript from './components/typescript';
import React from './components/react';
import Nextjs from './components/next';

const blogs = [
  { id: 1, title: 'html css projects', category: 'HTML&CSS', content: <Html /> },
  { id: 2, title: 'JavaScript projects', category: 'JavaScript', content: <Javascript /> },
  { id: 3, title: 'TypeScript projects', category: 'TypeScript', content: <Typescript /> },
  { id: 4, title: 'React.js projects', category: 'React.js', content: <React /> },
  { id: 5, title: 'Next.js projects', category: 'Next.js', content: <Nextjs /> },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBlogs = selectedCategory === 'All'
    ? blogs
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-10">

      <div className="flex justify-center mb-4">
        <Image
          src={img}
          alt="Profile Photo"
          className="w-44 h-44 rounded-full shadow-lg border-2 border-[#FFB200]"
        />
      </div>

      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-[#FFB200]">Ahsen Adil</h1>
        <p className="text-gray-100 mt-2 font-bold text-xl">
          Welcome to my personal blog where I explore web development ideas and share my thoughts.
        </p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-8 lg:ml-[250px] gap-4 mb-8">
        {/* Category Buttons */}
        <button
          className={`px-4 py-2 text-sm rounded-md transition-transform transform hover:scale-105 hover:bg-[#c48900] duration-300 ease-in-out ${selectedCategory === 'All' ? 'bg-[#FFB200] text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setSelectedCategory('All')}
        >
          All
        </button>
        <button
          className={`px-4 py-2 text-sm rounded-md transition-transform transform hover:scale-105 hover:bg-[#c48900] duration-300 ease-in-out ${selectedCategory === 'HTML&CSS' ? 'bg-[#FFB200] text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setSelectedCategory('HTML&CSS')}
        >
          HTML&CSS
        </button>
        <button
          className={`px-4 py-2 text-sm rounded-md transition-transform transform hover:scale-105 hover:bg-[#c48900] duration-300 ease-in-out ${selectedCategory === 'JavaScript' ? 'bg-[#FFB200] text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setSelectedCategory('JavaScript')}
        >
          JavaScript
        </button>
        <button
          className={`px-4 py-2 text-sm rounded-md transition-transform transform hover:scale-105 hover:bg-[#c48900] duration-300 ease-in-out ${selectedCategory === 'TypeScript' ? 'bg-[#FFB200] text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setSelectedCategory('TypeScript')}
        >
          TypeScript
        </button>
        <button
          className={`px-4 py-2 text-sm rounded-md transition-transform transform hover:scale-105 hover:bg-[#c48900] duration-300 ease-in-out ${selectedCategory === 'React.js' ? 'bg-[#FFB200] text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setSelectedCategory('React.js')}
        >
          React.js
        </button>
        <button
          className={`px-4 py-2 text-sm rounded-md transition-transform transform hover:scale-105 hover:bg-[#c48900] duration-300 ease-in-out ${selectedCategory === 'Next.js' ? 'bg-[#FFB200] text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setSelectedCategory('Next.js')}
        >
          Next.js
        </button>
      </div>

      <div className="grid gap-6">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map(blog => (
            <div key={blog.id} className="p-4 bg-[#0B192C] rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-white">{blog.title}</h2>
              <p className="text-gray-600">{blog.category}</p>
              <div className="mt-2 text-gray-700">
                {blog.content}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No blogs found.</p>
        )}
      </div>
    </div>
  );
}
