import React from 'react';
import { styled  } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const useStyles = styled((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Investment', 'Investor Information', "Investor Information","Investor Verfication","Add Funds"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Step 1: Select campaign settings...';
    case 1:
      return 'Step 2: What is an ad group anyways?';
    case 2:
      return 'Step 3: This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}
 
export default function Users() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(new Set());
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const response = [
    {
        "name": "displayName",
        "description": "Contact Name Field",
        "displayName": "Contact Name",
        "readOnly": false,
        "hidden": false,
        "indexed": false,
        "crmField": false,
        "tagInclude": false,
        "entityType": "CONNECTION",
        "encrypted": false,
        "custom": false,
        "standardOverride": false,
        "type": "text",
        "inputType": "textbox",
        "format": "text",
        "placeHolder": "Contact Name",
        "min": -2147483648,
        "max": 2147483647,
        "group": null,
        "order": 0,
        "deleted": false,
        "required": true,
        "hashKey": "4498e82679f1b611efb2c09e044ede31",
        "fieldValues": null
    },
    {
        "name": "name",
        "description": "Company Field",
        "displayName": "Company Name",
        "readOnly": false,
        "hidden": true,
        "indexed": false,
        "crmField": false,
        "tagInclude": false,
        "entityType": "CONNECTION",
        "encrypted": false,
        "custom": false,
        "standardOverride": false,
        "type": "text",
        "inputType": "textbox",
        "format": "text",
        "placeHolder": "Company Name",
        "min": -2147483648,
        "max": 2147483647,
        "group": null,
        "order": 1,
        "deleted": false,
        "required": false,
        "hashKey": "b068931cc450442b63f5b3d276ea4297",
        "fieldValues": null
    },
    {
        "name": "websiteUrl",
        "description": "Website Url Field",
        "displayName": "URL",
        "readOnly": false,
        "hidden": true,
        "indexed": false,
        "crmField": false,
        "tagInclude": false,
        "entityType": "CONNECTION",
        "encrypted": false,
        "custom": false,
        "standardOverride": false,
        "type": "text",
        "inputType": "textbox",
        "format": "text",
        "placeHolder": "Website URL",
        "min": -2147483648,
        "max": 2147483647,
        "group": null,
        "order": 2,
        "deleted": false,
        "required": false,
        "hashKey": "bc2e2f073b7d19b43461819f35fcb38b",
        "fieldValues": null
    },
    {
        "name": "email",
        "description": "email Field",
        "displayName": "Email",
        "readOnly": false,
        "hidden": false,
        "indexed": false,
        "crmField": false,
        "tagInclude": false,
        "entityType": "CONNECTION",
        "encrypted": false,
        "custom": false,
        "standardOverride": false,
        "type": "text",
        "inputType": "textbox",
        "format": "email",
        "placeHolder": "",
        "min": 0,
        "max": 0,
        "group": null,
        "order": 3,
        "deleted": false,
        "required": true,
        "hashKey": "c83f57c786a0b4a39efab23731c7ebc",
        "fieldValues": null
    },
    {
        "name": "phoneNumber",
        "description": "PhoneNumber Field",
        "displayName": "Phone Number",
        "readOnly": false,
        "hidden": false,
        "indexed": false,
        "crmField": false,
        "tagInclude": false,
        "entityType": "CONNECTION",
        "encrypted": false,
        "custom": false,
        "standardOverride": false,
        "type": "text",
        "inputType": "textbox",
        "format": "phoneNumber",
        "placeHolder": "",
        "min": 0,
        "max": 0,
        "group": null,
        "order": 4,
        "deleted": false,
        "required": false,
        "hashKey": "c9aa10b21bc611b05b1d8e0c01e5d397",
        "fieldValues": null
    },
    {
        "name": "subject",
        "description": "SubjectChoice Field",
        "displayName": "What topic are you interested in contacting us about?",
        "readOnly": false,
        "hidden": false,
        "indexed": false,
        "crmField": false,
        "tagInclude": false,
        "entityType": "CONNECTION",
        "encrypted": false,
        "custom": false,
        "standardOverride": false,
        "type": "list",
        "inputType": "select",
        "format": null,
        "placeHolder": "Select your choice",
        "min": 0,
        "max": 0,
        "group": null,
        "order": 5,
        "deleted": false,
        "required": false,
        "hashKey": "b5e3374e43f6544852f7751dfc529100",
        "fieldValues": null,
        "options": [
            "Pricing/Special Offers",
            " Comments/Feedback",
            " Other Questions"
        ]
    },
    {
        "name": "message",
        "description": "Message Field",
        "displayName": "Your Message",
        "readOnly": false,
        "hidden": false,
        "indexed": false,
        "crmField": false,
        "tagInclude": false,
        "entityType": "CONNECTION",
        "encrypted": false,
        "custom": false,
        "standardOverride": false,
        "type": "text",
        "inputType": "multiline",
        "format": null,
        "placeHolder": "",
        "min": 0,
        "max": 0,
        "group": null,
        "order": 6,
        "deleted": false,
        "required": false,
        "hashKey": "78e731027d8fd50ed642340b7c9a63b3",
        "fieldValues": null
    },
    {
        "name": "offer",
        "description": "offers Field",
        "displayName": "Ok to send me special offers and info",
        "readOnly": false,
        "hidden": false,
        "indexed": false,
        "crmField": false,
        "tagInclude": false,
        "entityType": "CONNECTION",
        "encrypted": false,
        "custom": false,
        "standardOverride": false,
        "type": "boolean_type",
        "inputType": "checkbox",
        "format": null,
        "placeHolder": "message",
        "min": 0,
        "max": 0,
        "group": null,
        "order": 7,
        "deleted": false,
        "required": false,
        "hashKey": "d60db28d94d538bbb249dcc7f2273ab1",
        "fieldValues": null,
        "options": null
    }
]

  const totalSteps = () => {
    return getSteps().length;
  };

  const isStepOptional = (step) => {
    return step === 1;
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const skippedSteps = () => {
    return skipped.size;
  };

  const completedSteps = () => {
    return completed.size;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps() - skippedSteps();
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed
          // find the first step that has been completed
          steps.findIndex((step, i) => !completed.has(i))
        : activeStep + 1;

    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = new Set(completed);
    newCompleted.add(activeStep);
    setCompleted(newCompleted);

    /**
     * Sigh... it would be much nicer to replace the following if conditional with
     * `if (!this.allStepsComplete())` however state is not set when we do this,
     * thus we have to resort to not being very DRY.
     */
    if (completed.size !== totalSteps() - skippedSteps()) {
      handleNext();
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted(new Set());
    setSkipped(new Set());
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  function isStepComplete(step) {
    return completed.has(step);
  }
  
  
  console.log(response)

  // const handleChange = (e) => {
  //  const {name,value} = e.target;
  //  console.log(name,value);
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e.target);
  //  }
  return (
    <div className={classes.root}>
      <Stepper alternativeLabel nonLinear activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const buttonProps = {};
          if (isStepOptional(index)) {
            buttonProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepButton
                onClick={handleStep(index)}
                completed={isStepComplete(index)}
                {...buttonProps}
              >
                {label}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                Next
              </Button>
              {isStepOptional(activeStep) && !completed.has(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )}

              {activeStep !== steps.length &&
                (completed.has(activeStep) ? (
                  <Typography variant="caption" className={classes.completed}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button variant="contained" color="primary" onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                  </Button>
                ))}
            </div>
          </div>
        )}
      </div>
      <form>
        {
          response.map((item) => {
            return(
                item?.inputType === "textbox" ?
                <div>
                  <label>{item.displayName}</label>
                  <input 
                  type={item.inputType}
                  name = {item.name}
                  />
                </div> 
              : item?.inputType === "select" ?
              <div>
                <label>{item.displayName}</label>
                <select name={item.name}>
                  {
                    item.options.map((optionItem) => {
                      return(
                        <option value={optionItem}>{optionItem}</option>
                      )
                    })
                  }
                 
                </select>
              </div> : "" 
            )  
          })
        }
      </form>
    </div>
  );
}
