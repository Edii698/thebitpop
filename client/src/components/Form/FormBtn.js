import React from "react";
import { Button } from 'react-materialize'

export const FormBtn = props => (
  <Button {...props} style={{ float: "right", marginBottom: 10 }} type="button" className="#03a9f4 light-blue modal-close" waves='light'>
    {props.children}
  </Button>
);
