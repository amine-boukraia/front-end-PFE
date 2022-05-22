// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Annoucement',
    path: '/dashboard/annoucement',
    icon: getIcon('fa6-solid:bullhorn'),
  },
  {
    title: 'Requested Docs',
    path: '/dashboard/docs',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'Results',
    path: '/dashboard/results',
    icon: getIcon('icon-park-outline:doc-success'),
  },
  {
    title: 'Schedule',
    path: '/dashboard/schedule',
    icon: getIcon('akar-icons:schedule'),
  },
  {
    title: 'Clubs',
    path: '/dashboard/clubs',
    icon: getIcon('fluent:broad-activity-feed-16-filled'),
  },
  {
    title: 'My Club',
    path: '/dashboard/clubs/mine',
    icon: getIcon('fluent:broad-activity-feed-16-filled'),
  },
];

export default navConfig;
