import React, { useEffect, useState, useMemo } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import IframeUpload from "components/Iframe/IframeUpload.js";

import basicsStyle from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/basicsStyle.js";


const useStyles = makeStyles(basicsStyle);

const selectCorrespondent = [
    'Jeffrey Lemieux',
	'Marc Feltman',
	'Andrew Gauder',
	'Todd Lautzenheiser',
	'Marty Yocum',
	'Bill Parnell'
]

const FormStep1 = ({
    nextStep,
    setBrokerId,
    setCorrSelect,
    values
}) => {
    const classes = useStyles();
    const isEnabled = values.brokerId.length > 0 && values.corrSelect.length > 0; 
    return(
        <>
            {/* <div className={classes.space70} /> */}
                <div className={classes.title}>
                    <p style={{ textAlign: "left", marginTop: "0", fontWeight: "400" }}><strong>Note:</strong> Requests will only be processed for APPROVED Acra Lending brokers. <br/>
                    Contact corr@acralending.com or your BDO to confirm Broker ID #<br/><br/>
                    <p style={{ fontSize: "14px" }}>All fields are required.</p>
                    </p>
                </div>
                        <GridItem xs={12} sm={12} md={12} lg={12}>
                            <CustomInput 
                                labelText={<div>Acra Broker ID or NMLS Number<span style={{ color: "red" }}> *</span></div>}
                                name="your-id"
                                id="your-id"
                                type="text"
                                onChange={event => setBrokerId(event.target.value)}
                                value={values.brokerId}
                                formControlProps={{
                                    fullWidth: true,
                                }}
                                
                                required
                            />
                            <FormControl fullWidth className={classes.selectFormControl}>                    
                                <InputLabel
                                htmlFor="correspondent-select"
                                className={classes.selectLabel}
                                >
                                Acra Lending Correspondent <span style={{ color: "red" }}> *</span>
                                </InputLabel>
                            
                                <Select
                                MenuProps={{
                                    className: classes.selectMenu
                                }}
                                classes={{
                                    select: classes.select
                                }}
                                value={values.corrSelect}
                                onChange={event => setCorrSelect(event.target.value)}
                                inputProps={{
                                    name: "corrSelect",
                                    id: "corrSelect"
                                }}
                                >
                                    {selectCorrespondent.map(corrList => (
                                        <MenuItem classes={{
                                            root: classes.selectMenuItem,
                                            selected: classes.selectMenuItemSelected
                                        }} 
                                        key={corrList} 
                                        value={corrList}>
                                            {corrList} 
                                        </MenuItem>
                                    ))}
                                </Select>
                                <br/>
                            </FormControl>
                            <GridItem xs={12} sm={12} md={12} lg={12} style={{ display: "flex" }}>
                                <Button 
                                    color="blue"
                                    onClick={nextStep} 
                                    style={{ marginLeft: "auto" }}
                                    disabled={!isEnabled}
                                    // disabled={isSubmitting}
                                    >
                                    Next
                                </Button>
                            </GridItem>
                        </GridItem>                  
                
        </>
    )
}

const FormStep2 = ({
    nextStep, 
    prevStep,
    setBranchId,
    setCompany,
    setContactName,
    setPhoneNumber,
    setEmail,
    values
}) => {
    const isEnabled = values.branchId.length > 0 && 
                values.company.length > 0 &&
                values.contactName.length > 0 &&
                values.phoneNumber.length > 0 &&
                values.email.length > 0; 
    return (
        <>
            <CustomInput
                labelText={<div>Branch NMLS ID Number<span style={{ color: "red" }}> *</span></div>}
                name="your-branch-id"
                id="your-branch-id"
                type="text"
                onChange={event => setBranchId(event.target.value)}
                value={values.branchId}
                required
                formControlProps={{
                    fullWidth: true
                }}
            />
            <CustomInput
                labelText={<div>Company Name<span style={{ color: "red" }}> *</span></div>}
                name="your-company"
                id="your-company"
                type="text"
                onChange={event => setCompany(event.target.value)}
                value={values.company}
                required
                formControlProps={{
                    fullWidth: true
                }}
            />
            <CustomInput
                labelText={<div>Contact Name<span style={{ color: "red" }}> *</span></div>}
                name="your-contact"
                id="your-contact"
                type="text"
                onChange={event => setContactName(event.target.value)}
                value={values.contactName}
                required
                formControlProps={{
                    fullWidth: true
                }}
            />
            <CustomInput
                labelText={<div>Company Phone<span style={{ color: "red" }}> *</span></div>}
                name="your-tel"
                id="your-tel"
                type="tel"
                onChange={event => setPhoneNumber(event.target.value)}
                value={values.phoneNumber}
                required
                formControlProps={{
                    fullWidth: true
                }}
            />
            <CustomInput
                labelText={<div>Company Email<span style={{ color: "red" }}> *</span></div>}
                name="your-email"
                id="your-email"
                type="email"
                onChange={event => setEmail(event.target.value)}
                value={values.email}
                required
                formControlProps={{
                    fullWidth: true
                }}
            />
            <br/><br/>
            <GridItem xs={12} sm={12} md={12} lg={12} style={{ display: "flex" }}>
                <Button 
                    color="gray"
                    onClick={prevStep}
                    style={{ marginLeft: "auto" }}
                >
                    Go Back
                </Button>                
                <Button 
                    color="blue"
                    onClick={nextStep} 
                    style={{ marginLeft: "10px" }}
                    disabled={!isEnabled}
                >
                    Next
                </Button>
            </GridItem>
        </>
    )
}

const selectLoanType = [
    'Purchase',
	'Refinance'
]

const selectBankType = [
    'Personal Bank Statement',
	'Business Bank Statement',
	'Personal Bank Statement used for Business Purpose'
]

const FormStep3 = ({
    nextStep,
    prevStep,
    setLoanType,
    setBorrowerName,
    setAddress,
    setBusinessName,
    setBusinessType,
    setOwnership,
    setStatementType,
    setExplanation,
    values
}) => {
    const classes = useStyles();
    const isEnabled = values.loanType.length > 0 && 
                values.borrowerName.length > 0 &&
                values.address.length > 0 &&
                values.businessName.length > 0 &&
                values.businessType.length > 0 && 
                values.ownership.length > 0 && 
                values.statementType.length > 0 && 
                values.explanation.length > 0; 
    return(
        <>
            <FormControl fullWidth className={classes.selectFormControl}>                    
                <InputLabel
                htmlFor="loan-type"
                className={classes.selectLabel}
                >
                Loan Type<span style={{ color: "red" }}> *</span>
                </InputLabel>
            
                <Select
                MenuProps={{
                    className: classes.selectMenu
                }}
                classes={{
                    select: classes.select
                }}
                value={values.loanType}
                onChange={event => setLoanType(event.target.value)}
                inputProps={{
                    name: "loan-type",
                    id: "loan-type"
                }}
                >
                    {selectLoanType.map(loanType => (
                        <MenuItem classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                        }} 
                        key={loanType} 
                        value={loanType}>
                            {loanType} 
                        </MenuItem>
                    ))}
                </Select>
                <br/>
            </FormControl>
            <CustomInput
                labelText={<div>Borrower's Name<span style={{ color: "red" }}> *</span></div>}
                name="borrowers-name"
                id="borrowers-name"
                type="text"
                onChange={event => setBorrowerName(event.target.value)}
                value={values.borrowerName}
                required
                formControlProps={{
                    fullWidth: true
                }}
            />        
            <CustomInput
                labelText={<div>Borrower's Mailing Address<span style={{ color: "red" }}> *</span></div>}
                name="borrowers-address"
                id="borrowers-address"
                type="text"
                onChange={event => setAddress(event.target.value)}
                value={values.address}
                required
                formControlProps={{
                    fullWidth: true
                }}
            />        
            <CustomInput
                labelText={<div>Borrower's Self-Employment Business Name<span style={{ color: "red" }}> *</span></div>}
                name="borrowers-business-name"
                id="borrowers-business-name"
                type="text"
                onChange={event => setBusinessName(event.target.value)}
                value={values.businessName}
                required
                formControlProps={{
                    fullWidth: true
                }}
            />
            <CustomInput
                labelText={<div>Type of Business<span style={{ color: "red" }}> *</span></div>}
                name="borrowers-type"
                id="borrowers-type"
                type="text"
                onChange={event => setBusinessType(event.target.value)}
                value={values.businessType}
                required
                formControlProps={{
                    fullWidth: true
                }}
            />          
            <CustomInput
                labelText={<div>Percentage of Ownership<span style={{ color: "red" }}> *</span></div>}
                name="percentage-ownership"
                id="percentage-ownership"
                type="text"
                onChange={event => setOwnership(event.target.value)}
                value={values.ownership}
                required
                formControlProps={{
                    fullWidth: true
                }}
            />
            <FormControl fullWidth className={classes.selectFormControl}>                    
                <InputLabel
                htmlFor="bank-statement-type"
                className={classes.selectLabel}
                >
                Bank Statement Type<span style={{ color: "red" }}> *</span>
                </InputLabel>
            
                <Select
                MenuProps={{
                    className: classes.selectMenu
                }}
                classes={{
                    select: classes.select
                }}
                value={values.statementType}
                onChange={event => setStatementType(event.target.value)}
                inputProps={{
                    name: "bank-statement-type",
                    id: "bank-statement-type"
                }}
                >
                    {selectBankType.map(statementType => (
                        <MenuItem classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                        }} 
                        key={statementType} 
                        value={statementType}>
                            {statementType} 
                        </MenuItem>
                    ))}
                </Select>
                <br/>
            </FormControl>
            <CustomInput
            labelText={<div>Explanation of Non-Business, Payroll Deposits, etc.<span style={{ color: "red" }}> *</span></div>}
            name="business-explanation"
            id="business-explanation"
            type=""
            onChange={event => setExplanation(event.target.value)}
            value={values.explanation}
            required
            formControlProps={{
                fullWidth: true
            }}
            inputProps={{
                multiline: true,
                rows: 6
            }}
            />
            <br/><br/>
            <GridItem xs={12} sm={12} md={12} lg={12} style={{ display: "flex" }}>
                <Button 
                    color="gray"
                    onClick={prevStep}
                    style={{ marginLeft: "auto" }}
                >
                    Go Back
                </Button>                
                <Button 
                    color="blue"
                    onClick={nextStep} 
                    style={{ marginLeft: "10px" }}
                    disabled={!isEnabled}
                >
                    Next
                </Button>
            </GridItem>
        </>          
    )
}

const FormStep4 = ({
    nextStep,
    prevStep,
    setLoanAmount,
    setAppraisedValue,
    setLtv,
    values,
}) => {
    const isEnabled = values.loanAmount.length > 0 && 
        values.appraisedValue.length > 0;

    return(
        <>
            <CustomInput
                labelText={<div>Loan Amount<span style={{ color: "red" }}> *</span></div>}
                name="loan-amount"
                id="loan-amount"
                type="text"
                onChange={event => setLoanAmount(event.target.value)}
                value={values.loanAmount}
                required
                formControlProps={{
                    fullWidth: true
                }}
            />
            <CustomInput
                labelText={<div>Appraised Value<span style={{ color: "red" }}> *</span></div>}
                name="appraised-value"
                id="appraised-value"
                type="text"
                onChange={event => setAppraisedValue(event.target.value)}
                value={values.appraisedValue}
                required
                formControlProps={{
                    fullWidth: true
                }}
            />
            <CustomInput
                labelText="LTV"
                name="ltv-calculator"
                id="ltv-calculator"
                type="text"
                onChange={event => setLtv(event.target.value)}
                value={(values.loanAmount / values.appraisedValue).toFixed(2)}
                required
                formControlProps={{
                    fullWidth: true
                }}
            />
            <br/><br/>
            <GridItem xs={12} sm={12} md={12} lg={12} style={{ display: "flex" }}>
                <Button 
                    color="gray"
                    onClick={prevStep}
                    style={{ marginLeft: "auto" }}
                >
                    Go Back
                </Button>                
                <Button 
                    color="blue"
                    onClick={nextStep} 
                    style={{ marginLeft: "10px" }}
                    disabled={!isEnabled}
                >
                    Next
                </Button>
            </GridItem>
        </>
    )
}

const Confirm = ({
    values,
    prevStep,
    nextStep,
}) => {
  
    const { 
        brokerId, 
        corrSelect,
        branchId,
        company,
        contactName,
        phoneNumber,
        email,
        loanType,
        borrowerName,
        address,
        businessName,
        businessType,
        ownership,
        statementType,
        explanation,
        loanAmount,
        appraisedValue,
        ltv
    } = values

    const { reset, errors } = useForm();

    const WEBSITE_URL = 'https://acralending.com';
    const FORM_ID = '6777'; // Contact Form ID
  
    const [token, setToken] = useState('') 
    const [isSuccessMessage, setIsSuccessMessage] = useState(false) // Manage success message state
    const [message, setMessage] = useState('') // Manage success message state
    const [messageSent, setMessageSent] = useState(false) // Manage sent message state 
  
    // useEffect function to authenticate subscriber user to get a token
    useEffect(() => {
      axios({
        method: 'post',
        url: `${WEBSITE_URL}/wp-json/jwt-auth/v1/token`,
        data: {
          username: 'brokertest', // provide a user credential with subscriber role
          password: 'brokertest1'
        },
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(response => {
        setToken(response.data.token)
      }).catch(error => console.error( 'Error', error))
    }, []);

        // submit form
        const submit = (e) => {
            e.preventDefault();
            
            const bodyFormData = new FormData();

            bodyFormData.append('your-id', brokerId,)
            bodyFormData.append('corrSelect', corrSelect)
            bodyFormData.append('your-branch-id', branchId)
            bodyFormData.append('your-company', company)
            bodyFormData.append('your-contact', contactName)
            bodyFormData.append('your-tel', phoneNumber)
            bodyFormData.append('your-email', email)
            bodyFormData.append('loan-type', loanType)
            bodyFormData.append('borrowers-name', borrowerName)
            bodyFormData.append('borrowers-address', address)
            bodyFormData.append('borrowers-business-name', businessName)
            bodyFormData.append('business-type', businessType)
            bodyFormData.append('percentage-ownership', ownership)
            bodyFormData.append('bank-statement-type', statementType)
            bodyFormData.append('business-explanation', explanation)
            bodyFormData.append('loan-amount', loanAmount)
            bodyFormData.append('appraised-value', appraisedValue)
            bodyFormData.append('ltv-calculator', ltvCalculator)
        
            // Send it
            axios({
            method: 'post',
            url: `${WEBSITE_URL}/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`,
            data: bodyFormData,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            }).then(response => {
            // actions taken when submission goes OK
            console.log(response)
            reset({})
            setMessageSent(true)
            setMessage(response.data.message)
            setIsSuccessMessage(true)
            }).catch(error => {
            // actions taken when submission goes wrong
            setMessageSent(true)
            setMessage(error.message)
            setIsSuccessMessage(false)
            console.log(error)
            })

            setTimeout(() => {nextStep(); window.scrollTo(0,0) }, 4000);

        }

    useEffect(() => {
        // set timeout 3 seconds to remove error/success message
        setTimeout(() => {
        // this will reset messageSent and isSuccessMessage state
        setMessageSent(false)
        setIsSuccessMessage(false)
        }, 3000);
        // this will be dispatched when isSuccessMessage or messageSent changes its state
    }, [isSuccessMessage, messageSent])

    const classes = useStyles();

    const ltvCalculator = (loanAmount / appraisedValue).toFixed(2);

    return(
        <>

            <List className={classes.list} style={{ color: "#323E48"}}>
                <ListItem>
                    <ListItemText classes={{primary:classes.listItemText, secondary:classes.listItemText}} primary="Acra Broker ID or NMLS Number " secondary={brokerId} />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        classes={{primary:classes.listItemText, secondary:classes.listItemText}} 
                        primary="Acra Lending Correspondent" 
                        secondary={corrSelect} />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        classes={{primary:classes.listItemText, secondary:classes.listItemText}} 
                        primary="Branch NMLS ID Number" 
                        secondary={branchId} />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        classes={{primary:classes.listItemText, secondary:classes.listItemText}} 
                        primary="Company Name" 
                        secondary={company} />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        classes={{primary:classes.listItemText, secondary:classes.listItemText}} 
                        primary="Contact Name" 
                        secondary={contactName} />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        classes={{primary:classes.listItemText, secondary:classes.listItemText}} 
                        primary="Contact Phone" 
                        secondary={phoneNumber} />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        classes={{primary:classes.listItemText, secondary:classes.listItemText}} 
                        primary="Contact Email" 
                        secondary={email} />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        classes={{primary:classes.listItemText, secondary:classes.listItemText}} 
                        primary="Loan Type" 
                        secondary={loanType} />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        classes={{primary:classes.listItemText, secondary:classes.listItemText}} 
                        primary="Borrower's Name" 
                        secondary={borrowerName} />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        classes={{primary:classes.listItemText, secondary:classes.listItemText}} 
                        primary="Borrower's Mailing Address" 
                        secondary={address} />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        classes={{primary:classes.listItemText, secondary:classes.listItemText}} 
                        primary="Borrower's Self-Employment Business Name" 
                        secondary={businessName} />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        classes={{primary:classes.listItemText, secondary:classes.listItemText}} 
                        primary="Type of Business" 
                        secondary={businessType} />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        classes={{primary:classes.listItemText, secondary:classes.listItemText}} 
                        primary="Percentage of Ownership" 
                        secondary={ownership} />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        classes={{primary:classes.listItemText, secondary:classes.listItemText}} 
                        primary="Bank Statement Type" 
                        secondary={statementType} />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        classes={{primary:classes.listItemText, secondary:classes.listItemText}} 
                        primary="Explanation of Non-Business, Payroll Deposits, etc." 
                        secondary={explanation} />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        classes={{primary:classes.listItemText, secondary:classes.listItemText}} 
                        primary="Loan Amount" 
                        secondary={loanAmount} />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        classes={{primary:classes.listItemText, secondary:classes.listItemText}} 
                        primary="Appraised Value" 
                        secondary={appraisedValue} />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        classes={{primary:classes.listItemText, secondary:classes.listItemText}} 
                        primary="LTV" 
                        secondary={ltvCalculator} />
                </ListItem>
            </List>
            <br/><br/>
            <GridItem xs={12} sm={12} md={12} lg={12} style={{ display: "flex" }}>
                <Button 
                    color="gray"
                    onClick={prevStep}
                    style={{ marginLeft: "auto" }}
                >
                    Go Back
                </Button>                
                <Button 
                    color="blue"
                    onClick={submit}
                    style={{ marginLeft: "10px" }}
                >
                    Confirm
                </Button>
            </GridItem>
            <div>
                {messageSent && setIsSuccessMessage && (
                <div><p style={{ color: "#323E48" }}>{message}</p></div>
                )}
                {messageSent && !setIsSuccessMessage && (
                <div><p style={{ color: "red" }}>{message}</p></div>
                )}
            </div>
        </>
    )
}

const FileUpload = () => {
    
    return(
        <>
            <IframeUpload />
        </>
    )
}

export default function SectionBasics() {
  const [step, setStep] = useState(1)
  const [brokerId, setBrokerId] = useState("");
  const [corrSelect, setCorrSelect] = useState("");
  const [branchId, setBranchId] = useState("");
  const [company, setCompany] = useState("");
  const [contactName, setContactName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [loanType, setLoanType] = useState("");
  const [borrowerName, setBorrowerName] = useState("");
  const [address, setAddress] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [ownership, setOwnership] = useState("");
  const [statementType, setStatementType] = useState("");
  const [explanation, setExplanation] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [appraisedValue, setAppraisedValue] = useState("");
  const [ltv, setLtv] = useState("");
  


  // proceed to the next step
  const nextStep = () => {setStep(step + 1); window.scrollTo(0,0)}

  // previous step
  const prevStep = () => {setStep(step - 1); window.scrollTo(0,0)}

  const values = { 
      brokerId, 
      corrSelect,
      branchId,
      company,
      contactName,
      phoneNumber,
      email,
      loanType,
      borrowerName,
      address,
      businessName,
      businessType,
      ownership,
      statementType,
      explanation,
      loanAmount,
      appraisedValue,
      ltv
  }
  
  switch(step) {
    case 1:
        return <FormStep1
                    nextStep={nextStep}
                    values={values}
                    setBrokerId={setBrokerId}
                    setCorrSelect={setCorrSelect}
                />
    case 2:
        return <FormStep2 
                    nextStep={nextStep}
                    prevStep={prevStep}
                    values={values}
                    setBranchId={setBranchId}
                    setCompany={setCompany}
                    setContactName={setContactName}
                    setPhoneNumber={setPhoneNumber}
                    setEmail={setEmail}
                />
    case 3:
        return <FormStep3 
                    nextStep={nextStep}
                    prevStep={prevStep}
                    values={values}
                    setLoanType={setLoanType}
                    setBorrowerName={setBorrowerName}
                    setAddress={setAddress}
                    setBusinessName={setBusinessName}
                    setBusinessType={setBusinessType}
                    setOwnership={setOwnership}
                    setStatementType={setStatementType}
                    setExplanation={setExplanation}
                />
    case 4:
        return <FormStep4 
                    nextStep={nextStep}
                    prevStep={prevStep}
                    values={values}
                    setLoanAmount={setLoanAmount}
                    setAppraisedValue={setAppraisedValue}
                    setLtv={setLtv}
                />
    case 5:
        return <Confirm 
                nextStep={nextStep} 
                prevStep={prevStep} 
                values={values} 
                // submit={submit}
                />
    case 6:
        return <FileUpload />
        default:
            (console.log('This is a multi-step form built with React.'))
  };
}
