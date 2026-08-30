import './Home.css'

export default function Home({ onNavigate }) {
  return (
    <div className="home">
      <div className="welcome-section">
        <h2>Welcome to NutritionApp</h2>
        <p>Your personal nutrition information assistant</p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🔍</div>
          <h3>Search Foods</h3>
          <p>Quickly search for any food item and view detailed nutritional information</p>
          <button className="cta-button" onClick={() => onNavigate('search')}>
            Start Searching
          </button>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Track Nutrition</h3>
          <p>Monitor your daily intake of calories, protein, carbs, and more</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🎯</div>
          <h3>Healthy Goals</h3>
          <p>Set and achieve your nutrition goals with personalized recommendations</p>
        </div>
      </div>

      <div className="info-section">
        <h3>How to Use</h3>
        <ol>
          <li>Navigate to the "Search Food" page using the navigation bar</li>
          <li>Enter a food name in the search box</li>
          <li>Select from the results to view detailed nutritional information</li>
          <li>Track your selections and monitor your nutrition</li>
        </ol>
      </div>
    </div>
  )
}
