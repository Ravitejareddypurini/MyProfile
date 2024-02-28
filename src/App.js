
import './App.css';
import './styles/utils.css'
import './styles/components/header.css'
import './styles/components/profile.css'
import ravi from'./images/ravi.jpg'
import todo from './images/todo.webp'
import './styles/components/about.css'
import './styles/components/project.css'
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import './styles/components/footer.css';
import './styles/components/mobile.css';
import  { React,useState } from 'react';
import task from './images/task.png';
import Technologies from './technologies';

function App() {
  const[homebar,sethomebar]=useState(false);

  return (
    <div>
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
          <li><button className='header__resume btn' href="">Resume</button></li>
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
          
          <li><button onClick={()=>sethomebar(!homebar)} className='header__resume btn' href="">Resume</button></li>
        </ul>
      </nav>
    </div>
    <main>
      <section id="home" class="profile container">
        
        <img className="profile__img" src={ravi} alt="profile"></img>
        <h2 className='subsub'><span className='subtitle1'>Hello, I'm </span><span className='subtitle2'>Ravi Teja Reddy </span></h2>
        <h2 className='profile__title'>Full Stack Developer</h2>
        <p className='profile__description'>A passionate <strong>Frontend / Backend Fullstack web developer</strong> 
          enthusiast specialized in building stunning pixel-perfect interactive websites.
        </p>
        <a className='btn profile__btn'href='#contact'>Contact</a>
      </section>
      
      <section id="about" className='about container '>
        <div className='about__content'>

          <h2 className='about__title'>About</h2>
          <p className='about__desctiption'>
          Hello there! I'm Ravi Teja, a <strong>Front-End/Back-End Fullstack web developer</strong> by passion and profession.
           I wake up in the morning, grab a cup of coffee, open up my laptop and build things that live on the web all day, everyday.<br></br><br></br>
           I started my coding journey from Youtube out of curiosity which later on became an addiction you can say,
            So I started my further studies in this field and joined ------ <strong>University of East London</strong> and turned this so called addiction into my career.<br></br><br></br>
           I personally enjoy playing with Front-end technologies like<strong> Html, CSS, JavaScript & React.Js</strong>, and Back End technologies like <strong>Spring, Spring Microservices, Spring Security
           </strong>
            </p>
        
        <h3 className='about__subtitle'>Technologies</h3>
        
        <Technologies/></div>

      </section> 
      <section id="projects" className='projects container'>
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
          <button class="btn-color-2 project-btn">Github</button>
          <button class="btn-color-2 project-btn">Demo</button>
        </div>
       </div>
       
       <div className='experience-details-container'>
        <div className='article-container'>
          <img 
          src={todo}
          alt="project1"
          className='project-img'/>
        </div>
        <h2 className='experience-sub-title project-title'>Project one</h2>
        <div class="btn-container">
          <button class="btn-color-2 project-btn">Github</button>
          <button class=" btn-color-2 project-btn">Demo</button>
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
