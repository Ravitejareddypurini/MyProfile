
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

function App() {
  const[homebar,sethomebar]=useState(false);
  // const showhomebar=()=>sethomebar(!homebar)

  return (
    <div>
    <header className='header container'>
      <nav>
        <ul className='header__menu'>
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
            <a className='mobile-nav__link' onClick={()=>sethomebar(!homebar)} on href="#about">About</a>
          </li>
          <li>
            <a className='mobile-nav__link' onClick={()=>sethomebar(!homebar)} href="#projects">Projects</a>
          </li>
          <li>
            <a className='mobile-nav__link' onClick={()=>sethomebar(!homebar)} href="#contact">Contact</a>
          </li>
          <li className='mobile-nav__link-line'></li>
          <li><button onClick={()=>sethomebar(!homebar)} className='header__resume btn' href="">Resume</button></li>
        </ul>
      </nav>
    </div>
    <main>
      <section class="profile container">
        
        <img className="profile__img" src={ravi} alt="profile"></img>
        <h2 className='profile__subtitle'>Hi I am Ravi Teja Reddy 👋</h2>
        <h2 className='profile__title'>Full Stack<br></br> Web Developer</h2>
        <p className='profile__description'>A passionate <strong>Frontend / Backend Fullstack web developer</strong> 
          enthusiast specialized in bulding stunning pixel-perfect interactive websites
        </p>
        <a className='btn profile__btn'href='reachout'>Reach Out</a>
      </section>
      
      <section id="about" className='about container '>
        <div className='about__content'>
        <hr className='about__hr'></hr>
          {/* <h2 className='about__title'>About</h2> */}
          <p className='about__desctiption'>A passionate <strong>Frontend / Backend Fullstack web developer</strong> 
          enthusiast specialized in bulding stunning pixel-perfect interactive websites
          A passionate <strong>Frontend / Backend Fullstack web developer</strong> 
          enthusiast specialized in bulding stunning pixel-perfect interactive websites</p>
        
        <h3 className='about__subtitle'>Technologies</h3>
        
        
        <div className='about__ul-container1'>
          <div className='about__items'>
             <h1 className='profile__description'>Frontend</h1>
             {/* <hr className='about__hr'></hr> */}
           <ul className='about__ul'>
             <li>Html</li>
             <li>CSS</li>
             <li> Java Script</li>
             <li> Type Script</li>
             <li> Reactt</li>
             <li> Material-UI</li>
             <li> Sass</li>
             <li> Tailwind</li>
            <li>Redux</li>
          
            </ul>
          </div>
        <div className='about__items'>
          <h1 className='profile__description'>Backend</h1>
          {/* <hr className='about__hr'></hr> */}
        <ul  className='about__ul'>
        <li > Spring</li>
        <li> Spring Microservices</li>
        <li> Spring Security</li>
        <li> J2EE</li>
          <li >My Sql</li>
          <li >MongoDB</li>
        </ul>
        </div>
        
        </div>
       
      </div>
      </section> 
      {/* <section className='exp container '>
        <div className='exp__content'>
        <hr className='exp__hr'></hr>
          <h2 className='exp__title'>Experience</h2>
          <p className='exp__desctiption'>A passionate <strong>Frontend / Backend Fullstack web developer</strong> 
          enthusiast specialized in bulding stunning pixel-perfect interactive websites</p>

        </div>
      </section> */}
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
        <h2 className='experience-sub-title project-title'>Project one</h2>
        <div class="btn-container">
          <button class="btn btn-color-2 project-btn">Github</button>
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
          <button class="btn btn-color-2 project-btn">Github</button>
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
          <button class="btn btn-color-2 project-btn">Github</button>
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
        {/* <ul className='contact-items'>
          <li><a className="contact_info" href="example"><MdEmail className='icons'/> ravitejareddy@outlook.in</a></li>
          <li><a className="contact_info" href="example"><FaLinkedin/> ravitejareddy@outlook.in</a></li>
        </ul> */}
        <a className="contact_info" href="example"><MdEmail className='icons'/> ravitejareddy@outlook.in</a>
        </div>
        <div className='contact-container'>
        <a className="contact_info" href="example"><FaLinkedin className='icons1'/> ravitejareddy@outlook.in</a>
        </div>
        </div>
      </section>
    </main>
    <footer className='footer container'>
      <h3 className='footer_title'>~Ravi Teja Reddy~</h3>
    </footer>
    </div>
  );
}

export default App;
