import {
  container,
  title,
  main,
  whiteColor,
  mainRaised,
  mlAuto,
  mrAuto,
  description,
  blackColor,
  blueColor,
  hexToRgb
} from "assets/jss/nextjs-material-kit-pro.js";

const landingPageStyle = {
  mlAuto,
  mrAuto,
  description,
  container: {
    color: whiteColor,
    ...container,
    zIndex: "2"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: whiteColor,
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    ...main
  },
  mainRaised: {
    ...mainRaised
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
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right"
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative"
  },
  features5: {
    padding: "80px 0",
    backgroundSize: "cover",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    position: "relative",
    "& $title": {
      marginBottom: "30px"
    },
    "& $title,& $container": {
      position: "relative",
      zIndex: "2",
      color: blackColor
    },
    "&:after": {
      // background: "rgba(" + hexToRgb(whiteColor) + ",0.55)",
      position: "absolute",
      width: "100%",
      height: "100%",
      content: "''",
      zIndex: "0",
      left: "0px",
      top: "0px"
    },
    "& $container": {
      "& $gridContainer:last-child": {
        "& $gridItem": {
          borderBottom: "0"
        }
      },
      "& $gridItem": {
        border: "1px solid rgba(" + hexToRgb(blackColor) + ", 0.35)",
        borderTop: "0",
        borderLeft: "0",
        "&:last-child": {
          borderRight: "0"
        }
      }
    },
    "& $infoArea5": {
      textAlign: "center",
      maxWidth: "310px",
      minHeight: "320px",
      "& h4,& p": {
        color: blackColor
      },
      "& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
        color: blueColor
      }
    }
  },
  gridContainer: {},
  gridItem: {},
  margin0: {
    margin: "0!important"
  },
  textCenter: {
    textAlign: "center"
  },
  infoArea: {
    maxWidth: "none",
    margin: "0 auto",
    padding: "10px 0 0px"
  },
  infoArea5: {},
  heading: {
    "@media (min-width: 992px) and (max-width: 1199px)": {
      paddingBottom: "4rem",
    },
    "@media (min-width: 1200px)": {
      paddingBottom: "4.5rem",
    }
  }
};

export default landingPageStyle;
