import React from "react";

const flatten = (
  text: string,
  child: React.Component
): string | React.ReactNode => {
  const flattenChildren = React.Children.toArray(child.props.children).reduce(
    flatten,
    text
  );
  return typeof child === "string" ? text + child : flattenChildren;
};

export { flatten };
