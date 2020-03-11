import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  title: string;
  className?: string;
}

const Page: React.FC<Props> = ({ title, children, className }) => (
  <div {...{ className }}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </div>
);

export default Page;
