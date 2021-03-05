import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { CONNECTION_CONNECTED, CONNECTION_DISCONNECTED } from '../../constants';
import Store from '../../stores';
import { colors } from '../../theme';
import BalleButton from '../BalleButton/BalleButton';
import UnlockModal from '../unlock/unlockModal.jsx';
import styles from './styles';

const emitter = Store.emitter;
const store = Store.store;

class Header extends Component {
  constructor(props) {
    super();

    this.state = {
      account: store.getStore('account'),
      modalOpen: false,
    };
  }

  componentWillMount() {
    emitter.on(CONNECTION_CONNECTED, this.connectionConnected);
    emitter.on(CONNECTION_DISCONNECTED, this.connectionDisconnected);
  }

  componentWillUnmount() {
    emitter.removeListener(CONNECTION_CONNECTED, this.connectionConnected);
    emitter.removeListener(CONNECTION_DISCONNECTED, this.connectionDisconnected);
  }

  connectionConnected = () => {
    this.setState({ account: store.getStore('account') });
  };

  connectionDisconnected = () => {
    this.setState({ account: store.getStore('account') });
  };

  render() {
    const { classes } = this.props;

    const { account, modalOpen } = this.state;

    var address = null;
    if (account.address) {
      address =
        account.address.substring(0, 6) +
        '...' +
        account.address.substring(account.address.length - 4, account.address.length);
    }

    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <div className={classes.icon}>
            <img
              alt=''
              src={require('../../assets/logo_balle_header_160px.png')}
              height={'70px'}
              onClick={() => {
                this.nav('');
              }}
            />
            <Typography
              variant={'h3'}
              className={classes.name}
              onClick={() => {
                this.nav('');
              }}
            >
              ballena.io
            </Typography>
          </div>
          <div className={classes.links}>
            {this.renderLink('gov', 'Gov')}
            {this.renderLink('app', 'App')}
            {this.renderLink('dashboard', 'Stats')}
            {this.renderLink('docs', 'Docs')}
          </div>
          <div className={classes.account}>
            {/* FIXME: check this */}
            {address && (
              <BalleButton onClick={this.addressClicked}>
                {address}
                <div className={classes.connectedDot}></div>
              </BalleButton>
            )}
            {!address && <BalleButton onClick={this.addressClicked}>Connect your wallet</BalleButton>}
          </div>
        </div>
        {modalOpen && this.renderModal()}
      </div>
    );
  }

  renderLink = (name, label, icon) => {
    const Link = styled.a`
      margin: 0 4px;
      font-size: 18px;
      color: ${colors.DARK_BLUE};
      text-decoration: none;

      &:hover {
        color: ${colors.ACCENT_BLUE};
      }
    `;

    const Icon = styled.i`
      margin-right: 0.5rem;
      min-width: 24px;
    `;

    return (
      <Link href={`https://${name}.ballena.io`} target='_blank' rel='noopener noreferrer'>
        <Icon className={`fas fa-${icon}`} />
        <span>{label}</span>
      </Link>
    );
  };

  nav = (screen) => {
    this.props.history.push('/' + screen);
  };

  addressClicked = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  renderModal = () => {
    return <UnlockModal closeModal={this.closeModal} modalOpen={this.state.modalOpen} />;
  };
}

export default withRouter(withStyles(styles)(Header));
