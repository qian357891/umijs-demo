import { PreViewPropsList } from '@/pages/MyForm/Context';
import PreView from '@/pages/MyForm/components/PreView';
import React, { Fragment, useContext } from 'react';

const PreViewList: React.FC = () => {
  const preViewPropsList = useContext(PreViewPropsList);

  return (
    <>
      {preViewPropsList.map((information) => {
        return (
          <Fragment key={information.id}>
            <PreView {...information} tinyPre={true} />
          </Fragment>
        );
      })}
    </>
  );
};

export default PreViewList;
