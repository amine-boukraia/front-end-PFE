import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import * as Yup from 'yup';
import { Form, FormikProvider, useFormik } from 'formik';
import { Container, Stack, TextField , Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import axiosInstance from '../../../axiosInstance';

const SessionSchema = {
  subject: '',
  classromm: '',
  teacher: '',
  halfMonth: false,
  halfGroup: false,
};

const daySchema = {
  session1: { ...SessionSchema },
  session2: { ...SessionSchema },
  session3: { ...SessionSchema },
  session4: { ...SessionSchema },
  session5: { ...SessionSchema },
};

const schedule = {
  subGroupCode: '',
  semestre: 'semester 1',
  monday: { ...daySchema },
  tuesday: { ...daySchema },
  wednsday: { ...daySchema },
  thursday: { ...daySchema },
  friday: { ...daySchema },
  saturday: { ...daySchema },
};



function NewScheduleForm(props) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const NewScheduleSchema = Yup.object().shape({
    documentName: Yup.string().required('Documenet name is required'),
    reason: Yup.string().required('Reason is required'),
  });

  const formik = useFormik({
    initialValues: {
      documentName: '',
      reason: '',
    },
    validationSchema: NewScheduleSchema,
    onSubmit: async (data) => {
      try {
        // await axiosInstance.post('student/requestdocument', data);
        enqueueSnackbar('Request sent successfully', { variant: 'success' });
        navigate('/dashboard/admin/schedule');
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
          <Stack direction={"row"} sx={{alignItems:"center"}} spacing={3} my={4}>
            <Typography sx={{textTransform:"capitalize"}} variant={"h4"}>
              monday
            </Typography>
            <Stack direction={"column"} sx={{alignItems:"center"}} spacing={3} my={4}>
              <Typography variant={"h4"}>
                session 1
              </Typography>
              <TextField

                type="text"
                label="Document Title"
                {...getFieldProps('documentName')}
                error={Boolean(touched.documentName && errors.documentName)}
                helperText={touched.documentName && errors.documentName}
              />

              <TextField

                type="text"
                label="Reason"
                {...getFieldProps('reason')}
                error={Boolean(touched.reason && errors.reason)}
                helperText={touched.reason && errors.reason}
              />
            </Stack>
            <Stack direction={"column"} sx={{alignItems:"center"}} spacing={3} my={4}>
              <Typography variant={"h4"}>
                session 2
              </Typography>
              <TextField

                type="text"
                label="Document Title"
                {...getFieldProps('documentName')}
                error={Boolean(touched.documentName && errors.documentName)}
                helperText={touched.documentName && errors.documentName}
              />

              <TextField

                type="text"
                label="Reason"
                {...getFieldProps('reason')}
                error={Boolean(touched.reason && errors.reason)}
                helperText={touched.reason && errors.reason}
              />
            </Stack>
            <Stack direction={"column"} sx={{alignItems:"center"}} spacing={3} my={4}>
              <Typography variant={"h4"}>
                session 3
              </Typography>
              <TextField

                type="text"
                label="Document Title"
                {...getFieldProps('documentName')}
                error={Boolean(touched.documentName && errors.documentName)}
                helperText={touched.documentName && errors.documentName}
              />

              <TextField

                type="text"
                label="Reason"
                {...getFieldProps('reason')}
                error={Boolean(touched.reason && errors.reason)}
                helperText={touched.reason && errors.reason}
              />
            </Stack>
            <Stack direction={"column"} sx={{alignItems:"center"}} spacing={3} my={4}>
              <Typography variant={"h4"}>
                session 3
              </Typography>
              <TextField

                type="text"
                label="Document Title"
                {...getFieldProps('documentName')}
                error={Boolean(touched.documentName && errors.documentName)}
                helperText={touched.documentName && errors.documentName}
              />

              <TextField

                type="text"
                label="Reason"
                {...getFieldProps('reason')}
                error={Boolean(touched.reason && errors.reason)}
                helperText={touched.reason && errors.reason}
              />
            </Stack>
            <Stack direction={"column"} sx={{alignItems:"center"}} spacing={3} my={4}>
              <Typography variant={"h4"}>
                session 3
              </Typography>
              <TextField

                type="text"
                label="Document Title"
                {...getFieldProps('documentName')}
                error={Boolean(touched.documentName && errors.documentName)}
                helperText={touched.documentName && errors.documentName}
              />

              <TextField

                type="text"
                label="Reason"
                {...getFieldProps('reason')}
                error={Boolean(touched.reason && errors.reason)}
                helperText={touched.reason && errors.reason}
              />
            </Stack>
          </Stack>
          <Stack direction={"row"} sx={{alignItems:"center"}} spacing={3} my={4}>
            <Typography sx={{textTransform:"capitalize"}} variant={"h4"}>
              thursday
            </Typography>
            <Stack direction={"column"} sx={{alignItems:"center"}} spacing={3} my={4}>
              <Typography variant={"h4"}>
                session 1
              </Typography>
              <TextField

                type="text"
                label="Document Title"
                {...getFieldProps('documentName')}
                error={Boolean(touched.documentName && errors.documentName)}
                helperText={touched.documentName && errors.documentName}
              />

              <TextField

                type="text"
                label="Reason"
                {...getFieldProps('reason')}
                error={Boolean(touched.reason && errors.reason)}
                helperText={touched.reason && errors.reason}
              />
            </Stack>
            <Stack direction={"column"} sx={{alignItems:"center"}} spacing={3} my={4}>
              <Typography variant={"h4"}>
                session 1
              </Typography>
              <TextField

                type="text"
                label="Document Title"
                {...getFieldProps('documentName')}
                error={Boolean(touched.documentName && errors.documentName)}
                helperText={touched.documentName && errors.documentName}
              />

              <TextField

                type="text"
                label="Reason"
                {...getFieldProps('reason')}
                error={Boolean(touched.reason && errors.reason)}
                helperText={touched.reason && errors.reason}
              />
            </Stack>
            <Stack direction={"column"} sx={{alignItems:"center"}} spacing={3} my={4}>
              <Typography variant={"h4"}>
                session 1
              </Typography>
              <TextField

                type="text"
                label="Document Title"
                {...getFieldProps('documentName')}
                error={Boolean(touched.documentName && errors.documentName)}
                helperText={touched.documentName && errors.documentName}
              />

              <TextField

                type="text"
                label="Reason"
                {...getFieldProps('reason')}
                error={Boolean(touched.reason && errors.reason)}
                helperText={touched.reason && errors.reason}
              />
            </Stack>
            <Stack direction={"column"} sx={{alignItems:"center"}} spacing={3} my={4}>
              <Typography variant={"h4"}>
                session 1
              </Typography>
              <TextField

                type="text"
                label="Document Title"
                {...getFieldProps('documentName')}
                error={Boolean(touched.documentName && errors.documentName)}
                helperText={touched.documentName && errors.documentName}
              />

              <TextField

                type="text"
                label="Reason"
                {...getFieldProps('reason')}
                error={Boolean(touched.reason && errors.reason)}
                helperText={touched.reason && errors.reason}
              />
            </Stack>
            <Stack direction={"column"} sx={{alignItems:"center"}} spacing={3} my={4}>
              <Typography variant={"h4"}>
                session 1
              </Typography>
              <TextField

                type="text"
                label="Document Title"
                {...getFieldProps('documentName')}
                error={Boolean(touched.documentName && errors.documentName)}
                helperText={touched.documentName && errors.documentName}
              />

              <TextField

                type="text"
                label="Reason"
                {...getFieldProps('reason')}
                error={Boolean(touched.reason && errors.reason)}
                helperText={touched.reason && errors.reason}
              />
            </Stack>
          </Stack>
          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Request
          </LoadingButton>
        </Form>
      </Container>
    </FormikProvider>
  );
}

export default NewScheduleForm;
