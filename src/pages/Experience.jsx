export default function Experience() {
  return (
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
        <li><strong>Core CS:</strong> Data Structures & Algorithms, Problem Solving, OOP</li>
        <li><strong>Languages:</strong> Go, Java, C#, Python</li>
        <li><strong>Backend & Systems:</strong> REST APIs, Microservices, API Design, Clean Architecture</li>
        <li><strong>Databases:</strong> PostgreSQL, MySQL, BigQuery, Redis, SQL</li>
        <li><strong>Testing & DevOps:</strong> Unit Testing, API Testing, CI/CD, Jenkins</li>
        <li><strong>Tools:</strong> Postman, GitHub, Splunk, GitHub Copilot</li>
      </ul>

      <h2>Education</h2>
      <div className="exp-item">
        <h3>Dayananda Sagar College of Engineering</h3>
        <p><strong>BE in Information Science and Engineering</strong></p>
        <p>GPA: 8.90 | Bengaluru | Jun 2024</p>
      </div>
    </section>
  )
}
