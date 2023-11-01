import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  ErrMessage,
  StyledForm,
  StyledLabel,
} from './ContactForm.styled';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'To short')
    .max(15, 'To long')
    .required('* This field required'),
  number: Yup.number().required('* This field required'),
});

export const ContactForm = ({ onAddContacts }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={formSchema}
      onSubmit={(values, actions) => {
        onAddContacts(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <StyledLabel htmlFor="name">Name</StyledLabel>
        <Field type="text" name="name" placeholder="Enter name..."></Field>
        <ErrMessage component="span" name="name" />

        <StyledLabel htmlFor="name">Number</StyledLabel>
        <Field
          type="tel"
          name="number"
          placeholder="Enter phone number..."
        ></Field>
        <ErrMessage component="span" name="number" />

        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};
