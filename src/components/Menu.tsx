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
    <div className="h-auto p-2 bg-yellow-400 w-screen sm:flex sm:text-left text-center justify-between items-center fixed z-10 top-0 shadow-md">
      <div className="uppercase text-gray-600 font-bold text-xl sm:my-0 my-2">Cash Flow Game</div>
      <div>
        <input
          type="text"
          placeholder="Add new player"
          className="sm:w-60 px-2 mx-1 h-8 rounded-md"
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
