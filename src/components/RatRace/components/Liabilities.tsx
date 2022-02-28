import TableHeader from '@/components/TableHeader';
import TableTitle from '@/components/TableTitle';
import { FieldArray, Field, useFormikContext } from 'formik';
import Form from '@/components/Form';
import _ from 'lodash';
import { ReactElement } from 'react';
import { Sheet } from '@/types';
import { Column } from '@/components/tableTypes';

// type Props = {};

export default function Liabilities(): ReactElement {
  const { values } = useFormikContext<Sheet>();
  const { balanceSheet } = values;
  const { liabilities } = balanceSheet;
  const { realEstate, business } = liabilities;

  const realEstateHeader: Column[] = [
    { value: 'Real Estate', width: 'w-2/3' },
    { value: 'Mortgage', width: 'w-1/3' },
  ];

  const businessHeader: Column[] = [
    { value: 'Business', width: 'w-2/3' },
    { value: 'Liability', width: 'w-1/3' },
  ];

  return (
    <>
      <TableTitle>4. Liabilities</TableTitle>
      <Form.Input
        fieldName="balanceSheet.liabilities.homeMortgage"
        customLabelName="home mortgage"
        className="flex border-b border-blue-900 my-2 py-2"
        labelClassName="pl-2 w-2/3"
        inputClassName="w-1/3 text-gray-600 w-full rounded-sm px-2"
      />
      <Form.Input
        fieldName="balanceSheet.liabilities.schoolLoans"
        customLabelName="school loans"
        className="flex border-b border-blue-900 my-2 py-2"
        labelClassName="pl-2 w-2/3"
        inputClassName="w-1/3 text-gray-600 w-full rounded-sm px-2"
      />
      <Form.Input
        fieldName="balanceSheet.liabilities.carLoans"
        customLabelName="car loans"
        className="flex border-b border-blue-900 my-2 py-2"
        labelClassName="pl-2 w-2/3"
        inputClassName="w-1/3 text-gray-600 w-full rounded-sm px-2"
      />
      <Form.Input
        fieldName="balanceSheet.liabilities.creditCards"
        customLabelName="credit cards"
        className="flex border-b border-blue-900 my-2 py-2"
        labelClassName="pl-2 w-2/3"
        inputClassName="w-1/3 text-gray-600 w-full rounded-sm px-2"
      />
      <Form.Input
        fieldName="balanceSheet.liabilities.loan"
        customLabelName="loan"
        className="flex border-b border-blue-900 my-2 py-2"
        labelClassName="pl-2 w-2/3"
        inputClassName="w-1/3 text-gray-600 w-full rounded-sm px-2"
      />
      <TableHeader columnList={realEstateHeader} />
      <FieldArray name="balanceSheet.liabilities.realEstate">
        {(arrayHelpers) => {
          const { push, remove } = arrayHelpers;
          return (
            <>
              {realEstate.map((rowItem, rowIndex) => (
                <div
                  key={`balanceSheet.liabilities.realEstate_${rowIndex}`}
                  className="flex border-b border-blue-900 my-2 py-2 relative"
                >
                  {rowItem.map((item, index) => (
                    <div
                      key={`balanceSheet.liabilities.realEstate_${rowIndex}_${index}`}
                      className={`${index === 0 ? 'w-2/3' : 'w-1/3'} ${index !== rowItem.length - 1 && 'pr-2'}`}
                    >
                      <Field
                        as="input"
                        name={`balanceSheet.liabilities.realEstate.${rowIndex}.${index}`}
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

      <TableHeader columnList={businessHeader} />
      <FieldArray name="balanceSheet.liabilities.business">
        {(arrayHelpers) => {
          const { push, remove } = arrayHelpers;
          return (
            <>
              {business.map((rowItem, rowIndex) => (
                <div
                  key={`balanceSheet.liabilities.business_${rowIndex}`}
                  className="flex border-b border-blue-900 my-2 py-2 relative"
                >
                  {rowItem.map((item, index) => (
                    <div
                      key={`balanceSheet.liabilities.business_${rowIndex}_${index}`}
                      className={`${index === 0 ? 'w-2/3' : 'w-1/3'} ${index !== rowItem.length - 1 && 'pr-2'}`}
                    >
                      <Field
                        as="input"
                        name={`balanceSheet.liabilities.business.${rowIndex}.${index}`}
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
