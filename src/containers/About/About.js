import React from 'react';
import { Link } from 'react-router-dom';

import './About.scss';
import { aboutLinks } from '../../models';
import { camelToSentenceCase } from '../../helpers';


export function About() {
  const renderLinkList = (category) => {
    return (
      <section className="project-links">
        <h2 id={category}>{ camelToSentenceCase(category) }:</h2>
        <ul className="link-list" aria-labelledby={category}>{ 
          aboutLinks[category].map(({ url, text }, i) => (
            <li>
              <a className="link" href={ url } key={i} rel="noreferrer noopener" target="_blank">
                { text }
              </a>
            </li>
          ))
        }</ul>
      </section>
    )
  }

  return (
    <section className="About">
      <header>
        <h1 className="title">A b o u t<span>t h i s</span><span>P r o j e c t</span></h1>
        <p className="description">
          This project is a multiplayer, storyline game that asks players to work together and defeat a viral
          (totally-not-the-coronavirus) enemy and save the world!  The project utilizes React and Socket.IO, 
          alongside React Router, Sass, and Express.
        </p>
      </header>
      <main>
        { renderLinkList('codeSources') }
        { renderLinkList('contributors') }
        <p className="description">
          This project was built in a weekend hackathon hosted by  
          <a className="mintbean" href="https://www.mintbean.io/" rel="noreferrer noopener" target="_blank">
            Mint<span>bean</span>
          </a>
        </p>
        <Link className="home-link" to="/">G o<br/><span>H o m e</span></Link>
      </main>
    </section>
  )
}
