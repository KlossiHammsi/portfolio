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
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Feb 2026 - present"  
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase as any} className="text-white" />}
          >
            <h3 className="text-xl font-bold text-[#272822] mb-1">Full-Stack Web Developer</h3>
            <h4 className="text-lg font-semibold text-[#272822] opacity-80">Semarang, Indonesia</h4>
            <p className="text-[#272822] mt-2">Full-Stack Web Development, at PT Elgibor Solutions</p>
          </VerticalTimelineElement>
          
          {/* @ts-ignore */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2025 - Feb 2026"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase as any} className="text-white" />}
          >
            <h3 className="text-xl font-bold text-[#272822] mb-1">Front-End Web Developer Internship</h3>
            <h4 className="text-lg font-semibold text-[#272822] opacity-80">Semarang, Indonesia</h4>
            <p className="text-[#272822] mt-2">Frontend Development Internship, at PT Elgibor Solutions</p>
          </VerticalTimelineElement>
          
          {/* @ts-ignore */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2026"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase as any} className="text-white" />}
          >
            <h3 className="text-xl font-bold text-[#272822] mb-1">Computer Science Student at Binus University</h3>
            <h4 className="text-lg font-semibold text-[#272822] opacity-80">Semarang, Indonesia</h4>
            <h5 className="text-base font-semibold text-[#272822] mb-1">(GPA : 3,81)</h5>
            <p className="text-[#272822] mt-2">Relevant Coursework: Data Structures and Algorithms, Database Systems, Web Development</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;