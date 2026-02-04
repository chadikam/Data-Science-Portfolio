import { ArrowRight, Github, Linkedin, Download } from './Icons';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 md:pt-28 pb-16 md:pb-32">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Greeting */}
            <p className="text-sm text-muted-foreground">
              <span className="text-primary">→</span> Hello, I&apos;m
            </p>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-foreground">Your Name</span>
            </h1>

            {/* Title */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                Software Engineer
              </h2>
              <span className="hidden sm:inline text-muted-foreground/50">•</span>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                Computer Science Student
              </h2>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              I build <span className="text-primary">modern web applications</span> and solve complex problems 
              with clean, efficient code. Passionate about creating user experiences that make a difference.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">20+</div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <p className="text-sm text-muted-foreground">Technologies</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a href="#projects" className="btn btn-primary">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#contact" className="btn btn-secondary">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center">
            <div className="w-96 h-96 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
              <img
                src="/ff.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
