export default function Contact() {
  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <p>I'm always interested in connecting with fellow developers, discussing technology, and exploring new opportunities. Feel free to reach out through any of the channels below!</p>
      
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <div className="contact-item">
            <h3>📧 Email</h3>
            <p><a href="mailto:amnandeeshshastri@gmail.com">amnandeeshshastri@gmail.com</a></p>
          </div>
          
          <div className="contact-item">
            <h3>📱 Phone</h3>
            <p><a href="tel:6361379262">+91 6361379262</a></p>
          </div>
          
          <div className="contact-item">
            <h3>💼 LinkedIn</h3>
            <p><a href="https://linkedin.com/in/a-m-nandeesh" target="_blank" rel="noopener noreferrer">linkedin.com/in/a-m-nandeesh</a></p>
          </div>
          
          <div className="contact-item">
            <h3>💻 GitHub</h3>
            <p><a href="https://github.com/AM-Nandeesh" target="_blank" rel="noopener noreferrer">github.com/AM-Nandeesh</a></p>
          </div>
          
          <div className="contact-item">
            <h3>🏆 LeetCode</h3>
            <p><a href="https://leetcode.com/u/am-nandeesh/" target="_blank" rel="noopener noreferrer">leetcode.com/u/am-nandeesh</a></p>
          </div>
        </div>

        <div className="contact-availability">
          <h2>Availability</h2>
          <p>I'm open to:</p>
          <ul>
            <li>✓ Full-time opportunities</li>
            <li>✓ Contract work</li>
            <li>✓ Collaborative projects</li>
            <li>✓ Technical discussions</li>
            <li>✓ Competitive Programming</li>
          </ul>
        </div>
      </div>

      <div className="contact-message">
        <p>Whether you have a question or just want to say hi, feel free to get in touch. I'll try my best to get back to you!</p>
      </div>
    </section>
  )
}
