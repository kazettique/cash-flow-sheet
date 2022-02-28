import TableHeader from '@/components/TableHeader';
import TableTitle from '@/components/TableTitle';
import { FieldArray, Field, useFormikContext } from 'formik';
import Form from '@/components/Form';
import _ from 'lodash';
import { ReactElement } from 'react';
import { Sheet } from '@/types';
import { Column } from '@/components/tableTypes';

// type Props = {};

export default function Income(): ReactElement {
  const { values } = useFormikContext<Sheet>();
  const { incomeStatement } = values;
  const { realEstate, business } = incomeStatement;

  const incomeHeaderList: Column[] = [
    { value: 'Description', width: 'w-2/3' },
    { value: 'Cash Flow', width: 'w-1/3' },
  ];

  return (
    <>
      <TableTitle>1. Income</TableTitle>
      <TableHeader columnList={incomeHeaderList} />
      <Form.Input
        fieldName="incomeStatement.salary"
        customLabelName="salary"
        className="flex border-b border-blue-900 my-2 py-2"
        labelClassName="pl-2 w-2/3"
        inputClassName="w-1/3 text-gray-600 w-full rounded-sm px-2"
      />
      <Form.Input
        fieldName="incomeStatement.interest"
        customLabelName="interest"
        className="flex border-b border-blue-900 my-2 py-2"
        labelClassName="pl-2 w-2/3"
        inputClassName="w-1/3 text-gray-600 rounded-sm px-2"
      />
      <Form.Input
        fieldName="incomeStatement.dividends"
        customLabelName="dividends"
        className="flex border-b border-blue-900 my-2 py-2"
        labelClassName="pl-2 w-2/3"
        inputClassName="w-1/3 text-gray-600 rounded-sm px-2"
      />
      <TableHeader columnList={incomeHeaderList} />
      <FieldArray name="incomeStatement.realEstate">
        {(arrayHelpers) => {
          const { push, remove } = arrayHelpers;
          return (
            <>
              {realEstate.map((rowItem, rowIndex) => (
                // * field array blur issue
                // * ref: https://stackoverflow.com/questions/52531728/formik-fieldarray-lost-focus-when-onchange-triggered
                <div
                  key={`incomeStatement.realEstate_${rowIndex}`}
                  className="flex border-b border-blue-900 my-2 py-2 relative"
                >
                  {rowItem.map((item, index) => (
                    <div
                      key={`incomeStatement.realEstate_${rowIndex}_${index}`}
                      className={`${index === 0 ? 'w-2/3 pr-2' : 'w-1/3'}`}
                    >
                      <Field
                        as="input"
                        name={`incomeStatement.realEstate.${rowIndex}.${index}`}
                        className="text-gray-600 rounded-sm px-2 w-full"
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    className="bg-red-400 px-1 absolute right-0 text-gray-100 rounded-sm"
                    onClick={() =>
                      (_.every(rowItem, (item) => _.isEmpty(item)) ||
                        window.confirm('Confirm delete this item? This operation can not be undo.')) &&
                      remove(rowIndex)
                    }
                  >
                    X
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="rounded-md cursor-pointer bg-blue-300 w-full mt-2 mb-4 p-1 text-blue-800 uppercase shadow-md"
                onClick={(event) => push(['', ''])}
              >
                add
              </button>
            </>
          );
        }}
      </FieldArray>
    </>
  );
}
