import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ 
  href, 
  external = false, 
  children, 
  className = '', 
  ...props 
}) => {
  const externalProps = external ? { 
    target: '_blank', 
    rel: 'noopener noreferrer'
  } : {};
  
  return (
    <a 
      href={href} 
      className={className}
      {...externalProps}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;