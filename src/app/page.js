import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return <>
<header className='flex items-center container justify-around flex-wrap'>
      <div className="divImages">
      <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-500 to-blue-500 text-gradient-animation">Yusuf</span>
      </div>
      <div className='flex w-[500px] justify-between'>
        <p>Home</p>
        <p>About</p>
        <p>Tech Stack</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
      <div className='flex w-[100px] justify-between'>
        <Link target='_blank' href="https://github.com/Nazarow-fullstack"><Image width={20} height={20} alt='' src="/Vector.svg"/></Link>
        <Link target='_blank' href="https://t.me/catinglas"><Image width={20} height={20} alt='' src="/ant-design_twitter-circle-filled (1).svg"/></Link>
        <Link target='_blank' href="https://www.linkedin.com/in/yusuf-nazarov-7b2872341/"><Image width={20} height={20} alt='' src="/entypo-social_linkedin-with-circle.svg"/></Link>
      </div>
    </header>

      <section className="max-w-[1600px] mx-auto mt-[150px] flex flex-wrap justify-between items-center">
          <div className="">
            <h1 className="text-[58px] font-bold text-[#42446E]">Hi 👋, <br/> My name is <br/> <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-500 to-blue-500 text-gradient-animation">Yusuf</span> <br/> I build things for web</h1>
          </div>
          <Image src="/avatar.png" width={1000} height={0} alt="" className="rounded-[50%] max-w-[400px]"  />
      </section>

      <section className=" mx-auto bg-green   bg-red mt-[200px] flex-wrap flex justify-around  gap-[20px] ">
          <div>
          <div className=" bg-red w-[70%]">
              <h1 className="text-[#42446E] text-[42px] font-bold">About Me</h1>
              <p className="text-[18px] font-medium mt-[10px] text-[#666666]">The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. <br/> It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</p>
          </div>
          <div className="  bg-red w-[70%]">
              <h1 className="text-[#42446E] text-[42px] font-bold">Education</h1>
              <div className="flex items-center mt-[15px] gap-[40px]">
                <p className="text-[18px] font-medium text-[#666666]">Bachelor in Electronics & Communication</p>
                <button className="text-[12px] text-[#018C0F] bg-[#D7FFE0] px-[10px] py-[4px] rounded-[30px]">Full Time</button>
              </div>
          </div>
          </div>
          <div className="md:ml-[-150px] bg-500 flex flex-col items-end w-[600px] ">
              <h1 className="text-[#42446E] mb-[30px] text-[42px] font-bold">Work Experience</h1>
              <div className="w-[70%] border-b-[2px] py-[20px] border-[#dadada] justify-between flex items-center">
                <p className="text-[23px] text-[#666666]">Junior Web Developer</p>
                <button className="text-[12px] text-[#018C0F] bg-[#D7FFE0] px-[10px] py-[4px] rounded-[30px]">Full Time</button>
              </div>
              <div className="w-[70%] border-b-[2px] py-[20px] border-[#dadada] justify-between flex items-center">
                <p className="text-[23px] text-[#666666]">Web Development Intern</p>
                <button className="text-[12px] text-[#018C0F] bg-[#D7FFE0] px-[10px] py-[4px] rounded-[30px]">Intership</button>
              </div>
              <div className="w-[70%] border-b-[2px] py-[20px] border-[#dadada] justify-between flex items-center">
                <p className="text-[23px] text-[#666666]">SEO / SEM Specialist</p>
                <button className="text-[12px] text-[#018C0F] bg-[#D7FFE0] px-[10px] py-[4px] rounded-[30px]">Intership</button>
              </div>
          </div>
          
      </section>

      <section className=" sm:mt-[250px] max-w-[1600px] flex flex-col items-center mx-auto mt-[130px]">
        <h1 className="text-[#42446E] text-[46px] font-bold">My Tech Stack</h1>
        <p className="mt-[10px] text-[33px] font-medium text-center  text-[#777777]">Technologies I’ve been working with recently</p>
        <div className="w-[100%] justify-between sm:justify-center flex flex-wrap mt-[50px]">
            <Image src="/html.svg" width={500} height={0} className="w-[150px] mt-[70px] mr-[100px]" alt="" />
            <Image src="/css.svg" width={500} height={0} className="w-[150px] mt-[70px] mr-[100px]" alt="" />
            <Image src="/js.svg" width={500} height={0} className="w-[150px] mt-[70px] mr-[100px]" alt="" />
            <Image src="/react.svg" width={500} height={0} className="w-[150px] mt-[70px] mr-[100px]" alt="" />
            <Image src="/tailwind.svg" width={500} height={0} className="w-[150px] mt-[70px] mr-[100px]" alt="" />
            <Image src="/git.svg" width={500} height={0} className="w-[150px] mt-[70px] mr-[100px]" alt="" />
            <Image src="/github.svg" width={500} height={0} className="w-[150px] mt-[70px] mr-[100px]" alt="" />
            <Image src="/next_js.png" width={500} height={0} className="w-[150px] mt-[70px] mr-[100px]" alt="" />
            <Image src="/vscode.svg" width={500} height={0} className="w-[150px] mt-[70px] mr-[100px]" alt="" />
        </div>
      </section>

      <section className="max-w-[1600px]  flex flex-col flex-wrap items-center mx-auto mt-[230px]">
        <h1 className="text-[#42446E] text-[46px] font-bold">Projects</h1>
        <p className="mt-[10px] text-[33px] font-medium text-[#777777]">Things I’ve built so far</p>
        <div className="w-[100%] justify-between sm:justify-center flex  flex-wrap mt-[50px]">
          <div className="w-[30%] sm:w-[80%]  shadow-2xl rounded-[30px] mt-[40px] shadow-[gray]">
            <Image
              src="/img.png"
              alt="Project Thumbnail"
              className="w-[100%] rounded-tr-sm rounded-tl-sm"
              layout="responsive"
              width={600}
              height={400}
            />
            <div className="w-[90%] mx-auto flex flex-col flex-wrap items-center">
              <h1 className="text-[24px] font-bold mt-2">Project Title Goes Here</h1>
              <p className="text-gray-600 text-[22px] mt-[15px]">
                This is a sample project description. Random things are here in the description. This is a sample project using a lorem ipsum generator for dummy content.
              </p>
              <p className="text-[20px] mt-[20px] font-semibold">Tech stack: HTML, JavaScript, SASS, React</p>
              <div className="flex w-[90%] justify-between items-center mt-4">
                <a href="#" className="text-black text-[20px] hover:underline">
                  Live Preview
                </a>
                <a href="#" className="text-black text-[20px] hover:underline">
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="w-[30%] sm:w-[80%] shadow-2xl rounded-[30px] mt-[40px] shadow-[gray]">
            <Image
              src="/img1.png"
              alt="Project Thumbnail"
              className="w-[100%] rounded-tr-sm rounded-tl-sm"
              layout="responsive"
              width={600}
              height={400} 
            />
            <div className="w-[90%] mx-auto flex flex-col items-center">
              <h1 className="text-[24px] font-bold mt-2">Project Title Goes Here</h1>
              <p className="text-gray-600 text-[22px] mt-[15px]">
                This is a sample project description. Random things are here in the description. This is a sample project using a lorem ipsum generator for dummy content.
              </p>
              <p className="text-[20px] mt-[20px] font-semibold">Tech stack: HTML, JavaScript, SASS, React</p>
              <div className="flex w-[90%] justify-between items-center mt-4">
                <a href="#" className="text-black text-[20px] hover:underline">
                  Live Preview
                </a>
                <a href="#" className="text-black text-[20px] hover:underline">
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="w-[30%] sm:w-[80%] shadow-2xl rounded-[30px] mt-[40px] shadow-[gray]">
            <Image
              src="/img2.png"
              alt="Project Thumbnail"
              className="w-[100%] rounded-tr-sm rounded-tl-sm"
              layout="responsive"
              width={600}
              height={400}
            />
            <div className="w-[90%] mx-auto flex flex-col items-center">
              <h1 className="text-[24px] font-bold mt-2">Project Title Goes Here</h1>
              <p className="text-gray-600 text-[22px] mt-[15px]">
                This is a sample project description. Random things are here in the description. This is a sample project using a lorem ipsum generator for dummy content.
              </p>
              <p className="text-[20px] mt-[20px] font-semibold">Tech stack: HTML, JavaScript, SASS, React</p>
              <div className="flex w-[90%] justify-between items-center mt-4">
                <a href="#" className="text-black text-[20px] hover:underline">
                  Live Preview
                </a>
                <a href="#" className="text-black text-[20px] hover:underline">
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="w-[30%] sm:w-[80%] shadow-2xl rounded-[30px] mt-[40px] shadow-[gray]">
            <Image
              src="/img3.png"
              alt="Project Thumbnail"
              className="w-[100%] rounded-tr-sm rounded-tl-sm"
              layout="responsive"
              width={600}
              height={400} 
            />
            <div className="w-[90%] mx-auto flex flex-col items-center">
              <h1 className="text-[24px] font-bold mt-2">Project Title Goes Here</h1>
              <p className="text-gray-600 text-[22px] mt-[15px]">
                This is a sample project description. Random things are here in the description. This is a sample project using a lorem ipsum generator for dummy content.
              </p>
              <p className="text-[20px] mt-[20px] font-semibold">Tech stack: HTML, JavaScript, SASS, React</p>
              <div className="flex w-[90%] justify-between items-center mt-4">
                <a href="#" className="text-black text-[20px] hover:underline">
                  Live Preview
                </a>
                <a href="#" className="text-black text-[20px] hover:underline">
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="w-[30%] sm:w-[80%] shadow-2xl rounded-[30px] mt-[40px] shadow-[gray]">
            <Image
              src="/img4.png"
              alt="Project Thumbnail"
              className="w-[100%] rounded-tr-sm rounded-tl-sm"
              layout="responsive"
              width={600}
              height={400} 
            />
            <div className="w-[90%] mx-auto flex flex-col items-center">
              <h1 className="text-[24px] font-bold mt-2">Project Title Goes Here</h1>
              <p className="text-gray-600 text-[22px] mt-[15px]">
                This is a sample project description. Random things are here in the description. This is a sample project using a lorem ipsum generator for dummy content.
              </p>
              <p className="text-[20px] mt-[20px] font-semibold">Tech stack: HTML, JavaScript, SASS, React</p>
              <div className="flex w-[90%] justify-between items-center mt-4">
                <a href="#" className="text-black text-[20px] hover:underline">
                  Live Preview
                </a>
                <a href="#" className="text-black text-[20px] hover:underline">
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="w-[30%] sm:w-[80%] shadow-2xl rounded-[30px] mt-[40px] shadow-[gray]">
            <Image
              src="/img2.png"
              alt="Project Thumbnail"
              className="w-[100%] rounded-tr-sm rounded-tl-sm"
              layout="responsive"
              width={600}
              height={400} 
            />
            <div className="w-[90%] mx-auto flex flex-col items-center">
              <h1 className="text-[24px] font-bold mt-2">Project Title Goes Here</h1>
              <p className="text-gray-600 text-[22px] mt-[15px]">
                This is a sample project description. Random things are here in the description. This is a sample project using a lorem ipsum generator for dummy content.
              </p>
              <p className="text-[20px] mt-[20px] font-semibold">Tech stack: HTML, JavaScript, SASS, React</p>
              <div className="flex w-[90%] justify-between items-center mt-4">
                <a href="#" className="text-black text-[20px] hover:underline">
                  Live Preview
                </a>
                <a href="#" className="text-black text-[20px] hover:underline">
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className=" flex-wrap mt-[300px] bg-white border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        
        <div className="flex flex-col flex-wrap md:flex-row items-center md:items-start">
          <div className="text-2xl font-bold text-indigo-700 flex items-center">
            <span>{`{007}`}</span>
            <span className="ml-2">pavanmg</span>
          </div>
          <div className="hidden md:block w-px bg-gray-400 h-6 mx-4"></div>
          <div className="text-gray-600 text-sm mt-2 md:mt-0">
            Designed and built by{" "}
            <span className="text-indigo-700 font-medium">Pavan MG</span> with{" "}
            <span className="text-pink-500 font-medium">Love & Coffee</span>
          </div>
        </div>

      </div>
    
        <div className="flex flex-col md:flex-row md:ml-[20px] items-center mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-8">
          
          <div className="text-center md:text-left">
            <p className="text-gray-700 font-medium">+91 12345 09876</p>
            <p className="text-gray-500 text-sm">info@example.com</p>
          </div>

          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/github.svg" alt="GitHub" className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/twitter.svg" alt="Twitter" className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
            </a>
          </div>
        </div>

  
      <div className="w-full bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap  md:justify-between text-sm text-gray-600">
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-indigo-700">Home</a>
            <a href="#about" className="hover:text-indigo-700">About</a>
            <a href="#technologies" className="hover:text-indigo-700">Technologies</a>
            <a href="#projects" className="hover:text-indigo-700">Projects</a>
            <a href="#contact" className="hover:text-indigo-700">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  </>
}
