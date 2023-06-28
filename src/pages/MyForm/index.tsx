import { PreViewPropsList } from '@/pages/MyForm/Context';
import Channel from '@/pages/MyForm/components/Channel';
import PreView from '@/pages/MyForm/components/PreView';
import PreViewList from '@/pages/MyForm/components/PreViewList';
import { defaultInformation } from '@/pages/MyForm/types';
import { getChatInformationList } from '@/services/chatChannel/ChatController';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Button, Divider, Input, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.less';

const handleGetChatInformation = async (): Promise<
  Record<'list', Chat.ChatInformation[]>
> => {
  try {
    return await getChatInformationList({ userId: 1 });
  } catch (err) {
    message.error('请求失败：' + err);
    return { list: [] };
  }
};

const MyForm: React.FC = () => {
  const [information, setInformation] =
    useState<Chat.ChatInformation>(defaultInformation);
  const [informationList, setInformationList] = useState<
    Chat.ChatInformation[]
  >([]);
  const informationId = useRef(0);
  const refInformationList = useRef<Chat.ChatInformation[]>([]);

  handleGetChatInformation().then((r) => (refInformationList.current = r.list));
  console.log(refInformationList.current);
  useEffect(() => {
    setInformationList(refInformationList.current);
  }, [refInformationList]);

  return (
    <>
      <PageContainer
        ghost
        header={{
          title: '多频道聊天室',
        }}
      >
        <Channel />
      </PageContainer>
      <ProCard direction="column" ghost gutter={[0, 16]}>
        {/*聊天列表*/}
        <div className={styles['preview-list-card']}>
          <ProCard gutter={12} style={{ height: 500 }}>
            <PreViewPropsList.Provider value={informationList}>
              <PreViewList />
            </PreViewPropsList.Provider>
          </ProCard>
        </div>
        {/*输入区*/}
        <ProCard gutter={12}>
          <ProCard colSpan={12} className={styles.container}>
            <Input
              value={information.title}
              onChange={(e) =>
                setInformation({
                  ...information,
                  title: e.target.value,
                  id: informationId.current,
                })
              }
              placeholder="请输入标题"
            />

            <Divider />

            <TextArea
              showCount
              maxLength={5000}
              style={{ height: 300, resize: 'none' }}
              onChange={(e) =>
                setInformation({
                  ...information,
                  digest: e.target.value,
                  id: informationId.current,
                })
              }
              placeholder="请输入"
              bordered={false}
            />
            <Button
              type="primary"
              onClick={() => {
                setInformationList([...informationList, information]);
                setInformation(defaultInformation);
                informationId.current++;
              }}
            >
              提交
            </Button>
          </ProCard>

          <Divider type="vertical" />
          {/*预览区*/}
          <div className={styles['preview-list-card']}>
            <ProCard colSpan={12} style={{ height: 500 }}>
              <PreView {...information} />
            </ProCard>
          </div>
        </ProCard>
      </ProCard>
    </>
  );
};

export default MyForm;
