import React from "react";

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

import ServiceLevels from "components/ServiceLevels/ServiceLevels";

const useStyles = makeStyles(pillsStyle);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div>
        <div className={classes.title}>
            <h2 style={{ textAlign: "center" }}>Acra Lending Correspondent Programs</h2>
        </div>
        <div className={classes.section}>
        <div className={classes.container}>
            
            <div id="navigation-pills">


            {/* <div className={classes.title}>
                <h3>
                <small>Overview</small>
                </h3>
            </div> */}
            <GridContainer>

                <GridItem xs={12} sm={12} md={8} lg={8}>
                <NavPills
                    color="blue"
                    horizontal={{
                    tabsGrid: { xs: 12, sm: 3, md: 3 },
                    contentGrid: { xs: 12, sm: 9, md: 9 }
                    }}
                    tabs={[
                    {
                        tabButton: "ATR-In-Full",
                        // tabIcon: Dashboard,
                        tabContent: (
                        <span>
                            <p>
                            Collaboratively administrate empowered markets via
                            plug-and-play networks. Dynamically procrastinate B2C
                            users after installed base benefits.
                            </p>
                            <br />
                            <p>
                            Dramatically visualize customer directed convergence
                            without revolutionary ROI. Collaboratively
                            administrate empowered markets via plug-and-play
                            networks. Dynamically procrastinate B2C users after
                            installed base benefits.
                            </p>
                            <br />
                            <p>
                            Dramatically visualize customer directed convergence
                            without revolutionary ROI. Collaboratively
                            administrate empowered markets via plug-and-play
                            networks. Dynamically procrastinate B2C users after
                            installed base benefits.
                            </p>
                        </span>
                        )
                    },
                    {
                        tabButton: "3-Month Bank Statement",
                        // tabIcon: Schedule,
                        tabContent: (
                        <span>
                            <p>
                            Efficiently unleash cross-media information without
                            cross-media value. Quickly maximize timely
                            deliverables for real-time schemas.
                            </p>
                            <br />
                            <p>
                            Dramatically maintain clicks-and-mortar solutions
                            without functional solutions. Dramatically visualize
                            customer directed convergence without revolutionary
                            ROI. Collaboratively administrate empowered markets
                            via plug-and-play networks. Dynamically procrastinate
                            B2C users after installed base benefits.
                            </p>
                        </span>
                        )
                    },
                    {
                        tabButton: "12-Month Bank Statement",
                        // tabIcon: Schedule,
                        tabContent: (
                        <span>
                            <p>
                            Efficiently unleash cross-media information without
                            cross-media value. Quickly maximize timely
                            deliverables for real-time schemas.
                            </p>
                            <br />
                            <p>
                            Dramatically maintain clicks-and-mortar solutions
                            without functional solutions. Dramatically visualize
                            customer directed convergence without revolutionary
                            ROI. Collaboratively administrate empowered markets
                            via plug-and-play networks. Dynamically procrastinate
                            B2C users after installed base benefits.
                            </p>
                        </span>
                        )
                    },
                    {
                        tabButton: "Jumbo Non-QM",
                        // tabIcon: Schedule,
                        tabContent: (
                        <span>
                            <p>
                            Efficiently unleash cross-media information without
                            cross-media value. Quickly maximize timely
                            deliverables for real-time schemas.
                            </p>
                            <br />
                            <p>
                            Dramatically maintain clicks-and-mortar solutions
                            without functional solutions. Dramatically visualize
                            customer directed convergence without revolutionary
                            ROI. Collaboratively administrate empowered markets
                            via plug-and-play networks. Dynamically procrastinate
                            B2C users after installed base benefits.
                            </p>
                        </span>
                        )
                    }
                    ]}
                />
                </GridItem>
                <GridItem xs={12} sm={12} md={4} lg={4}>
                    <ServiceLevels />
                </GridItem>
            </GridContainer>
            </div>
        </div>
        </div>
    </div>
  );
}
