import { ReactElement } from 'react';
import { Sheet, LocalStorageType } from '@/types';
import RatRace from '@/components/RatRace';
import FastTrack from '@/components/FastTrack';
import { OnSubmit } from '@/components/Form/types';
import Form from '@/components/Form';
import { useLocalStorageData } from '@/hooks';

type Props = {
  currentPlayer: string;
  sheet: Sheet;
  isRatRace: boolean;
  setIsRatRace: React.Dispatch<React.SetStateAction<boolean>>;
  setPlayerList: React.Dispatch<React.SetStateAction<LocalStorageType>>;
};

export default function PlayerSheet(props: Props): ReactElement {
  const { currentPlayer, sheet, isRatRace, setIsRatRace, setPlayerList } = props;
  const isDisabled = false;
  const status = isRatRace ? 'Rat Race' : 'Fast Track';

  const { saveData } = useLocalStorageData();

  const onSubmit: OnSubmit<Sheet> = (values) => {
    saveData(currentPlayer, values);
    setPlayerList((prev) => ({ ...prev, [currentPlayer]: values }));
  };

  const validationSchema = {
    // greeting: Yup.string().required(),
  };

  return (
    <div>
      <Form initialValues={sheet} onSubmit={onSubmit} validationSchema={validationSchema} enableReinitialize>
        <div className="flex justify-between items-center my-2">
          <h2 className="text-gray-800 text-2xl block">
            <span className="font-bold text-gray-700 italic">{currentPlayer}</span>
            <span> is </span>
            <span>{isRatRace ? 'in' : 'on'} </span>
            <span className={`font-semibold ${isRatRace ? 'text-blue-500' : 'text-yellow-500 uppercase'}`}>
              {status}
            </span>
            <span> right now</span>
            <span>{isRatRace ? '.' : '!!'}</span>
          </h2>
          <button type="submit" className="py-1 px-5 bg-green-500 uppercase text-gray-100 rounded-md shadow-md">
            Save
          </button>
        </div>

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
