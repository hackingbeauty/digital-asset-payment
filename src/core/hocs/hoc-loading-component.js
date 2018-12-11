import React             from 'react'
import PropTypes         from 'prop-types'
import { connect }       from 'react-redux'

const propTypes = {
  drizzleStatus: PropTypes.shape({}).isRequired
}

export function enhanceComponent(WrappedComponent) {
  class LoadingComponent extends React.Component {
    render() {
      const isLoading = false

      return (
        <div>
          <div>
            <WrappedComponent {...this.props} isLoading={isLoading} />
          </div>
        </div>
      )
    }
  }

  LoadingComponent.propTypes = propTypes

  return LoadingComponent
}

export const mapStateToProps = (state) => {
  return {
    drizzleStatus: state.drizzleStatus
  }
}

export default function loadingComponent(listKey) {
  return function enhance(WrappedComponent) {
    return connect(
      mapStateToProps
    )(enhanceComponent(WrappedComponent, listKey))
  }
}
