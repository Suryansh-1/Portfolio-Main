import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo,projectThree} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects" 
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="E-Portfolio"
          des=" Dynamic portfolio showcasing my creative projects and expertise in Web Development. Explore my work, skills, education, experience and achievements in a visually engaging and user-friendly interface"
          src={projectOne} gitlink={"www.google.com"} deploylink={"www.google.com"}
        />
        <ProjectsCard
          title="Weather Forecasting"
          des="Developed using Java, offers users real-time weather information. Connecting to weather APIs to fetch and display
          accurate forecasts for 200,000+ locations worldwide. Users can input locations, receiving up-to-date weather data and enhancing their planning and decision-making."
          src={projectTwo} gitlink={"https://github.com/Suryansh-1/Weather-Forecasting-web-app"}
        />
        <ProjectsCard
          title="Shoping Web App"
          des="It is a React-based front-end application featuring a shopping cart system where users can add and remove items. It calculates the total bill based on the items selected and integrates with a web API for product data. The architecture likely comprises multiple React components for product listing and cart management.
          "
          src={projectThree} gitlink={"https://github.com/Suryansh-1/Shopify"} deploylink={"https://shopify-neon-pi.vercel.app/"}
        />
       
         
      
       
      </div>
    </section>
  );
}

export default Projects
