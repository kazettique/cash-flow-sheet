import React, { ReactElement } from 'react';
import { ErrorMessage as ErrorMessageComponent } from 'formik';

interface Props {
  fieldName: string;
  className?: string;
}

export default function ErrorMessage(props: Props): ReactElement {
  const { fieldName, className } = props;

  return (
    <ErrorMessageComponent name={fieldName}>
      {(message) => <div className={`text-red-600 ${className}`}>{message}</div>}
    </ErrorMessageComponent>
  );
}
