import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Form, FormikProvider, useFormik } from 'formik';
import {
  Alert,
  Checkbox,
  CircularProgress,
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { VariantType, useSnackbar } from 'notistack';
import axiosInstance from '../../../axiosInstance';
import Iconify from '../../../components/Iconify';
import useFetcher from '../../../hooks/useFetcher';


export default function NewStudentForm() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { data, loading } = useFetcher('/admin/groups');

  const NewStudentSchema = Yup.object().shape({
    group: Yup.string().required('group name is required'),
    subGroup: Yup.string().required('subgroup is required'),
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    CIN: Yup.string()
      .required("CIN is required")
      .matches(/^[0-9\s]+$/, "Only Integers are allowed for CIN"),
  });

  const formik = useFormik({
    initialValues: {
      group: '',
      subGroup: '',
      firstName: '',
      lastName: '',
      CIN: '',
    },
    validationSchema: NewStudentSchema,
    onSubmit: async (data) => {
      try {
        await axiosInstance.post('admin/student', data);
        enqueueSnackbar('student added successfully', { variant: 'success' });
        navigate('/dashboard/admin/students');
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
              label="CIN"
              {...getFieldProps('CIN')}
              error={Boolean(touched.CIN && errors.CIN)}
              helperText={touched.CIN && errors.CIN}
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
            <Stack sx={{ my: 4 }}>
              {loading && !data?.data ? (
                <CircularProgress />
              ) : (
                <>
                  <FormControl sx={{ mb: 4 }}>
                    <InputLabel id="group">Group</InputLabel>
                    <Select
                      label="Group"
                      id="group"
                      {...getFieldProps('group')}
                      error={Boolean(touched.group && errors.group)}
                      helperText={touched.group && errors.group}
                    >
                      {data?.data.map((group) => (
                        <MenuItem key={group.groupCode} value={group.groupCode}>
                          {group.groupCode}
                        </MenuItem>
                      ))}
                    </Select>
                    {touched.group && errors.group ? (
                      <FormHelperText error>{touched.group && errors.group}</FormHelperText>
                    ) : null}
                  </FormControl>
                  <FormControl>
                    <InputLabel id="subGroup">Sub Group</InputLabel>
                    <Select
                      label="Sub Group"
                      id="subGroup"
                      {...getFieldProps('subGroup')}
                      error={Boolean(touched.subGroup && errors.subGroup)}
                      helperText={touched.subGroup && errors.subGroup}
                    >
                      {data?.data
                        .filter((group) => group.groupCode === values.group)
                        .map((group) => {
                          return group.subGroup.map((subgroup) => (
                            <MenuItem key={subgroup.subGroupCode} value={subgroup.subGroupCode}>
                              {subgroup.subGroupCode}
                            </MenuItem>
                          ));
                        })}
                    </Select>
                    {touched.subGroup && errors.subGroup ? (
                      <FormHelperText error>{touched.subGroup && errors.subGroup}</FormHelperText>
                    ) : null}
                  </FormControl>
                </>
              )}
            </Stack>
          </Stack>

          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Add
          </LoadingButton>
        </Form>
      </Container>
    </FormikProvider>
  );
}
