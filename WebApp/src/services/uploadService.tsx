import { httpClient } from './httpClient';

export interface IUploadService {
  url: string;
}

class UploadService {
  httpClient;
  path: string;
  constructor() {
    this.httpClient = httpClient;
    this.path = '/upload';
  }

  async upload(fileList?: FileList | null): Promise<string | null> {
    if (!fileList || fileList.length === 0) return null;

    const formData = new FormData();
    formData.append('file', fileList[0]);

    const { data } = await this.httpClient.post<IUploadService>(
      `${this.path}`,
      formData,
    );

    return data.url;
  }

  async uploadMultiple(fileList?: FileList | null): Promise<string[]> {
    if (!fileList || fileList.length === 0) return [];
    const formData = new FormData();
    Array.from(fileList).forEach(file => formData.append('file', file));
    const { data } = await this.httpClient.post<string[]>(`${this.path}/multiple`, formData);
    return data;
  }

}

export default new UploadService();
