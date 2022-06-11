// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Annoucement',
    path: '/dashboard/announcement',
    icon: getIcon('fa6-solid:bullhorn'),
    for: 'student',
  },
  {
    title: 'Requested Docs',
    path: '/dashboard/docs',
    icon: getIcon('eva:file-text-fill'),
    for: 'student',
  },
  // {
  //   title: 'Results',
  //   path: '/dashboard/results',
  //   icon: getIcon('icon-park-outline:doc-success'),
  // },
  {
    title: 'Schedule',
    path: '/dashboard/schedule',
    icon: getIcon('akar-icons:schedule'),
    for: 'student',
  },
  {
    title: 'Annoucement',
    path: '/dashboard/admin/announcement',
    icon: getIcon('fa6-solid:bullhorn'),
    for: 'admin',
  },
  {
    title: 'Requested Docs',
    path: '/dashboard/admin/docs',
    icon: getIcon('eva:file-text-fill'),
    for: 'admin',
  },
  {
    title: 'Schedule',
    path: '/dashboard/admin/schedule',
    icon: getIcon('akar-icons:schedule'),
    for: 'admin',
  },
  {
    title: 'Groups',
    path: '/dashboard/admin/groups',
    icon: getIcon('akar-icons:schedule'),
    for: 'admin',
  },
  // {
  //   title: 'Clubs',
  //   path: '/dashboard/clubs',
  //   icon: getIcon('fluent:broad-activity-feed-16-filled'),
  // },
  // {
  //   title: 'My Club',
  //   path: '/dashboard/clubs/mine',
  //   icon: getIcon('fluent:broad-activity-feed-16-filled'),
  // },
];

export default navConfig;
