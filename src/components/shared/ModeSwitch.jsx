import * as React from "react";
import{FormControlLabel,FormGroup}  from "@mui/material";
import {StyledSwitch} from './shared.styled';


export default function ModeSwitch() {
  return (
    <FormGroup>
      <FormControlLabel
        control={<StyledSwitch sx={{ m: 1 }} defaultChecked />}
        label=""
      />
    </FormGroup>
  );
}
