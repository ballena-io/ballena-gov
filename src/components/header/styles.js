import React from 'react';
import styled from 'styled-components';

import { colors } from '../../theme';

const NavLink = styled.a`
  margin: 0 1rem;
  font-size: 1.2rem;
  font-weight: 400;
  color: #000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Icon = styled.i`
  margin-right: 0.5rem;
  min-width: 24px;
`;

const NavIcon = (p) => {
  return <Icon className={`fas fa-${p.type}`}></Icon>;
};

export { NavLink, NavIcon };

const styles = (theme) => ({
  root: {
    verticalAlign: 'top',
    width: '100%',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '40px',
    },
  },
  header: {
    border: 'none',
    width: '100%',
    display: 'flex',
    padding: '2rem 3rem',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-between',
      padding: '1rem 2rem',
    },
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    cursor: 'pointer',
  },
  links: {
    display: 'flex',
  },
  link: {
    fontWeight: '900',
    padding: '.5rem 2rem',
    borderRadius: '2rem',
    margin: '0 1rem',
    cursor: 'pointer',
    '&:hover': { backgroundColor: '#FBF6F0' },
  },
  linkActive: {
    fontWeight: '900',
    backgroundColor: '#000',
    color: '#fff',
    padding: '.5rem 2rem',
    borderRadius: '2rem',
    margin: '0 1rem',
    cursor: 'pointer',
  },
  socialLink: {
    margin: '0 1rem',
  },
  account: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flex: '0',
    },
  },
  walletAddress: {
    padding: '1rem',
    borderRadius: '.5rem',
    backgroundColor: '#F8F2EC',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      background: '#fff',
      color: '#000',
    },
    '&:active': {
      background: '#000',
      color: '#fff',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      position: 'absolute',
      top: '5rem',
    },
  },
  connectedDot: {
    background: colors.compoundGreen,
    opacity: '1',
    borderRadius: '10px',
    width: '10px',
    height: '10px',
    marginRight: '3px',
    marginLeft: '6px',
  },
  name: {
    fontSize: '32px',
    paddingLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
});

export default styles;
