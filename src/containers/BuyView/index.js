import React, { Component } from 'react'
import GridListTile         from '@material-ui/core/GridListTile'
import GridListTileBar      from '@material-ui/core/GridListTileBar'
import IconButton           from '@material-ui/core/IconButton'
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

const tileData = [
  {
    img: accountSvg,
    title: 'Account',
    author: 'author'
  },
  {
    img: imagePlaceholderSvg,
    title: 'Image Placeholder',
    author: 'author'
  },
  {
    img: bellCurveSvg,
    title: 'Bell Curve',
    author: 'author'
  },
  {
    img: blockchainSvg,
    title: 'Blockchain',
    author: 'author'
  },
  {
    img: contractSvg,
    title: 'Contract',
    author: 'author'
  },
  {
    img: craneSvg,
    title: 'Crane',
    author: 'author'
  },
  {
    img: dependencyGraphSvg,
    title: 'Dependency Graph',
    author: 'author'
  },
  {
    img: detectionSvg,
    title: 'Detection',
    author: 'author'
  },
  {
    img: lazyLoadingSvg,
    title: 'Lazy Loading',
    author: 'author'
  },
  {
    img: loseMoneySvg,
    title: 'Lose Money',
    author: 'author'
  },
  {
    img: lockSvg,
    title: 'Lock',
    author: 'author'
  },
  {
    img: modularizationSvg,
    title: 'Modularization',
    author: 'author'
  }
]

class BuyView extends Component {
  render() {
    return (
      <div className={styles}>
        {tileData.map(tile => (
          <GridListTile
            key={tile.img}
            classes={{
              root: 'gridlisttile-root',
              tile: 'gridlisttile-tile',
              imgFullWidth: 'gridlisttile-img'
            }}
          >
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton>
                  <Button color="primary">Buy</Button>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </div>
    )
  }
}

export default BuyView
