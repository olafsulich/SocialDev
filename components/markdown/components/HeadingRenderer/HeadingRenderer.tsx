import React from 'react';
import slugify from 'slugify';
import HeadingAnchor from '../HeadingAnchor/HeadingAnchor';

type Props = {
  level: number;
  children: JSX.Element[];
};

const HeadingRenderer = ({ children, level }: Props) => {
  const heading = children[0].props.children;
  const slugifiedHeading = slugify(heading);
  return React.createElement(
    `h${level}`,
    {
      id: slugifiedHeading,
      key: slugifiedHeading,
      className: 'posRel',
    },
    [...children, <HeadingAnchor key={slugifiedHeading} link={`#${slugifiedHeading}`}></HeadingAnchor>],
  );
};

export default HeadingRenderer;
