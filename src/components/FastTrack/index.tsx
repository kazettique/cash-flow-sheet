import { ReactElement } from 'react';
import TableTitle from '@/components/TableTitle';
import TableHeader from '@/components/TableHeader';
import { Column } from '../tableTypes';
import { Sheet } from '@/types';
import { Field, FieldArray, useFormikContext } from 'formik';
import _ from 'lodash';
import { numberWithCommas } from '@/utils';
import { useSheetComputed } from '@/hooks';
import Progress from '@/components/Progress';

export default function FastTrack(): ReactElement {
  const { values } = useFormikContext<Sheet>();
  const { incomeRecord } = values;
  const { passiveIncome, beginningCashFlowDayIncome, cashFlowDayIncomeGoal, totalMonthlyCashFlowIncome } =
    useSheetComputed();

  const incomeRecordHeader: Column[] = [
    { value: 'Business', width: 'w-2/4' },
    { value: 'Monthly Cash Flow', width: 'w-1/4' },
    { value: 'New CASHFLOW Day Income', width: 'w-1/4' },
  ];

  const currentTotalCashflowIncome = totalMonthlyCashFlowIncome + beginningCashFlowDayIncome;

  return (
    <div className="bg-yellow-100 p-4 rounded-md shadow-md">
      <div className="mb-4 p-2 rounded-md bg-yellow-300">
        <h3 className="uppercase font-extrabold text-2xl">congratulations!</h3>
        <span className="font-bold">You are out of the Rat Race!</span>
      </div>
      <div className="mb-4 sm:flex">
        <div className="sm:w-1/2 w-full p-2 m-1">
          <div className="">
            <h4 className="font-bold py-4">New Goals:</h4>
            <ol className="list-decimal pl-4">
              <li>
                <span>Buy your "Dream"</span> by landing on the Fast Track space you selected at the start of the game
                and purchasing it.
              </li>
              <li>
                <span>Increase your Monthly Cash Flow</span> by buying business.
              </li>
            </ol>
            <h4 className="font-bold py-4">
              You Win <span className="uppercase">cashflow</span> If:
            </h4>
            <ol className="list-decimal pl-4">
              <li>You are the fist person to buy your Dream. or...</li>
              <li>
                You are the first person to accumulate $50,000 in Monthly Cash Flow from businesses purchased on the
                Fast Track
              </li>
            </ol>
          </div>
          <div className="bg-yellow-300 rounded-md p-2 mt-4">
            <h4 className="font-bold py-4 italic">You Receive 100x Your Passive Income Because:</h4>
            <p>You've proven your financial intelligence!</p>
            <p>
              Your Rat Race investments have prospered. You've reinvested your returns for outstanding investment
              success. You've successfully increased your Passive Income 100 times!
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 w-full p-2 m-1 rounded-md border-2 border-yellow-700">
          <TableTitle className="bg-yellow-700">CASHFLOW Day Income</TableTitle>
          <div className="my-4">
            <div className="flex">
              <div className="w-1/2">
                <div className="font-semibold mr-2">
                  Your <span>Passive Income</span> (from other side)
                </div>
              </div>
              <div className="w-1/2 px-2 mx-1 h-8 border-b border-yellow-700 text-left">
                <span>$</span>
                {numberWithCommas(passiveIncome)}
              </div>
            </div>
            <div className="font-light my-2 text-right">(Rounded to the Nearest Thousand Dollars)</div>
          </div>
          <div className="my-2 flex text-right">
            <div className="w-1/2">Investment Multiple</div>
            <div className="w-1/2">x 100</div>
          </div>
          <div className="my-4">
            <div className="flex">
              <div className="w-1/2">
                <div className="font-semibold mr-2">
                  Your <span className="font-bold">Beginning CASHFLOW Day Income</span>
                </div>
              </div>
              <div className="w-1/2 px-2 mx-1 h-8 border-b border-yellow-700 text-left">
                <span>$</span>
                {numberWithCommas(beginningCashFlowDayIncome)}
              </div>
            </div>
          </div>
          <TableTitle className="bg-yellow-700">How To Win!</TableTitle>
          <div className="my-4">
            <div className="flex">
              <div className="w-1/2">
                <div className="font-semibold mr-2">Your Beginning CASHFLOW Day Income</div>
              </div>
              <div className="w-1/2 px-2 mx-1 h-8 border-b border-yellow-700 text-left">
                <span>$</span>
                {numberWithCommas(beginningCashFlowDayIncome)}
              </div>
            </div>
          </div>
          <div className="my-2 flex text-right">
            <div className="w-1/2 text-fold">Fast Track Cash Flow need to win</div>
            <div className="w-1/2 text-bold">+ $50,000</div>
          </div>
          <div className="my-4">
            <div className="flex">
              <div className="w-1/2">
                <div className="font-semibold mr-2">Your New CASHFLOW Day Income Goal</div>
              </div>
              <div className="w-1/2 px-2 mx-1 h-8 border-b border-yellow-700 text-left">
                <span>$</span>
                {numberWithCommas(cashFlowDayIncomeGoal)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4 p-2 m-1 rounded-md border-2 border-yellow-700">
        <div className="sm:flex">
          <div className="mr-2 sm:w-1/2 w-full">
            Your new CASHFLOW Day Income is equal to your Beginning CASHFLOW Day Income plus the Cash Flow from every
            Business you buy on the Fast Track.
          </div>
          <div className="my-4 sm:w-1/2 w-full">
            <div className="flex">
              <div className="w-1/2">
                <div className="font-semibold mr-2">Beginning CASHFLOW Day Income</div>
              </div>
              <div className="w-1/2 px-2 mx-1 h-8 border-b border-yellow-700 text-left">
                <span>$</span>
                {numberWithCommas(beginningCashFlowDayIncome)}
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <TableHeader columnList={incomeRecordHeader} className="border-yellow-700 text-yellow-700" />
          <FieldArray name="incomeRecord">
            {(arrayHelpers) => {
              const { push, remove } = arrayHelpers;
              return (
                <>
                  {incomeRecord.map((rowItem, rowIndex, rowList) => {
                    const subTotal =
                      _.chain(rowList)
                        .filter((item, index) => index <= rowIndex)
                        .sumBy((item) => Number(item[1]))
                        .value() + beginningCashFlowDayIncome;

                    return (
                      // * field array blur issue
                      // * ref: https://stackoverflow.com/questions/52531728/formik-fieldarray-lost-focus-when-onchange-triggered
                      <div
                        key={`incomeRecord_${rowIndex}`}
                        className="flex border-b border-yellow-700 my-2 py-2 relative"
                      >
                        {rowItem.map((item, index) => (
                          <div
                            key={`incomeRecord_${rowIndex}_${index}`}
                            className={`${index === 0 ? 'w-1/2 pr-2' : 'w-1/4'}`}
                          >
                            <Field
                              as="input"
                              name={`incomeRecord.${rowIndex}.${index}`}
                              className="text-gray-600 rounded-sm px-2 w-full"
                            />
                          </div>
                        ))}
                        <div className="px-2">{numberWithCommas(subTotal)}</div>
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
                    );
                  })}
                  <button
                    type="button"
                    className="rounded-md cursor-pointer bg-yellow-300 w-full mt-2 mb-4 p-1 text-yellow-800 uppercase shadow-md"
                    onClick={() => push(['', ''])}
                  >
                    add
                  </button>
                </>
              );
            }}
          </FieldArray>
        </div>
      </div>
      <Progress
        title="Fast Track Progress"
        description="Progress Rate: Passive Income / Cashflow Day Income Goal * 100%"
        current={currentTotalCashflowIncome}
        goal={cashFlowDayIncomeGoal}
      />
    </div>
  );
}
