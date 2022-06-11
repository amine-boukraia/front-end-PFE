import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as Yup from 'yup';
import { Form, FormikProvider, useFormik } from 'formik';
import {
  Alert,
  Checkbox,
  Container,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { VariantType, useSnackbar } from 'notistack';
import axiosInstance from '../../../axiosInstance';

export default function NewAnnouncementForm() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const NewAnnouncementSchema = Yup.object().shape({
    announcementName: Yup.string().required('Announcement name is required'),
    description: Yup.string().required('Description is required'),
  });

  const formik = useFormik({
    initialValues: {
      announcementName: '',
      description: '',
    },
    validationSchema: NewAnnouncementSchema,
    onSubmit: async (data) => {
      // try {
      //   await axiosInstance.post('student/requestdocument', data);
      //   enqueueSnackbar('Request sent successfully', { variant: 'success' });
      //   navigate('/dashboard/docs');
      // } catch (error) {
      //   console.log(error);
      // } finally {
      //   setSubmitting(false);
      // }
      console.log('hello');
      navigate('/dashboard/admin/announcement');
      enqueueSnackbar('Announcement submitted successfully', { variant: 'success' });
      setSubmitting(false);
    },
  });

  const { errors, touched, values, isSubmitting, setSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Container>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={3} my={4}>
            <TextField
              fullWidth
              type="text"
              label="Announcement Name"
              {...getFieldProps('announcementName')}
              error={Boolean(touched.announcementName && errors.announcementName)}
              helperText={touched.announcementName && errors.announcementName}
            />

            <TextField
              fullWidth
              type="text"
              label="Description"
              {...getFieldProps('description')}
              error={Boolean(touched.description && errors.description)}
              helperText={touched.description && errors.description}
            />
          </Stack>

          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Submit
          </LoadingButton>
        </Form>
      </Container>
    </FormikProvider>
  );
}
