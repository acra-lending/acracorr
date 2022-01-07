import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
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
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(blogsStyle);

// const useStyles = makeStyles(pillsStyle);

export default function SectionBlogs({ ...rest }) {

  const classes = useStyles();

  const router = useRouter()
  const { id } = router.query

  const WEBSITE_URL = 'https://acralending.com';
  const API = 'wp-json/wp/v2';
  const [corrs, setCorrs] = useState([]) 
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const result = await
      axios.get(
        `${WEBSITE_URL}/${API}/correvents?_embed&slug=${id}`
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
            // <NavPills
            //     color="blue"
            //     horizontal={{
            //     tabsGrid: { xs: 12, sm: 3, md: 3 },
            //     contentGrid: { xs: 12, sm: 9, md: 9 }
            //     }}
            //     tabs={
            //         corrs.map((corr) => (
            //             {
            //                 tabButton: [corr.title.rendered],
            //                 // tabIcon: Dashboard,
            //                 tabContent: (
            //                 <span>
            //                     <h3 style={{ margin: "0", paddingBottom: "12px" }}><strong>Overview</strong></h3>
            //                     <p>
            //                     {parse(corr.acf.overview)}
            //                     </p>
            //                     <br />
            //                     <h3 style={{ margin: "0", padding: "0" }}><strong>Details:</strong></h3>
            //                     <br/>
            //                     <ul style={{ fontSize: "16px" }}>
            //                     {parse(corr.acf.details)}
            //                     </ul>
            //                     <br />
            //                     <h3 style={{ margin: "0", paddingBottom: "12px" }}><strong>Product Details</strong></h3>
            //                     <ul style={{ fontSize: "16px" }}>
            //                         <li>{parse(corr.acf.product_matrix)}</li>
            //                         <Link href="/trid-nontrid">
            //                           <li><a href="#">TRID + Non-TRID Programs</a></li>
            //                         </Link>
            //                     </ul>
            //                 </span>
            //                 )
            //             }
            //         )).reverse()
            //     }
            // />
            
                <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <CardHeader image plain>
                      <img src={corrs.length > 0 ? corrs[0]._embedded['wp:featuredmedia']['0'].source_url : isLoading} alt={corrs.length > 0 ? corrs[0].title.rendered : isLoading} />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${corrs.length > 0 ? corrs[0]._embedded['wp:featuredmedia']['0'].source_url : isLoading})`,
                          opacity: "1"
                        }}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${corrs.length > 0 ? corrs[0]._embedded['wp:featuredmedia']['0'].source_url : isLoading})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <Blue>
                      <h6 className={classes.cardCategory} style={{marginTop: "50px"}}>{corrs.length > 0 ? corrs[0].acf.event_date : isLoading}</h6>
                    </Blue>
                    <h3 className={classes.cardTitle}>
                        {corrs.length > 0 ? corrs[0].title.rendered : isLoading}
                    </h3>
                    <p className={classes.description}>
                      {corrs.length > 0 ? parse(corrs[0].content.rendered) : isLoading}
                    </p>
                  </GridItem>
                  <GridItem xs={4} sm={4} md={3} lg={3} style={{ marginTop: "20px", marginBottom: "20px" }}>
                      <a href={ corrs.length > 0 ? corrs[0].acf.calendly_link : isLoading } target="_blank">
                        <Button 
                          color="blue"
                          size="lg"
                          block 
                        >
                          Book a Meeting
                        </Button>
                      </a>
                  </GridItem>
                  <GridItem style={{ marginBottom: "40px" }}>
                    <h6 className={classes.cardCategory}>Venue</h6>
                    <p className={classes.description} style={{ marginBottom: "40px" }}>
                        {corrs.length > 0 ? corrs[0].acf.venue_name : isLoading}<br/>
                        {corrs.length > 0 ? parse(corrs[0].acf.venue_location) : isLoading}<br/>
                      <a href={`https://maps.google.com/?q=${corrs.length > 0 ? corrs[0].acf.venue_location : isLoading}`} target="_blank">Map 
                      </a>
                    </p>
                    <h6 className={classes.cardCategory}>Event Page</h6>
                    <a className={classes.description} href={ corrs.length > 0 ? corrs[0].acf.event_url : isLoading } target="_blank">
                      {corrs.length > 0 ? corrs[0].acf.event_url : isLoading}
                    </a>
                  </GridItem>
                  <GridItem xs={4} sm={4} md={3} lg={2}>
                      <Link href='/events'>
                        <Button 
                          color="gray"
                          size="lg"
                          block 
                        >
                          Back
                        </Button>
                      </Link>
                  </GridItem>
                </GridContainer>
              </Card>

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
