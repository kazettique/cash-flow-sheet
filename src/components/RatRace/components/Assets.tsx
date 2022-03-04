import TableHeader from '@/components/TableHeader';
import TableTitle from '@/components/TableTitle';
import { FieldArray, Field, useFormikContext } from 'formik';
import Form from '@/components/Form';
import _ from 'lodash';
import { ReactElement } from 'react';
import { Sheet } from '@/types';
import { Column } from '@/components/tableTypes';

// type Props = {};

export default function Assets(): ReactElement {
  const { values } = useFormikContext<Sheet>();
  const { balanceSheet } = values;
  const { assets } = balanceSheet;
  const { stocks, funds, cds, realEstate, business } = assets;

  const stockHeader: Column[] = [
    { value: 'Stocks', width: 'w-2/4' },
    { value: '# of Shares', width: 'w-1/4' },
    { value: 'Cost/Share', width: 'w-1/4' },
  ];

  const fundsHeader: Column[] = [
    { value: 'Funds', width: 'w-2/4' },
    { value: '# of Shares', width: 'w-1/4' },
    { value: 'Cost/Share', width: 'w-1/4' },
  ];

  const cdsHeader: Column[] = [
    { value: 'CDs', width: 'w-2/4' },
    { value: '# of Shares', width: 'w-1/4' },
    { value: 'Cost/Share', width: 'w-1/4' },
  ];

  const realEstateHeader: Column[] = [
    { value: 'Real Estate', width: 'w-2/4' },
    { value: 'Down Pay', width: 'w-1/4' },
    { value: 'Cost', width: 'w-1/4' },
  ];

  const businessHeader: Column[] = [
    { value: 'Business', width: 'w-2/4' },
    { value: 'Down Pay', width: 'w-1/4' },
    { value: 'Cost', width: 'w-1/4' },
  ];

  // console.log('stocks', stocks);

  return (
    <>
      <TableTitle>3. Assets</TableTitle>
      <TableHeader columnList={stockHeader} />
      <FieldArray name="balanceSheet.assets.stocks">
        {(arrayHelpers) => {
          const { push, remove } = arrayHelpers;
          return (
            <>
              {stocks.map((rowItem, rowIndex) => (
                <div
                  key={`balanceSheet.assets.stocks_${rowIndex}`}
                  className="flex border-b border-blue-900 my-2 py-2 relative"
                >
                  {rowItem.map((item, index) => (
                    <div
                      key={`balanceSheet.assets.stocks_${rowIndex}_${index}`}
                      className={`${index === 0 ? 'w-2/4' : 'w-1/4'} ${index !== rowItem.length - 1 && 'pr-2'}`}
                    >
                      <Field
                        as="input"
                        name={`balanceSheet.assets.stocks.${rowIndex}.${index}`}
                        className="text-gray-600 rounded-sm px-2 w-full"
                        inputMode={index === 0 ? 'text' : index === 1 ? 'numeric' : 'decimal'}
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
                onClick={(event) => push(['', '', ''])}
              >
                add
              </button>
            </>
          );
        }}
      </FieldArray>

      <TableHeader columnList={fundsHeader} />
      <FieldArray name="balanceSheet.assets.funds">
        {(arrayHelpers) => {
          const { push, remove } = arrayHelpers;
          return (
            <>
              {funds.map((rowItem, rowIndex) => (
                <div
                  key={`balanceSheet.assets.funds_${rowIndex}`}
                  className="flex border-b border-blue-900 my-2 py-2 relative"
                >
                  {rowItem.map((item, index) => (
                    <div
                      key={`balanceSheet.assets.funds_${rowIndex}_${index}`}
                      className={`${index === 0 ? 'w-2/4' : 'w-1/4'} ${index !== rowItem.length - 1 && 'pr-2'}`}
                    >
                      <Field
                        as="input"
                        name={`balanceSheet.assets.funds.${rowIndex}.${index}`}
                        className="text-gray-600 rounded-sm px-2 w-full"
                        inputMode={index === 0 ? 'text' : index === 1 ? 'numeric' : 'decimal'}
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
                onClick={(event) => push(['', '', ''])}
              >
                add
              </button>
            </>
          );
        }}
      </FieldArray>
      <TableHeader columnList={cdsHeader} />
      <FieldArray name="balanceSheet.assets.cds">
        {(arrayHelpers) => {
          const { push, remove } = arrayHelpers;
          return (
            <>
              {cds.map((rowItem, rowIndex) => (
                <div
                  key={`balanceSheet.assets.cds_${rowIndex}`}
                  className="flex border-b border-blue-900 my-2 py-2 relative"
                >
                  {rowItem.map((item, index) => (
                    <div
                      key={`balanceSheet.assets.cds_${rowIndex}_${index}`}
                      className={`${index === 0 ? 'w-2/4' : 'w-1/4'} ${index !== rowItem.length - 1 && 'pr-2'}`}
                    >
                      <Field
                        as="input"
                        name={`balanceSheet.assets.cds.${rowIndex}.${index}`}
                        className="text-gray-600 rounded-sm px-2 w-full"
                        inputMode={index === 0 ? 'text' : index === 1 ? 'numeric' : 'decimal'}
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
                onClick={(event) => push(['', '', ''])}
              >
                add
              </button>
            </>
          );
        }}
      </FieldArray>

      <TableHeader columnList={realEstateHeader} />
      <FieldArray name="balanceSheet.assets.realEstate">
        {(arrayHelpers) => {
          const { push, remove } = arrayHelpers;
          return (
            <>
              {realEstate.map((rowItem, rowIndex) => (
                <div
                  key={`balanceSheet.assets.realEstate_${rowIndex}`}
                  className="flex border-b border-blue-900 my-2 py-2 relative"
                >
                  {rowItem.map((item, index) => (
                    <div
                      key={`balanceSheet.assets.realEstate_${rowIndex}_${index}`}
                      className={`${index === 0 ? 'w-2/4' : 'w-1/4'} ${index !== rowItem.length - 1 && 'pr-2'}`}
                    >
                      <Field
                        as="input"
                        name={`balanceSheet.assets.realEstate.${rowIndex}.${index}`}
                        className="text-gray-600 rounded-sm px-2 w-full"
                        inputMode={index === 0 ? 'text' : 'decimal'}
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
                onClick={(event) => push(['', '', ''])}
              >
                add
              </button>
            </>
          );
        }}
      </FieldArray>

      <TableHeader columnList={businessHeader} />
      <FieldArray name="balanceSheet.assets.business">
        {(arrayHelpers) => {
          const { push, remove } = arrayHelpers;
          return (
            <>
              {business.map((rowItem, rowIndex) => (
                <div
                  key={`balanceSheet.assets.business_${rowIndex}`}
                  className="flex border-b border-blue-900 my-2 py-2 relative"
                >
                  {rowItem.map((item, index) => (
                    <div
                      key={`balanceSheet.assets.business_${rowIndex}_${index}`}
                      className={`${index === 0 ? 'w-2/4' : 'w-1/4'} ${index !== rowItem.length - 1 && 'pr-2'}`}
                    >
                      <Field
                        as="input"
                        name={`balanceSheet.assets.business.${rowIndex}.${index}`}
                        className="text-gray-600 rounded-sm px-2 w-full"
                        inputMode={index === 0 ? 'text' : 'decimal'}
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
                onClick={(event) => push(['', '', ''])}
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
