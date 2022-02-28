import { ReactElement } from 'react';

type Props = {
  children: string;
};

export default function TableTitle(props: Props): ReactElement {
  const { children } = props;
  return <div className="px-2 text-xl font-semibold uppercase rounded-md bg-blue-900 text-gray-100">{children}</div>;
}
