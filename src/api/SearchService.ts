import {AxiosResponse} from 'axios';
import {ApiService} from '.';
import {Tag} from '../slices/search';

export class SearchService {
  static async getTagList(): Promise<AxiosResponse<Tag[]>> {
    return await ApiService.getApi('/chat-rooms/tag/most-wanted');
  }
  static async getChatRooms(keyword: string) {
    console.log(encodeURI(keyword));
    return await ApiService.getApi(encodeURI(`/chat-rooms/search/${keyword}`));
  }
  static async getChatRoomsByTag(tag: string) {
    return await ApiService.getApi(`/chat-rooms/tag/${tag}`);
  }
}
