import React from "react";
import primaya from '../assets/images/primaya.png';
import sistrack from '../assets/images/sistrack.png';
import dmi from '../assets/images/dmi.png';
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';

function Project() {
    return (
        <div className="projects-container bg-background py-24" id="projects">
            <div className="max-w-7xl mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-display text-center mb-16 text-foreground">Working Projects</h1>
                <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">

                    {/* 1. Primaya Hospital */}
                    <div className="project flex flex-col group">
                        <div className="overflow-hidden rounded-2xl mb-6 bg-secondary/50">
                            <img src={primaya} className="zoom transition-transform duration-700 group-hover:scale-105" alt="thumbnail" width="100%" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Primaya Hospital (Front-End Developer)</h2>
                        <p className="text-muted-foreground leading-relaxed text-sm">Primaya Hospital is a comprehensive hospital information system (HIS) designed to streamline medical operations and executive monitoring. As a Front-End Developer, I implemented complex modules using React TypeScript and Material-UI, including automated approval workflows and real-time data visualization.</p>
                    </div>

                    {/* 2. Sistrack */}
                    <div className="project flex flex-col group">
                        <div className="overflow-hidden rounded-2xl mb-6 bg-secondary/50">
                            <img src={sistrack} className="zoom transition-transform duration-700 group-hover:scale-105" alt="thumbnail" width="100%" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Sistrack (Full-Stack Developer)</h2>
                        <p className="text-muted-foreground leading-relaxed text-sm">Sistrack is a GPS tracking solution for operational vehicle management. Built with a user-friendly interface for PC and mobile, it allows partners to monitor vehicle locations in real-time, enhancing security and operational efficiency. 🚗📍</p>
                    </div>

                    {/* 3. DMI */}
                    <div className="project flex flex-col group">
                        <div className="overflow-hidden rounded-2xl mb-6 bg-secondary/50">
                            <img src={dmi} className="zoom transition-transform duration-700 group-hover:scale-105" alt="thumbnail" width="100%" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">DMI ERP (Full-Stack Developer)</h2>
                        <p className="text-muted-foreground leading-relaxed text-sm">DMI is a SaaS-based accounting and CRM platform. I developed modular components using Angular TypeScript and Laravel, focusing on financial management scalability and modular system architecture.</p>
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-display text-center mb-16 text-foreground">Personal Projects</h1>
                <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

                    {/* 1. Gym Plus Thesis */}
                    <div className="project flex flex-col group">
                        <a href="https://www.canva.com/..." target="_blank" rel="noreferrer" className="overflow-hidden rounded-2xl mb-6 bg-secondary/50">
                            <img src={mock01} className="zoom transition-transform duration-700 group-hover:scale-105" alt="thumbnail" width="100%" />
                        </a>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Gym Plus Thesis (Flutter, Python)</h2>
                        <p className="text-muted-foreground leading-relaxed text-sm">An AI-powered fitness personal trainer app leveraging Computer Vision to provide real-time workout monitoring and form analysis without sensors.</p>
                    </div>

                    {/* 2. Summon Game */}
                    <div className="project flex flex-col group">
                        <a href="https://www.canva.com/..." target="_blank" rel="noreferrer" className="overflow-hidden rounded-2xl mb-6 bg-secondary/50">
                            <img src={mock02} className="zoom transition-transform duration-700 group-hover:scale-105" alt="thumbnail" width="100%" />
                        </a>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Summon Game Development (Unity)</h2>
                        <p className="text-muted-foreground leading-relaxed text-sm">A 2D creature-collection game where players explore a virtual world to capture and train "Summons" in an immersive RPG experience.</p>
                    </div>

                    {/* 3. Gym Plus App */}
                    <div className="project flex flex-col group">
                        <a href="https://www.canva.com/..." target="_blank" rel="noreferrer" className="overflow-hidden rounded-2xl mb-6 bg-secondary/50">
                            <img src={mock03} className="zoom transition-transform duration-700 group-hover:scale-105" alt="thumbnail" width="100%" />
                        </a>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Gym Plus Mobile (Flutter, Firebase)</h2>
                        <p className="text-muted-foreground leading-relaxed text-sm">A React Native (Expo) app providing visual guides for weight training, a macro-nutrient tracker, and a training calendar.</p>
                    </div>

                    {/* 4. Computer Vision */}
                    <div className="project flex flex-col group">
                        <a href="https://github.com/..." target="_blank" rel="noreferrer" className="overflow-hidden rounded-2xl mb-6 bg-secondary/50">
                            <img src={mock04} className="zoom transition-transform duration-700 group-hover:scale-105" alt="thumbnail" width="100%" />
                        </a>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Fitness Tracking (Python)</h2>
                        <p className="text-muted-foreground leading-relaxed text-sm">Motion tracking program for bicep curls using MediaPipe and OpenCV, identifying "UP/DOWN" stages and tracking repetitions in real-time.</p>
                    </div>

                    {/* 5. 100 Food */}
                    <div className="project flex flex-col group">
                        <a href="http://drive.google.com/..." target="_blank" rel="noreferrer" className="overflow-hidden rounded-2xl mb-6 bg-secondary/50">
                            <img src={mock05} className="zoom transition-transform duration-700 group-hover:scale-105" alt="thumbnail" width="100%" />
                        </a>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">100 Food Mobile (Flutter)</h2>
                        <p className="text-muted-foreground leading-relaxed text-sm">A recipe discovery app with step-by-step guidance, nutrition facts, and restaurant reviews for culinary enthusiasts.</p>
                    </div>

                    {/* 6. LSTM Stock Paper */}
                    <div className="project flex flex-col group">
                        <a href="https://drive.google.com/..." target="_blank" rel="noreferrer" className="overflow-hidden rounded-2xl mb-6 bg-secondary/50">
                            <img src={mock06} className="zoom transition-transform duration-700 group-hover:scale-105" alt="thumbnail" width="100%" />
                        </a>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">LSTM Stock Forecasting Paper</h2>
                        <p className="text-muted-foreground leading-relaxed text-sm">Research on multivariate LSTM models to forecast Indonesian banking stock prices with high accuracy and R² scores.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
