import React, { Component } from 'react'
import GridList             from '@material-ui/core/GridList'
import GridListTile         from '@material-ui/core/GridListTile'
import GridListTileBar      from '@material-ui/core/GridListTileBar'
import ListSubheader        from '@material-ui/core/ListSubheader'
import IconButton           from '@material-ui/core/IconButton'
import InfoIcon             from '@material-ui/icons/Info'
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
    title: 'Image',
    author: 'author'
  },
  {
    img: imagePlaceholderSvg,
    title: 'Image',
    author: 'author'
  },
  {
    img: bellCurveSvg,
    title: 'Image',
    author: 'author'
  },
  {
    img: blockchainSvg,
    title: 'Image',
    author: 'author'
  },
  {
    img: contractSvg,
    title: 'Image',
    author: 'author'
  },
  {
    img: craneSvg,
    title: 'Image',
    author: 'author'
  },
  {
    img: dependencyGraphSvg,
    title: 'Image',
    author: 'author'
  },
  {
    img: detectionSvg,
    title: 'Image',
    author: 'author'
  },
  {
    img: lazyLoadingSvg,
    title: 'Image',
    author: 'author'
  },
  {
    img: loseMoneySvg,
    title: 'Image',
    author: 'author'
  },
  {
    img: lockSvg,
    title: 'Image',
    author: 'author'
  },
  {
    img: modularizationSvg,
    title: 'Image',
    author: 'author'
  }
]

class BuyView extends Component {
  render() {
    return (
      <div className={styles}>

        <GridList cellHeight={180}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">December</ListSubheader>
          </GridListTile>
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
  }
}

export default BuyView
