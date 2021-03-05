import { colors, custom } from '../../theme';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px',
    width: '100%',
    alignItems: 'center',
    margin: '0 auto 2rem',
  },
  intro: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  overview: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '28px 30px',
    borderRadius: '8px',
    border: custom.accentBlueBorder,
    marginTop: '40px',
    width: '100%',
    background: colors.LIGHT_BLUE,
  },
  overviewField: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 5px',
  },
  overviewTitle: {
    color: colors.darkGray,
  },
  overviewValue: {},
  actions: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    background: colors.LIGHT_BLUE,
    border: custom.accentBlueBorder,
    padding: '28px 30px',
    borderRadius: '8px',
    margin: '40px 10px',
  },
  actionContainer: {
    minWidth: 'calc(50% - 40px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px',
  },
  buttonText: {
    fontWeight: '700',
  },
  valContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  actionInput: {
    padding: '0px 0px 12px 0px',

    '& input': {
      fontSize: '1.2rem',
      borderBottom: '1px solid #DED9D5',
    },
  },
  inputAdornment: {
    fontWeight: '600',
    fontSize: '1.5rem',
  },
  assetIcon: {
    display: 'inline-block',
    verticalAlign: 'middle',
    borderRadius: '25px',
    background: '#dedede',
    height: '30px',
    width: '30px',
    textAlign: 'center',
    marginRight: '16px',
  },
  balances: {
    width: '100%',
    textAlign: 'right',
    paddingRight: '20px',
    cursor: 'pointer',
  },
  stakeButtons: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    align: 'center',
    marginTop: '2rem',
  },
  requirement: {
    display: 'flex',
    alignItems: 'center',
  },
  check: {
    paddingTop: '6px',
  },
  voteLockMessage: {
    margin: '20px',
  },
  title: {
    color: '#000',
    marginBottom: '2rem',
    width: '100%',
    textAlign: 'center',
  },
});

export default styles;
