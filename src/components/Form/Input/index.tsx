import { ChangeEvent, ReactElement, HTMLAttributes } from 'react';
import { useFormikContext, useField } from 'formik';
import ErrorMessage from '../ErrorMessage';

enum InputType {
  Text = 'text',
  Password = 'password',
  Number = 'number',
  File = 'file',
  Email = 'email',
  Color = 'color',
}

interface Props {
  fieldName: string;
  // onChange?: any;
  placeholder?: string;
  type?: InputType;
  customLabelName?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorMessageClassName?: string;
  className?: string;
  showLabel?: boolean;
  disabled?: boolean;
  inputMode?: any;
}

function Input(props: Props): ReactElement {
  const {
    fieldName: name,
    placeholder,
    type = InputType.Text,
    className,
    labelClassName,
    inputClassName,
    errorMessageClassName,
    showLabel = true,
    customLabelName,
    disabled = false,
    inputMode,
  } = props;

  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFieldValue(field.name, value);
    // onChangeProps(value);
  };

  return (
    <div className={className}>
      {showLabel && (
        <label htmlFor={name} className={`capitalize ${labelClassName}`}>
          {customLabelName || name}
        </label>
      )}
      <input
        id={name}
        type={type}
        name={name}
        onChange={onChange}
        value={field.value}
        placeholder={placeholder}
        className={inputClassName}
        disabled={disabled}
        inputMode={inputMode}
      />
      <ErrorMessage fieldName={name} className={errorMessageClassName} />
    </div>
  );
}

Input.InputType = InputType;

export default Input;
