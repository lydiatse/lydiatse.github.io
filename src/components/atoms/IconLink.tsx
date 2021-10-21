import React from 'react';
import { Link, Tooltip } from '@mui/material';
import { theme } from '../../styles';

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
        sx={{
          color: theme.palette.secondary.main,
        }}
        target="_blank"
        underline="none"
      >
        {icon}
      </Link>
    </Tooltip>
  );
}

export default IconLink;
