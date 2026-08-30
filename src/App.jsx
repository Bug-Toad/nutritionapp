import { useState } from 'react'
import './App.css'
import Navigation from './Navigation'
import Home from './Home'
import SearchFood from './SearchFood'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'search':
        return <SearchFood />
      case 'home':
      default:
        return <Home onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="app">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <footer className="footer">
        <p>&copy; 2024 NutritionApp. All rights reserved. Data from USDA FoodData Central</p>
      </footer>
    </div>
  )
}
