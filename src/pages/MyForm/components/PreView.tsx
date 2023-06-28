import { Information } from '@/pages/MyForm/types';
import { Divider, Typography } from 'antd';
import React, { PropsWithChildren } from 'react';
const { Title, Paragraph } = Typography;

const PreView: React.FC<PropsWithChildren<Information>> = (props) => {
  const { title, digest } = props;
  return (
    <>
      <Typography>
        {title && (
          <>
            <Title>{title}</Title>
            <Divider />
          </>
        )}

        <Paragraph>{digest}</Paragraph>
      </Typography>
    </>
  );
};

export default PreView;
