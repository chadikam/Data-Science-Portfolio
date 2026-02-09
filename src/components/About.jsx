import { User, MapPin, GraduationCap } from './Icons';
import DecryptedText from './DecryptedText';

export default function About() {
  return (
    <section id="about" className="container px-4 py-12 md:py-20 scroll-mt-20">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* About Text */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-justify">
              <DecryptedText
                text="I'm a 2nd year Master's student in Data Science, passionate about applied AI and data engineering pipelines. With solid experience in predictive modeling and Deep Learning (CNN), I excel at designing data processing and analysis systems capable of generating concrete insights."
                animateOn="view"
                revealDirection="start"
                sequential
                useOriginalCharsOnly={true}
                encryptedClassName="text-primary/40"
                speed={30}
              />
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-justify">
              <DecryptedText
                text="Driven by innovation and scientific rigor, I'm passionate about building intelligent systems that solve real-world problems. Whether it's developing CNN models for medical imaging or creating predictive analytics platforms, I love translating complex data into actionable intelligence."
                animateOn="view"
                revealDirection="start"
                sequential
                useOriginalCharsOnly={true}
                encryptedClassName="text-primary/40"
                speed={30}
              />
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
                  <p className="font-medium">Chadi Kammoun</p>
                </div>
              </div>
            </div>

            <div className="card p-4 border-border hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+216 50 985 420</p>
                </div>
              </div>
            </div>

            <div className="card p-4 border-border hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Monastir, Tunisia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
