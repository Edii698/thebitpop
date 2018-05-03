import React from "react";
import { Input } from 'react-materialize'

export const Input = props => (
  <div className="input-field">
    <Input type="text" {...props} />
  </div>
);
