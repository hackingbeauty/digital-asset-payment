import React, { Component } from 'react'
import Paper                from '@material-ui/core/Paper'
import iconizeLogo          from 'assets/images/iconize-logo.png'
import { Link }             from 'react-router-dom'
import { styles }           from './styles.scss'

class HomeView extends Component {
  render() {
    return (
      <div className={styles}>
        <img src={iconizeLogo} id="logo" width={300} alt="iconize log" />
        <div className="container">
          <Link to="/buy">
            <Paper elevation={1} id="buy-btn">
              I WANT TO BUY
            </Paper>
          </Link>
          <Link to="/sell">
            <Paper elevation={1} id="sell-btn">
              I WANT TO SELL
            </Paper>
          </Link>
        </div>
      </div>
    )
  }
}

export default HomeView
