import React from 'react';


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
                  <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                  <div class="divider-custom-line"></div>
              </div>
              {/*  Masthead Subheading-- */}
              <p class="masthead-subheading font-weight-light mb-0">Backend Engineer - Serverless Backend - REST APIs</p>
              <p class="masthead-subheading font-weight-light mb-0">This website is a work in progress. I have continious deployment setup through github and netlify so I can push changes as I go.</p>
          </div>
      </header>
    );
}
