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
import Iconify from '../../../components/Iconify';

export default function NewStudentForm() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const NewStudentSchema = Yup.object().shape({
    group: Yup.string().required('group name is required'),
    subgroup: Yup.string().required('subgroup is required'),
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    cin: Yup.string().required('CIN is required'),

  });

  const formik = useFormik({
    initialValues: {
      group: "",
      subgroup: "",
      firstName: "",
      lastName: "",
      cin: "",
    },
    validationSchema: NewStudentSchema,
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

      navigate('/dashboard/admin/students');
      enqueueSnackbar('student added successfully', { variant: 'success' });
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
              label="CIN"
              {...getFieldProps('cin')}
              error={Boolean(touched.cin && errors.cin)}
              helperText={touched.cin && errors.cin}
            />

            <TextField
              fullWidth
              type="text"
              label="First Name"
              {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />
            <TextField
              fullWidth
              type="text"
              label="Last Name"
              {...getFieldProps('lastName')}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
            <TextField
              fullWidth
              type="text"
              label="Group"
              {...getFieldProps('group')}
              error={Boolean(touched.group && errors.group)}
              helperText={touched.group && errors.group}
            />
            <TextField
              fullWidth
              type="text"
              label="Sub Group"
              {...getFieldProps('subgroup')}
              error={Boolean(touched.subgroup && errors.subgroup)}
              helperText={touched.subgroup && errors.subgroup}
            />
          </Stack>

          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Add
          </LoadingButton>
        </Form>
      </Container>
    </FormikProvider>
  );
}
