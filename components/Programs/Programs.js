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
                            Qualify with enough liquid assets to cover the loan balance
                            </p>
                            <br />
                            <p>
                            Details: <br/>
                            <ul>
                                <li>Borrower does not have to be currently employed</li>
                                <li>Only show two months of statements for qualifying account</li>
                                <li>Max LTV 70%</li>
                                <li>Any Occupancy</li>
                                <li>Down to 600 credit score</li>
                                <li>Purchase or Refinance</li>
                                <li>Can use Liquid Assets</li>
                            </ul>
                            </p>
                            <br />
                            <p>
                            Matrix & Guidelines
                            <ul>
                                <li><a href="#">Product Matrix</a></li>
                                <li><a href="#">Underwriting Guidelines</a></li>
                            </ul>
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
                            Qualify with most recent Personal or Business Account’s Bank Statements
                            </p>
                            <br />
                            <p>
                            Details: <br/>
                            <ul>
                                <li>Up to $3M Loan Amounts</li>
                                <li>75% Max LTV Purchases</li>
                                <li>70% Max LTV Refinance</li>
                                <li>Self-Employed Borrowers Only</li>
                                <li>675 or greater credit scores</li>
                                <li>Owner Occupied Only</li>
                                <li>First Time Home Buyers considered at lower LTV</li>
                            </ul>
                            </p>
                            <br />
                            <p>
                            Matrix & Guidelines
                            <ul>
                                <li><a href="#">Product Matrix</a></li>
                                <li><a href="#">Underwriting Guidelines</a></li>
                            </ul>
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
                            Qualify with 100% on personal account deposits and 50% on business account deposits (12 consecutive months)
                            </p>
                            <br />
                            <p>
                            Details: <br/>
                            <ul>
                                <li>Up to $3M Loan Amounts</li>
                                <li>Up to 90% Max LTV</li>
                                <li>Self-Employed and 1099 Borrowers</li>
                                <li>600 or greater credit scores</li>
                                <li>No reserves required at 65% or less LTV</li>
                                <li>No 4506T / No K1’s / No P&L’s</li>
                                <li>No MI</li>
                            </ul>
                            </p>
                            <br />
                            <p>
                            Matrix & Guidelines
                            <ul>
                                <li><a href="#">Product Matrix</a></li>
                                <li><a href="#">Underwriting Guidelines</a></li>
                            </ul>
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
                            Qualify with Full Doc, Bank Statements, or DSCR
                            </p>
                            <br />
                            <p>
                            Details: <br/>
                            <ul>
                                <li>Loan Amounts up to $3M OO and $2M NOO</li>
                                <li>I/O available with a 650+ FICO</li>
                                <li>C/O available with no max cash in hand depending on LTV</li>
                                <li>Foreign National</li>
                                <li>No reserve requirements at or below 65% LTV, C/O proceeds can be used for reserves above 65% LTV</li>
                                <li>Fast Turn-Times</li>
                                <li>Can use transferred appraisals</li>
                            </ul>
                            </p>
                            <br />
                            <p>
                            Matrix & Guidelines
                            <ul>
                                <li><a href="#">Product Matrix</a></li>
                                <li><a href="#">Underwriting Guidelines</a></li>
                            </ul>
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
