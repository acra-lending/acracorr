import {
  blackColor,
  blueColor,
  skyColor,
  primaryColor,
  roseColor,
  infoColor,
  grayColor,
  successColor,
  warningColor,
  dangerColor,
  hexToRgb
} from "assets/jss/nextjs-material-kit-pro.js";

const parallaxStyle = {
  parallax: {
    height: "100vh",
    maxHeight: "1600px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "50%",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center"
  },
  filter: {},
  primaryColor: {
    "&:before": {
      background: "rgba(" + hexToRgb(blackColor) + ", 0.5)"
    },
    "&:after": {
      background:
        "linear-gradient(60deg,rgba(" +
        hexToRgb(primaryColor[4]) +
        ",.56),rgba(" +
        hexToRgb(primaryColor[5]) +
        ",.95))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  roseColor: {
    "&:before": {
      background: "rgba(" + hexToRgb(blackColor) + ", 0.5)"
    },
    "&:after": {
      background:
        "linear-gradient(60deg,rgba(" +
        hexToRgb(roseColor[3]) +
        ",.56),rgba(" +
        hexToRgb(roseColor[4]) +
        ",.95))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  darkColor: {
    "&:before": {
      background: "rgba(" + hexToRgb(blackColor) + ", 0.4)"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  blueColor: {
    "&:before": {
      background: "rgba(" + hexToRgb(blueColor) + ", 0.6)",
    },
    "&:after": {
      background:
        "linear-gradient(152deg,rgba(" +
        hexToRgb(grayColor[26]) +
        ",.8),rgba(" +
        hexToRgb(blackColor) +
        ",.5))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  skyColor: {
    "&:before": {
      background: "rgba(" + hexToRgb(skyColor) + ", 0.3)",
    },
    "&:after": {
      background:
        "linear-gradient(152deg,rgba(" +
        hexToRgb(grayColor[26]) +
        ",.5),rgba(" +
        hexToRgb(skyColor) +
        ",.4))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "-1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  infoColor: {
    "&:before": {
      background: "rgba(" + hexToRgb(blackColor) + ", 0.5)"
    },
    "&:after": {
      background:
        "linear-gradient(60deg,rgba(" +
        hexToRgb(infoColor[6]) +
        ",.56),rgba(" +
        hexToRgb(infoColor[7]) +
        ",.95))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  successColor: {
    "&:before": {
      background: "rgba(" + hexToRgb(blackColor) + ", 0.5)"
    },
    "&:after": {
      background:
        "linear-gradient(60deg,rgba(" +
        hexToRgb(successColor[6]) +
        ",.56),rgba(" +
        hexToRgb(successColor[7]) +
        ",.95))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  warningColor: {
    "&:before": {
      background: "rgba(" + hexToRgb(blackColor) + ", 0.5)"
    },
    "&:after": {
      background:
        "linear-gradient(60deg,rgba(" +
        hexToRgb(warningColor[6]) +
        ",.56),rgba(" +
        hexToRgb(warningColor[7]) +
        ",.95))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  dangerColor: {
    "&:before": {
      background: "rgba(" + hexToRgb(blackColor) + ", 0.5)"
    },
    "&:after": {
      background:
        "linear-gradient(60deg,rgba(" +
        hexToRgb(dangerColor[6]) +
        ",.56),rgba(" +
        hexToRgb(dangerColor[7]) +
        ",.95))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  small: {
    height: "65vh",
    minHeight: "65vh",
    maxHeight: "650px"
  }
};

export default parallaxStyle;
