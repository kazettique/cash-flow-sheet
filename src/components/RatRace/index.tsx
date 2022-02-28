import { ReactElement } from 'react';
import TableTitle from '@/components/TableTitle';
import TableHeader from '@/components/TableHeader';
import { Column } from '@/components/tableTypes';
import SheetTitle from '@/components/SheetTitle';
import { Sheet } from '@/types';
import Form from '@/components/Form';
import { useFormikContext, FieldArray, Form as FormikForm, Field } from 'formik';
import _ from 'lodash';
import Income from './components/Income';
import Expenses from './components/Expenses';
import Auditor from './components/Auditor';
import Assets from './components/Assets';
import Liabilities from './components/Liabilities';

type Props = {
  currentPlayer: string;
  sheet: Sheet;
};

export default function RatRace(props: Props): ReactElement {
  const { currentPlayer, sheet } = props;
  const { values } = useFormikContext<Sheet>();

  // console.log('balanceSheet: ', values.balanceSheet);

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
    </div>
  );
}
