import primaya from '../assets/images/primaya.png';
import sistrack from '../assets/images/sistrack.png';
import dmi from '../assets/images/dmi.png';
import financia from '../assets/images/financia.png';
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';

/* ─── Types ─────────────────────────────────────────────────────────────── */

interface WorkCardProps {
  image: string;
  title: string;
  role: string;
  description: string;
}

interface PersonalCardProps {
  image: string;
  title: string;
  tech: string;
  description: string;
  href?: string; // undefined or placeholder → button hidden
}

/* ─── Helpers ────────────────────────────────────────────────────────────── */

const PLACEHOLDER_PATTERN = /\.\.\./;

function isRealUrl(href?: string): boolean {
  if (!href) return false;
  if (PLACEHOLDER_PATTERN.test(href)) return false;
  return true;
}

/* ─── WorkCard ───────────────────────────────────────────────────────────── */

function WorkCard({ image, title, role, description }: WorkCardProps) {
  return (
    <div className="project-card liquid-glass rounded-2xl border border-white/[0.07] hover:border-white/[0.15] flex flex-col overflow-hidden group">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="project-img w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        {/* Role badge */}
        <span className="self-start text-[11px] font-medium uppercase tracking-widest px-2.5 py-1 rounded-full border border-white/10 bg-secondary/60 text-muted-foreground">
          {role}
        </span>

        <h2 className="text-lg font-bold leading-snug text-foreground">{title}</h2>

        <p className="text-muted-foreground/90 leading-relaxed text-sm flex-1">{description}</p>
      </div>
    </div>
  );
}

/* ─── PersonalCard ───────────────────────────────────────────────────────── */

function PersonalCard({ image, title, tech, description, href }: PersonalCardProps) {
  const hasLink = isRealUrl(href);

  return (
    <div className="project-card liquid-glass rounded-2xl border border-white/[0.07] hover:border-white/[0.15] flex flex-col overflow-hidden group">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="project-img w-full h-full object-cover"
        />
        <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        {/* Tech badge */}
        <span className="self-start text-[11px] font-medium uppercase tracking-widest px-2.5 py-1 rounded-full border border-white/10 bg-secondary/60 text-muted-foreground">
          {tech}
        </span>

        <h2 className="text-lg font-bold leading-snug text-foreground">{title}</h2>

        <p className="text-muted-foreground/90 leading-relaxed text-sm flex-1">{description}</p>

        {/* Action link — only rendered & visible when URL is real */}
        {hasLink && (
          <div className="pt-2 border-t border-white/[0.06]">
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="project-action inline-flex items-center gap-1.5 text-xs font-medium text-primary/60 hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded"
              aria-label={`View project: ${title}`}
            >
              View Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Project (page section) ─────────────────────────────────────────────── */

function Project() {
  return (
    <div className="projects-container bg-background py-24" id="projects">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Working Projects ── */}
        <h1 className="text-4xl md:text-5xl font-display text-center mb-16 text-foreground">
          Working Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-24">
          <WorkCard
            image={primaya}
            title="Primaya Hospital"
            role="Front-End Developer"
            description="A comprehensive hospital information system (HIS) designed to streamline medical operations and executive monitoring. I implemented complex modules using React TypeScript and Material-UI, including automated approval workflows and real-time data visualization."
          />
          <WorkCard
            image={sistrack}
            title="Sistrack"
            role="Full-Stack Developer"
            description="A GPS tracking solution for operational vehicle management. Built with a user-friendly interface for PC and mobile, it allows partners to monitor vehicle locations in real-time, enhancing security and operational efficiency. 🚗📍"
          />
          <WorkCard
            image={dmi}
            title="DMI ERP"
            role="Full-Stack Developer"
            description="A SaaS-based accounting and CRM platform. I developed modular components using Angular TypeScript and Laravel, focusing on financial management scalability and modular system architecture."
          />
          <WorkCard
            image={financia}
            title="Financia"
            role="Full-Stack Developer"
            description="A SaaS-based accounting and CRM platform. I developed modular components using Angular TypeScript and Laravel, focusing on financial management scalability and modular system architecture."
          />
        </div>

        {/* ── Personal Projects ── */}
        <h1 className="text-4xl md:text-5xl font-display text-center mb-16 text-foreground">
          Personal Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PersonalCard
            image={mock01}
            title="Gym Plus Thesis"
            tech="Flutter · Python"
            description="An AI-powered fitness personal trainer app leveraging Computer Vision to provide real-time workout monitoring and form analysis without sensors."
            href="https://www.canva.com/..."
          />
          <PersonalCard
            image={mock02}
            title="Summon Game Development"
            tech="Unity"
            description="A 2D creature-collection game where players explore a virtual world to capture and train &quot;Summons&quot; in an immersive RPG experience."
            href="https://www.canva.com/..."
          />
          <PersonalCard
            image={mock03}
            title="Gym Plus Mobile"
            tech="Flutter · Firebase"
            description="A Flutter app providing visual guides for weight training, a macro-nutrient tracker, and a training calendar."
            href="https://www.canva.com/..."
          />
          <PersonalCard
            image={mock04}
            title="Fitness Tracking"
            tech="Python · OpenCV"
            description="Motion tracking program for bicep curls using MediaPipe and OpenCV, identifying &quot;UP/DOWN&quot; stages and tracking repetitions in real-time."
            href="https://github.com/..."
          />
          <PersonalCard
            image={mock05}
            title="100 Food Mobile"
            tech="Flutter"
            description="A recipe discovery app with step-by-step guidance, nutrition facts, and restaurant reviews for culinary enthusiasts."
            href="http://drive.google.com/..."
          />
          <PersonalCard
            image={mock06}
            title="LSTM Stock Forecasting Paper"
            tech="Python · LSTM"
            description="Research on multivariate LSTM models to forecast Indonesian banking stock prices with high accuracy and R² scores."
            href="https://drive.google.com/..."
          />
        </div>

      </div>
    </div>
  );
}

export default Project;
