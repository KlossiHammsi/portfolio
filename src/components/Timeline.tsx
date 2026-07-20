import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
// @ts-ignore
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Timeline() {
  return (
    <div id="history" className="bg-background py-20">
      <div className="items-container mx-auto max-w-7xl px-6">
        <h1 className="text-4xl md:text-5xl font-display text-center mb-16 text-foreground">Career History</h1>
        
        {/* @ts-ignore */}
        <VerticalTimeline>
          {/* @ts-ignore */}
          <VerticalTimelineElement
            className="timeline-card"
            date="Feb 2026 - present"  
            iconStyle={{ background: 'hsl(var(--secondary))', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase as any} className="text-white" />}
          >
            <h3 className="text-xl font-bold text-foreground mb-1">Full-Stack Web Developer</h3>
            <h4 className="text-sm font-medium text-primary/90 uppercase tracking-wide mb-2">Semarang, Indonesia</h4>
            <p className="text-muted-foreground leading-relaxed text-sm">Full-Stack Web Development, at PT Elgibor Solutions</p>
          </VerticalTimelineElement>
          
          {/* @ts-ignore */}
          <VerticalTimelineElement
            className="timeline-card"
            date="Feb 2025 - Feb 2026"
            iconStyle={{ background: 'hsl(var(--secondary))', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase as any} className="text-white" />}
          >
            <h3 className="text-xl font-bold text-foreground mb-1">Front-End Web Developer Internship</h3>
            <h4 className="text-sm font-medium text-primary/90 uppercase tracking-wide mb-2">Semarang, Indonesia</h4>
            <p className="text-muted-foreground leading-relaxed text-sm">Frontend Development Internship, at PT Elgibor Solutions</p>
          </VerticalTimelineElement>
          
          {/* @ts-ignore */}
          <VerticalTimelineElement
            className="timeline-card"
            date="2022 - 2026"
            iconStyle={{ background: 'hsl(var(--secondary))', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase as any} className="text-white" />}
          >
            <h3 className="text-xl font-bold text-foreground mb-1">Computer Science Student</h3>
            <h4 className="text-sm font-medium text-primary/90 uppercase tracking-wide mb-1">Binus University • Semarang, Indonesia</h4>
            <h5 className="text-xs font-semibold text-primary mb-2 opacity-80">(GPA: 3.81)</h5>
            <p className="text-muted-foreground leading-relaxed text-sm">Relevant Coursework: Data Structures and Algorithms, Database Systems, Web Development</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;