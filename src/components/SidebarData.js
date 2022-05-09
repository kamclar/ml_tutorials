import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Overview',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'DICH ML tutorials',
    path: '/tutorials',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Exploratory analysis',
        path: '/tutorials/t1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Data preprocessing',
        path: '/tutorials/t2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Metrics',
        path: '/tutorials/t3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Models',
        path: '/tutorials/t4',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Results Presentation',
        path: '/tutorials/t5',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'About',
    path: '/about',
    icon: <IoIcons.IoMdPeople />
  },

];
