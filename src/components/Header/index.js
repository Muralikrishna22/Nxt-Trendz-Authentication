import {Link} from 'react-router-dom'

import './index.css'

const Header = () => {
  const logoUrl =
    'https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png'

  return (
    <nav className="nav-container">
      <img src={logoUrl} alt="website logo" className="home-logo" />
      <div className="tabs-container">
        <li>
          <Link to="/" className="tab-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="tab-item">
            products
          </Link>
        </li>
        <li>
          <Link to="/cart" className="tab-item">
            Cart
          </Link>
        </li>
        <button type="button" className="logout-btn">
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Header
