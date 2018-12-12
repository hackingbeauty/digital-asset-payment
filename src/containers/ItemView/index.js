import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import { withRouter }       from 'react-router-dom'
import Button               from 'components/Button'
import accountSvg           from 'assets/svgs/account.svg'
import imagePlaceholderSvg  from 'assets/svgs/image-placeholder.svg'
import bellCurveSvg         from 'assets/svgs/bell-curve.svg'
import blockchainSvg        from 'assets/svgs/blockchain.svg'
import contractSvg          from 'assets/svgs/contract.svg'
import craneSvg             from 'assets/svgs/crane.svg'
import dependencyGraphSvg   from 'assets/svgs/dependency-graph.svg'
import detectionSvg         from 'assets/svgs/detection.svg'
import lazyLoadingSvg       from 'assets/svgs/lazy-loading.svg'
import loseMoneySvg         from 'assets/svgs/lose-money.svg'
import lockSvg              from 'assets/svgs/lock.svg'
import modularizationSvg    from 'assets/svgs/modularization.svg'
import { styles }           from './styles.scss'

const icons = {
  'account.svg': accountSvg,
  'image-placeholder.svg': imagePlaceholderSvg,
  'bell-curve.svg': bellCurveSvg,
  'blockchain.svg': blockchainSvg,
  'contract.svg': contractSvg,
  'crane.svg': craneSvg,
  'dependency-graph.svg': dependencyGraphSvg,
  'detection.svg': detectionSvg,
  'lazy-loading.svg': lazyLoadingSvg,
  'lose-money.svg': loseMoneySvg,
  'lock.svg': lockSvg,
  'modularization.svg': modularizationSvg
}

class ItemView extends Component {
  render() {
    const fileName = this.props.location.search.substr(1)

    return (
      <div className={styles}>
        <div className="container">
          <img className="icon" src={icons[`${fileName}`]} alt="icon" />
          <Button color="primary">Buy Now!</Button>
        </div>
      </div>
    )
  }
}

ItemView.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string
  }).isRequired
}

export default withRouter(ItemView)
