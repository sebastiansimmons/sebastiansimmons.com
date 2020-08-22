import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

import { Link } from "react-router-dom";

export default function IndexHeader(props) {

    return(
      <header class="masthead bg-primary text-white text-center">
          <div class="container d-flex align-items-center flex-column">
              {/*  Masthead Avatar Image-- */}
              <img class="masthead-avatar mb-5" src={require('../assets/img/avataaars.svg')} alt="" />
              {/*  Masthead Heading-- */}
              <h1 class="masthead-heading text-uppercase mb-0">Sebastian Simmons</h1>
              {/*  Icon Divider-- */}
              <div class="divider-custom divider-light">
                  <div class="divider-custom-line"></div>
                  <div class="divider-custom-icon"><FontAwesomeIcon icon={faStar} /></div>
                  <div class="divider-custom-line"></div>
              </div>
              {/*  Masthead Subheading-- */}
              <Link to="first-post"><button>yeyo></button></Link>
              <p class="masthead-subheading font-weight-light mb-0">Backend Engineer - Serverless Backend - REST APIs</p>
              <p class="masthead-subheading font-weight-light mb-0">This website is a work in progress. I have continious deployment setup through github and netlify so I can push changes as I go.</p>
          </div>
      </header>
    );
}
