import * as React from "react";
import * as ReactDOM from "react-dom";

export interface LifestyleProps {
  /** Label gets shown after the colon. */
  label: string;
  children?: any;
}

/**
 * Some general description about this Ништяк.
 * 
 * *markdown is supported here!* 
 */
export default class Lifestyle extends React.Component<LifestyleProps, any> {
    public static displayName = "Lifestyle"

  render() {
    <div>hey</div>
  }
}

class Tooltip extends React.Component {
  render () {
    return (
      <div ref="reference">
        this is the tooltip
        </div>
    )
  }
}
