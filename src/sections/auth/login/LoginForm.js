import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import { Link, Stack, Checkbox, TextField, IconButton, InputAdornment, FormControlLabel, Alert } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../../../components/Iconify';

// service
import axiosInstance from '../../../axiosInstance';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState();

  const LoginSchema = Yup.object().shape({
    CIN: Yup.string().required('CIN is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      CIN: '',
      password: '',
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: async (data) => {
      setError(null);
      try {
        const {
          data: { token },
        } = await axiosInstance.post('student/login', data);

        localStorage.setItem('token', token);
        navigate('/dashboard/announcement');
      } catch (error) {
        setError(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const { errors, touched, values, isSubmitting, setSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            type="text"
            label="Email address"
            {...getFieldProps('CIN')}
            error={Boolean(touched.CIN && errors.CIN)}
            helperText={touched.CIN && errors.CIN}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
            label="Remember me"
          />
        </Stack>
        {error && (
          <Stack direction="row" alignItems="center" sx={{ my: 2 }}>
            <Alert severity="error">Incorrect CIN or Password. Please try again </Alert>
          </Stack>
        )}

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Login
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
