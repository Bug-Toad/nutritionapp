import { useState } from 'react'
import './SearchFood.css'

const USDA_API_KEY = 'DEMO_KEY'

export default function SearchFood() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [selectedFood, setSelectedFood] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const searchFoods = async (e) => {
    e.preventDefault()
    if (!searchTerm.trim()) return

    setLoading(true)
    setError('')
    setSearchResults([])
    setSelectedFood(null)

    // Use sample data for demo/testing
    setTimeout(() => {
      setSampleResults()
      setLoading(false)
    }, 500)

    // Commented out: Real API call
    /*
    try {
      const response = await fetch(
        `https://fdc.nal.usda.gov/api/foods/search?query=${encodeURIComponent(searchTerm)}&pageSize=10&api_key=${USDA_API_KEY}`
      )

      if (!response.ok) {
        throw new Error('Failed to fetch food data')
      }

      const data = await response.json()

      if (data.foods && data.foods.length > 0) {
        setSearchResults(data.foods)
      } else {
        setError('No foods found. Try a different search term.')
      }
    } catch (err) {
      setError(`Error: ${err.message}. Using sample data instead.`)
      // Use sample data as fallback
      setSampleResults()
    } finally {
      setLoading(false)
    }
    */
  }

  const setSampleResults = () => {
    const sampleFoods = [
      {
        fdcId: 'sample1',
        description: 'Apple, raw, with skin',
        foodNutrients: [
          { nutrient: { name: 'Energy' }, value: 52, unitName: 'kcal' },
          { nutrient: { name: 'Protein' }, value: 0.26, unitName: 'g' },
          { nutrient: { name: 'Carbohydrate' }, value: 13.81, unitName: 'g' },
          { nutrient: { name: 'Fat' }, value: 0.17, unitName: 'g' },
          { nutrient: { name: 'Fiber' }, value: 2.4, unitName: 'g' },
        ]
      },
      {
        fdcId: 'sample2',
        description: 'Banana, raw',
        foodNutrients: [
          { nutrient: { name: 'Energy' }, value: 89, unitName: 'kcal' },
          { nutrient: { name: 'Protein' }, value: 1.09, unitName: 'g' },
          { nutrient: { name: 'Carbohydrate' }, value: 22.84, unitName: 'g' },
          { nutrient: { name: 'Fat' }, value: 0.33, unitName: 'g' },
          { nutrient: { name: 'Fiber' }, value: 2.6, unitName: 'g' },
        ]
      },
      {
        fdcId: 'sample3',
        description: 'Chicken breast, cooked',
        foodNutrients: [
          { nutrient: { name: 'Energy' }, value: 165, unitName: 'kcal' },
          { nutrient: { name: 'Protein' }, value: 31, unitName: 'g' },
          { nutrient: { name: 'Carbohydrate' }, value: 0, unitName: 'g' },
          { nutrient: { name: 'Fat' }, value: 3.6, unitName: 'g' },
          { nutrient: { name: 'Fiber' }, value: 0, unitName: 'g' },
        ]
      },
    ]
    setSearchResults(sampleFoods)
  }

  const selectFood = (food) => {
    setSelectedFood(food)
  }

  const getNutrientValue = (nutrients, nutrientName) => {
    if (!nutrients) return 'N/A'
    const nutrient = nutrients.find(n =>
      n.nutrient?.name?.toLowerCase().includes(nutrientName.toLowerCase())
    )
    if (nutrient) {
      return `${parseFloat(nutrient.value).toFixed(2)} ${nutrient.unitName || ''}`
    }
    return 'N/A'
  }

  return (
    <div className="search-food">
      <div className="search-container">
        <h2>🔍 Search for Foods</h2>
        <form onSubmit={searchFoods} className="search-form">
          <input
            type="text"
            placeholder="Enter food name (e.g., apple, chicken, milk)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button" disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>

        {error && <div className="error-message">{error}</div>}

        <div className="results-section">
          {searchResults.length > 0 && !selectedFood && (
            <div className="search-results">
              <h3>Found {searchResults.length} results:</h3>
              <div className="results-list">
                {searchResults.map((food) => (
                  <div key={food.fdcId} className="result-item">
                    <div className="result-info">
                      <p className="result-name">{food.description}</p>
                      <p className="result-meta">
                        Data Type: {food.dataType || 'N/A'}
                      </p>
                    </div>
                    <button
                      className="view-button"
                      onClick={() => selectFood(food)}
                    >
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedFood && (
            <div className="nutrition-details">
              <button
                className="back-button"
                onClick={() => setSelectedFood(null)}
              >
                ← Back to Results
              </button>

              <div className="nutrition-card">
                <h3>{selectedFood.description}</h3>
                <p className="serving-size">Per 100g</p>

                <div className="nutrition-grid">
                  <div className="nutrition-item main">
                    <div className="nutrition-label">Energy</div>
                    <div className="nutrition-value">
                      {getNutrientValue(selectedFood.foodNutrients, 'energy')}
                    </div>
                  </div>

                  <div className="nutrition-item">
                    <div className="nutrition-label">Protein</div>
                    <div className="nutrition-value">
                      {getNutrientValue(selectedFood.foodNutrients, 'protein')}
                    </div>
                  </div>

                  <div className="nutrition-item">
                    <div className="nutrition-label">Carbs</div>
                    <div className="nutrition-value">
                      {getNutrientValue(selectedFood.foodNutrients, 'carbohydrate')}
                    </div>
                  </div>

                  <div className="nutrition-item">
                    <div className="nutrition-label">Fat</div>
                    <div className="nutrition-value">
                      {getNutrientValue(selectedFood.foodNutrients, 'fat')}
                    </div>
                  </div>

                  <div className="nutrition-item">
                    <div className="nutrition-label">Fiber</div>
                    <div className="nutrition-value">
                      {getNutrientValue(selectedFood.foodNutrients, 'fiber')}
                    </div>
                  </div>

                  <div className="nutrition-item">
                    <div className="nutrition-label">Calcium</div>
                    <div className="nutrition-value">
                      {getNutrientValue(selectedFood.foodNutrients, 'calcium')}
                    </div>
                  </div>

                  <div className="nutrition-item">
                    <div className="nutrition-label">Iron</div>
                    <div className="nutrition-value">
                      {getNutrientValue(selectedFood.foodNutrients, 'iron')}
                    </div>
                  </div>

                  <div className="nutrition-item">
                    <div className="nutrition-label">Sodium</div>
                    <div className="nutrition-value">
                      {getNutrientValue(selectedFood.foodNutrients, 'sodium')}
                    </div>
                  </div>
                </div>

                {selectedFood.foodNutrients && selectedFood.foodNutrients.length > 0 && (
                  <div className="all-nutrients">
                    <h4>All Nutrients</h4>
                    <table className="nutrients-table">
                      <thead>
                        <tr>
                          <th>Nutrient</th>
                          <th>Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedFood.foodNutrients.slice(0, 15).map((n, idx) => (
                          <tr key={idx}>
                            <td>{n.nutrient?.name || 'Unknown'}</td>
                            <td>
                              {parseFloat(n.value).toFixed(2)} {n.unitName || ''}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}

          {!loading && searchResults.length === 0 && !error && (
            <div className="placeholder">
              <p>Search for a food to see nutritional information</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
