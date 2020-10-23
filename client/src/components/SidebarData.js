import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: <MdIcons.MdDashboard />,
      cName: 'nav-text'
    },
    {
      title: 'Resources',
      path: '#resources',
      icon: <RiIcons.RiPagesLine />,
      cName: 'nav-text'
    },
    {
      title: 'Projects',
      path: '#projects',
      icon: <AiIcons.AiFillProject />,
      cName: 'nav-text'
    },
    {
      title: 'Events',
      path: '#events',
      icon: <MdIcons.MdEvent />,
      cName: 'nav-text'
    },
    {
      title: 'Gallery',
      path: '#gallery',
      icon: <IoIcons.IoMdPhotos />,
      cName: 'nav-text'
    },
    {
      title: 'Placement/Internship & Achievements',
      path: '#pia',
      icon: <GiIcons.GiGraduateCap />,
      cName: 'nav-text'
    }
  ];