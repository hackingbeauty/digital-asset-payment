import React, { Component } from 'react'
import GridListTile         from '@material-ui/core/GridListTile'
import GridListTileBar      from '@material-ui/core/GridListTileBar'
import IconButton           from '@material-ui/core/IconButton'
import { Link }               from 'react-router-dom'
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
    author: 'author',
    id: 1,
    fileName: 'account.svg'
  },
  {
    img: imagePlaceholderSvg,
    title: 'Image Placeholder',
    author: 'author',
    id: 2,
    fileName: 'image-placeholder.svg'
  },
  {
    img: bellCurveSvg,
    title: 'Bell Curve',
    author: 'author',
    id: 3,
    fileName: 'bell-curve.svg'
  },
  {
    img: blockchainSvg,
    title: 'Blockchain',
    author: 'author',
    id: 4,
    fileName: 'blockchain.svg'
  },
  {
    img: contractSvg,
    title: 'Contract',
    author: 'author',
    id: 5,
    fileName: 'contract.svg'
  },
  {
    img: craneSvg,
    title: 'Crane',
    author: 'author',
    id: 6,
    fileName: 'crane.svg'
  },
  {
    img: dependencyGraphSvg,
    title: 'Dependency Graph',
    author: 'author',
    id: 7,
    fileName: 'dependency-graph.svg'
  },
  {
    img: detectionSvg,
    title: 'Detection',
    author: 'author',
    id: 8,
    fileName: 'detection.svg'
  },
  {
    img: lazyLoadingSvg,
    title: 'Lazy Loading',
    author: 'author',
    id: 9,
    fileName: 'lazy-loading.svg'
  },
  {
    img: loseMoneySvg,
    title: 'Lose Money',
    author: 'author',
    id: 10,
    fileName: 'lose-money.svg'
  },
  {
    img: lockSvg,
    title: 'Lock',
    author: 'author',
    id: 11,
    fileName: 'lock.svg'
  },
  {
    img: modularizationSvg,
    title: 'Modularization',
    author: 'author',
    id: 12,
    fileName: 'modularization.svg'
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
                  <Link className="item" to={`/item?${tile.fileName}`}>
                    <Button color="primary">Buy</Button>
                  </Link>
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
