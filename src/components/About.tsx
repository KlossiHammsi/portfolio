import React from "react";
import profile from '../assets/images/test.jpeg';

function About() {
    return (
        <section className="bg-background py-24 relative overflow-hidden" id="about">
            {/* Subtle Gradient Glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-center">
                    
                    {/* Image Side */}
                    <div className="relative group max-w-sm mx-auto">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-secondary/50">
                            {/* Ganti src dengan path foto Anda nanti, contoh: import profileImg from '../assets/images/me.jpg' */}
                            <img 
                                src={profile}
                                alt="Steffano Clausivancio"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                            />
                        </div>
                        
                        {/* Experience Badge */}
                        {/* <div className="absolute -bottom-6 -right-6 liquid-glass p-6 rounded-2xl border border-white/10 hidden md:block">
                            <span className="block text-3xl font-bold text-foreground">1+</span>
                            <span className="text-xs uppercase tracking-widest text-muted-foreground">Years Experience</span>
                        </div> */}
                    </div>

                    {/* Text Side */}
                    <div className="flex flex-col gap-8">
                        <div className="space-y-4">
                            <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-medium">About Me</h2>
                            <h1 className="text-4xl md:text-6xl font-display text-foreground leading-tight">
                                Crafting digital <br />
                                <span className="text-muted-foreground italic">excellence</span> through code.
                            </h1>
                        </div>

                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                I am <span className="text-foreground font-medium">Steffano Clausivancio</span>, a Full-Stack Web Developer based in Semarang, Indonesia. My journey in technology is driven by a passion for building seamless digital experiences that blend aesthetic beauty with robust performance.
                            </p>
                            <p>
                                With a background in Computer Science from Binus University, I specialize in the modern web ecosystem—from React and TypeScript to Laravel and Angular. I thrive at the intersection of design and engineering, constantly pushing the boundaries of what's possible in the browser.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <div className="flex flex-col gap-1 pr-8 border-r border-white/10">
                                <span className="text-xs uppercase text-muted-foreground tracking-wider">Location</span>
                                <span className="text-foreground">Semarang, ID</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-xs uppercase text-muted-foreground tracking-wider">Current Role</span>
                                <span className="text-foreground font-medium">Full Stack Developer @ PT Elgibor</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
