import React from 'react'
import './myprojects.css'


const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
            </div>
            <h3>Microservice</h3>
            <small className='text-light'>HTML | CSS | JS | php | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/ifs21052-Emely-itdel/Frontend-Microservice" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
            </div>
            <h3>Expert-System-for-Child-Virus-Diagnosis</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/ichastevani/Expert-System-for-Child-Virus-Diagnosis" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
            </div>
            <h3>Project SPMB</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/gabrielhtg/project-spmb-pabwe" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="http://spmb.del.ac.id" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Myprojects