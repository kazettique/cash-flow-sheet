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

interface Props {
  initialValues: Types.Values;
  onSubmit: Types.OnSubmit;
  children: ReactNode;
  validationSchema?: any;
}

function Form(props: Props): ReactElement {
  const { initialValues, onSubmit, children, validationSchema } = props;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={Utils.getValidationSchema(validationSchema)}
    >
      {/* <FormikForm>{children}</FormikForm> */}
      <div>{children}</div>
    </Formik>
  );
}

Form.Input = Input;
Form.Select = Select;
Form.ArrayInput = ArrayInput;
// Form.Types = Types;

export default Form;
