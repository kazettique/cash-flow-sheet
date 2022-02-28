import { ReactElement } from 'react';
import TableTitle from '@/components/TableTitle';
import Form from '@/components/Form';
import { Sheet } from '@/types';
import _ from 'lodash';
import { useFormikContext } from 'formik';

export default function Auditor(): ReactElement {
  const { values } = useFormikContext<Sheet>();
  const { incomeStatement, children } = values;
  const { numberOfChildren, perChildExpense } = children;
  const {
    salary,
    interest,
    dividends,
    realEstate,
    business,
    taxes,
    homeMortgagePayment,
    schoolLoanPayment,
    carLoanPayment,
    creditCardPayment,
    otherExpenses,
    loanPayment,
  } = incomeStatement;

  const totalRealEstateCashFlow = _.sumBy(realEstate, (item) => item[1]);
  const totalBusiness = _.sumBy(business, (item) => item[1]);
  const passiveIncome = Number(interest) + Number(dividends) + Number(totalRealEstateCashFlow) + Number(totalBusiness);
  const totalIncome = Number(salary) + Number(passiveIncome);

  const childExpenses = Number(numberOfChildren) * Number(perChildExpense);
  const totalExpense =
    Number(taxes) +
    Number(homeMortgagePayment) +
    Number(schoolLoanPayment) +
    Number(carLoanPayment) +
    Number(carLoanPayment) +
    Number(creditCardPayment) +
    Number(otherExpenses) +
    Number(childExpenses) +
    Number(loanPayment);

  const monthlyCashFlow = totalBusiness - totalExpense;

  return (
    <>
      <TableTitle>Auditor</TableTitle>
      <div className="border-b-2 border-blue-900">
        <Form.Input
          fieldName="incomeStatement.salary"
          customLabelName="salary"
          className="my-2 py-5 text-right"
          labelClassName="mr-2 font-semibold"
          inputClassName="w-60 px-2 mx-1 h-8 border-b border-blue-900"
          disabled
        />
        <div className="my-2 py-5">
          <div className="flex justify-end">
            <div className="capitalize font-semibold mr-2"> + Passive Income</div>
            <div className="w-60 px-2 mx-1 h-8 border-b border-blue-900 text-left">
              <span>$</span>
              {passiveIncome}
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
              {totalIncome}
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
        />
        <Form.Input
          fieldName="children.perChildExpense"
          customLabelName="Per Child Expense"
          className="flex border-b border-blue-900 my-2 py-2"
          labelClassName="pl-2 w-2/3"
          inputClassName="w-1/3 text-gray-600 w-full rounded-sm px-2"
        />
        <div className="my-2 py-5">
          <div className="flex justify-end">
            <div className="capitalize font-semibold mr-2"> - Total Expenses</div>
            <div className="w-60 px-2 mx-1 border-b border-blue-900 text-left">
              <span>$</span>
              {totalExpense}
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
              {monthlyCashFlow}
            </div>
          </div>
          <div className="font-light my-2 text-right">(Total Income - Total Expenses)</div>
        </div>
      </div>
    </>
  );
}
