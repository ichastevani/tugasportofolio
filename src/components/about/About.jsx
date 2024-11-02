import React from 'react'
import './about.css'
import myImage from '../../assets/fotopp.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>Informatics Undergraduate<br /><i>Del Institute Of Technology</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Current GPA</h5>
                  <small>3.50/4.00</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>Software Qulity</li>
                      <li>Quality Assurance
                      </li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
            I'm currently an Informatics student and a passionate Software Quality Assurance (QA) specialist.
            I focus on ensuring software reliability, functionality, and performance to deliver high-quality digital solutions.
            Here, you'll find insights into my projects, tools I work with, and my approach to optimizing software for an exceptional user experience.
            Feel free to look around, and don’t hesitate to reach out if you’re interested in discussing projects or have any questions.
            Let’s connect!
                    
            </p>

          </div>
      </div>
    </section>
  )
}

export default About