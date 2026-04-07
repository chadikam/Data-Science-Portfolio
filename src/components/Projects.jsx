import { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink } from './Icons';
import PixelCard from './PixelCard';

const dataScienceProjects = [
    {
    title: 'AutoML — Machine Learning Platform',
    description:
      'Developed a comprehensive open-source automated machine learning framework that simplifies the entire ML pipeline from data preprocessing to model training and evaluation. Features adaptive preprocessing with intelligent handling of missing values, outliers, and categorical features. Implemented hyperparameter optimization using Optuna with support for multiple algorithms (XGBoost, LightGBM, Random Forest, SVM, Neural Networks). Built a React-based interactive web platform with FastAPI backend enabling users to upload datasets, run experiments, visualize feature importance, and export trained models. Advanced capabilities include EDA automation, class imbalance handling (SMOTE), anomaly detection, and clustering analysis. Successfully packaged as a standalone Windows executable for production deployment.',
    tags: ['React', 'Python','FastAPI', 'Scikit-learn', 'XGBoost', 'LightGBM', 'Optuna',],
    image: '/002.png',
    github: 'https://github.com/chadikam/AutoMl',
    featured: false,
    inProgress: true,
  },
  {
    title: 'Alzheimer\'s Detection - CNN Model',
    description:
      'Developed a CNN model for classifying brain MRI images related to Alzheimer\'s disease. Performed comprehensive EDA, image preprocessing, and visualization of convolutional layer activations using Grad-CAM. Achieved 88%+ accuracy and created an interactive web platform for testing predictions.',
    tags: ['TensorFlow', 'Keras', 'CNN', 'Python', 'Grad-CAM'],
    image: '/000.png',
    github: 'https://github.com/chadikam/AlzAi',
    demo: 'https://alz-ai.vercel.app',
    featured: true,
  },
  {
    title: 'Real Estate Price Prediction Platform',
    description:
      'Built a comprehensive real estate price prediction system using Random Forest regression reaching 93% accuracy. Designed and deployed a web platform with Python Flask backend and interactive frontend for property price queries and predictions. Includes full technical documentation.',
    tags: ['Python', 'Flask', 'Random Forest', 'Scikit-learn', 'Web Platform'],
    image: '/001.png',
    github: 'https://github.com/chadikam/CasaQuant',
    demo: 'https://casaquant.vercel.app',
    featured: true,
  },
];

const otherProjects = [
  {
    title: 'Graphic Design Portfolio',
    description:
      'Showcase of my graphic design work, including branding, UI/UX design, and visual communication projects.',
    tags: ['Graphic Design', 'Branding', 'UI/UX'],
    featured: true,
    image: '/003.png',
    demo: 'https://www.behance.net/chadi-kammoun',


  },
  {
    title: 'Discover Tunisia',
    description:
      'A travel guide website dedicated to showcasing the beauty and culture of Tunisia. Features interactive maps, curated itineraries, and local insights for travelers.',
    tags: ['React', 'TypeScript','Tailwind', 'Leaflet'],
    featured: false,
    inProgress: true,
    github: 'https://github.com/chadikam/Tunisia_Attractions',

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

const projectCategories = [
  { id: 'data-science', label: 'Data Science' },
  { id: 'other-projects', label: 'Other Projects' },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('data-science');
  const [underlineStyle, setUnderlineStyle] = useState({ opacity: 0 });
  const [projectsTransitionClass, setProjectsTransitionClass] = useState(
    'projects-slide-in-from-left'
  );
  const visibleProjects =
    activeCategory === 'data-science' ? dataScienceProjects : otherProjects;
  const categoryRefs = useRef({});

  const handleCategoryChange = (nextCategory) => {
    if (nextCategory === activeCategory) {
      return;
    }

    const currentIndex = projectCategories.findIndex(
      (category) => category.id === activeCategory
    );
    const nextIndex = projectCategories.findIndex(
      (category) => category.id === nextCategory
    );

    setProjectsTransitionClass(
      nextIndex > currentIndex
        ? 'projects-slide-in-from-right'
        : 'projects-slide-in-from-left'
    );
    setActiveCategory(nextCategory);
  };

  useEffect(() => {
    const updateUnderline = () => {
      const activeTab = categoryRefs.current[activeCategory];
      if (!activeTab) {
        setUnderlineStyle({ opacity: 0 });
        return;
      }

      setUnderlineStyle({
        left: `${activeTab.offsetLeft}px`,
        width: `${activeTab.offsetWidth}px`,
        opacity: 1,
      });
    };

    updateUnderline();
    window.addEventListener('resize', updateUnderline);
    return () => window.removeEventListener('resize', updateUnderline);
  }, [activeCategory]);

  return (
    <section id="projects" className="container px-4 py-20 scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
          <div className="mt-6 flex justify-center">
            <div className="relative flex items-center gap-6 md:gap-10">
              {projectCategories.map((category) => {
                const isActive = activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    ref={(el) => {
                      categoryRefs.current[category.id] = el;
                    }}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`relative pb-2 text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                    aria-pressed={isActive}
                  >
                    {category.label}
                  </button>
                );
              })}

              <span
                className="absolute bottom-0 h-[2px] bg-primary transition-all duration-300 ease-out"
                style={underlineStyle}
              />
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div key={activeCategory} className={projectsTransitionClass}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project, index) => (
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
                      } flex items-center justify-center p-6 text-center`}
                    >
                      <div>
                        <span className="block text-4xl font-bold text-foreground/20 mb-2">
                          {project.title.charAt(0)}
                        </span>
                        {project.placeholder && (
                          <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full whitespace-nowrap">
                            Placeholder
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </PixelCard>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full whitespace-nowrap">
                          Featured
                        </span>
                      )}
                      {project.inProgress && (
                        <span className="text-xs px-2 py-1 bg-amber-500/20 text-amber-400 rounded-full whitespace-nowrap">
                          In Progress
                        </span>
                      )}
                    </div>
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
                    {project.placeholder && (
                      <span className="text-sm text-muted-foreground">
                        Coming soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More */}
        <div className="text-center mt-8">
          <a
            href="https://github.com/chadikam"
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
