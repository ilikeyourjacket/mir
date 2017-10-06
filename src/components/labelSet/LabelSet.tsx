import * as React from "react";
import * as classnames from "classnames";
import "./labelSet.css";

export interface LabelSetProps {
  /** Label gets shown after the colon. */
  label: string;
}

/**
 * *markdown is supported here!* 
 */
export default class LabelSet extends React.Component<LabelSetProps, any> {
  state = {
    isToggled: false
  };

  render() {
    const toggleClass = classnames({
      'mir-label-set': true,
      'toggled': !this.state.isToggled
    });

    return (
      <div className={toggleClass}>
        <div
          className="mir-label-text"
          onClick={() => {
            this.setState({ isToggled: !this.state.isToggled });
          }}
        >
          {this.props.label}
        </div>
        <div className="mir-buffer" />
      </div>
    );
  }
}
