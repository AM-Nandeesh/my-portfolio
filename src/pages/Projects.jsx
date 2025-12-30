export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Rice Plant Disease Detection & Advisory System",
      description: "Built a ResNet50V2-based image classification system with extensive data augmentation to detect rice diseases; integrated OpenAI API to provide automated diagnosis and treatment recommendations.",
      tech: ["Python", "Deep Learning", "ResNet50V2", "OpenAI API", "Data Augmentation"],
      impact: "Helps farmers identify rice plant diseases early and get treatment recommendations automatically"
    },
    {
      id: 2,
      title: "Movie Recommendation & Review Analysis System",
      description: "Led a 10-member team to build an NLP-based recommendation system using cosine similarity and sentiment analysis, with backend services implemented in Flask.",
      tech: ["Python", "Flask", "NLP", "Sentiment Analysis", "Cosine Similarity"],
      impact: "Provides personalized movie recommendations based on user preferences and review analysis"
    }
  ];

  return (
    <section id="projects">
      <h1>Projects</h1>
      <p>A collection of projects I've built, showcasing my skills in backend development, machine learning, and full-stack engineering.</p>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            <div className="project-tech">
              <strong>Tech Stack:</strong>
              <div className="tech-tags">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="project-impact">
              <strong>Impact:</strong>
              <p>{project.impact}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
