import { InputAdornment, TextField, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import {
  ERROR,
  EXIT,
  EXIT_RETURNED,
  GET_BALANCES_RETURNED,
  GET_REWARDS,
  GET_REWARDS_RETURNED,
  STAKE,
  STAKE_RETURNED,
  WITHDRAW,
  WITHDRAW_RETURNED,
} from '../../constants';
import Store from '../../stores';
import BalleButton from '../BalleButton/BalleButton';
import Loader from '../loader';
import Snackbar from '../snackbar';
import styles from './styles';

const emitter = Store.emitter;
const dispatcher = Store.dispatcher;
const store = Store.store;

class Stake extends Component {
  constructor(props) {
    super();

    const account = store.getStore('account');
    const pool = store.getStore('currentPool');

    if (!pool) {
      props.history.push('/');
    }

    this.state = {
      pool: pool,
      loading: !(account || pool),
      account: account,
      value: 'options',
      voteLockValid: false,
      balanceValid: false,
      voteLock: null,
    };
  }

  componentWillMount() {
    emitter.on(ERROR, this.errorReturned);
    emitter.on(STAKE_RETURNED, this.showHash);
    emitter.on(WITHDRAW_RETURNED, this.showHash);
    emitter.on(EXIT_RETURNED, this.showHash);
    emitter.on(GET_REWARDS_RETURNED, this.showHash);
    emitter.on(GET_BALANCES_RETURNED, this.balancesReturned);
  }

  componentWillUnmount() {
    emitter.removeListener(ERROR, this.errorReturned);
    emitter.removeListener(STAKE_RETURNED, this.showHash);
    emitter.removeListener(WITHDRAW_RETURNED, this.showHash);
    emitter.removeListener(EXIT_RETURNED, this.showHash);
    emitter.removeListener(GET_REWARDS_RETURNED, this.showHash);
    emitter.removeListener(GET_BALANCES_RETURNED, this.balancesReturned);
  }

  calcUserPoolPercentage = () => {
    const { pool } = this.state;
    const tvl = pool.tokens[0].tvl;
    const staked = pool.tokens[0].stakedBalance ? pool.tokens[0].stakedBalance : 0;
    const poolPercentage = staked ? (staked * 100) / tvl : 0;
    return poolPercentage.toFixed(2);
  };

  calcDailyEarnings = () => {
    const { pool } = this.state;
    const { rewardRate } = pool.tokens[0];
    const dailyRewards = rewardRate * 86400;
    const userDailyRewards = (dailyRewards * this.calcUserPoolPercentage()) / 100;
    return userDailyRewards.toFixed(3);
  };

  balancesReturned = () => {
    const currentPool = store.getStore('currentPool');
    const pools = store.getStore('rewardPools');
    let newPool = pools.filter((pool) => {
      return pool.id === currentPool.id;
    });

    if (newPool.length > 0) {
      newPool = newPool[0];
      store.setStore({ currentPool: newPool });
    }
  };

  showHash = (txHash) => {
    this.setState({
      snackbarMessage: null,
      snackbarType: null,
      loading: false,
    });
    const that = this;
    setTimeout(() => {
      const snackbarObj = { snackbarMessage: txHash, snackbarType: 'Hash' };
      that.setState(snackbarObj);
    });
  };

  errorReturned = (error) => {
    const snackbarObj = { snackbarMessage: null, snackbarType: null };
    this.setState(snackbarObj);
    this.setState({ loading: false });
    const that = this;
    setTimeout(() => {
      const snackbarObj = {
        snackbarMessage: error.toString(),
        snackbarType: 'Error',
      };
      that.setState(snackbarObj);
    });
  };

  render() {
    const { classes } = this.props;
    const { value, pool, loading, snackbarMessage } = this.state;

    if (!pool) {
      return null;
    }

    return (
      <div className={classes.root}>
        <div className={classes.intro}>
          <BalleButton
            disabled={loading}
            onClick={() => {
              this.props.history.push('/staking');
            }}
          >
            Back
          </BalleButton>
        </div>

        <div className={classes.overview}>
          <div className={classes.overviewLogo}>
            <img alt='' src={require('../../assets/' + pool.id + '-logo.png')} height='48px' />
          </div>

          <div className={classes.overviewField}>
            <Typography variant={'h3'} className={classes.overviewValue}>
              {pool.tokens[0].balance ? pool.tokens[0].balance.toFixed(2) : '0'} {pool.name}
            </Typography>
            <Typography variant={'h4'} className={classes.overviewTitle}>
              Your Balance
            </Typography>
          </div>
          <div className={classes.overviewField}>
            <Typography variant={'h3'} className={classes.overviewValue}>
              {pool.tokens[0].stakedBalance ? pool.tokens[0].stakedBalance.toFixed(2) : '0'}
            </Typography>
            <Typography variant={'h4'} className={classes.overviewTitle}>
              Currently Staked
            </Typography>
          </div>

          <div className={classes.overviewField}>
            <Typography variant={'h3'} className={classes.overviewValue}>
              {`${pool.tokens[0].rewardsAvailable.toFixed(3)} ${pool.tokens[0].rewardsSymbol}`}
            </Typography>
            <Typography variant={'h4'} className={classes.overviewTitle}>
              Rewards Available
            </Typography>
          </div>
        </div>

        <div className={classes.overview}>
          <div className={classes.overviewField}>
            <Typography variant={'h3'} className={classes.overviewValue}>
              {`${pool.tokens[0].tvl.toFixed()} ${pool.name}`}
            </Typography>
            <Typography variant={'h4'} className={classes.overviewTitle}>
              Total Value Locked
            </Typography>
          </div>
          <div className={classes.overviewField}>
            <Typography variant={'h3'} className={classes.overviewValue}>
              {`${this.calcUserPoolPercentage()}%`}
            </Typography>
            <Typography variant={'h4'} className={classes.overviewTitle}>
              Your Pool %
            </Typography>
          </div>
          <div className={classes.overviewField}>
            <Typography variant={'h3'} className={classes.overviewValue}>
              {`${this.calcDailyEarnings()} ${pool.tokens[0].rewardsSymbol}`}
            </Typography>
            <Typography variant={'h4'} className={classes.overviewTitle}>
              Current Daily Rate
            </Typography>
          </div>
        </div>

        {value === 'options' && this.renderOptions()}
        {value === 'stake' && this.renderStake()}
        {value === 'claim' && this.renderClaim()}
        {value === 'unstake' && this.renderUnstake()}
        {value === 'exit' && this.renderExit()}

        {snackbarMessage && this.renderSnackbar()}
        {loading && <Loader />}
      </div>
    );
  }

  renderOptions = () => {
    const { classes } = this.props;
    const { loading, pool } = this.state;

    return (
      <div className={classes.actions}>
        <div className={classes.actionContainer}>
          <BalleButton
            disabled={!pool.depositsEnabled || loading}
            onClick={() => {
              this.navigateInternal('stake');
            }}
          >
            Stake Tokens
          </BalleButton>
        </div>
        <div className={classes.actionContainer}>
          <BalleButton
            disabled={loading}
            onClick={() => {
              this.onClaim();
            }}
          >
            Claim Rewards
          </BalleButton>
        </div>
        <div className={classes.actionContainer}>
          <BalleButton
            disabled={loading}
            onClick={() => {
              this.navigateInternal('unstake');
            }}
          >
            Unstake Tokens
          </BalleButton>
        </div>
        <div className={classes.actionContainer}>
          <BalleButton
            disabled={loading}
            onClick={() => {
              this.onExit();
            }}
          >
            Claim and Unstake
          </BalleButton>
        </div>
      </div>
    );
  };

  navigateInternal = (val) => {
    this.setState({ value: val });
  };

  renderStake = () => {
    const { classes } = this.props;
    const { loading, pool } = this.state;

    const asset = pool.tokens[0];

    return (
      <div className={classes.actions}>
        <Typography className={classes.title} variant={'h3'}>
          Stake your tokens
        </Typography>
        {this.renderAssetInput(asset, 'stake')}
        <div className={classes.stakeButtons}>
          <BalleButton
            disabled={loading}
            onClick={() => {
              this.navigateInternal('options');
            }}
          >
            Back
          </BalleButton>
          <BalleButton
            disabled={loading}
            onClick={() => {
              this.onStake();
            }}
          >
            Stake
          </BalleButton>
        </div>
      </div>
    );
  };

  renderUnstake = () => {
    const { classes } = this.props;
    const { loading, pool } = this.state;

    const asset = pool.tokens[0];

    return (
      <div className={classes.actions}>
        <Typography className={classes.title} variant={'h3'}>
          Unstake your tokens
        </Typography>
        {this.renderAssetInput(asset, 'unstake')}
        <div className={classes.stakeButtons}>
          <BalleButton
            disabled={loading}
            onClick={() => {
              this.navigateInternal('options');
            }}
          >
            <Typography variant={'h4'}>Back</Typography>
          </BalleButton>
          <BalleButton
            disabled={loading}
            onClick={() => {
              this.onUnstake();
            }}
          >
            Unstake
          </BalleButton>
        </div>
      </div>
    );
  };

  overlayClicked = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  onStake = () => {
    this.setState({ amountError: false });
    const { pool } = this.state;
    const tokens = pool.tokens;
    const selectedToken = tokens[0];
    const amount = this.state[selectedToken.id + '_stake'];

    // if(amount > selectedToken.balance) {
    //   return false
    // }

    this.setState({ loading: true });
    dispatcher.dispatch({
      type: STAKE,
      content: { asset: selectedToken, amount: amount },
    });
  };

  onClaim = () => {
    const { pool } = this.state;
    const tokens = pool.tokens;
    const selectedToken = tokens[0];

    this.setState({ loading: true });
    dispatcher.dispatch({
      type: GET_REWARDS,
      content: { asset: selectedToken },
    });
  };

  onUnstake = () => {
    this.setState({ amountError: false });
    const { pool } = this.state;
    const tokens = pool.tokens;
    const selectedToken = tokens[0];
    const amount = this.state[selectedToken.id + '_unstake'];
    //
    // if(amount > selectedToken.balance) {
    //   return false
    // }

    this.setState({ loading: true });
    dispatcher.dispatch({
      type: WITHDRAW,
      content: { asset: selectedToken, amount: amount },
    });
  };

  onExit = () => {
    const { pool } = this.state;
    const tokens = pool.tokens;
    const selectedToken = tokens[0];

    this.setState({ loading: true });
    dispatcher.dispatch({ type: EXIT, content: { asset: selectedToken } });
  };

  renderAssetInput = (asset, type) => {
    const { classes } = this.props;

    const { loading } = this.state;

    const amount = this.state[asset.id + '_' + type];
    const amountError = this.state[asset.id + '_' + type + '_error'];

    return (
      <div className={classes.valContainer} key={asset.id + '_' + type}>
        <div className={classes.balances}>
          {type === 'stake' && (
            <Typography
              variant='h4'
              onClick={() => {
                this.setAmount(asset.id, type, asset ? asset.balance : 0);
              }}
              className={classes.value}
              noWrap
            >
              {'Balance: ' +
                (asset && asset.balance ? (Math.floor(asset.balance * 10000) / 10000).toFixed(4) : '0.0000')}{' '}
              {asset ? asset.symbol : ''}
            </Typography>
          )}
          {type === 'unstake' && (
            <Typography
              variant='h4'
              onClick={() => {
                this.setAmount(asset.id, type, asset ? asset.stakedBalance : 0);
              }}
              className={classes.value}
              noWrap
            >
              {'Balance: ' +
                (asset && asset.stakedBalance
                  ? (Math.floor(asset.stakedBalance * 10000) / 10000).toFixed(4)
                  : '0.0000')}{' '}
              {asset ? asset.symbol : ''}
            </Typography>
          )}
        </div>
        <div>
          <TextField
            fullWidth
            disabled={loading}
            className={classes.actionInput}
            id={'' + asset.id + '_' + type}
            value={amount}
            error={amountError}
            onChange={this.onChange}
            placeholder='0.00'
            InputProps={{
              endAdornment: (
                <InputAdornment position='end' className={classes.inputAdornment}>
                  <Typography variant='h3' className={''}>
                    {asset.symbol}
                  </Typography>
                </InputAdornment>
              ),
              startAdornment: (
                <InputAdornment position='end' className={classes.inputAdornment}>
                  <div className={classes.assetIcon}>
                    <img alt='' src={require('../../assets/' + asset.symbol + '-logo.png')} height='30px' />
                  </div>
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
    );
  };

  renderSnackbar = () => {
    var { snackbarType, snackbarMessage } = this.state;
    return <Snackbar type={snackbarType} message={snackbarMessage} open={true} />;
  };

  onChange = (event) => {
    let val = [];
    val[event.target.id] = event.target.value;
    this.setState(val);
  };

  setAmount = (id, type, balance) => {
    const bal = (Math.floor((balance === '' ? '0' : balance) * 10000) / 10000).toFixed(4);
    let val = [];
    val[id + '_' + type] = bal;
    this.setState(val);
  };
}

export default withRouter(withStyles(styles)(Stake));
