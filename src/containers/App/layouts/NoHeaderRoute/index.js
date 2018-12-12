import React       from 'react'
import { Route }   from 'react-router-dom'
import { styles }  from './styles.scss'

const NoHeaderRoute = ({ component: Component }) => {
  return (
    <Route
      render={matchProps => (
        <div className={styles}>
          <div className="main-content registration-layout">
            <Component {...matchProps} />
          </div>
        </div>
    )}
    />
  )
}

export default NoHeaderRoute
