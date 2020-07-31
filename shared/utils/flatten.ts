import React from "react";

const flatten = (text: string, child: any): any => {
  const flattenChildren = React.Children.toArray(child.props.children).reduce(
    flatten,
    text
  );
  return typeof child === "string" ? text + child : flattenChildren;
};

export { flatten };
