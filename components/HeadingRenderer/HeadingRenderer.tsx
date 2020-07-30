import React from "react";
import { flatten } from "../../shared/utils/flatten";

interface Props {
  level: number;
  children: React.ReactNode;
}

const HeadingRenderer: React.FC<Props> = ({ level, children }) => {
  const childrenElements = React.Children.toArray(children);
  const headingText = childrenElements.reduce(flatten, "");
  const headingSlug = () => {
    return typeof headingText === "string"
      ? headingText.toLowerCase().replace(/\W/g, "-")
      : "";
  };

  return React.createElement("h" + level, { id: headingSlug }, children);
};

export default HeadingRenderer;
