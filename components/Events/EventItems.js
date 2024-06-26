import React, { useState, useEffect } from "react";
import axios from 'axios';
import parse from 'html-react-parser';
import Link from "next/link";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Info from "components/Typography/Info.js";
import Blue from "components/Typography/Blue.js";
import Danger from "components/Typography/Danger.js";
import Success from "components/Typography/Success.js";
import Button from "components/CustomButtons/Button.js";

// import pillsStyle from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/pillsStyle.js";

import Spinner from 'components/Spinner/Spinner';

// import ServiceLevels from "components/ServiceLevels/ServiceLevels";
import blogsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/blogsStyle.js";


import cardBlog4 from "assets/img/examples/card-blog4.jpg";
import office2 from "assets/img/office2.jpg";
import blog5 from "assets/img/examples/blog5.jpg";
import blog6 from "assets/img/examples/blog6.jpg";
import blog7 from "assets/img/examples/blog7.jpg";
import blog8 from "assets/img/examples/blog8.jpg";
import bg5 from "assets/img/bg5.jpg";

const useStyles = makeStyles(blogsStyle);

// const useStyles = makeStyles(pillsStyle);

export default function SectionBlogs({ ...rest }) {

  const classes = useStyles();

  const WEBSITE_URL = 'https://acralending.com';
  const API = 'wp-json/wp/v2';

  const [corrs, setCorrs] = useState([]) 
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const result = await
      axios.get(
        `${WEBSITE_URL}/${API}/correvents?_embed`
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


  return (
    <div>
        <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
            <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={10}
              md={10}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
            {isLoading ? (
                <Spinner />
            ) : (          
              corrs.map((corr) => (
                <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={4} md={4}>
                    <CardHeader image plain>
                    <Link href={`/event/${corr.slug}`}>
                      <a>
                        <img src={corr._embedded['wp:featuredmedia']['0'].source_url} alt={corr.title.rendered} />
                      </a>
                    </Link>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${corr._embedded['wp:featuredmedia']['0'].source_url})`,
                          opacity: "1"
                        }}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${corr._embedded['wp:featuredmedia']['0'].source_url})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={8} md={8}>
                    <Blue>
                      <h6 className={classes.cardCategory}>{corr.acf.event_date}</h6>
                    </Blue>
                    <h3 className={classes.cardTitle}>
                      <Link href={`/event/${corr.slug}`}>
                        <a>
                          {corr.title.rendered}
                        </a>
                      </Link>
                    </h3>
                    <p className={classes.description} style={{ marginBottom: "20px" }}>
                      <strong>{parse(corr.acf.venue_name)}</strong>&nbsp;{parse(corr.acf.venue_location)}
                    </p>
                    <p className={classes.description}>
                      {parse(corr.content.rendered)}
                    </p>
                  </GridItem>
                  <GridItem>
                    <hr />
                  </GridItem>
                </GridContainer>
              </Card>
              ))
            )}
            </GridItem>
          </GridContainer>
        </div>
      </div> 
            </GridItem>
        </GridContainer>
    </div>
  );
}
