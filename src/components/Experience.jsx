import { Briefcase, GraduationCap, Calendar, MapPin } from './Icons';

const experiences = [
  {
    type: 'work',
    title: 'Software Engineer',
    company: 'Tech Company Inc.',
    location: 'San Francisco, CA',
    period: 'Jan 2024 - Present',
    description:
      'Building scalable web applications and leading frontend architecture decisions. Collaborating with cross-functional teams to deliver high-quality products.',
    highlights: [
      'Led development of new feature that increased user engagement by 40%',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Mentored 3 junior developers',
    ],
  },
  {
    type: 'work',
    title: 'Frontend Developer',
    company: 'Startup Labs',
    location: 'Remote',
    period: 'Jun 2022 - Dec 2023',
    description:
      'Developed and maintained multiple client-facing applications using React and TypeScript. Worked closely with designers to implement pixel-perfect UI.',
    highlights: [
      'Built responsive web applications serving 100k+ users',
      'Reduced bundle size by 35% through code optimization',
      'Introduced component library standardizing UI across projects',
    ],
  },
  {
    type: 'education',
    title: 'B.S. Computer Science',
    company: 'University Name',
    location: 'City, State',
    period: '2020 - 2024',
    description:
      'Focused on software engineering, algorithms, and web development. Active member of coding clubs and hackathon participant.',
    highlights: [
      'GPA: 3.8/4.0',
      'Dean\'s List - All Semesters',
      'Won 2nd place at University Hackathon',
    ],
  },
  {
    type: 'work',
    title: 'Software Engineering Intern',
    company: 'Big Tech Corp',
    location: 'Seattle, WA',
    period: 'Summer 2023',
    description:
      'Contributed to production codebase and shipped features used by millions of users. Participated in agile ceremonies and code reviews.',
    highlights: [
      'Developed new API endpoints handling 1M+ daily requests',
      'Improved test coverage from 65% to 85%',
      'Received return offer',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="container px-4 py-20 scroll-mt-20">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">My professional journey</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-border" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.title}-${exp.company}`}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="card p-6 border-border hover:border-primary/30 transition-colors">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                          exp.type === 'work'
                            ? 'bg-blue-500/10'
                            : 'bg-emerald-500/10'
                        }`}
                      >
                        {exp.type === 'work' ? (
                          <Briefcase
                            className={`h-5 w-5 ${
                              exp.type === 'work'
                                ? 'text-blue-400'
                                : 'text-emerald-400'
                            }`}
                          />
                        ) : (
                          <GraduationCap className="h-5 w-5 text-emerald-400" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold">{exp.title}</h3>
                        <p className="text-primary">{exp.company}</p>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-1">
                      {exp.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">→</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
