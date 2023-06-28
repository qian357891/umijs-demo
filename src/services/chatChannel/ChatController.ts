import {
  ADD_INFORMATION,
  DELETE_INFORMATION,
  GET_INFORMATION,
  GET_INFORMATION_LIST,
  UPDATE_INFORMATION,
} from '@/constants/requestUrl';
import { request } from '@umijs/max';

export async function getChatInformation(
  params: {
    id: number;
  },
  options?: { [key: string]: any },
) {
  return request<Chat.ChatInformation>(GET_INFORMATION, {
    method: 'POST',
    data: params,
    requestType: 'form',
    ...(options || {}),
  });
}

export async function getChatInformationList(
  params: {
    userId?: number;
  },
  options?: { [key: string]: any },
) {
  return request<Record<'list', Chat.ChatInformation[]>>(GET_INFORMATION_LIST, {
    method: 'POST',
    data: params,
    requestType: 'form',
    ...(options || {}),
  });
}

export async function AddChatInformation(
  params: Chat.ChatInformation,
  options?: { [key: string]: any },
) {
  return request<Chat.ChatInformation>(ADD_INFORMATION, {
    method: 'POST',
    data: params,
    requestType: 'form',
    ...(options || {}),
  });
}

export async function UpdateChatInformation(
  params: {
    id: number;
    userId: number;
  },
  options?: { [key: string]: any },
) {
  return request<Chat.ChatInformation>(UPDATE_INFORMATION, {
    method: 'POST',
    data: params,
    requestType: 'form',
    ...(options || {}),
  });
}

export async function DeleteChatInformation(
  params: {
    id: number;
    userId: number;
  },
  options?: { [key: string]: any },
) {
  return request<Chat.ChatInformation>(DELETE_INFORMATION, {
    method: 'POST',
    data: params,
    requestType: 'form',
    ...(options || {}),
  });
}
