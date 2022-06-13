import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, FormikProvider, useFormik } from 'formik';
import { Alert, Container, Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useSnackbar } from 'notistack';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
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
    onSubmit: async (value) => {
      try {
        const body = {
          title: values.announcementName,
          body: values.description,
        };
        await axiosInstance.post('admin/announcement', body);
        navigate('/dashboard/admin/announcement');
        enqueueSnackbar('Announcement submitted successfully', { variant: 'success' });
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
      }

      setSubmitting(false);
    },
  });

  const { errors, touched, values, isSubmitting, setSubmitting, handleSubmit, getFieldProps, setFieldValue } = formik;

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

            <ReactQuill
              value={values.description|| '<p></p>'}
              onChange={(e) => setFieldValue('description', e, true)}
              className="editor-holder"
            />
            {Boolean(errors.description ) && (
              <Stack direction="row" alignItems="center" sx={{ my: 2 }}>
                <Alert severity="error">{touched.description && errors.description}</Alert>
              </Stack>
            )}
          </Stack>

          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Submit
          </LoadingButton>
        </Form>
      </Container>
    </FormikProvider>
  );
}
