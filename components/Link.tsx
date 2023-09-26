import React, { HTMLAttributeAnchorTarget } from 'react';
import NextLink from 'next/link'

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
};

const Link: React.FC<Props> = ({ href, children, className, target = '_self' }) => {
  return (
    <NextLink href={href} target={target} className={`underline hover:no-underline ${className}`}>
      {children}
    </NextLink>
  );
};

export default Link;
