import React from "react";
import projwvpolice from '../assets/images/proj-wv-police.png';
import projnjstops from '../assets/images/proj-nj-stops.png';
import projnatdeputized from '../assets/images/proj-nat-deputized.png';
import projdcpolice from '../assets/images/proj-dc-police.png';
import projtxlonestar from '../assets/images/proj-tx-lonestar.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects and Publications</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.aclu-nj.org/publications/new-jerseys-road-to-safety-and-racial-justice-reducing-non-safety-traffic-stops/" target="_blank" rel="noreferrer"><img src={projnjstops} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.aclu-nj.org/publications/new-jerseys-road-to-safety-and-racial-justice-reducing-non-safety-traffic-stops/" target="_blank" rel="noreferrer"><h2>ACLU-NJ Report on Non-Safety Traffic Stops, 2026</h2></a>
                <p>Evaluated existing analysis and providing supplemental statistics and data visualizations for this report.</p>
            </div>
            <div className="project">
                <a href="https://www.aclu.org/publications/deputized-for-disaster" target="_blank" rel="noreferrer"><img src={projnatdeputized} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.aclu.org/publications/deputized-for-disaster" target="_blank" rel="noreferrer"><h2>ACLU Report on 287(g) Agreements, 2026</h2></a>
                <p>Provided analysis and data visualizations for this report.</p>
            </div>
            <div className="project">
                <a href="https://www.acluwv.org/news/introducing-the-police-accountability-dashboard-a-tool-to-track-police-employment-in-wv/" target="_blank" rel="noreferrer"><img src={projwvpolice} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.acluwv.org/news/introducing-the-police-accountability-dashboard-a-tool-to-track-police-employment-in-wv/" target="_blank" rel="noreferrer"><h2>ACLU-WV Police Accountability Dashboard, 2025</h2></a>
                <p>Built and maintain data pipeline for this interactive dashboard.</p>
            </div>
            <div className="project">
                <a href="https://www.acludc.org/publications/bias-core-enduring-racial-disparities-dc-metropolitan-police-department-stop-and-frisk/" target="_blank" rel="noreferrer"><img src={projdcpolice} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.acludc.org/publications/bias-core-enduring-racial-disparities-dc-metropolitan-police-department-stop-and-frisk/" target="_blank" rel="noreferrer"><h2>ACLU-DC Report on Stop-and-Frisk Bias, 2024</h2></a>
                <p>Collaborated on data analysis and visualizations for this report.</p>
            </div>
            <div className="project">
                <a href="https://www.aclutx.org/publications/operation-lone-star-misinformation-and-discrimination-texas-border-enforcement/" target="_blank" rel="noreferrer"><img src={projtxlonestar} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.aclutx.org/publications/operation-lone-star-misinformation-and-discrimination-texas-border-enforcement/" target="_blank" rel="noreferrer"><h2>ACLU-TX Report on Border Enforcement, 2024</h2></a>
                <p>Collaborated on strategy, data analysis, and visualizations for this report.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;