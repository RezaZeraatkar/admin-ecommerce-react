import React from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export const routes = [
  {
    title: 'products list',
    address: '/products',
    icon: React.createElement(InboxIcon),
    roles: [],
    permissions: [],
  },
  {
    title: 'product',
    address: '/products/add',
    icon: React.createElement(MailIcon),
    roles: [],
    permissions: [],
  },
  {
    title: 'features list',
    address: '/features',
    icon: React.createElement(MailIcon),
    roles: [],
    permissions: [],
  },
  {
    title: 'feature',
    address: '/features/add',
    icon: React.createElement(MailIcon),
    roles: [],
    permissions: [],
  },
];
