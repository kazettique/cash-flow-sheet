import _ from 'lodash';
import { ReactElement } from 'react';
import SheetTitle from './SheetTitle';

type Props = {
  current: number;
  goal: number;
  description?: string;
  title: string;
};

export default function Progress(props: Props): ReactElement {
  const { current, goal, description, title } = props;

  let progress;
  if (!_.isFinite(goal)) {
    progress = 0;
  } else if (_.round(current / goal, 2) <= 1) {
    progress = _.round(current / goal, 2);
  } else if (_.round(current / goal, 2) > 1) {
    progress = 1;
  } else {
    progress = 0;
  }

  return (
    <div>
      <SheetTitle>{title}</SheetTitle>
      <div className="font-light my-2 mx-1">{description}</div>
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
