const styles = (theme) => ({
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minWidth: "100vw",
    padding: "36px 24px",
  },
  connectHeading: {
    maxWidth: "300px",
    textAlign: "center",
    fontSize: "38px",
    fontWeight: "300",
    marginBottom: "12px",
    lineHeight: "46px",
  },
  connectContainer: {
    padding: "20px",
  },
  actionButton: {
    color: "#fff",
    borderColor: "#000",
    background: "#000",
    "&:hover": {
      background: "#5A8F69",
    },
  },
  notConnectedRoot: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  connectedRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
  },
  address: {
    color: "#FF0",
    width: "100%",
    paddingBottom: "24px",
    display: "flex",
    justifyContent: "space-between",
  },
  balances: {
    color: "#0ff",
    width: "100%",
    padding: "12px",
  },
  balanceContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  accountHeading: {
    paddingBottom: "6px",
  },
  icon: {
    cursor: "pointer",
  },
  disclaimer: {
    padding: "12px",
    border: "1px solid #F8F2EC",
    borderRadius: "0",
    background: "#F8F2EC",
    marginBottom: "2rem",
    fontWeight: 900,
    color: "#000",
  },
  image: {
    maxWidth: "180px",
  },
});

export default styles;
