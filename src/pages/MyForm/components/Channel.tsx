import { Radio, notification } from 'antd';
import React, { useEffect, useState } from 'react';

type NotificationType = 'success';
const openNotificationWithIcon = (type: NotificationType, channel: string) => {
  notification[type]({
    message: '提示',
    description: `成功切换到${channel}频道！`,
  });
};
const Channel: React.FC = () => {
  const [channel, setChannel] = useState('TypeScript');
  useEffect(() => {
    console.log('连接。。。' + channel);
  }, [channel]);
  return (
    <>
      <Radio.Group
        defaultValue="TypeScript"
        buttonStyle="solid"
        onChange={(e) => {
          setChannel(e.target.value);
          openNotificationWithIcon('success', channel);
        }}
      >
        <Radio.Button value="TypeScript">TypeScript</Radio.Button>
        <Radio.Button value="Rust">Rust</Radio.Button>
        <Radio.Button value="Go">Go</Radio.Button>
        <Radio.Button value="Zig">Zig</Radio.Button>
      </Radio.Group>
    </>
  );
};
export default Channel;
