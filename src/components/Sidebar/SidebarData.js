import React from 'react';
import * as FaIcons from 'react-icons/fa';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FaIcons.FaHome/>
  },
  {
    title: 'About',
    path: '/about',
    icon: <FaIcons.FaRegUser/>
  },
  {
    title: 'Skills',
    path: '/skills',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Experience',
    path: '/experience',
    icon: <FaIcons.FaProjectDiagram />
  },

  {
    title: 'Education',
    path: '/education',
    icon: <FaIcons.FaPaperPlane />,
  },

  {
    title: 'Contact',
    path: '/contact',
    icon: <FaIcons.FaEnvelopeOpen />
  }
];