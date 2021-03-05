import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { CONFIGURE_RETURNED, GET_BALANCES, GET_BALANCES_RETURNED } from '../../constants';
import Store from '../../stores';
import BalleButton from '../BalleButton/BalleButton';
import UnlockModal from '../unlock/unlockModal.jsx';
import styles from './styles';

const emitter = Store.emitter;
const dispatcher = Store.dispatcher;
const store = Store.store;

class RewardPools extends Component {
  constructor(props) {
    super();

    const account = store.getStore('account');
    const rewardPools = store.getStore('rewardPools');

    this.state = {
      rewardPools: rewardPools,
      loading: !(account && rewardPools),
      account: account,
    };

    dispatcher.dispatch({ type: GET_BALANCES, content: {} });
  }

  componentWillMount() {
    emitter.on(CONFIGURE_RETURNED, this.configureReturned);
    emitter.on(GET_BALANCES_RETURNED, this.balancesReturned);
  }

  componentWillUnmount() {
    emitter.removeListener(CONFIGURE_RETURNED, this.configureReturned);
    emitter.removeListener(GET_BALANCES_RETURNED, this.balancesReturned);
  }

  balancesReturned = () => {
    const rewardPools = store.getStore('rewardPools');
    this.setState({ rewardPools: rewardPools });
  };

  configureReturned = () => {
    this.setState({ loading: false });
  };

  render() {
    const { classes } = this.props;
    const { modalOpen } = this.state;

    return (
      <div className={classes.root}>
        <Typography variant={'h5'} className={classes.disclaimer}>
          This project is in Beta. Use with caution and DYOR.
        </Typography>
        <div className={classes.rewardPools}>{this.renderRewards()}</div>
        {modalOpen && this.renderModal()}
      </div>
    );
  }

  renderRewards = () => {
    const { rewardPools } = this.state;

    return rewardPools.map((rewardPool) => {
      return this.renderRewardPool(rewardPool);
    });
  };

  renderRewardPool = (rewardPool) => {
    const { classes } = this.props;

    var address = null;
    let addy = '';
    if (rewardPool.tokens && rewardPool.tokens[0]) {
      addy = rewardPool.tokens[0].rewardsAddress;
      address = addy.substring(0, 6) + '...' + addy.substring(addy.length - 4, addy.length);
    }

    return (
      <div className={classes.rewardPoolContainer} key={rewardPool.id}>
        <Typography variant='h3' className={classes.poolName}>
          <img
            alt={rewardPool.id}
            className={classes.poolLogo}
            src={require('../../assets/' + rewardPool.id + '-logo.png')}
          />
          {rewardPool.name}
        </Typography>
        <a href={rewardPool.link} target='_blank' rel='noopener noreferrer' className={classes.poolBrief}>
          {rewardPool.brief}
        </a>
        <Typography varian='h4' className={classes.contractLabel} align='center'>
          Contract Address:
          <a
            href={`https://bscscan.com/address/${addy}`}
            target='_blank'
            rel='noopener noreferrer'
            className={classes.contractAddress}
          >
            {` ${address}`}
          </a>
        </Typography>

        <BalleButton
          onClick={() => {
            if (rewardPool.tokens.length > 0) {
              this.navigateStake(rewardPool);
            }
          }}
        >
          OPEN
        </BalleButton>
      </div>
    );
  };

  navigateStake = (rewardPool) => {
    store.setStore({ currentPool: rewardPool });

    this.props.history.push('/stake');
  };

  renderModal = () => {
    return <UnlockModal closeModal={this.closeModal} modalOpen={this.state.modalOpen} />;
  };

  overlayClicked = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };
}

export default withRouter(withStyles(styles)(RewardPools));
