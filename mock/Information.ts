import mockjs from 'mockjs';
import {
  GET_INFORMATION,
  GET_INFORMATION_LIST,
} from '../src/constants/requestUrl';

export default {
  // 获取信息
  ['POST ' + GET_INFORMATION]: mockjs.mock({
    'id|1-100': 50,
    'userId|1-100': 50,
    title: '@city',
    digest: '',
  }),
  // 获取信息列表
  ['POST ' + GET_INFORMATION_LIST]: mockjs.mock({
    'list|20': [
      {
        'id|1-2000': 50,
        'userId|1-100': 50,
        title: '@ctitle(3, 5)',
        digest: '@cparagraph(3,5)',
      },
    ],
  }),
};
