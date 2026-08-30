import './Navigation.css'

export default function Navigation({ currentPage, onNavigate }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="nav-logo">🥗 NutritionApp</h1>
        <ul className="nav-menu">
          <li className="nav-item">
            <button
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => onNavigate('home')}
            >
              Home
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${currentPage === 'search' ? 'active' : ''}`}
              onClick={() => onNavigate('search')}
            >
              Search Food
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
