import { Briefcase, GraduationCap, Calendar, MapPin } from './Icons';

const experiences = [
    {
    type: 'work',
    title: 'Data Science Intern',
    company: 'Ooredoo Tunisia',
    location: 'Tunis, Tunisia',
    period: '02/2026 - 08/2026 · 6 mos',
    description:
    'Developed a geospatial smart CAPEX planning platform enabling data-driven decisions for 5G network expansion. Built and trained machine learning models to predict potential revenue based on geographic location, supporting optimal placement of network equipment.',
    highlights: [
      'Machine learning–based revenue prediction using geospatial and business data',
      'End-to-end data pipeline, model training, and interactive map-based decision support',
    ],
  },
  {
    type: 'education',
    title: 'Master\'s Degree - Data Science',
    company: 'ISIMM',
    location: 'Monastir, Tunisia',
    period: '09/2024 - 06/2026',
    description:
      'Completed Master\'s program in Data Science. Focused on applied AI, data engineering pipelines, predictive modeling, and deep learning architectures.',
    highlights: [
      'Specialized in CNN and computer vision applications',
      'Developed predictive models and data analysis systems',
      'Exploring advanced statistical modeling techniques',
    ],
  },
  {
    type: 'work',
    title: 'Odoo Developer | ERP Integration',
    company: 'IA4Med',
    location: 'Monastir, Tunisia · Hybrid',
    period: 'Jan 2024 - Aug 2024 · 8 mos',
    description:
      'Developed a custom Odoo ERP module to digitize pediatric dentistry services, streamlining clinical and administrative workflows. Deployed the solution on OVH Cloud with secure SSL integration.',
    highlights: [
      'Custom Odoo development with ERP integration for healthcare services',
      'Cloud deployment with SSL security in a Scrum-based team environment',
    ],
  },
  {
    type: 'education',
    title: 'Bachelor\'s Degree - Software Engineering',
    company: 'ISIMM',
    location: 'Monastir, Tunisia',
    period: '09/2021 - 06/2024',
    description:
      'Completed Bachelor\'s degree with focus on software engineering fundamentals, algorithms, databases, and full-stack development. Strong foundation in programming and system design.',
    highlights: [
      'Comprehensive foundational knowledge in computer science',
      'Experience with multiple programming languages and frameworks',
      'Strong problem-solving and analytical skills',
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
                    <p className="text-sm text-muted-foreground mb-4 text-justify">
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
