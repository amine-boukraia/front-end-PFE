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
  {
    title: 'Schedule',
    path: '/dashboard/schedule',
    icon: getIcon('akar-icons:schedule'),
    for: 'student',
  },{
    title: 'Assignment',
    path: '/dashboard/Assignment',
    icon: getIcon('ic:baseline-assignment-turned-in'),
    for: 'student',
  },
  {
    title: 'Annoucement',
    path: '/dashboard/professor/announcement',
    icon: getIcon('fa6-solid:bullhorn'),
    for: 'professor',
  },
  {
    title: 'Requested Docs',
    path: '/dashboard/professor/docs',
    icon: getIcon('eva:file-text-fill'),
    for: 'professor',
  },
  {
    title: 'Schedule',
    path: '/dashboard/professor/schedule',
    icon: getIcon('akar-icons:schedule'),
    for: 'professor',
  },
  {
    title: 'Assignment',
    path: '/dashboard/professor/assignment',
    icon: getIcon('ic:baseline-assignment-turned-in'),
    for: 'professor',
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
    title: 'Students',
    path: '/dashboard/admin/students',
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
