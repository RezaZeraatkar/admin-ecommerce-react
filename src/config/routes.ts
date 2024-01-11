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
    title: 'add product',
    address: '/product/add',
    icon: React.createElement(MailIcon),
    roles: [],
    permissions: [],
  },
];
