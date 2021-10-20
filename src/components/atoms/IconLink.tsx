import React from 'react';
import { Link, Tooltip } from '@mui/material';

export interface IconLinkProps {
  href: string;
  icon: any;
  text?: string;
}

export function IconLink({ href, icon, text }: IconLinkProps) {
  return (
    <Tooltip title={text}>
      <Link
        href={href}
        sx={{ color: '#2f4ac2' }}
        target="_blank"
        underline="none"
      >
        {icon}
      </Link>
    </Tooltip>
  );
}

export default IconLink;
