import React, { ReactElement, ChangeEvent } from 'react';
import { useFormikContext, useField } from 'formik';
import ErrorMessage from '../ErrorMessage';

interface Props {
  fieldName: string;
  options: OptionType[];
  placeholder?: string;
}

type OptionType = {
  value: string | number;
  label: string;
};

export default function Select(props: Props): ReactElement {
  const { fieldName: name, options, placeholder } = props;

  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    setFieldValue(field.name, value);
    // onChangeProps(value);
  };

  return (
    <div style={{ margin: 10 }}>
      <label htmlFor={name} style={{ marginRight: 10 }}>
        {name}
      </label>
      <select name={name} id={name} placeholder={placeholder} onChange={onChange}>
        {options.length > 0 &&
          options.map((item: OptionType) => {
            return (
              <option key={`${item.label}-${item.label}`} value={item.value}>
                {item.label}
              </option>
            );
          })}
      </select>
      <ErrorMessage fieldName={name} />
    </div>
  );
}
