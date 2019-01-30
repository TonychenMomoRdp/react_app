import React from "react";

const ListItem = props => {
  return <li>{props.value}</li>;
};

const NumberList2 = props => {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map(number => (
        <ListItem key={number.toString()} value={number} />
      ))}
    </ul>
  );
};

NumberList2.defaultProps = {
  numbers: [1, 2, 3, 4, 5]
};

export default NumberList2;
