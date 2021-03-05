import { colors, custom } from '../../theme';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '900px',
    width: '100%',
    alignItems: 'center',
    margin: '0 auto',
  },
  intro: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '400px',
  },
  introCenter: {
    minWidth: '100%',
    textAlign: 'center',
    padding: '48px 0px',
  },
  investedContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px',
    minWidth: '100%',
    [theme.breakpoints.up('md')]: {
      minWidth: '800px',
    },
  },
  connectContainer: {
    padding: '12px',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '450px',
    [theme.breakpoints.up('md')]: {
      width: '450',
    },
  },
  buttonText: {
    fontWeight: '700',
    color: 'white',
  },
  disclaimer: {
    padding: '12px',
    border: '1px solid #F8F2EC',
    borderRadius: '0',
    background: '#F72322;',
    marginBottom: '2rem',
    fontWeight: 900,
    color: '#fff',
  },
  rewardPools: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  rewardPoolContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '260px',
    padding: '2rem 3rem',
    marginBottom: '2rem',
    border: custom.accentBlueBorder,
    borderRadius: '8px',
    background: colors.LIGHT_BLUE,
  },
  title: {
    width: '100%',
    color: colors.DARK_BLUE,
    minWidth: '100%',
    marginLeft: '20px',
  },
  poolName: {
    paddingBottom: '.2rem',
    color: colors.DARK_BLUE,
  },
  poolLogo: {
    width: '16px',
    marginLeft: '-1rem',
    marginRight: '.5rem',
  },
  poolBrief: {
    color: colors.ACCENT_BLUE,
    marginBottom: '20px',
    textDecoration: 'none',
    '&:hover': { textDecoration: 'underline' },
  },
  contractLabel: {
    color: colors.DARK_BLUE,
    paddingBottom: '20px',
    fontWeight: '600',
  },
  contractAddress: {
    color: colors.ACCENT_BLUE,
    textDecoration: 'none',
    '&:hover': { textDecoration: 'underline' },
  },
});

export default styles;
