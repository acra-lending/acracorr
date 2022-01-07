/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import EventItem from "components/Events/EventItem";
import FooterItems from "components/Footer/FooterItems.js";

import signupPageStyle from "assets/jss/nextjs-material-kit-pro/pages/signupPageStyle.js";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(signupPageStyle);

export default function SignUpPage({ ...rest }) {
  const [checked, setChecked] = React.useState([1]);
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        absolute
        color="white"
        brand="Acra Lending"
        links={<HeaderLinks dropdownHoverColor="blue" />}
        fixed
        changeColorOnScroll={{
          height: 50,
          color: "darkGray"
        }}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.containerLarge}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <Card className={classes.cardSignup}>
                <EventItem />
              </Card>
            </GridItem>
          </GridContainer>

        </div>
        <FooterItems />
      </div>
    </div>
  );
}
