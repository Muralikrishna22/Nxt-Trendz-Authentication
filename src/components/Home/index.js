import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="card-container">
      <div className="description-container">
        <h1 className="heading">Clothes That Get You Noticed </h1>
        <p className="paragraph">
          Fashion is part of the daily air and not quite help that it changes
          all the time. Clothes have always been a marker of era and we are in a
          revolution. Your fashion makes you been seen and heard that way you
          are. So, celebrate the seasons new exciting fashion in your own way.{' '}
        </p>
        <button className="logout-btn" type="button">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="card-image"
      />
    </div>
  </div>
)

export default Home
