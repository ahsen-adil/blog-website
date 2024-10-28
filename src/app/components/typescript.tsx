import calculator from "../../../calculator.avif"
import number_guessing from "../../../number-guessing.jpg"
import atm from "../../../atm.jpg" 
import todo from "../../../todo.jpg"
import currency_converter from "../../../currency-converter.jpg"
import word_counter from "../../../word-counter.jpg"
import student_managment from "../../../student-managment.avif"
import adventure_game from "../../../adventure-game.avif"
import quiz from "../../../quiz.jpg"
import count_down from "../../../countdown.jpg"
import Image from "next/image"
import Link from "next/link"
import { FaCalculator, FaClipboardList, FaCommentDots, FaEye, FaFileAlt, FaGamepad, FaHourglassHalf, FaList, FaMoneyBillWave, FaQuestionCircle, FaUserGraduate } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa6"

export default function Typescript(){
    return(
        <>
        <section className="text-gray-100 bg-[#0B192C] body-font">
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-wrap -m-4">
    <div className="p-4 md:w-1/3">
  <div className="h-full bg-[#1E3E62] border-2 border-[#FFB200] rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-500">
    <Image
      className="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg transition-transform duration-500 ease-in-out hover:scale-110"
      src={calculator} 
      alt="Calculator"
    />
    <div className="p-6">
    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 flex items-center pb-2">
        <FaCalculator className="mr-1 text-indigo-400" /> Calculator
      </h2>
      <div className="flex items-center mb-1">
        <FaCalculator className="mr-2 text-[#FFB200] text-2xl" /> 
        <h1 className="title-font text-2xl font-bold text-[#FFB200]">Calculator</h1>
      </div>
     
      <p className="leading-relaxed mb-3">
      a simple calculator powered by TypeScript and Inquirer! This project combines my love for coding ...      </p>
      <div className="flex items-center justify-center">
        <Link
          href="/calculator"
          className="bg-[#FFB200] text-white px-3 py-2 rounded-full shadow-lg inline-flex items-center text-lg hover:bg-[#c48900] transition-colors duration-300"
        >
          Read More
          <FaArrowRight className="ml-2 transition-transform duration-300 hover:translate-x-1" />
        </Link>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
          <FaEye className="mr-1" /> 1.2K
        </span>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
          <FaCommentDots className="mr-1" /> 6
        </span>
      </div>
    </div>
  </div>
</div>

<div className="p-4 md:w-1/3">
  <div className="h-full bg-[#1E3E62] border-2 border-[#FFB200] rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-500">
    <Image
      className="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg transition-transform duration-500 ease-in-out hover:scale-110"
      src={number_guessing} 
      alt="Number Guessing Game"
    />
    <div className="p-6">
    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2 flex items-center">
        <FaGamepad className="mr-1 text-indigo-400" /> Game
      </h2>
      <div className="flex items-center mb-1">
        <FaQuestionCircle className="mr-2 text-[#FFB200] text-2xl" />
        <h1 className="title-font text-2xl font-bold text-[#FFB200]">Number Guessing Game</h1>
      </div>
     
      <p className="leading-relaxed mb-3">
      a number guessing game powered by TypeScript, Node.js, and Inquirer! This fun and engaging ...      </p>
      <div className="flex items-center justify-center">
        <Link
          href="/number-guessing"
          className="bg-[#FFB200] text-white px-3 py-2 rounded-full shadow-lg inline-flex items-center text-lg hover:bg-[#c48900] transition-colors duration-300"
        >
          Read More
          <FaArrowRight className="ml-2 transition-transform duration-300 hover:translate-x-1" />
        </Link>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
          <FaEye className="mr-1" /> 1.2K
        </span>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
          <FaCommentDots className="mr-1" /> 6
        </span>
      </div>
    </div>
  </div>
</div>
<div className="p-4 md:w-1/3">
  <div className="h-full bg-[#1E3E62] border-2 border-[#FFB200] rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-500">
    <Image
      className="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg transition-transform duration-500 ease-in-out hover:scale-110"
      src={atm} 
      alt="ATM Machine"
    />
    <div className="p-6">
    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2 flex items-center">
        <FaMoneyBillWave className="mr-1 text-indigo-400" /> Banking
      </h2>
      <div className="flex items-center mb-1">
        <FaMoneyBillWave className="mr-2 text-[#FFB200] text-2xl" /> 
        <h1 className="title-font text-2xl font-bold text-[#FFB200]">ATM Machine</h1>
      </div>
     
      <p className="leading-relaxed mb-3">
      ATM machine simulator powered by TypeScript, Node.js, and Inquirer! This interactive terminal application ...      </p>
      <div className="flex items-center justify-center">
        <Link
          href="/atm"
          className="bg-[#FFB200] text-white px-3 py-2 rounded-full shadow-lg inline-flex items-center text-lg hover:bg-[#c48900] transition-colors duration-300"
        >
          Read More
          <FaArrowRight className="ml-2 transition-transform duration-300 hover:translate-x-1" />
        </Link>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
          <FaEye className="mr-1" /> 1.2K
        </span>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
          <FaCommentDots className="mr-1" /> 6
        </span>
      </div>
    </div>
  </div>
</div>

<div className="p-4 md:w-1/3">
  <div className="h-full bg-[#1E3E62] border-2 border-[#FFB200] rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-500">
    <Image
      className="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg transition-transform duration-500 ease-in-out hover:scale-110"
      src={todo} 
      alt="Todo List"
    />
    <div className="p-6">
    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2 flex items-center">
        <FaList className="mr-1 text-indigo-400" /> Productivity
      </h2>
      <div className="flex items-center mb-1">
        <FaList className="mr-2 text-[#FFB200] text-2xl" /> 
        <h1 className="title-font text-2xl font-bold text-[#FFB200]">Todo List</h1>
      </div>
     
      <p className="leading-relaxed mb-3 text-gray-300">
      a todo list application powered by TypeScript, Node.js, and Inquirer! This interactive terminal-based ...      </p>
      <div className="flex items-center justify-center">
        <Link
          href="/todo"
          className="bg-[#FFB200] text-white px-3 py-2 rounded-full shadow-lg inline-flex items-center text-lg hover:bg-[#c48900] transition-colors duration-300"
        >
          Read More
          <FaArrowRight className="ml-2 transition-transform duration-300 hover:translate-x-1" />
        </Link>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
          <FaEye className="mr-1" /> 1.2K
        </span>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
          <FaCommentDots className="mr-1" /> 6
        </span>
      </div>
    </div>
  </div>
</div>

<div className="p-4 md:w-1/3">
  <div className="h-full bg-[#1E3E62] border-2 border-[#FFB200] rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-500">
    <Image
      className="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg transition-transform duration-500 ease-in-out hover:scale-110"
      src={currency_converter} 
      alt="Currency Converter"
    />
    <div className="p-6">
    <h2 className="tracking-widest text-xs title-font font-medium flex items-center text-gray-400 mb-2">
        <FaMoneyBillWave className="mr-1 text-indigo-400" /> Finance
      </h2>
      <div className="flex items-center mb-1">
        <FaMoneyBillWave className="mr-2 text-[#FFB200] text-2xl" /> 
        <h1 className="title-font text-2xl font-bold text-[#FFB200]">Currency Converter</h1>
      </div>
      
      <p className="leading-relaxed mb-3 text-gray-300">
      a currency converter powered by TypeScript, Node.js, and Inquirer! This interactive command-line ...       </p>
      <div className="flex items-center justify-center">
        <Link
          href="/currency-convertor"
          className="bg-[#FFB200] text-white px-3 py-2 rounded-full shadow-lg inline-flex items-center text-lg hover:bg-[#c48900] transition-colors duration-300"
        >
          Read More
          <FaArrowRight className="ml-2 transition-transform duration-300 hover:translate-x-1" />
        </Link>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
          <FaEye className="mr-1" /> 1.2K
        </span>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
          <FaCommentDots className="mr-1" /> 6
        </span>
      </div>
    </div>
  </div>
</div>


<div className="p-4 md:w-1/3">
  <div className="h-full bg-[#1E3E62] border-2 border-[#FFB200] rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-500">
    <Image
      className="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg transition-transform duration-500 ease-in-out hover:scale-110"
      src={word_counter} 
      alt="Word Counter"
    />
    <div className="p-6">
    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2 flex items-center">
        <FaFileAlt className="mr-1 text-indigo-400" /> Writing Tool
      </h2>
      <div className="flex items-center mb-1">
        <FaFileAlt className="mr-2 text-[#FFB200] text-2xl" />
        <h1 className="title-font text-2xl font-bold text-[#FFB200]">Word Counter</h1>
      </div>
      
      <p className="leading-relaxed mb-3 text-gray-300">
      a word counter powered by TypeScript, Node.js, and Inquirer! This interactive command-line ...      </p>
      <div className="flex items-center justify-center">
        <Link
          href="/word-counter"
          className="bg-[#FFB200] text-white px-4 py-2 rounded-full shadow-lg inline-flex items-center text-lg hover:bg-[#c48900] transition-colors duration-300"
        >
          Read More
          <FaArrowRight className="ml-2 transition-transform duration-300 hover:translate-x-1" />
        </Link>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
          <FaEye className="mr-1" /> 1.2K
        </span>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
          <FaCommentDots className="mr-1" /> 6
        </span>
      </div>
    </div>
  </div>
</div>


<div className="p-4 md:w-1/3">
  <div className="h-full bg-[#1E3E62] border-2 border-[#FFB200] rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-500">
    <Image
      className="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg transition-transform duration-500 ease-in-out hover:scale-110"
      src={student_managment} 
      alt="Student Management System"
    />
    <div className="p-6">
    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2 flex items-center">
        <FaUserGraduate className="mr-1 text-indigo-400" /> Management Tool
      </h2>
      <div className="flex items-center mb-1">
        <FaUserGraduate className="mr-2 text-[#FFB200] text-2xl" />
        <h1 className="title-font text-2xl font-bold text-[#FFB200]">Student Management System</h1>
      </div>
      
      <p className="leading-relaxed mb-3 text-gray-300">
      a student management system powered by TypeScript, Node.js, Chalk, and Inquirer! This interactive command-line ...      </p>
      <div className="flex items-center justify-center">
        <Link
          href="/student-managment"
          className="bg-[#FFB200] text-white px-3 py-2 rounded-full shadow-lg inline-flex items-center text-lg hover:bg-[#c48900] transition-colors duration-300"
        >
          Read More
          <FaArrowRight className="ml-2 transition-transform duration-300 hover:translate-x-1" />
        </Link>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
          <FaEye className="mr-1" /> 1.2K
        </span>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
          <FaCommentDots className="mr-1" /> 6
        </span>
      </div>
    </div>
  </div>
</div>


<div className="p-4 md:w-1/3">
  <div className="h-full bg-[#1E3E62] border-2 border-[#FFB200] rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-500">
    <Image
      className="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg transition-transform duration-500 ease-in-out hover:scale-110"
      src={adventure_game} 
      alt="Adventure Game"
    />
    <div className="p-6">
    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2 flex items-center">
        <FaGamepad className="mr-1 text-indigo-400" /> Gaming Adventure
      </h2>
      <div className="flex items-center mb-1">
        <FaGamepad className="mr-2 text-[#FFB200] text-2xl"/> 
        <h1 className="title-font text-2xl font-bold text-[#FFB200]">Adventure Game</h1>
      </div>
      
      <p className="leading-relaxed mb-3 text-gray-300">
      an adventure game powered by TypeScript, Node.js, Chalk, and Inquirer! This interactive command-line ...      </p>
      <div className="flex items-center justify-center">
        <Link
          href="/adventure-game"
          className="bg-[#FFB200] text-white px-3 py-2 rounded-full shadow-lg inline-flex items-center text-lg hover:bg-[#c48900] transition-colors duration-300"
        >
          Read More
          <FaArrowRight className="ml-2 transition-transform duration-300 hover:translate-x-1" />
        </Link>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
          <FaEye className="mr-1" /> 1.2K
        </span>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
          <FaCommentDots className="mr-1" /> 6
        </span>
      </div>
    </div>
  </div>
</div>


<div className="p-4 md:w-1/3">
  <div className="h-full bg-[#1E3E62] border-2 border-[#FFB200] rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-500">
    <Image
      className="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg transition-transform duration-500 ease-in-out hover:scale-110"
      src={quiz} 
      alt="Quiz App"
    />
    <div className="p-6">
    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2 items-center flex">
        <FaClipboardList className="mr-1 text-indigo-400" /> Quiz & Trivia
      </h2>
      <div className="flex items-center mb-1">
        <FaClipboardList className="mr-2 text-[#FFB200] text-2xl" /> 
        <h1 className="title-font text-2xl font-bold text-[#FFB200]">Quiz App</h1>
      </div>
     
      <p className="leading-relaxed mb-3 text-gray-300">
      a programming languages quiz app powered by TypeScript, Node.js, Chalk, and Inquirer! This interactive ...      </p>
      <div className="flex items-center justify-center">
        <Link
          href="/quiz"
          className="bg-[#FFB200] text-white px-3 py-2 rounded-full shadow-lg inline-flex items-center text-lg hover:bg-[#c48900] transition-colors duration-300"
        >
          Read More
          <FaArrowRight className="ml-2 transition-transform duration-300 hover:translate-x-1" />
        </Link>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
          <FaEye className="mr-1" /> 1.2K
        </span>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
          <FaCommentDots className="mr-1" /> 6
        </span>
      </div>
    </div>
  </div>
</div>


<div className="p-4 md:w-1/3">
  <div className="h-full bg-[#1E3E62] border-2 border-[#FFB200] rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-500">
    <Image
      className="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg transition-transform duration-500 ease-in-out hover:scale-110"
      src={count_down} 
      alt="Count Down Timer"
    />
    <div className="p-6">
    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2 flex ">
        <FaHourglassHalf className="mr-1 text-indigo-400" /> Timer & Alerts
      </h2>
      <div className="flex items-center mb-1">
        <FaHourglassHalf className="mr-2 text-[#FFB200] text-2xl" />
        <h1 className="title-font text-2xl font-bold text-[#FFB200]">Count Down Timer</h1>
      </div>
      
      <p className="leading-relaxed mb-3 text-gray-300">
      a countdown timer powered by TypeScript, Node.js, Chalk, and Inquirer! This interactive command-line application ...      </p>
      <div className="flex items-center justify-center">
        <Link
          href="/count-down"
          className="bg-[#FFB200] text-white px-3 py-2 rounded-full shadow-lg inline-flex items-center text-lg hover:bg-[#c48900] transition-colors duration-300"
        >
          Read More
          <FaArrowRight className="ml-2 transition-transform duration-300 hover:translate-x-1" />
        </Link>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
          <FaEye className="mr-1" /> 1.2K
        </span>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
          <FaCommentDots className="mr-1" /> 6
        </span>
      </div>
    </div>
  </div>
</div>

    </div>
  </div>
</section>

        </>
    )
}