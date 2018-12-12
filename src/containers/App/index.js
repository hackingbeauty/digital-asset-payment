import React, { Component }         from 'react'
import PropTypes                    from 'prop-types'
import { connect }                  from 'react-redux'
import { bindActionCreators }       from 'redux'
import { MuiThemeProvider }         from '@material-ui/core/styles'
import {
  HashRouter,
  Redirect,
  Switch
} from 'react-router-dom'
import theme                        from 'configs/theme/config-theme'
import UploadView                   from 'containers/UploadView'
import AssetsView                   from 'containers/AssetsView'
import PendingTransactionsView      from 'containers/PendingTransactionsView'
import LatestUploadsView            from 'containers/LatestUploadsView'
import RegisterView                 from 'containers/RegisterView'
import HomeView                     from 'containers/HomeView'
import BuyView                      from 'containers/BuyView'
import ItemView                     from 'containers/ItemView'
import * as providerActionCreators  from 'core/actions/actions-provider'
import BuyerLayoutRoute             from './layouts/BuyerLayoutRoute'
import SellerLayoutRoute            from './layouts/SellerLayoutRoute'
import NoHeaderRoute                from './layouts/NoHeaderRoute'
import MetaMaskNotification         from './components/MetaMaskNotification'

import './styles.scss' // global styles

class App extends Component {
  componentDidMount() {
    const { actions } = this.props
    actions.provider.setProvider()
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <HashRouter>
          <Switch>
            <NoHeaderRoute path="/home" component={HomeView} />
            <SellerLayoutRoute path="/sell" component={AssetsView} />
            <BuyerLayoutRoute path="/item" component={ItemView} />
            <BuyerLayoutRoute path="/buy" component={BuyView} />
            <SellerLayoutRoute path="/pending" component={PendingTransactionsView} />
            <SellerLayoutRoute path="/latest" component={LatestUploadsView} />
            <SellerLayoutRoute path="/upload" component={UploadView} />
            <NoHeaderRoute path="/register" component={RegisterView} />
            <Redirect from="/" to="/home" />
          </Switch>
        </HashRouter>
        <MetaMaskNotification />
      </MuiThemeProvider>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      provider: bindActionCreators(providerActionCreators, dispatch)
    }
  }
}

App.propTypes = {
  actions: PropTypes.shape({}).isRequired
}

export default connect(null, mapDispatchToProps)(App)
