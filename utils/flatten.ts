import React from "react";

const flatten = (text: string, child: React.Component) => {
  return typeof child === "string"
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
};

export { flatten };
