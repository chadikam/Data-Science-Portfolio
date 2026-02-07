import { Github, ExternalLink } from './Icons';
import PixelCard from './PixelCard';

const projects = [
  {
    title: 'Alzheimer\'s Detection - CNN Model',
    description:
      'Developed a CNN model for classifying brain MRI images related to Alzheimer\'s disease. Performed comprehensive EDA, image preprocessing, and visualization of convolutional layer activations using Grad-CAM. Achieved 88%+ accuracy and created an interactive web platform for testing predictions.',
    tags: ['TensorFlow', 'Keras', 'CNN', 'Python', 'Grad-CAM'],
    image: null,
    github: 'https://github.com/chadikam',
    demo: null,
    featured: true,
  },
  {
    title: 'Real Estate Price Prediction Platform',
    description:
      'Built a comprehensive real estate price prediction system using Random Forest regression reaching 93% accuracy. Designed and deployed a web platform with Python Flask backend and interactive frontend for property price queries and predictions. Includes full technical documentation.',
    tags: ['Python', 'Flask', 'Random Forest', 'Scikit-learn', 'Web Platform'],
    image: null,
    github: 'https://github.com/chadikam',
    demo: null,
    featured: true,
  },
  {
    title: 'Data Analysis & Visualization Suite',
    description:
      'Created tools for exploratory data analysis and visualization. Integrated multiple Python data science libraries for statistical analysis and interactive visualizations. Used for academic research projects and data exploration.',
    tags: ['Pandas', 'Matplotlib', 'Plotly', 'NumPy', 'Jupyter'],
    image: null,
    github: 'https://github.com/chadikam',
    demo: null,
    featured: false,
  },
  {
    title: 'Machine Learning Pipeline Framework',
    description:
      'Developed a modular ML pipeline framework for streamlining data preprocessing, model training, and evaluation. Includes utilities for hyperparameter tuning and model comparison.',
    tags: ['Python', 'Scikit-learn', 'ML Pipelines'],
    image: null,
    github: 'https://github.com/chadikam',
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
              <PixelCard className="h-48 rounded-t-lg">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-br ${
                      gradients[index % gradients.length]
                    } flex items-center justify-center`}
                  >
                    <span className="text-4xl font-bold text-foreground/20">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}
              </PixelCard>

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
            href="https://github.com/chadikam?tab=repositories"
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
