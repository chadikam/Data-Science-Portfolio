import { User, MapPin, GraduationCap } from './Icons';

export default function About() {
  return (
    <section id="about" className="container px-4 py-20 scroll-mt-20">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* About Text */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m a passionate software engineer and computer science student with a love for building 
              elegant solutions to complex problems. My journey in tech started when I was in high school, 
              and I&apos;ve been hooked ever since.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in full-stack web development, with expertise in modern JavaScript frameworks, 
              backend technologies, and cloud services. I&apos;m always eager to learn new technologies and 
              take on challenging projects.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing my knowledge through technical writing and mentoring.
            </p>
          </div>

          {/* Info Cards */}
          <div className="space-y-4">
            <div className="card p-4 border-border hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-medium">Your Name</p>
                </div>
              </div>
            </div>

            <div className="card p-4 border-border hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">City, Country</p>
                </div>
              </div>
            </div>

            <div className="card p-4 border-border hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Education</p>
                  <p className="font-medium">Computer Science</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
