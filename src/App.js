
import './App.css';
import './styles/utils.css'
import './styles/components/header.css'
import './styles/components/profile.css'
import ravi from'./images/ravi.jpg'
import todo from './images/todo.webp'
import chat from './images/chat.avif'
import './styles/components/about.css'
import './styles/components/project.css'
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import './styles/components/footer.css';
import './styles/components/mobile.css';
import  { React,useState } from 'react';
import task from './images/task.png';
import Technologies from './technologies';
import resume from './styles/components/Ravi_Resume.pdf'

function App() {
  const[homebar,sethomebar]=useState(false);

  return (
    <div>
      <main>
        <section id="home">
        
    <header className='header container'>
      <nav>
        <ul className='header__menu'>
        <li>
            <a  className='header__link' href='#home'>Home</a>
          </li>
          <li>
            <a  className='header__link' href='#about'>About</a>
          </li>
          <li><a  className='header__link' href='#projects'>Projects</a></li>
          <li><a  className='header__link' href="#contact">Contact</a></li>
          <li className='header__line'></li>
          <li><a href={resume}
        download="Resume"
        target="_blank"
        rel="noreferrer"><button className='header__resume btn' href="">Resume</button></a></li>
        </ul>
        <button className='header__bars' onClick={()=>sethomebar(!homebar)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
        </button>
      </nav>
    </header>
    <div className={homebar?'mobile-nav':'mobile-nav_none'}>
      <nav>
        <ul className='mobile-nav__menu'>
        <li>
            <a className='mobile-nav__link' onClick={()=>sethomebar(!homebar)} on href="#home">Home</a>
          </li>
          <li>
            <a className='mobile-nav__link' onClick={()=>sethomebar(!homebar)} on href="#about">About</a>
          </li>
          <li>
            <a className='mobile-nav__link' onClick={()=>sethomebar(!homebar)} href="#projects">Projects</a>
          </li>
          <li>
            <a className='mobile-nav__link' onClick={()=>sethomebar(!homebar)} href="#contact">Contact</a>
          </li>
          
          <li><a href={resume}
        download="Resume"
        target="_blank"
        rel="noreferrer"><button onClick={()=>sethomebar(!homebar)} className='header__resume btn' href="">My Resume</button></a></li>
        </ul>
      </nav>
      
    </div>
    </section>
      <section  class="profile container">
        
        <img className="profile__img" src={ravi} alt="profile"></img>
        <h2 className='subsub'><span className='subtitle1'>Hello, I'm</span><span className='subtitle2'>Ravi Teja Reddy </span></h2>
        <h2 className='profile__title'>MERN Stack Developer</h2>
        <p className='profile__description'>A passionate <strong>Frontend / Backend Fullstack web developer</strong> 
          enthusiast specialized in building stunning pixel-perfect interactive websites.
        </p>
        <a className='btn profile__btn'href='#contact'>Contact</a>
      </section>
      
      <section id="about" className='about container '>
        <div className='about__content'>

          <h2 className='about__title'>About</h2>
    <p className='about__desctiption'>
  Hello there! I'm Ravi Teja, a <strong>Fullstack MERN Developer</strong> passionate about building modern web applications powered by <strong>Generative AI</strong>.<br /><br />

  Every day, I start with a cup of coffee and dive into code, turning ideas into interactive and intelligent web experiences. I thrive on solving complex problems, creating scalable applications, and integrating AI to make apps smarter and more user-friendly.<br /><br />

  My coding journey began with curiosity on YouTube, which quickly turned into an obsession. To formalize my skills, I pursued studies at the <strong>University of East London</strong> and transformed this passion into a full-fledged career.<br /><br />

  On the frontend, I enjoy crafting intuitive interfaces using <strong>React.js, HTML, CSS, and JavaScript</strong>. On the backend, I build robust APIs and scalable architectures with <strong>Node.js, Express.js, and MongoDB</strong>. I continuously explore emerging technologies, including Generative AI, to create smarter and more innovative applications.<br /><br />

  Beyond coding, I enjoy collaborating with other developers, contributing to open-source projects, and mentoring aspiring programmers. My ultimate goal is to create applications that are not only functional but also provide real value, delight users, and push the boundaries of modern web development.<br /><br />

  I am also passionate about learning new frameworks and tools, experimenting with AI-driven solutions, and continuously improving my coding practices. I believe that technology should simplify lives, and I strive to build applications that make a tangible impact. I take pride in writing clean, maintainable code and in turning creative ideas into fully functional products. Every project I work on is an opportunity to learn, grow, and push the limits of what’s possible on the web.
</p>
        
        <h3 className='about__subtitle tech'>Technologies</h3>
        
        <Technologies/></div>

      </section> 
      <section id="projects" className='projects container tech'>
      <hr className='exp__hr'></hr>
        <p className='section_text_p1'>Browse My Recent</p>
       <h1 className='title'>Projects</h1>
       <div className='exp'>
       <div className='experience-details-container'>
        <div className='article-container'>
          <img 
          src={todo}
          alt="project1"
          className='project-img'/>
        </div>
        <h2 className='experience-sub-title project-title'>TODO List</h2>
        <div class="btn-container">
          <a href="https://github.com/Ravitejareddypurini/todo/tree/master/todolist" class="btn-color-2 project-btn">Github</a>
          {/* <button class="btn-color-2 project-btn">Demo</button> */}
        </div>
       </div>
       
       <div className='experience-details-container'>
        <div className='article-container'>
          <img 
          src={chat}
          alt="project1"
          className='project-img'/>
        </div>
        <h2 className='experience-sub-title project-title'>Chat App</h2>
        <div class="btn-container">
          <a href="https://github.com/Ravitejareddypurini/Chat" class="btn-color-2 project-btn">Github</a>
          {/* <button class=" btn-color-2 project-btn">Demo</button> */}
        </div>
       </div>

       
       </div>
        </section> 
      <section id='contact' className='contact container'>
      <hr className='exp__hr'></hr>
        <p className='section_text_p1'>Get in Touch</p>
        <h1 class="title">Contact Me</h1>
        <div className='contact-upper-container'>
        <div className='contact-container'>
        <a className="contact_info" href="https://outlook.live.com/mail/"><MdEmail className='icons'/> ravitejareddy@outlook.in</a>
        </div>
        <div className='contact-container'>
        <a className="contact_info" href="https://www.linkedin.com/in/ravitejareddy34/"><FaLinkedin className='icons1'/>linkedin.com/in/ravitejareddy34</a>
        </div>
        </div>
        
      </section>
      <section  className='container'>
     
    </section>
    </main>
    <footer className='footer container'>
      <h3 className='footer_title'></h3>
    </footer>
    </div>
  );
}

export default App;
