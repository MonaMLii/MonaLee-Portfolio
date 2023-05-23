import React from 'react';
import SingleProject from '../SingleProject';
import codequiz from '../../img/codequizIMG.png';
import projectperfect from '../../img/projectperfectIMG.png';
import perfectweekend from '../../img/perfectweekendIMG.png';
import weather from '../../img/weatherIMG.png';

const projectData = [
    {
        name: 'Project Perfect',
        description: 'A job board',
        image: projectperfect,
        deployPage: 'Deploy Page',
        deployPageLink: 'https://gpteam.herokuapp.com/',
        githubRepo: 'Repository Link',
        githubRepoLink: 'https://github.com/zachcygan/gpteam'
    },
    {
        name: 'The perfect Weekend',
        description: 'yelp review & suggestion',
        image: perfectweekend,
        deployPage: 'Deploy Page',
        deployPageLink: 'https://zachcygan.github.io/The-Perfect-Weekend/index.html.',
        githubRepo: 'Repository Link',
        githubRepoLink: 'https://github.com/zachcygan/The-Perfect-Weekend',
    },
    {
        name: 'Weather Dashboard',
        description: 'Weather App',
        image: weather,
        deployPage: 'Deploy Page',
        deployPageLink: 'https://monamlii.github.io/My-Weather-Dashboard/',
        githubRepo: 'Repository Link',
        githubRepoLink: 'https://github.com/MonaMLii/My-Weather-Dashboard'
    },
    {
        name: 'Code Quiz',
        description: 'Code quiz',
        image: codequiz,
        deployPage: 'Deploy Page',
        deployPageLink: 'https://monamlii.github.io/Code-Quiz/',
        githubRepo: 'Repository Link',
        githubRepoLink: 'https://github.com/MonaMLii/Code-Quiz'
},

]

export default function Resume() {
  return (
   
    <div>
        <h1>Projects</h1>
        {projectData.map(project => 
            <SingleProject 
                name={project.name} 
                description={project.description}
                image={project.image}
                deployPage={project.deployPage}
                deployPageLink={project.deployPageLink}
                githubRepo={project.githubRepo}
                githubRepoLink={project.githubRepoLink}
            />
        )
        }
    </div>
  );
}