import { CheckCircle } from './Icons';

const skillCategories = [
  {
    title: 'Frontend',
    color: 'blue',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    title: 'Backend',
    color: 'green',
    skills: ['Node.js', 'Python', 'Express', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Tools & DevOps',
    color: 'purple',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux'],
  },
  {
    title: 'Other',
    color: 'orange',
    skills: ['REST APIs', 'GraphQL', 'Testing', 'Agile', 'UI/UX'],
  },
];

const colorClasses = {
  blue: {
    border: 'border-blue-500/30',
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    icon: 'text-blue-400',
  },
  green: {
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    icon: 'text-emerald-400',
  },
  purple: {
    border: 'border-purple-500/30',
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    icon: 'text-purple-400',
  },
  orange: {
    border: 'border-orange-500/30',
    bg: 'bg-orange-500/10',
    text: 'text-orange-400',
    icon: 'text-orange-400',
  },
};

export default function Skills() {
  return (
    <section id="skills" className="container px-4 py-20 scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => {
            const colors = colorClasses[category.color];
            return (
              <div
                key={category.title}
                className={`card p-6 border ${colors.border} hover:border-primary/50 transition-colors`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-2 h-2 rounded-full ${colors.bg}`} />
                  <h3 className={`font-semibold ${colors.text}`}>
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className={`h-4 w-4 ${colors.icon}`} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Banner */}
        <div className="mt-12 p-6 card border-primary/30 bg-primary/5">
          <div className="text-center">
            <p className="text-lg text-muted-foreground">
              <strong className="text-primary">Always learning.</strong>{' '}
              I&apos;m constantly exploring new technologies and expanding my skill set.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
