import React from 'react';
import NextLink from 'next/link'

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const Link: React.FC<Props> = ({ href, children, className }) => {
  return (
    <NextLink href={href} className={`underline hover:no-underline ${className}`}>
      {children}
    </NextLink>
  );
};

export default Link;
