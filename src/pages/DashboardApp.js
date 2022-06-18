import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
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
import useFetcher from "../hooks/useFetcher";

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();
  const {data,error,loading} = useFetcher(`${process.env.REACT_APP_API_BASE_URL}/admin/annoucements`)
  const isAdmin = window.location.pathname.includes("/admin")

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
            <AppWidgetSummary title="Exams" total="12/01/2023" color="info" icon={'ant-design:calendar-outlined'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Class Stop" total="12/06/2023" color="warning" icon={'ant-design:calendar-outlined'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Class Stop - First Semester" total="01/02/2023" color="error" icon={'ant-design:calendar-outlined'} />
          </Grid>
          {isAdmin && (
            <Grid item >
              <Button variant="contained" component={Link} to="/dashboard/admin/announcement/new" startIcon={<Iconify icon="eva:plus-fill" />}>
                New Announcement
              </Button>
            </Grid>
          )}

          <Grid item xs={12} md={12} lg={12}>
            <AppNewsUpdate
              title="Annoucements"
              list={data?.data || []}
            />
          </Grid>


        </Grid>
      </Container>
    </Page>
  );
}
