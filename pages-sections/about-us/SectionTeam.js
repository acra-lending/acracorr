import React, { useState, useEffect } from "react";
import axios from 'axios';
import parse from 'html-react-parser';
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import Muted from "components/Typography/Muted.js";
import Spinner from 'components/Spinner/Spinner';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
// @material-ui/icons
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

import teamStyle from "assets/jss/nextjs-material-kit-pro/pages/aboutUsSections/teamStyle.js";
import javascriptStyles from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/javascriptStyles.js";

const useStyles = makeStyles(teamStyle, javascriptStyles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});


export default function SectionTeam() {
  const classes = useStyles();

  const WEBSITE_URL = 'https://acralending.com';
  const API = 'wp-json/wp/v2';

  const [corrs, setCorrs] = useState([]); 
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const result = await
      axios.get(
        `${WEBSITE_URL}/${API}/corrmembers?_embed`
        )
      setCorrs(result.data); // set State
      console.log(result.data)
      setIsLoading(false);

    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {

    getData();
    
  }, []);

  return (
      <div className={classes.team}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              {/* <h2 className={classes.title}>The Executive Team 2</h2>
              <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your team. Keep you user engaged by providing meaningful
                information.
              </h5> */}
            </GridItem>
          </GridContainer>
          <GridContainer>
            {isLoading ? (
              <Spinner />
            ) : (
              corrs.map(corr => (
                <GridItem xs={12} sm={4} md={4} key={corr.id}>
                <Card plain profile>
                  <CardHeader image plain>
                    <div>
                      <img src={corr._embedded['wp:featuredmedia']['0'].source_url} alt={corr.acf.name} style={{width: "75%"}}/>
                    </div>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${corr._embedded['wp:featuredmedia']['0'].source_url})`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>{parse(corr.acf.name)}</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>{parse(corr.acf.title)}</h6>
                    </Muted>
                  </CardBody>
                  <CardFooter profile plain className={classes.justifyContent}>
                    <GridContainer style={{ padding: "0px 15px" }}>
                    <GridItem xs={12} md={12} lg={12} style={{ display: "flex" }}>
                      <Button color="blue" justIcon>
                        <a href={"mailto:" + corr.acf.email} style={{ color: "inherit" }}>
                        <MailOutlineIcon />
                        </a>
                      </Button>
                        <p style={{ padding: "15px 10px" }}>{corr.acf.email}</p>

                    </GridItem>

                    {corr.acf.cell.length > 0 ?
                    <GridItem xs={12} md={12} lg={12} style={{ display: "flex" }}> 
                      <Button color="blue" justIcon>
                        <a href={"tel:" + corr.acf.cell} style={{ color: "inherit" }}>
                        <PhoneAndroidIcon />
                        </a>
                      </Button>
                      <p style={{ padding: "15px 10px" }}>{corr.acf.cell}</p>
                    </GridItem>
                    : null}

                    </GridContainer>
                  </CardFooter>
                </Card>
              </GridItem>
              )).reverse()
            )}

          </GridContainer>
        </div>
      </div>
  );
}
