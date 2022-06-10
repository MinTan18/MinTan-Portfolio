import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/port_1.jpg'
import IMG2 from '../../assets/port_2.jpg'
import IMG3 from '../../assets/port_3.jpg'
import IMG4 from '../../assets/port_4.jpg'
import IMG5 from '../../assets/port_5.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'title 1',
    github: 'http://github.com',
    demo: 'http://facebook.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'title 2',
    github: 'http://github.com',
    demo: 'http://facebook.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'title 3',
    github: 'http://github.com',
    demo: 'http://facebook.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'title 4',
    github: 'http://github.com',
    demo: 'http://facebook.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'title 5',
    github: 'http://github.com',
    demo: 'http://facebook.com'
  },
  {
    id: 6,
    image: IMG5,
    title: 'title 6',
    github: 'http://github.com',
    demo: 'http://facebook.com'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key = {id} className="portfolio__items">
          <div className="portfolio__item-image">
            <img src={image} alt="title" />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio