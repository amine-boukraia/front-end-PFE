import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------
const announcements = [{
  id:faker.time,
  title: "CALENDRIERS DES DEVOIRS DE CONTRÔLE SEMESTRE 2 A.U. 21-22",
  description: faker.lorem.lines("5"),
  image: `http://www.isetta.rnu.tn/stylesheets/images/banners/mini/cours.jpg`,
  postedAt: faker.date.recent(),
},{
  id:faker.time,
  title: "CALENDRIERS DES DEVOIRS DE CONTRÔLE SEMESTRE 2 A.U. 21-22",
  description: faker.lorem.lines("5"),
  image: `http://www.isetta.rnu.tn/stylesheets/images/banners/mini/cours.jpg`,
  postedAt: faker.date.recent(),
},{
  id:faker.time,
  title: "CALENDRIERS DES DEVOIRS DE CONTRÔLE SEMESTRE 2 A.U. 21-22",
  description: faker.lorem.lines("5"),
  image: `http://www.isetta.rnu.tn/stylesheets/images/banners/mini/cours.jpg`,
  postedAt: faker.date.recent(),
},{
  id:faker.time,
  title: "CALENDRIERS DES DEVOIRS DE CONTRÔLE SEMESTRE 2 A.U. 21-22",
  description: faker.lorem.lines("5"),
  image: `http://www.isetta.rnu.tn/stylesheets/images/banners/mini/cours.jpg`,
  postedAt: faker.date.recent(),
},{
  id:faker.time,
  title: "CALENDRIERS DES DEVOIRS DE CONTRÔLE SEMESTRE 2 A.U. 21-22",
  description: faker.lorem.lines("5"),
  image: `http://www.isetta.rnu.tn/stylesheets/images/banners/mini/cours.jpg`,
  postedAt: faker.date.recent(),
},{
  id:faker.time,
  title: "CALENDRIERS DES DEVOIRS DE CONTRÔLE SEMESTRE 2 A.U. 21-22",
  description: faker.lorem.lines("5"),
  image: `http://www.isetta.rnu.tn/stylesheets/images/banners/mini/cours.jpg`,
  postedAt: faker.date.recent(),
},]
export default function DashboardApp() {
  const theme = useTheme();

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="DS Exams" total="12/10/2022" icon={'ant-design:calendar-outlined'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Exams" total="12/10/2022" color="info" icon={'ant-design:calendar-outlined'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Class Stop" total="12/10/2022" color="warning" icon={'ant-design:calendar-outlined'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Class Stop - First Semester" total="12/10/2022" color="error" icon={'ant-design:calendar-outlined'} />
          </Grid>


          <Grid item xs={12} md={12} lg={12}>
            <AppNewsUpdate
              title="Annoucements"
              list={announcements}
            />
          </Grid>


        </Grid>
      </Container>
    </Page>
  );
}
