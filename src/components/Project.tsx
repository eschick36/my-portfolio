import React from "react";
import proj287g from '../assets/images/proj-287g.png';
import projlonestar from '../assets/images/proj-lonestar.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects and Publications</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.aclu.org/publications/deputized-for-disaster" target="_blank" rel="noreferrer"><img src={proj287g} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.aclu.org/publications/deputized-for-disaster" target="_blank" rel="noreferrer"><h2>ACLU Report on 287(g) Agreements</h2></a>
                <p>Provided analysis and data visualizations for this report.</p>
            </div>
            <div className="project">
                <a href="https://www.aclutx.org/publications/operation-lone-star-misinformation-and-discrimination-texas-border-enforcement/" target="_blank" rel="noreferrer"><img src={projlonestar} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.aclutx.org/publications/operation-lone-star-misinformation-and-discrimination-texas-border-enforcement/" target="_blank" rel="noreferrer"><h2>ACLU-TX Report on Border Enforcement</h2></a>
                <p>Collaborated on strategy, data analysis, and visualizations for this 2024 report.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;