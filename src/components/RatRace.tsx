import { ReactElement } from 'react';
import TableTitle from '@/components/TableTitle';
import TableHeader from '@/components/TableHeader';
import { Column } from '@/components/tableTypes';
import SheetTitle from '@/components/SheetTitle';
import { Sheet } from '@/types';
import Form from '@/components/Form';
import { useFormikContext, FieldArray } from 'formik';

type Props = {
  currentPlayer: string;
  sheet: Sheet;
};

export default function RatRace(props: Props): ReactElement {
  const { currentPlayer, sheet } = props;

  // console.log('currentPlayer: ', currentPlayer);

  const incomeHeaderList: Column[] = [
    { value: 'Description', width: 'w-2/3' },
    { value: 'Cash Flow', width: 'w-1/3' },
  ];

  const assetsHeaderList1: Column[] = [
    { value: 'Stocks/Funds/CDs', width: 'w-2/4' },
    { value: '# of Shares', width: 'w-1/4' },
    { value: 'Cost/Share', width: 'w-1/4' },
  ];
  const assetsHeaderList2: Column[] = [
    { value: 'Real Estate/Business', width: 'w-2/4' },
    { value: 'Down Pay', width: 'w-1/4' },
    { value: 'Cost', width: 'w-1/4' },
  ];

  const liabilitiesHeaderList: Column[] = [
    { value: 'Real Estate/Business', width: 'w-2/3' },
    { value: 'Mortgage/Liability', width: 'w-1/3' },
  ];

  const { values } = useFormikContext();

  console.log('values: ', values);

  return (
    <div className="bg-blue-100 p-4 rounded-md shadow-md">
      <div className="mb-4">
        <Form.Input
          fieldName="profession"
          placeholder="Enter your profession"
          labelClassName="mr-2"
          inputClassName="w-60 px-2 mx-1 h-8 rounded-md"
        />
      </div>
      <div className="mb-4">
        <SheetTitle>Income Statement</SheetTitle>
        <div className="flex">
          <div className="w-1/2 p-2 m-1 rounded-md border-2 border-blue-900">
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
              inputClassName="w-1/3 text-gray-600 w-full rounded-sm px-2"
            />
            <Form.Input
              fieldName="incomeStatement.dividends"
              customLabelName="dividends"
              className="flex border-b border-blue-900 my-2 py-2"
              labelClassName="pl-2 w-2/3"
              inputClassName="w-1/3 text-gray-600 w-full rounded-sm px-2"
            />
            <TableHeader columnList={incomeHeaderList} />

            <TableTitle>2. Expenses</TableTitle>
            <TableHeader columnList={incomeHeaderList} />
            <Form.Input
              fieldName="incomeStatement.taxes"
              customLabelName="taxes"
              className="flex border-b border-blue-900 my-2 py-2"
              labelClassName="pl-2 w-2/3"
              inputClassName="w-1/3 text-gray-600 w-full rounded-sm px-2"
            />
            <Form.Input
              fieldName="incomeStatement.homeMortgagePayment"
              customLabelName="home mortgage payment"
              className="flex border-b border-blue-900 my-2 py-2"
              labelClassName="pl-2 w-2/3"
              inputClassName="w-1/3 text-gray-600 w-full rounded-sm px-2"
            />
            <Form.Input
              fieldName="incomeStatement.schoolLoanPayment"
              customLabelName="school loan Payment"
              className="flex border-b border-blue-900 my-2 py-2"
              labelClassName="pl-2 w-2/3"
              inputClassName="w-1/3 text-gray-600 w-full rounded-sm px-2"
            />
            <Form.Input
              fieldName="incomeStatement.carLoanPayment"
              customLabelName="car loan Payment"
              className="flex border-b border-blue-900 my-2 py-2"
              labelClassName="pl-2 w-2/3"
              inputClassName="w-1/3 text-gray-600 w-full rounded-sm px-2"
            />
            <Form.Input
              fieldName="incomeStatement.creditCardPayment"
              customLabelName="credit card Payment"
              className="flex border-b border-blue-900 my-2 py-2"
              labelClassName="pl-2 w-2/3"
              inputClassName="w-1/3 text-gray-600 w-full rounded-sm px-2"
            />
            <Form.Input
              fieldName="incomeStatement.otherExpenses"
              customLabelName="other expenses"
              className="flex border-b border-blue-900 my-2 py-2"
              labelClassName="pl-2 w-2/3"
              inputClassName="w-1/3 text-gray-600 w-full rounded-sm px-2"
            />
            <Form.Input
              fieldName="incomeStatement.childExpenses"
              customLabelName="child expenses"
              className="flex border-b border-blue-900 my-2 py-2"
              labelClassName="pl-2 w-2/3"
              inputClassName="w-1/3 text-gray-600 w-full rounded-sm px-2"
            />
            <Form.Input
              fieldName="incomeStatement.loanPayment"
              customLabelName="loan payment"
              className="flex border-b border-blue-900 my-2 py-2"
              labelClassName="pl-2 w-2/3"
              inputClassName="w-1/3 text-gray-600 w-full rounded-sm px-2"
            />

            {/* <FieldArray name="pets">
                {(arrayHelpers) => {
                  return (
                    <Form.Input
                      fieldName="friends"
                      inputClassName="text-gray-600 w-full rounded-sm px-2"
                      showLabel={false}
                    />
                  );
                }}
              </FieldArray> */}
          </div>

          <div className="w-1/2 p-2 m-1 rounded-md border-2 border-blue-900">
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
                    <span>$</span>5566
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
                    <span>$</span>5566
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
                    <span>$</span>5566
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
                    <span>$</span>5566
                  </div>
                </div>
                <div className="font-light my-2 text-right">(Total Income - Total Expenses)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <SheetTitle>Balance Sheet</SheetTitle>
        <div className="flex">
          <div className="w-1/2 p-2 m-1 rounded-md border-2 border-blue-900">
            <TableTitle>3. Assets</TableTitle>
            <TableHeader columnList={assetsHeaderList1} />

            <TableHeader columnList={assetsHeaderList2} />
          </div>
          <div className="w-1/2 p-2 m-1 rounded-md border-2 border-blue-900">
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
            <TableHeader columnList={liabilitiesHeaderList} />
          </div>
        </div>
      </div>
      <button type="submit" className="p-3 bg-green-300 uppercase rounded-md m-3">
        Submit
      </button>
    </div>
  );
}
