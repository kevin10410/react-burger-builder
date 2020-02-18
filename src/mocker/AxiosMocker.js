import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import mockPosts from './mockPosts';

class AxiosMocker {
  constructor() {
    this.mock = new MockAdapter(axios, { delayResponse: 200 });
  };

  init() {
    console.log('init AxiosMocker');
    this.mockGetRequest();
    this.mockPostRequest();
    this.mockUpdateRequest();
    this.mockDeleteRequest();
  };

  mockGetRequest() {

  };

  mockPostRequest() {
    this.mockPostOrder();
  };

  mockUpdateRequest() {

  };

  mockDeleteRequest() {

  };

  mockGetOrders() {
    this.mock.onGet('/order')
      .reply(200, mockPosts);
  };

  mockPostOrder() {
    this.mock.onPost('/order')
      .reply((config) => [200, config.data]);
  };
};

export default AxiosMocker;
