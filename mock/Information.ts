import mockjs from 'mockjs';
import { GET_INFORMATION } from '../src/constants/requestUrl';

export default {
  ['GET ' + GET_INFORMATION]: mockjs.mock({
    'list|100': [
      { 'id|1-100': 50, 'userId|1-100': 50, title: '@city', digest: '' },
    ],
  }),
  // ['POST ' + RequestUrl.GET_INFORMATION]: mockjs.mock({
  //   'list|100': [
  //     { 'id|1-100': 50, 'userId|1-100': 50, title: '@city', digest: '' },
  //   ],
  // }),
};
