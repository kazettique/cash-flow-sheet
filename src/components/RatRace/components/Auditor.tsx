import { ReactElement } from 'react';
import TableTitle from '@/components/TableTitle';
import Form from '@/components/Form';
import { Sheet } from '@/types';
import { useFormikContext } from 'formik';
import { numberWithCommas } from '@/utils';
import { useSheetComputed } from '@/hooks';

export default function Auditor(): ReactElement {
  const { passiveIncome, totalExpense, totalIncome, monthlyCashFlow } = useSheetComputed();
  const { values } = useFormikContext<Sheet>();
  const { incomeStatement } = values;
  const { salary } = incomeStatement;

  return (
    <>
      <TableTitle>Auditor</TableTitle>
      <div className="border-b-2 border-blue-900">
        <div className="my-2 py-5">
          <div className="flex justify-end">
            <div className="capitalize font-semibold mr-2">Salary</div>
            <div className="w-60 px-2 mx-1 h-8 border-b border-blue-900 text-left">
              <span>$</span>
              {numberWithCommas(salary)}
            </div>
          </div>
        </div>
        <div className="my-2 py-5">
          <div className="flex justify-end">
            <div className="capitalize font-semibold mr-2"> + Passive Income</div>
            <div className="w-60 px-2 mx-1 h-8 border-b border-blue-900 text-left">
              <span>$</span>
              {numberWithCommas(passiveIncome)}
            </div>
          </div>
          <div className="font-light my-2 text-right">
            (Cash Flow from Interest + Dividends + Real Estate + Business)
          </div>
        </div>
        <div className="my-2 py-5">
          <div className="flex justify-end">
            <div className="capitalize font-semibold mr-2"> = Total Income</div>
            <div className="w-60 px-2 mx-1 border-b-4 border-blue-900 text-left bg-yellow-200 shadow-md flex items-center">
              <span>$</span>
              {numberWithCommas(totalIncome)}
            </div>
          </div>
          <div className="font-light my-2 text-right">(Salary + Passive Income)</div>
        </div>
      </div>
      <div className="border-b-2 border-blue-900">
        <Form.Input
          fieldName="children.numberOfChildren"
          customLabelName="Number of Children"
          className="flex border-b border-blue-900 my-2 py-2"
          labelClassName="pl-2 w-2/3"
          inputClassName="w-1/3 text-gray-600 w-full rounded-sm px-2"
          inputMode="numeric"
        />
        <Form.Input
          fieldName="children.perChildExpense"
          customLabelName="Per Child Expense"
          className="flex border-b border-blue-900 my-2 py-2"
          labelClassName="pl-2 w-2/3"
          inputClassName="w-1/3 text-gray-600 w-full rounded-sm px-2"
          inputMode="decimal"
        />
        <div className="my-2 py-5">
          <div className="flex justify-end">
            <div className="capitalize font-semibold mr-2"> - Total Expenses</div>
            <div className="w-60 px-2 mx-1 border-b border-blue-900 text-left">
              <span>$</span>
              {numberWithCommas(totalExpense)}
            </div>
          </div>
        </div>
        <div className="my-2 py-5">
          <div className="flex justify-end">
            <div className="capitalize font-semibold mr-2 text-right">
              <div> = Monthly Cash Flow </div>
              <div className="font-light uppercase">(Payday)</div>
            </div>
            <div className="w-60 px-2 mx-1 border-b-4 border-blue-900 text-left bg-yellow-200 shadow-md flex items-center">
              <span>$</span>
              {numberWithCommas(monthlyCashFlow)}
            </div>
          </div>
          <div className="font-light my-2 text-right">(Total Income - Total Expenses)</div>
        </div>
      </div>
    </>
  );
}
