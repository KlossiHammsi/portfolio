import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';

const labelsFirst = [
    "React", "TypeScript", "Angular", "HTML", "CSS", "GIT", "Flask", "Python", "SQL", "Laravel", "Postman"
];

function Expertise() {
    return (
        <div className="bg-background py-24" id="expertise">
            <div className="max-w-7xl mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-display text-center mb-16 text-foreground">Expertise</h1>
                <div className="flex justify-center">
                    <div className="skill bg-secondary/30 p-8 rounded-3xl border border-white/5 max-w-3xl">
                        <div className="flex items-center gap-4 mb-6">
                            <FontAwesomeIcon icon={faReact as any} size="3x" className="text-primary" />
                            <h3 className="text-2xl font-bold text-foreground">Full Stack Web Development</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            I am a results-driven Full Stack Web Developer with proven experience in designing, developing, and deploying enterprise-level web applications using React, Laravel, and Angular. I specialize in both front-end and back-end development, ensuring seamless integration between user interfaces, APIs, and databases.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="w-full text-sm font-semibold text-foreground/50 mb-2 uppercase tracking-wider">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip 
                                    key={index} 
                                    label={label} 
                                    sx={{ 
                                        bgcolor: 'rgba(255,255,255,0.05)', 
                                        color: 'white',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
                                    }} 
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;