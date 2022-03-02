import * as Yup from 'yup';

const getValidationSchema = (validationSchema: any): any => {
  return Yup.object().shape(validationSchema);
};

export default { getValidationSchema };
