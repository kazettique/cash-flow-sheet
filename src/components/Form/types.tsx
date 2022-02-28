import { FormikHelpers } from 'formik';

export type Values = {
  [key: string]: any;
};

export type OnSubmit = (values: Values, actions: FormikHelpers<Values>) => void;
