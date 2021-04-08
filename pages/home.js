/*eslint-disable*/ 
import React, { useState, useEffect } from "react";
import axios from 'axios';
import parse from 'html-react-parser';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import Assessment from "@material-ui/icons/Assessment";
import Group from "@material-ui/icons/Group";
import Computer from "@material-ui/icons/Computer";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import TouchApp from "@material-ui/icons/TouchApp";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Spinner from 'components/Spinner/Spinner';
import FooterItems from "components/Footer/FooterItems.js";



import landingPageStyle from "assets/jss/nextjs-material-kit-pro/pages/landingPageStyle.js";
import featuresStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/featuresStyle.js";

// Sections for this page
import SectionSignUp from "pages-sections/home/SignUp.js";
import ApplyNow from "pages-sections/home/ApplyNow.js";
import QuickQualifier from 'pages-sections/home/QuickQualifier';

const useStyles = makeStyles(landingPageStyle, featuresStyle);

export default function LandingPage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const WEBSITE_URL = 'https://acralending.com';
  const API = 'wp-json/wp/v2';

  const [corrs, setCorrs] = useState([]) 
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const result = await
      axios.get(
        `${WEBSITE_URL}/${API}/corr`
        )
      setCorrs(result.data); // set State
      setIsLoading(false);

    } catch (err) {
      console.error(err.message);
    }
  } 

  useEffect(() => {

    getData();
    
  }, []);

  const classes = useStyles();
  return (
    <div>
      <Header
        color="white"
        brand="Acra Lending"
        links={<HeaderLinks dropdownHoverColor="blue" />}
        fixed
        changeColorOnScroll={{
          height: 150,
          color: "darkGray"
        }}
        {...rest}
      />

      <Parallax 
        image={require("assets/img/bg1-blue.jpg")} 
        filter="dark"
      >
      {isLoading ? (
        <Spinner />
      ) : ( 
        <div className={classes.container} style={{ marginTop: "0" }}>
          {/* Start Loading Area */}
          <GridContainer>
            <GridItem xs={12} sm={6} md={12} className={classes.heading}>
              <br />
              <h1 
                className={classes.title}
                style={{ padding: "80px 0 0 0", fontWeight: "bold" }}
              >
                {corrs.length > 0 ? parse(corrs[8].content.rendered.replace(/<[^>]+>/g, '')) : isLoading}
                </h1>

                {/* <h1 
                className={classes.title}
                style={{ padding: "64px 0 0 0", marginBottom: "0" }}
              >
                BECOME AN APPROVED ACRA LENDING CORRESPONDENT PARTNER</h1> */}
                <h4>{corrs.length > 0 ? parse(corrs[7].content.rendered.replace(/<[^>]+>/g, '')) : isLoading}</h4>
              <SectionSignUp />
              {/* <br />
                <h3>{corrs.length > 0 ? parse(corrs[9].content.rendered.replace(/<[^>]+>/g, '')) : isLoading}</h3>
                <QuickQualifier /> */}

              {/* <Button
                color="blue"
                size="lg"
                href="#"
                style={{ marginRight: "20px"}}
              >
                Get Approved 
              </Button>
              <Button
                color="blue"
                size="lg"
                href="#"
                style={{ marginRight: "20px"}}
              >
                Sellers Guide
              </Button>
              <Button
                color="blue"
                size="lg"
                href="#"
              >
                Loan Qualification Engine
              </Button> */}
            </GridItem>
          </GridContainer>
        </div>
      )} {/* End Loading Area */}
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div {...rest}>

          {/* Feature 5 START */}
          <div
            className={classes.features5}
            style={{padding: "60px 0"}}
          >

            <GridContainer className={classes.margin0}>
              <GridItem
                xs={12}
                sm={8}
                md={8}
                className={
                  classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
                }
              >
                <h4 className={classes.title} style={{ paddingTop: "0", marginTop: "0"}}>{corrs.length > 0 ? parse(corrs[6].content.rendered.replace(/<[^>]+>/g, '')) : isLoading}</h4>
                <hr style={{ borderColor: "#0033A1" }}/>
                <h3 className={classes.title}>{corrs.length > 0 ? parse(corrs[5].content.rendered.replace(/<[^>]+>/g, '')) : isLoading}</h3>
              </GridItem>

              <div className={classes.container}>
                <GridContainer
                  className={classes.gridContainer}
                  style={{ margin: "0!important" }}
                >
                  <GridItem xs={12} sm={4} className={classes.gridItem}>
                    <InfoArea
                      vertical
                      className={classes.infoArea5}
                      icon={Apps}
                      title={corrs.length > 0 ? parse(corrs[4].content.rendered.replace(/<[^>]+>/g, '')) : isLoading}
                      description={
                        <p>
                          {corrs.length > 0 ? parse(corrs[4].acf.body.replace(/<[^>]+>/g, '')) : isLoading}
                        </p>
                      }
                      iconColor="info"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={4} className={classes.gridItem}>
                    <InfoArea
                      vertical
                      className={classes.infoArea5}
                      icon={Assessment}
                      title={corrs.length > 0 ? parse(corrs[3].content.rendered.replace(/<[^>]+>/g, '')) : isLoading}
                      description={
                        <p>
                          {corrs.length > 0 ? parse(corrs[3].acf.body.replace(/<[^>]+>/g, '')) : isLoading}
                        </p>
                      }
                      iconColor="danger"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={4} className={classes.gridItem}>
                    <InfoArea
                      vertical
                      className={classes.infoArea5}
                      icon={Group}
                      title={corrs.length > 0 ? parse(corrs[2].content.rendered.replace(/<[^>]+>/g, '')) : isLoading}
                      description={
                        <p>
                          {corrs.length > 0 ? parse(corrs[2].acf.body.replace(/<[^>]+>/g, '')) : isLoading}
                        </p>
                      }
                      iconColor="primary"
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer
                  className={classes.gridContainer}
                  style={{ margin: "0!important" }}
                >
                  <GridItem xs={12} sm={4} className={classes.gridItem}>
                    <InfoArea
                      vertical
                      className={classes.infoArea5}
                      icon={Computer}
                      title={corrs.length > 0 ? parse(corrs[1].content.rendered.replace(/<[^>]+>/g, '')) : isLoading}
                      description={
                        <p>
                          {corrs.length > 0 ? parse(corrs[1].acf.body.replace(/<[^>]+>/g, '')) : isLoading}
                        </p>
                      }
                    />
                  </GridItem>
                  <GridItem xs={12} sm={4} className={classes.gridItem}>
                    <InfoArea
                      vertical
                      className={classes.infoArea5}
                      icon={PhotoSizeSelectActualIcon}
                      title={corrs.length > 0 ? parse(corrs[0].content.rendered.replace(/<[^>]+>/g, '')) : isLoading}
                      description={
                        <p>
                          {corrs.length > 0 ? parse(corrs[0].acf.body.replace(/<[^>]+>/g, '')) : isLoading}
                        </p>
                      }
                    />
                  </GridItem>
                  <GridItem xs={12} sm={4} className={classes.gridItem}>
                    <InfoArea
                      vertical
                      className={classes.infoArea5}
                      icon={TouchApp}
                      title=""
                      description={
                        <ApplyNow />
                      }
                    />
                  </GridItem>
                </GridContainer>
              </div>
            </GridContainer>
          </div>
          {/* Feature 5 END */}
        </div>
      </div>
      <FooterItems />
    </div>
  );
}
