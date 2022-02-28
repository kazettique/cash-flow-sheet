import { ReactElement, useState } from 'react';
import { Sheet } from '@/types';
import RatRace from '@/components/RatRace';
import FastTrack from '@/components/FastTrack';
import { OnSubmit } from '@/components/Form/types';
import Form from '@/components/Form';

type Props = {
  currentPlayer: string;
  sheet: Sheet;
};

export default function PlayerSheet(props: Props): ReactElement {
  const { currentPlayer, sheet } = props;
  // const isRatRace = true;
  const [isRatRace, setIsRatRace] = useState(true);
  const isDisabled = false;
  const status = isRatRace ? 'Rat Race' : 'Fast Track';

  const onSubmit: OnSubmit = (values, actions) => {
    // console.log('sheet: ', sheet);
    console.log('submit: ', values);
  };

  const validationSchema = {
    // greeting: Yup.string().required(),
  };

  return (
    <div>
      <Form initialValues={sheet} onSubmit={onSubmit} validationSchema={validationSchema}>
        <h2 className="text-gray-800 text-2xl block my-4">
          <span className="font-bold text-gray-700 italic">{currentPlayer}</span>
          <span> is </span>
          <span>{isRatRace ? 'in' : 'on'} </span>
          <span className={`font-semibold ${isRatRace ? 'text-blue-500' : 'text-yellow-500 uppercase'}`}>{status}</span>
          <span> right now</span>
          <span>{isRatRace ? '.' : '!!'}</span>
        </h2>
        <div>{isRatRace ? <RatRace /> : <FastTrack />}</div>
        <div className="mt-3 rounded-md flex justify-center bg-gray-200">
          {isRatRace ? (
            <button
              type="button"
              onClick={() => setIsRatRace(false)}
              className={`w-full h-16 rounded-md text-gray-800 text-3xl font-bold italic shadow-md
            ${isDisabled ? 'cursor-not-allowed bg-gray-400' : 'bg-yellow-100'}
          `}
              disabled={isDisabled}
            >
              Go to Fast Track!
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setIsRatRace(true)}
              className={`w-full h-16 rounded-md text-gray-800 text-3xl font-bold italic shadow-md
            ${isDisabled ? 'cursor-not-allowed bg-gray-400' : 'bg-blue-100'}
          `}
              disabled={isDisabled}
            >
              Back to Rat Race
            </button>
          )}
        </div>
      </Form>
    </div>
  );
}
