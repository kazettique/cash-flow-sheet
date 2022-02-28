import { ReactElement, useState } from 'react';
import _ from 'lodash';

type Props = {
  createPlayer: (newPlayerName: string) => void;
};

export default function Menu(props: Props): ReactElement {
  const { createPlayer } = props;
  const [inputValue, setInputValue] = useState<string>('');

  const isDisabled = _.isEmpty(inputValue);

  const handleCreate = () => {
    createPlayer(inputValue);
    setInputValue('');
  };

  return (
    <div className="h-12 px-2 bg-yellow-400 w-screen flex justify-between items-center fixed top-0 shadow-md">
      <div className="uppercase text-gray-600 font-bold text-xl">Cash Flow Game</div>
      <div>
        <input
          type="text"
          placeholder="Add new player"
          className="w-60 px-2 mx-1 h-8 rounded-md"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button
          type="button"
          onClick={handleCreate}
          className={`mx-1 py-1 px-2 rounded-md text-gray-100 shadow-md
            ${isDisabled ? 'cursor-not-allowed bg-gray-400 text-gray-100' : 'bg-gray-600'}
          `}
          disabled={isDisabled}
        >
          Create
        </button>
      </div>
    </div>
  );
}
