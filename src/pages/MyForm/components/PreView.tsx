import { Divider, Typography } from 'antd';
import React, { PropsWithChildren } from 'react';
const { Title, Paragraph } = Typography;

type PreViewProps = Chat.ChatInformation & {
  tinyPre?: boolean;
};

const PreView: React.FC<PropsWithChildren<PreViewProps>> = (
  props,
  tinyPre = false,
) => {
  const { title, digest } = props;
  return (
    <>
      <Typography>
        {title && (
          <>
            {tinyPre ? (
              <h4>{title}</h4>
            ) : (
              <>
                <h1>{title}</h1> <Divider />
              </>
            )}
          </>
        )}

        <Paragraph>{digest}</Paragraph>
      </Typography>
    </>
  );
};

export default PreView;
