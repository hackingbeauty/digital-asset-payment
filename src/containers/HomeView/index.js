import React, { Component } from 'react'
import Paper                from '@material-ui/core/Paper'
import { appConfig }        from 'configs/config-main'
import { Link }             from 'react-router-dom'
import { styles }           from './styles.scss'

class HomeView extends Component {
  render() {
    return (
      <div className={styles}>
        <h1>{appConfig.name}</h1>
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
