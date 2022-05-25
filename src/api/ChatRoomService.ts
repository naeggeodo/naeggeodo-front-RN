import {AxiosResponse} from 'axios';
import {ApiService} from '.';
import {ChatRoomInfoResponse} from '../slices/chatRoom';

export class ChatRoomService {
  static async getChatRoomInfo(
    chatMainId: number,
  ): Promise<AxiosResponse<ChatRoomInfoResponse>> {
    return await ApiService.getApi(`/chat-rooms/${chatMainId}`);
  }
}
