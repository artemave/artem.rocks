import React, { HTMLAttributeAnchorTarget } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import NextLink from 'next/link'

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
};

const Link: React.FC<Props> = ({ href, children, className, target = '_self' }) => {
  return (
    <>
      <NextLink href={href} target={target} className={`underline hover:no-underline ${ target !== '_self' && "after:content-['_']" } ${className}`}>
        {children}
      </NextLink>
      { target !== '_self' && <FaExternalLinkAlt size={13} className="inline-block" /> }
    </>
  );
};

export default Link;
