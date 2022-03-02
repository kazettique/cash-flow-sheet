import React, { ReactElement, ReactNode } from 'react';
import { Formik, Form as FormikForm } from 'formik';

// types
import * as Types from './types';

// components
import Input from './Input';
import ArrayInput from './ArrayInput';
import Select from './Select';

// utils
import Utils from './utils';

interface Props<T> {
  initialValues: T;
  onSubmit: Types.OnSubmit<T>;
  children: ReactNode;
  validationSchema?: any;
  enableReinitialize?: boolean;
}

function Form<T>(props: Props<T>): ReactElement {
  const { initialValues, onSubmit, children, validationSchema, enableReinitialize = false } = props;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={Utils.getValidationSchema(validationSchema)}
      enableReinitialize={enableReinitialize}
    >
      <FormikForm>{children}</FormikForm>
    </Formik>
  );
}

Form.Input = Input;
Form.Select = Select;
Form.ArrayInput = ArrayInput;
// Form.Types = Types;

export default Form;
