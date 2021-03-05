import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { CONFIGURE_RETURNED, CONNECTION_CONNECTED, CONNECTION_DISCONNECTED, ERROR } from '../../constants';
import Store from '../../stores';
import BalleButton from '../BalleButton/BalleButton';
import UnlockModal from '../unlock/unlockModal.jsx';
import styles from './styles';

const emitter = Store.emitter;
const store = Store.store;

class Account extends Component {
  constructor(props) {
    super();

    const account = store.getStore("account");

    this.state = {
      loading: false,
      account: account,
      assets: store.getStore("assets"),
      modalOpen: false,
    };
  }
  componentWillMount() {
    emitter.on(ERROR, this.errorReturned);
    emitter.on(CONNECTION_CONNECTED, this.connectionConnected);
    emitter.on(CONNECTION_DISCONNECTED, this.connectionDisconnected);
    emitter.on(CONFIGURE_RETURNED, this.configureReturned);
  }

  componentWillUnmount() {
    emitter.removeListener(ERROR, this.errorReturned);
    emitter.removeListener(CONNECTION_CONNECTED, this.connectionConnected);
    emitter.removeListener(CONNECTION_DISCONNECTED, this.connectionDisconnected);
    emitter.removeListener(CONFIGURE_RETURNED, this.configureReturned);
  }

  connectionConnected = () => {
    // this.setState({ account: store.getStore('account') })
  };

  configureReturned = () => {
    // this.props.history.push('/')
  };

  connectionDisconnected = () => {
    this.setState({ account: store.getStore("account"), loading: false });
  };

  errorReturned = (error) => {
    //TODO: handle errors
  };

  render() {
    const { classes } = this.props;
    const { modalOpen } = this.state;

    return (
      <div className={classes.root}>
        {this.renderNotConnected()}
        {modalOpen && this.renderModal()}
      </div>
    );
  }

  renderNotConnected = () => {
    const { classes } = this.props;
    const { loading } = this.state;

    return (
      <div className={classes.notConnectedRoot}>
        <img className={classes.image} src={require("../../assets/logo_balle_pet.png")} alt={"Balle pet"} />

        <div className={classes.connectHeading}>
          <Typography variant="h1">gov.ballena.io</Typography>
        </div>
        {/* <Typography variant={'h4'} className={classes.disclaimer}>
          This project is in Beta. Use with caution and DYOR.
        </Typography> */}
        <div className={classes.connectHeading}>
          <Typography className={classes.connectHeading}>Connect your Wallet to Continue</Typography>
        </div>
        <div className={classes.connectContainer}>
          <BalleButton onClick={this.unlockClicked} disabled={loading}>
            Connect
          </BalleButton>
        </div>
      </div>
    );
  };

  renderModal = () => {
    return <UnlockModal closeModal={this.closeModal} modalOpen={this.state.modalOpen} />;
  };

  unlockClicked = () => {
    this.setState({ modalOpen: true, loading: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false, loading: false });
  };
}

export default withRouter(withStyles(styles)(Account));
