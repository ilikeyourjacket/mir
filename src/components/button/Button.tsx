import * as React from "react";
import './button.css';

export interface ButtonProps {
  /** Label gets shown after the colon. */
  label: string;
}

/**
 * *markdown is supported here!* 
 */
export default class Button extends React.Component<ButtonProps, any> {
  render() {
    return (
      <div className="mir-button-border">
        <div className="mir-button">
          {this.props.label}
        </div>
      </div>
    )
  }
}
