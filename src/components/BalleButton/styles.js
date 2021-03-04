import { colors, custom } from '../../theme';

const styles = (theme) => ({
  balleButton: {
    borderRadius: "4px",
    minWidth: "92px",
  },
  balleButtonContained: {
    backgroundColor: colors.ACCENT_BLUE,
    color: colors.DARK_BLUE,
    "&:hover": {
      backgroundColor: colors.DARK_BLUE,
      padding: "0 -1px",
      "& .MuiButton-label": {
        color: colors.ACCENT_BLUE,
      },
    },
    fontWeight: "bold",
    height: " 42px",
  },
  balleButtonOutlined: {
    backgroundColor: "transparent",
    border: custom.accentBlueBorder,
    color: colors.DARK_BLUE,
    fontSize: "13px",
    "&:hover": {
      color: colors.ACCENT_BLUE,
      backgroundColor: colors.DARK_BLUE,
    },
  },
});

export default styles;
