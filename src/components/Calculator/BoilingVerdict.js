import React from "react";

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

BoilingVerdict.defaultProps = {
  celsius: 100
};

export default BoilingVerdict;
