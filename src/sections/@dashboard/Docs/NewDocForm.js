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

export default function NewDocForm() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const NewDocSchema = Yup.object().shape({
    documentName: Yup.string().required('Documenet name is required'),
    reason: Yup.string().required('Reason is required'),
  });

  const formik = useFormik({
    initialValues: {
      documentName: '',
      reason: '',
    },
    validationSchema: NewDocSchema,
    onSubmit: async (data) => {
      try {
        await axiosInstance.post('student/requestdocument', data);
        enqueueSnackbar('Request sent successfully', { variant: 'success' });
        navigate('/dashboard/docs');
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
      }
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
              label="Document Title"
              {...getFieldProps('documentName')}
              error={Boolean(touched.documentName && errors.documentName)}
              helperText={touched.documentName && errors.documentName}
            />

            <TextField
              fullWidth
              type="text"
              label="Reason"
              {...getFieldProps('reason')}
              error={Boolean(touched.reason && errors.reason)}
              helperText={touched.reason && errors.reason}
            />
          </Stack>

          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Request
          </LoadingButton>
        </Form>
      </Container>
    </FormikProvider>
  );
}
