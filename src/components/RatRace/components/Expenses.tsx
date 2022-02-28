import { ReactElement } from 'react';
import TableHeader from '@/components/TableHeader';
import TableTitle from '@/components/TableTitle';
import Form from '@/components/Form';
import { Column } from '@/components/tableTypes';
import { Sheet } from '@/types';
import { useFormikContext } from 'formik';

export default function Expenses(): ReactElement {
  const { values } = useFormikContext<Sheet>();
  const { children } = values;
  const { numberOfChildren, perChildExpense } = children;

  const incomeHeaderList: Column[] = [
    { value: 'Description', width: 'w-2/3' },
    { value: 'Cash Flow', width: 'w-1/3' },
  ];

  const childExpenses = Number(numberOfChildren) * Number(perChildExpense);

  return (
    <>
      <TableTitle>2. Expenses</TableTitle>
      <TableHeader columnList={incomeHeaderList} />
      <Form.Input
        fieldName="incomeStatement.taxes"
        customLabelName="taxes"
        className="flex border-b border-blue-900 my-2 py-2"
        labelClassName="pl-2 w-2/3"
        inputClassName="w-1/3 text-gray-600 rounded-sm px-2"
      />
      <Form.Input
        fieldName="incomeStatement.homeMortgagePayment"
        customLabelName="home mortgage payment"
        className="flex border-b border-blue-900 my-2 py-2"
        labelClassName="pl-2 w-2/3"
        inputClassName="w-1/3 text-gray-600 rounded-sm px-2"
      />
      <Form.Input
        fieldName="incomeStatement.schoolLoanPayment"
        customLabelName="school loan Payment"
        className="flex border-b border-blue-900 my-2 py-2"
        labelClassName="pl-2 w-2/3"
        inputClassName="w-1/3 text-gray-600 rounded-sm px-2"
      />
      <Form.Input
        fieldName="incomeStatement.carLoanPayment"
        customLabelName="car loan Payment"
        className="flex border-b border-blue-900 my-2 py-2"
        labelClassName="pl-2 w-2/3"
        inputClassName="w-1/3 text-gray-600 rounded-sm px-2"
      />
      <Form.Input
        fieldName="incomeStatement.creditCardPayment"
        customLabelName="credit card Payment"
        className="flex border-b border-blue-900 my-2 py-2"
        labelClassName="pl-2 w-2/3"
        inputClassName="w-1/3 text-gray-600 rounded-sm px-2"
      />
      <Form.Input
        fieldName="incomeStatement.otherExpenses"
        customLabelName="other expenses"
        className="flex border-b border-blue-900 my-2 py-2"
        labelClassName="pl-2 w-2/3"
        inputClassName="w-1/3 text-gray-600 rounded-sm px-2"
      />
      {/* <Form.Input
        fieldName="incomeStatement.childExpenses"
        customLabelName="child expenses"
        className="flex border-b border-blue-900 my-2 py-2"
        labelClassName="pl-2 w-2/3"
        inputClassName="w-1/3 text-gray-600 rounded-sm px-2"
      />
       */}
      <div className="flex border-b border-blue-900 my-2 py-2">
        <div className="pl-2 w-2/3">Child Expenses</div>
        <div className="w-1/3 text-gray-600 rounded-sm px-2">{childExpenses}</div>
      </div>

      <Form.Input
        fieldName="incomeStatement.loanPayment"
        customLabelName="loan payment"
        className="flex border-b border-blue-900 my-2 py-2"
        labelClassName="pl-2 w-2/3"
        inputClassName="w-1/3 text-gray-600 rounded-sm px-2"
      />
    </>
  );
}
