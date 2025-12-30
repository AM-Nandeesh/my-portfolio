
import './App.css'

function App() {
  return (
    <div className="portfolio-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>A M Nandeesh</h2>
          <p>Mobile: <a href="tel:6361379262">6361379262</a></p>
          <p><a href="mailto:amnandeeshshastri@gmail.com">amnandeeshshastri@gmail.com</a></p>
          <p><a href="https://linkedin.com/in/a-m-nandeesh" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          <p><a href="https://github.com/AM-Nandeesh" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <section id="home">
          <h1>Home</h1>
          <p>Welcome to my portfolio!</p>
        </section>
        <section id="experience">
          <h1>Professional Summary</h1>
          <p>Software Development Engineer with experience building scalable backend systems, REST APIs, and data-intensive services. Strong foundations in Data Structures & Algorithms, problem-solving, and writing clean, production-ready code.</p>
          <h2>Experience</h2>
          <div className="exp-item">
            <h3>GE Vernova, Bengaluru, India</h3>
            <p><strong>Software Engineering Specialist</strong> <em>Oct 2024 – Present</em></p>
            <ul>
              <li>Software engineer on SmartSignal, an industrial diagnostics platform using ML-based predictive analytics across on-premise (.NET, WPF, WCF) and cloud systems.</li>
              <li>Worked with VBM, SBM, and VBM++ models to analyze large-scale time-series sensor data for early fault detection and condition monitoring.</li>
              <li>Implemented detection logic for Sensor Health Monitoring (SHM) to identify faulty or degraded sensors, reducing false diagnostic alerts and improving overall system trustworthiness.</li>
              <li>Built and optimized backend workflows to ingest high-volume sensor data, execute predictive models, and surface diagnostics via alerts, dashboards, and operational visualizations.</li>
              <li>Maintained strong engineering standards through PR reviews, unit testing, CI/CD via Jenkins, security hardening (AWS WAF), and quarterly release validation.</li>
            </ul>
          </div>
          <div className="exp-item">
            <h3>Superleap, Bengaluru, India</h3>
            <p><strong>Software Developer Intern</strong> <em>Jul 2024 – Oct 2024</em></p>
            <ul>
              <li>Developed backend services for a CRM platform, building REST APIs and implementing role-based access control (RBAC).</li>
              <li>Integrated third-party systems including Google Ads and Facebook Lead Forms to automate lead ingestion workflows.</li>
            </ul>
          </div>
          <div className="exp-item">
            <h3>EnqDB Technologies Pvt. Ltd., Bengaluru, India</h3>
            <p><strong>Software Development Engineer Intern</strong> <em>Jul 2023 – Jul 2024</em></p>
            <ul>
              <li>Core Engineer in a 3-member founding team, owning architecture, design decisions, and end-to-end implementation across AI-driven products.</li>
              <li>Built Workplace AI Assist and a Website Assistant (Chrome Extension) using RAG pipelines to enable natural language querying across enterprise tools and live web content.</li>
              <li>Architected EnqDB AI Analytics, allowing customers to ask natural language questions over databases and automatically generate SQL queries and dashboards.</li>
              <li>Implemented NL-to-SQL pipelines using LLMs and vector retrieval, supporting integrations with PostgreSQL, MySQL, and BigQuery.</li>
            </ul>
          </div>
          <h2>Technical Skills</h2>
          <ul>
            <li>Core CS: Data Structures & Algorithms, Problem Solving, OOP</li>
            <li>Languages: Go, Java, C#, Python</li>
            <li>Backend & Systems: REST APIs, Microservices, API Design, Clean Architecture</li>
            <li>Databases: PostgreSQL, MySQL, BigQuery, Redis, SQL</li>
            <li>Testing & DevOps: Unit Testing, API Testing, CI/CD, Jenkins</li>
            <li>Tools: Postman, GitHub, Splunk, GitHub Copilot</li>
          </ul>
          <h2>Education</h2>
          <p>Dayananda Sagar College of Engineering<br />BE in Information Science and Engineering — GPA: 8.90 Bengaluru<br />Jun 2024</p>
        </section>
        <section id="projects">
          <h1>Projects</h1>
          <div className="project-item">
            <h3>Rice Plant Disease Detection & Advisory System</h3>
            <p>Built a ResNet50V2-based image classification system with extensive data augmentation to detect rice diseases; integrated OpenAI API to provide automated diagnosis and treatment recommendations.</p>
            <p><strong>Tech Stack:</strong> Python, Deep Learning, ResNet50V2, OpenAI API, Data Augmentation</p>
          </div>
          <div className="project-item">
            <h3>Movie Recommendation & Review Analysis System</h3>
            <p>Led a 10-member team to build an NLP-based recommendation system using cosine similarity and sentiment analysis, with backend services implemented in Flask.</p>
            <p><strong>Tech Stack:</strong> Python, Flask, NLP, Sentiment Analysis, Cosine Similarity</p>
          </div>
        </section>
        <section id="contact">
          <h1>Contact Me</h1>
          <p>I'm always interested in connecting with fellow developers, discussing technology, and exploring new opportunities. Feel free to reach out!</p>
          <div className="contact-info">
            <p><strong>Email:</strong> <a href="mailto:amnandeeshshastri@gmail.com">amnandeeshshastri@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:6361379262">6361379262</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/a-m-nandeesh" target="_blank" rel="noopener noreferrer">linkedin.com/in/a-m-nandeesh</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/AM-Nandeesh" target="_blank" rel="noopener noreferrer">github.com/AM-Nandeesh</a></p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
