import { Github, ExternalLink } from './Icons';

const projects = [
  {
    title: 'Project Alpha',
    description:
      'A full-stack web application that helps users manage their tasks and projects efficiently. Built with modern technologies and best practices.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    image: null, // Placeholder - gradient will be used
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true,
  },
  {
    title: 'Project Beta',
    description:
      'An e-commerce platform with real-time inventory management, payment processing, and analytics dashboard.',
    tags: ['Next.js', 'Stripe', 'MongoDB', 'AWS'],
    image: null,
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true,
  },
  {
    title: 'Project Gamma',
    description:
      'A mobile-first social platform that connects developers and facilitates knowledge sharing through short-form content.',
    tags: ['React Native', 'Firebase', 'TypeScript'],
    image: null,
    github: 'https://github.com',
    demo: null,
    featured: false,
  },
  {
    title: 'Project Delta',
    description:
      'CLI tool for automating development workflows and improving team productivity with customizable scripts.',
    tags: ['Python', 'Docker', 'CI/CD'],
    image: null,
    github: 'https://github.com',
    demo: null,
    featured: false,
  },
  {
    title: 'Project Epsilon',
    description:
      'Real-time collaborative document editor with conflict resolution and version history.',
    tags: ['Vue.js', 'Socket.io', 'Redis'],
    image: null,
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: false,
  },
  {
    title: 'Project Zeta',
    description:
      'Machine learning powered recommendation engine for personalized content delivery.',
    tags: ['Python', 'TensorFlow', 'FastAPI'],
    image: null,
    github: 'https://github.com',
    demo: null,
    featured: false,
  },
];

const gradients = [
  'from-blue-500/20 to-purple-500/20',
  'from-emerald-500/20 to-blue-500/20',
  'from-orange-500/20 to-red-500/20',
  'from-purple-500/20 to-pink-500/20',
  'from-cyan-500/20 to-emerald-500/20',
  'from-yellow-500/20 to-orange-500/20',
];

export default function Projects() {
  return (
    <section id="projects" className="container px-4 py-20 scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card border-border hover:border-primary/50 transition-all group"
            >
              {/* Project Image/Gradient Placeholder */}
              <div
                className={`h-48 rounded-t-lg bg-gradient-to-br ${
                  gradients[index % gradients.length]
                } flex items-center justify-center`}
              >
                <span className="text-4xl font-bold text-foreground/20">
                  {project.title.charAt(0)}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            View more on GitHub
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
