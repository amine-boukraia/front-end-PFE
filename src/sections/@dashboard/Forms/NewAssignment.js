import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, FormikProvider, useFormik } from 'formik';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {
  Input,
  CircularProgress,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { DesktopDatePicker, LoadingButton, LocalizationProvider } from '@mui/lab';
import {  useSnackbar } from 'notistack';
import ReactQuill from 'react-quill';
import axiosInstance from '../../../axiosInstance';
import useFetcher from '../../../hooks/useFetcher';

export default function NewAssignmentForm() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { data, loading } = useFetcher('/teacher/subgroups');

  const NewAssignmentSchema = Yup.object().shape({
    subGroup: Yup.string().required('subgroup is required'),
    text: Yup.string().required('Assignment text is required'),
    deadLine: Yup.string().nullable().required('Dead Line Name is required'),
  });

  const formik = useFormik({
    initialValues: {
      subGroup: '',
      text: '',
      deadLine: '',
    },
    validationSchema: NewAssignmentSchema,
    onSubmit: async (data) => {
      try {
        await axiosInstance.post('teacher/assignment', data);
        enqueueSnackbar('Assignment added successfully', { variant: 'success' });
        navigate('/dashboard/professor/announcement');
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const { errors, touched, values, isSubmitting, setSubmitting, setFieldValue, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Container>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={3} my={4}>
            <Stack sx={{ my: 4 }}>
              {loading && !data?.data ? (
                <CircularProgress />
              ) : (
                <FormControl>
                  <InputLabel id="subGroup">Sub Group</InputLabel>
                  <Select
                    label="Sub Group"
                    id="subGroup"
                    {...getFieldProps('subGroup')}
                    error={Boolean(touched.subGroup && errors.subGroup)}
                    helperText={touched.subGroup && errors.subGroup}
                  >
                    {data?.data.map((subGroup) => (
                      <MenuItem key={subGroup} value={subGroup}>
                        {subGroup}
                      </MenuItem>
                    ))}
                  </Select>
                  {touched.subGroup && errors.subGroup ? (
                    <FormHelperText error>{touched.subGroup && errors.subGroup}</FormHelperText>
                  ) : null}
                </FormControl>
              )}
            </Stack>
            <FormControl>
              <ReactQuill
                value={values.text || '<p></p>'}
                onChange={(e) => setFieldValue('text', e, true)}
                className="editor-holder"
              />
              {touched.text && errors.text ? (
                <FormHelperText error>{touched.text && errors.text}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl sx={{ width: '30%' }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  label="Dead Line"
                  inputFormat="dd/MM/yyyy"
                  value={values.deadLine || null}
                  onChange={(e) => setFieldValue('deadLine', e, true)}
                  renderInput={(params) => <TextField {...params} />}
                />
                {touched.deadLine && errors.deadLine ? (
                  <FormHelperText error>{touched.deadLine && errors.deadLine}</FormHelperText>
                ) : null}
              </LocalizationProvider>
            </FormControl>
            <Input type="file"  />
          </Stack>

          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Add Assignment
          </LoadingButton>
        </Form>
      </Container>
    </FormikProvider>
  );
}
