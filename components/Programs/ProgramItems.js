import React, { useState, useEffect } from "react";
import axios from 'axios';
import parse from 'html-react-parser';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import pillsStyle from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/pillsStyle.js";

import Spinner from 'components/Spinner/Spinner';

import ServiceLevels from "components/ServiceLevels/ServiceLevels";

const useStyles = makeStyles(pillsStyle);

export default function SectionPills() {
  const classes = useStyles();

  const WEBSITE_URL = 'https://bt.citadelservicing.com';
  const API = 'wp-json/wp/v2';

  const [corrs, setCorrs] = useState([]) 
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const result = await
      axios.get(
        `${WEBSITE_URL}/${API}/corrprograms`
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
            <GridItem xs={12} sm={12} md={8} lg={8}>
            {isLoading ? (
                <Spinner />
            ) : (
            <NavPills
                color="blue"
                horizontal={{
                tabsGrid: { xs: 12, sm: 3, md: 3 },
                contentGrid: { xs: 12, sm: 9, md: 9 }
                }}
                tabs={
                    corrs.map((corr) => (
                        {
                            tabButton: [corr.title.rendered],
                            // tabIcon: Dashboard,
                            tabContent: (
                            <span>
                                <h3 style={{ margin: "0", paddingBottom: "12px" }}><strong>Overview</strong></h3>
                                <p>
                                {parse(corr.acf.overview)}
                                </p>
                                <br />
                                <h3 style={{ margin: "0", padding: "0" }}><strong>Details:</strong></h3>
                                <br/>
                                <ul style={{ fontSize: "16px" }}>
                                {parse(corr.acf.details)}
                                </ul>
                                <br />
                                <h3 style={{ margin: "0", paddingBottom: "12px" }}><strong>Product Details</strong></h3>
                                <ul style={{ fontSize: "16px" }}>
                                    <li>{parse(corr.acf.product_matrix)}</li>
                                    <li>{parse(corr.acf.underwriting_guidelines)}</li>
                                </ul>
                            </span>
                            )
                        }
                    )).reverse()
                }
            /> 
            )}

            </GridItem>
            <GridItem xs={12} sm={12} md={4} lg={4}>
                <ServiceLevels />
            </GridItem>
        </GridContainer>
    </div>
  );
}
