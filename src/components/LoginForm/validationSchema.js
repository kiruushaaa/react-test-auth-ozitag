import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Email field must be valid')
    .required('Email field is required'),
  password: Yup.string().required('Password field is required'),
});

export default validationSchema;
