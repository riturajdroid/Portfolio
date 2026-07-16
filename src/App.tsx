import { useState } from 'react'
import './App.css'
import BgCircleBlue from './components/bg-circles/BgCircleBlue'
import BgCirclePurple from './components/bg-circles/BgCirclePurple'
import BlueSmallText from './components/BlueSmallText'
import DescriptionText from './components/DescriptionText'
import HeadingText from './components/HeadingText'
import HeroText from './components/hero-section/HeroText'
import Navbar from './components/navbar/Navbar'
import HorizontalCard from './components/projects-section/HorizontalCard'
import HoriCard from './components/beyond-code/HoriCard'
import Tile from './components/skill-section/Tile'
import WhiteText from './components/WhiteText'
import ContactTile from './components/contact-section/ContactTile'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsEnvelopeFill } from 'react-icons/bs';

function App() {

  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <>
      {/* background circles */}
      <BgCircleBlue />
      <BgCirclePurple />

      {/* Navbar */}
      <Navbar />

      {/* Main content — responsive horizontal padding */}
      <div className='flex flex-col pt-[130px] pb-[100px] px-4 sm:px-8 md:px-16 xl:px-[170px] z-5 relative'>

        {/* ── Hero section ── */}
        <div id='home' className='scroll-mt-[100px]'>
          <BlueSmallText e="HELLO_WORLD" />

          <HeroText e="RITURAJ" />
          <HeroText e="SHARMA" />

          {/* Role badge — full width on mobile, capped at 430px on larger screens */}
          <div className="w-full max-w-[430px] p-[15px] my-[10px] rounded-[28px] border-[3px] brightness-125 shadow-[0_0_30px_rgba(139,92,246,0.6)] border-violet-700 transition-transform duration-300 ease-in-out hover:scale-105">
            <WhiteText e="AI & Data Engineering | Software Engineer" />
          </div>

          {/* Bio text — full width on mobile, capped on desktop */}
          <div className='w-full max-w-[800px]'>
            <DescriptionText e="Results-driven Software Engineer with expertise in full-stack web development and DSA. Delivering highly interactive frontends with React, TypeScript, and Tailwind CSS. Backed by a rigorous engineering foundation in AI and Data Engineering from IIIT Kota, I excel at solving complex logic problems and building maintainable, high-performance applications." />
          </div>

          {/* CTA button */}
          <div
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full max-w-[170px] p-[15px] my-[10px] rounded-[28px] border-[3px] brightness-125 shadow-[0_0_30px_rgba(139,92,246,0.6)] border-[#2563EB] transition-transform duration-300 ease-in-out cursor-pointer hover:scale-105">
            <WhiteText e="View My Work" />
          </div>
        </div>

        {/* ── Skills section ── */}
        <div id='skills' className='scroll-mt-[100px]'>
          <div className='flex flex-col items-center mt-12 sm:mt-16 md:mt-24 lg:mt-[100px]'>
            <BlueSmallText e="//Skills" />
            <HeadingText e="My Arsenal" />
            <DescriptionText e="A Toolkit Of Technologies And Concepts I Work With" />
          </div>
          <div className='flex flex-wrap justify-center gap-3 mt-6'>
            <Tile
              num="01"
              title="Core Languages"
              arr={['C++', 'C', 'Python', "Javascript", "Typescript", "Dart"]}
            />
            <Tile
              num="02"
              title="Front End & UI"
              arr={['React', 'Tailwind CSS', 'HTML', "CSS", "Flutter", ""]}
            />
            <Tile
              num="03"
              title="Systems & Data"
              arr={['Data Structures and Algorithms', '', '', '', '', '']}
            />
            <Tile
              num="04"
              title="Tools and Others"
              arr={['Git', 'Github', 'VS-Code', '', '', '']}
            />
          </div>
        </div>

        {/* ── Projects ── */}
        <div id='projects' className='scroll-mt-[100px]'>
          <div className='flex flex-col items-center mt-12 sm:mt-16 md:mt-24 lg:mt-[100px]'>
            <BlueSmallText e="//Projects" />
            <HeadingText e="Featured Projects" />
            <DescriptionText e="A Collection Of Things I Have Built With Passion And Precision" />
          </div>
          <div>
            <HorizontalCard
              LR='L'
              screenshotPath='/Rhythm&Routine.png'
              title='Rhythm & Routine'
              description='A vanilla JavaScript step sequencer utilizing Web Audio API lookahead scheduling for precise audio timing, paired with a decoupled requestAnimationFrame loop for dynamic visual rendering.'
              tags={['HTML', 'CSS', 'Vanilla JS', 'Web Audio API']}
              githubLink='https://github.com/riturajdroid/Rhythm-And-Routine'
              demoLink='https://riturajdroid.github.io/Rhythm-And-Routine/' />

            <HorizontalCard
              LR='R'
              screenshotPath='/WeatherApp.png'
              title='Weather App'
              description='A simple Flutter app that shows real-time weather data for any city using the OpenWeatherMap API. This is not very fancy UI weather app , I made this just as my first project in flutter.'
              tags={['Flutter', 'Dart', 'Weather API']}
              githubLink='https://github.com/riturajdroid/Weather_App' />

            <HorizontalCard
              LR='L'
              screenshotPath='/NetflixClone.png'
              title='Netflix Clone'
              description="A pixel-inspired recreation of Netflix's landing / sign-up page , built from scratch with plain HTML and CSS. This is a learning project focused on Mobile production — no JavaScript yet, no backend, and not affiliated with or endorsed by Netflix in any way."
              tags={['HTML', 'CSS']}
              githubLink='https://github.com/riturajdroid/Weather_App'
              demoLink='https://netflix-clone-frontend-practice.vercel.app/' />

            {showAllProjects && (
              <HorizontalCard
                LR='R'
                screenshotPath='/StudentGradeManagement.png'
                title='Student Grade Management System'
                description="A console-based application built to manage student records, grades, and academic performance. This project marks a specific milestone in my transition from procedural C programming to Object-Oriented C++."
                tags={['C++', 'OOPs']}
                githubLink='https://github.com/riturajdroid/Student_Grade_Management'
              />
            )}

            <div className="flex justify-center mt-10 mb-20">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="px-8 py-3 rounded-full border-2 border-[#6763f0] hover:bg-[#6763f0]/20 transition-all duration-300"
              >
                {showAllProjects ? <WhiteText e='View Less' /> : <WhiteText e='View More Projects' />}
              </button>
            </div>
          </div>
        </div>

        {/* ── Beyond Code Section ── */}
        <div id='beyond' className='scroll-mt-[100px]'>
          <div className='flex flex-col items-center mt-12 sm:mt-16 md:mt-24 lg:mt-[100px]'>
            <BlueSmallText e="//Beyond_Code" />
            <HeadingText e="Collaborative Co-Curricular Projects" />
            <DescriptionText e="Exploring Teamwork And Creativity Beyond The Terminal" />
          </div>
          <div>
            <HoriCard
              LR='L'
              screenshotPath='/DID.png'
              title='Death In Disguise I & II'
              description='Produced and helped mixing the entire original score, foley, and dialogue dubbing for this short film by Neon Cinematics, working with the Saadhgi Band at IIIT Kota.'
              tags={['Logic Pro', 'Foley & Sound Design', 'Mixing/Mastering']}
              demoLink='https://youtu.be/RU5KtvEqfZo?si=7Xkyv1k1qhdZrJch'
              linkText='Watch Film' />

            <HoriCard
              LR='R'
              screenshotPath='/LGTS.png'
              title="Let's Go To Spain"
              description="A Flamenco-inspired instrumental track produced in collaboration with the Saadhgi band. Blends intricate acoustic performances with modern mixing techniques."
              tags={['Logic Pro', 'Acoustic Guitar', 'Mixing/Mastering']}
              demoLink='https://push.fm/fl/AYfMdx7Z'
              linkText='Listen to the track' />

            <HoriCard
              LR='L'
              screenshotPath='/WS.jpeg'
              title="Instructor — Music Theory Workshop"
              description="Organized comprehensive live music workshop in collaboration with the Saadhgi band and Incognito club. Taught core music theory and practical performance techniques across guitar, keyboard, and vocals."
              tags={['Leadership', 'Live Instruction', 'Music Theory']}
            />
          </div>
        </div>

        {/* ── Contact Section ── */}
        <div id='contact' className='scroll-mt-[100px]'>
          <div className='flex flex-col items-start mt-12 sm:mt-16 md:mt-24 lg:mt-[100px]'>
            <BlueSmallText e="//Contact" />
            <HeadingText e="Let's Connect" />
            {/* Description capped at 500px, full width on mobile */}
            <div className='w-full max-w-[500px]'>
              <DescriptionText e="I am always open to discussing new projects, creative ideas or opportunities" />
            </div>
          </div>
          {/* Contact tiles stacked with gap for easy touch targets */}
          <div className='flex flex-col gap-4 mt-4'>
            <ContactTile logo={<FaLinkedin />} link='https://www.linkedin.com/in/rituraj-sharma-4b514a384/' text='LinkedIn' />
            <ContactTile logo={<FaGithub />} link='https://github.com/riturajdroid' text='GitHub' />
            <ContactTile
              logo={<BsEnvelopeFill />}
              link="mailto:riturajsharma2207@gmail.com"
              text='riturajsharma2207@gmail.com'
            />
          </div>
        </div>

      </div>

      {/* ── Footer ── */}
      <footer className='bg-[#00000081] min-h-[130px] w-full relative z-20 border-[2px] border-black flex flex-col items-center justify-center gap-4 py-6 px-4 text-center'>
        <div className='flex justify-center'>
          <DescriptionText e="Designed and Developed by Rituraj Sharma - 2026" />
        </div>
        <div className='flex justify-center gap-[30px]'>
          <a
            href="https://github.com/riturajdroid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#6a99ff] transition-colors duration-300"
          >
            <FaGithub size={32} />
          </a>

          <a
            href="https://www.linkedin.com/in/rituraj-sharma-4b514a384/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#6a99ff] transition-colors duration-300"
          >
            <FaLinkedin size={32} />
          </a>
        </div>
      </footer>

    </>
  )
}

export default App