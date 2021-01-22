import {
  container,
  containerLarge,
  whiteColor,
  title,
  mlAuto,
  mrAuto
} from "assets/jss/nextjs-material-kit-pro.js";
import customCheckboxRadioSwitch from "assets/jss/nextjs-material-kit-pro/customCheckboxRadioSwitchStyle.js";
import customSelectStyle from "assets/jss/nextjs-material-kit-pro/customSelectStyle.js";

const basicsStyle = {
  mlAuto,
  mrAuto,
  container,
  containerLarge,
  ...customSelectStyle,
  ...customCheckboxRadioSwitch,
  sections: {
    padding: "70px 0"
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  space50: {
    height: "50px",
    display: "block"
  },
  space70: {
    height: "70px",
    display: "block"
  },
  icons: {
    width: "17px",
    height: "17px",
    color: whiteColor
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  listItemText: {
    fontFamily: "'Univers', 'Times New Roman', 'Arial', sans-serif"
  }
};

export default basicsStyle;
