import { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, Github, Linkedin, Behance, Download } from './Icons';

// Boot sequence component
function BootSequence({ onComplete }) {
  const [lines, setLines] = useState([]);
  const [progress, setProgress] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timeouts = [];
    let rafId = null;

    const bootLines = [
      { text: '> Initializing portfolio...', delay: 0 },
      { text: '> Loading skills ', delay: 400, hasProgress: true, progressId: 1 },
      { text: '> Loading projects ', delay: 1300, hasProgress: true, progressId: 2 },
      { text: '> System ready.', delay: 2100 },
    ];

    bootLines.forEach(({ text, delay, hasProgress, progressId }) => {
      const timeoutId = setTimeout(() => {
        setLines((prev) => [...prev, { text, hasProgress, progressId }]);
      }, delay);
      timeouts.push(timeoutId);
    });

    // Animate first progress bar (skills)
    const progressStart = 500;
    const progressDuration = 800;
    const startTime = Date.now();

    const animateProgress = () => {
      const elapsed = Date.now() - startTime - progressStart;
      if (elapsed < 0) {
        rafId = requestAnimationFrame(animateProgress);
        return;
      }
      const newProgress = Math.min((elapsed / progressDuration) * 100, 100);
      setProgress(newProgress);
      if (newProgress < 100) {
        rafId = requestAnimationFrame(animateProgress);
      }
    };

    const progressTimeoutId = setTimeout(() => {
      rafId = requestAnimationFrame(animateProgress);
    }, progressStart);
    timeouts.push(progressTimeoutId);

    // Animate second progress bar (projects)
    const progressStart2 = 1300;
    const startTime2 = Date.now();

    const animateProgress2 = () => {
      const elapsed = Date.now() - startTime2 - (progressStart2 - progressStart);
      if (elapsed < 0) {
        rafId = requestAnimationFrame(animateProgress2);
        return;
      }
      const newProgress = Math.min((elapsed / progressDuration) * 100, 100);
      setProgress2(newProgress);
      if (newProgress < 100) {
        rafId = requestAnimationFrame(animateProgress2);
      }
    };

    const progressTimeoutId2 = setTimeout(() => {
      rafId = requestAnimationFrame(animateProgress2);
    }, progressStart2 - progressStart);
    timeouts.push(progressTimeoutId2);

    // Complete and fade out
    const completeTimeoutId = setTimeout(() => {
      setIsComplete(true);
      // Call onComplete after fade transition
      setTimeout(() => {
        onComplete();
      }, 400);
    }, 2500);
    timeouts.push(completeTimeoutId);

    // Cleanup function
    return () => {
      timeouts.forEach(timeoutId => clearTimeout(timeoutId));
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [onComplete]);

  const renderProgressBar = (percent) => {
    const filled = Math.floor(percent / 10);
    const empty = 10 - filled;
    return '█'.repeat(filled) + '░'.repeat(empty);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-400 ${
        isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="font-mono text-primary text-sm md:text-base space-y-2 p-4">
        {lines.map((line, index) => (
          <div key={index} className="animate-fade-in">
            {line.text}
            {line.hasProgress && (
              <span className="text-primary/70">
                {renderProgressBar(line.progressId === 1 ? progress : progress2)}
              </span>
            )}
          </div>
        ))}
        <span className="inline-block w-2 h-4 bg-primary animate-blink" />
      </div>
    </div>
  );
}

// Typewriter component for the name
function TypewriterText({ text, onComplete, startDelay = 0 }) {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showGlitch, setShowGlitch] = useState(false);

  useEffect(() => {
    let timeout;
    let charIndex = 0;

    const startTyping = () => {
      const typeChar = () => {
        if (charIndex < text.length) {
          setDisplayText(text.slice(0, charIndex + 1));
          charIndex++;
          timeout = setTimeout(typeChar, 60 + Math.random() * 40);
        } else {
          setIsTypingComplete(true);
          // Subtle glitch on complete
          setShowGlitch(true);
          setTimeout(() => setShowGlitch(false), 50);
          onComplete?.();
        }
      };
      typeChar();
    };

    timeout = setTimeout(startTyping, startDelay);

    return () => clearTimeout(timeout);
  }, [text, startDelay, onComplete]);

  // Blink cursor
  useEffect(() => {
    if (!isTypingComplete) return;
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, [isTypingComplete]);

  return (
    <span className={`relative ${showGlitch ? 'animate-glitch' : ''}`}>
      {displayText}
      <span
        className={`inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle transition-opacity duration-100 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </span>
  );
}

// Animated counter for stats
function AnimatedCounter({ target, suffix = '', duration = 1000, startAnimation = true }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!startAnimation) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, duration, hasAnimated, startAnimation]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

// Particle system for hero image
function ParticleOrbit() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const baseRadius = Math.min(centerX, centerY) * 0.85;

    // Initialize particles
    const particleCount = 12;
    particlesRef.current = Array.from({ length: particleCount }, (_, i) => ({
      angle: (i / particleCount) * Math.PI * 2,
      radius: baseRadius + (Math.random() - 0.5) * 20,
      speed: 0.002 + Math.random() * 0.001,
      size: 2 + Math.random() * 2,
      opacity: 0.4 + Math.random() * 0.4,
      connectionOpacity: 0,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;

      // Draw connections
      ctx.strokeStyle = 'rgba(74, 222, 128, 0.25)';
      ctx.lineWidth = 2.5;

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const x1 = centerX + Math.cos(p1.angle) * p1.radius;
          const y1 = centerY + Math.sin(p1.angle) * p1.radius;
          const x2 = centerX + Math.cos(p2.angle) * p2.radius;
          const y2 = centerY + Math.sin(p2.angle) * p2.radius;
          const dist = Math.hypot(x2 - x1, y2 - y1);

          if (dist < 150) {
            const opacity = (1 - dist / 150) * 0.25;
            ctx.strokeStyle = `rgba(74, 222, 128, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        });
      });

      // Draw and update particles
      particles.forEach((particle) => {
        particle.angle += particle.speed;

        const x = centerX + Math.cos(particle.angle) * particle.radius;
        const y = centerY + Math.sin(particle.angle) * particle.radius;

        // Glow effect
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, particle.size * 3);
        gradient.addColorStop(0, `rgba(74, 222, 128, ${particle.opacity})`);
        gradient.addColorStop(1, 'rgba(74, 222, 128, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core particle
        ctx.fillStyle = `rgba(74, 222, 128, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(x, y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={500}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

// Scanline effect component
function ScanlineEffect() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full">
      <div className="scanline absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </div>
  );
}

// Hero Image with effects
function HeroImage() {
  return (
    <div className="relative flex justify-center items-center">
      {/* Particle canvas */}
      <div className="absolute w-[500px] h-[500px] md:w-[550px] md:h-[550px]">
        <ParticleOrbit />
      </div>

      {/* Image container */}
      <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
        <img
          src="/ff.png"
          alt="Chadi Kammoun"
          className="w-full h-full object-cover"
        />
        <ScanlineEffect />
      </div>
    </div>
  );
}

// Main Hero component
export default function Hero() {
  const [bootComplete, setBootComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [revealStage, setRevealStage] = useState(0);
  const timeoutsRef = useRef([]);

  const handleBootComplete = useCallback(() => {
    // Clear any existing timeouts from previous calls
    timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    timeoutsRef.current = [];

    // Boot sequence is complete, show hero content
    setBootComplete(true);
    
    // Start staggered reveal with timeout tracking
    const timings = [
      { delay: 100, action: () => setShowContent(true) },
      { delay: 200, stage: 1 },
      { delay: 400, stage: 2 },
      { delay: 1200, stage: 3 },
      { delay: 1500, stage: 4 },
      { delay: 1800, stage: 5 },
      { delay: 2200, stage: 6 },
    ];

    timings.forEach(({ delay, stage, action }) => {
      const timeoutId = setTimeout(() => {
        if (action) {
          action();
        } else if (stage !== null) {
          setRevealStage(stage);
        }
      }, delay);
      timeoutsRef.current.push(timeoutId);
    });
  }, []);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  const getRevealClass = (stage) => {
    if (revealStage >= stage) {
      return 'opacity-100 translate-y-0';
    }
    return 'opacity-0 translate-y-4';
  };

  return (
    <>
      {!bootComplete && <BootSequence onComplete={handleBootComplete} />}

      <section
        id="home"
        className={`min-h-screen flex items-center pt-16 md:pt-28 pb-16 md:pb-32 transition-opacity duration-500 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Greeting */}
              <p
                className={`text-sm text-muted-foreground transition-all duration-500 ease-out ${getRevealClass(1)}`}
              >
                <span className="text-primary">→</span> Hello, I&apos;m
              </p>

              {/* Name with Typewriter */}
              <h1
                className={`text-4xl md:text-5xl font-bold transition-all duration-500 ease-out ${getRevealClass(2)}`}
              >
                <span className="text-foreground">
                  {revealStage >= 2 ? (
                    <TypewriterText text="Chadi Kammoun" startDelay={0} />
                  ) : (
                    <span className="opacity-0">Chadi Kammoun</span>
                  )}
                </span>
              </h1>

              {/* Title */}
              <div
                className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 transition-all duration-500 ease-out ${getRevealClass(3)}`}
              >
                <h2 className="text-xl md:text-2xl text-muted-foreground">
                  Data Science Student
                </h2>
                <span className="hidden sm:inline text-muted-foreground/50">•</span>
                <h2 className="text-xl md:text-2xl text-muted-foreground">
                  AI Enthusiast
                </h2>
              </div>

              {/* Description */}
              <p
                className={`text-muted-foreground text-lg max-w-2xl leading-relaxed transition-all duration-500 ease-out ${getRevealClass(4)}`}
              >
                I'm passionate about <span className="text-primary">AI and data engineering</span>,
                building intelligent systems through predictive modeling, deep learning, and analytical pipelines.
                Currently pursuing my Master's in Data Science at ISIMM, exploring computer vision and real-world data applications.
              </p>

              {/* Stats */}
              <div
                className={`flex flex-wrap gap-6 pt-4 transition-all duration-500 ease-out ${getRevealClass(5)}`}
              >
                <div className="text-center min-w-[80px]">
                  <div className="text-3xl font-bold text-primary">
                    <AnimatedCounter target={5} suffix="+" duration={800} startAnimation={revealStage >= 5} />
                  </div>
                  <p className="text-sm text-muted-foreground">Years of Experience</p>
                </div>
                <div className="text-center min-w-[80px]">
                  <div className="text-3xl font-bold text-primary">
                    <AnimatedCounter target={8} suffix="+" duration={1000} startAnimation={revealStage >= 5} />
                  </div>
                  <p className="text-sm text-muted-foreground">ML Projects</p>
                </div>
                <div className="text-center min-w-[80px]">
                  <div className="text-3xl font-bold text-primary">
                    <AnimatedCounter target={15} suffix="+" duration={900} startAnimation={revealStage >= 5} />
                  </div>
                  <p className="text-sm text-muted-foreground">Data Tools</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 pt-6 transition-all duration-500 ease-out ${getRevealClass(6)}`}
              >
                <a href="#projects" className="btn btn-primary">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="/CV_Chadi Kammoun.pdf" download className="btn btn-secondary">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </div>

              {/* Social Links */}
              <div
                className={`flex items-center gap-4 pt-6 transition-all duration-500 ease-out ${getRevealClass(6)}`}
              >
                <a
                  href="https://github.com/chadikam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/chadi-kammoun/"
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
            <div
              className={`transition-all duration-700 ease-out ${
                showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <HeroImage />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
