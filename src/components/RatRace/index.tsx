import { ReactElement } from 'react';
import SheetTitle from '@/components/SheetTitle';
import Form from '@/components/Form';
import Income from './components/Income';
import Expenses from './components/Expenses';
import Auditor from './components/Auditor';
import Assets from './components/Assets';
import Liabilities from './components/Liabilities';
import { useSheetComputed } from '@/hooks';
import _ from 'lodash';

export default function RatRace(): ReactElement {
  const { passiveIncome, totalExpense } = useSheetComputed();

  let progress;
  if (!_.isFinite(totalExpense)) {
    progress = 0;
  } else if (_.round(passiveIncome / totalExpense, 2) <= 1) {
    progress = _.round(passiveIncome / totalExpense, 2);
  } else {
    progress = 1;
  }

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
        <div className="flex">
          <div className="w-1/2 p-2 m-1 rounded-md border-2 border-blue-900">
            <Income />
            <Expenses />
          </div>
          <div className="w-1/2 p-2 m-1 rounded-md border-2 border-blue-900">
            <Auditor />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <SheetTitle>Balance Sheet</SheetTitle>
        <div className="flex">
          <div className="w-1/2 p-2 m-1 rounded-md border-2 border-blue-900">
            <Assets />
          </div>
          <div className="w-1/2 p-2 m-1 rounded-md border-2 border-blue-900">
            <Liabilities />
          </div>
        </div>
      </div>
      <button type="submit" className="p-3 bg-green-300 uppercase rounded-md m-3">
        Submit
      </button>
      <SheetTitle>Rat Race Progress</SheetTitle>
      <div className="font-light my-2 mx-1">Progress Rate: Passive Income / Total Expenses * 100%</div>
      <div className="my-2">
        <div className="flex h-10 w-full rounded-md shadow-md overflow-hidden">
          <div
            style={{ width: `${progress * 100}%` }}
            className="bg-yellow-300 flex justify-center items-center overflow-hidden text-yellow-800"
          >
            {progress * 100}%
          </div>
          <div style={{ width: `${(1 - progress) * 100}%` }} className="bg-blue-200" />
        </div>
      </div>
    </div>
  );
}
