import { ReactElement } from 'react';

type Props = {
  children: string;
};

export default function SheetTitle(props: Props): ReactElement {
  const { children } = props;
  return <h2 className="text-gray-800 text-2xl font-bold">{children}</h2>;
}
