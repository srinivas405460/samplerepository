import React,{useState} from "react";
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import ModalComponent from "../components/modal";
import theme from "../theme";
import VerficationStatus from "../components/VerficationStatus";
import { Typography } from "@material-ui/core";

const ModalPage = () => {
  const [open,setOpen] = useState(false);
  const title = "Your Identity Verification has been field due to the following reasons (s):"
  const formatText = () => {
    return(
      <>
        <Typography variant="body1">
        - We provide identity verification failure information provided from Jumio platform 
      </Typography>
      <Typography variant="body1">
       - Please either re-try identity verification step by clicking the identity verification button again or contact &nbsp; 
      {  <a href="https://mui.com/material-ui/material-icons/?query=war&selected=WarningAmber">the EquitySlice Client Support Team</a>}
    </Typography>
      </>
    )
  }
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
    <button onClick={()=>setOpen(true)}>Modal</button>
      <ModalComponent 
      icon={<CheckSharpIcon style={{ fontSize: 30 }} />} 
      title={"Successfully Saved"} 
      text={"Your investment in EquitySiice’s XYZ Is successfully saved"}
      open={open}
      handleClose={handleClose}
      color={theme.palette.primary.main}
      />
      <br/>
      <br/>
      <VerficationStatus
        title = {title}
        text = {formatText()}
        type = "success"
      />
    </>
  )
}

export default ModalPage;