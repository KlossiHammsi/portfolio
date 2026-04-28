import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <footer id="contact" className="relative z-10 py-10 text-center bg-background">
      <div className="flex justify-center gap-6 mb-4">
        <a 
          href="https://github.com/KlossiHammsi" 
          target="_blank" 
          rel="noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <GitHubIcon />
        </a>
        <a 
          href="https://www.linkedin.com/in/steffano-clausivancio-45a37a305/" 
          target="_blank" 
          rel="noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Steffano Clausivancio. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;