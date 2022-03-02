import { FormikHelpers } from 'formik';

// export type Values = {
//   [key: string]: any;
// };

export type OnSubmit<T> = (values: T, actions: FormikHelpers<T>) => void;
