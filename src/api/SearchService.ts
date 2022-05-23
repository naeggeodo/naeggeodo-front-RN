import {AxiosResponse} from 'axios';
import {ApiService} from '.';
import {Tag} from '../slices/search';

export class SearchService {
  static async getTagList(): Promise<AxiosResponse<Tag[]>> {
    return ApiService.getApi('/chat-rooms/tag/most-wanted');
  }
}
