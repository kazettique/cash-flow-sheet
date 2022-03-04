import { ReactElement } from 'react';
import SheetTitle from '@/components/SheetTitle';
import Form from '@/components/Form';
import Income from './components/Income';
import Expenses from './components/Expenses';
import Auditor from './components/Auditor';
import Assets from './components/Assets';
import Liabilities from './components/Liabilities';
import { useSheetComputed } from '@/hooks';
import Progress from '@/components/Progress';

export default function RatRace(): ReactElement {
  const { passiveIncome, totalExpense } = useSheetComputed();

  return (
    <div className="bg-blue-100 p-4 rounded-md shadow-md">
      <div className="mb-4 p-2 rounded-md bg-blue-300">
        <span className="font-semibold capitalize">goal</span>: Get out of the Rat Race and onto the Fast Track by
        building your <span className="font-semibold">Passive Income</span> to be<span> </span>
        <span className="font-semibold">greater</span> than your <span className="font-semibold">Total Expenses</span>
      </div>
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
        <div className="sm:flex">
          <div className="sm:w-1/2 w-full p-2 m-1 rounded-md border-2 border-blue-900">
            <Income />
            <Expenses />
          </div>
          <div className="sm:w-1/2 w-full p-2 m-1 rounded-md border-2 border-blue-900">
            <Auditor />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <SheetTitle>Balance Sheet</SheetTitle>
        <div className="sm:flex">
          <div className="sm:w-1/2 w-full p-2 m-1 rounded-md border-2 border-blue-900">
            <Assets />
          </div>
          <div className="sm:w-1/2 w-full p-2 m-1 rounded-md border-2 border-blue-900">
            <Liabilities />
          </div>
        </div>
      </div>
      <Progress
        title="Rat Race Progress"
        description="Progress Rate: Passive Income / Total Expenses * 100%"
        current={passiveIncome}
        goal={totalExpense}
      />
    </div>
  );
}
