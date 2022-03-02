import { ReactElement } from 'react';

type Props = {
  children: string;
  className?: string;
};

export default function TableTitle(props: Props): ReactElement {
  const { children, className } = props;
  return (
    <div className={`px-2 text-xl font-semibold uppercase rounded-md bg-blue-900 text-gray-100 ${className}`}>
      {children}
    </div>
  );
}
