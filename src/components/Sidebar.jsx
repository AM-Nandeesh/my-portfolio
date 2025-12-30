import { Link, useLocation } from 'react-router-dom'

export default function Sidebar() {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
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
          <li><Link to="/" className={isActive('/')}>Home</Link></li>
          <li><Link to="/experience" className={isActive('/experience')}>Experience</Link></li>
          <li><Link to="/projects" className={isActive('/projects')}>Projects</Link></li>
          <li><Link to="/contact" className={isActive('/contact')}>Contact Me</Link></li>
        </ul>
      </nav>
    </aside>
  )
}
