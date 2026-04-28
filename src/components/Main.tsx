import React from "react";

const Main: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home" className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
          type="video/mp4"
        />
      </video>

      {/* Navigation */}
      <nav className="relative z-10 mx-auto flex max-w-7xl flex-row justify-between px-8 py-6">
        <div
          className="text-3xl tracking-tight text-foreground cursor-pointer"
          style={{ fontFamily: "'Instrument Serif', serif" }}
          onClick={(e: any) => handleScroll(e, "home")}
        >
          Steffano Clausivancio .S
        </div>

        <div className="hidden flex-row items-center gap-8 md:flex">
          <a href="#home" onClick={(e) => handleScroll(e, "home")} className="text-sm text-foreground transition-colors">Home</a>
          <a href="#about" onClick={(e) => handleScroll(e, "about")} className="text-sm text-muted-foreground transition-colors hover:text-foreground">About</a>
          <a href="#expertise" onClick={(e) => handleScroll(e, "expertise")} className="text-sm text-muted-foreground transition-colors hover:text-foreground">Expertise</a>
          <a href="#history" onClick={(e) => handleScroll(e, "history")} className="text-sm text-muted-foreground transition-colors hover:text-foreground">History</a>
          <a href="#projects" onClick={(e) => handleScroll(e, "projects")} className="text-sm text-muted-foreground transition-colors hover:text-foreground">Projects</a>
          <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="text-sm text-muted-foreground transition-colors hover:text-foreground">Contact</a>
        </div>

        <button
          onClick={(e) => handleScroll(e, "about")}
          className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground transition-transform hover:scale-[1.03] flex items-center justify-center cursor-pointer"
        >
          Begin Journey
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 pb-40 pt-32 text-center">
        <h1
          className="animate-fade-rise max-w-7xl text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-foreground sm:text-7xl md:text-8xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          <em className="not-italic text-muted-foreground">1</em> Corinthians
          <em className="not-italic text-muted-foreground"> 15:58</em>
        </h1>

        <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-foreground sm:text-lg">
          "Therefore, my dear brothers and sisters, stand firm. 
          Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain."
        </p>

        <button
          onClick={(e) => handleScroll(e, "about")}
          className="liquid-glass animate-fade-rise-delay-2 mt-12 cursor-pointer rounded-full px-14 py-5 text-base text-foreground transition-transform hover:scale-[1.03]"
        >
          Begin Journey
        </button>
      </section>
    </div>
  );
};

export default Main;