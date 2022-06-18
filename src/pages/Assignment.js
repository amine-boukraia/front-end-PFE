import React, { useState } from 'react';
import {
  Button,
  Card,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import * as PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import Page from '../components/Page';
import { AppWidgetSummary } from '../sections/@dashboard/app';
import Iconify from '../components/Iconify';

function Exercise({ text, title, deadline, color = 'success' }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{ bgcolor: (theme) => theme.palette[color].lighter }} id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent sx={{ bgcolor: (theme) => theme.palette[color].lighter }}>
          <DialogContentText dangerouslySetInnerHTML={{ __html: text }} id="alert-dialog-description" />
        </DialogContent>
        <DialogActions sx={{ bgcolor: (theme) => theme.palette[color].lighter }}>
          <Typography variant="subtitle2" sx={{ opacity: 0.72, textAlign: 'right' }}>
            Deadline : {deadline}
          </Typography>
        </DialogActions>
      </Dialog>
      <Card
        sx={{
          cursor: 'pointer',
          p: 3,
          boxShadow: 0,
          bgcolor: (theme) => theme.palette[color].lighter,
        }}
        onClick={handleClickOpen}
      >
        <Typography variant="h5">{title}</Typography>

        <Typography
          paragraph
          variant="subtitle2"
          sx={{ my: 2, opacity: 0.72 }}
          noWrap
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <Typography variant="subtitle2" sx={{ opacity: 0.72, textAlign: 'right' }}>
          Deadline : {deadline}
        </Typography>
      </Card>
    </>
  );
}

Exercise.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  deadline: PropTypes.string,
};

function Assignment(props) {
  const isProfessor = localStorage.getItem('userType') === 'teacher';
  return (
    <Page title="Assignment">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Assignment
          </Typography>
          {isProfessor && (
            <Button
              variant="contained"
              component={RouterLink}
              to="/dashboard/professor/assignment/new"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              New Assignment
            </Button>
          )}
        </Stack>
        <Grid container spacing={3} sx={{ my: 3 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Exercise
              text={
                '<p>test test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test test</p>'
              }
              title="Exercise"
              deadline="12/10/2022"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Exercise
              text={
                '<p>test test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test test</p>'
              }
              title="Exercise"
              deadline="12/10/2022"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Exercise
              text={
                '<p>test test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test test</p>'
              }
              title="Exercise"
              deadline="12/10/2022"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Exercise
              text={
                '<p>test test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test test</p>'
              }
              title="Exercise"
              deadline="12/10/2022"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Exercise
              text={
                '<p>test test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test test</p>'
              }
              title="Exercise"
              deadline="12/10/2022"
              color={'error'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Exercise
              text={
                '<p>test test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test test</p>'
              }
              title="Exercise"
              deadline="12/10/2022"
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default Assignment;
