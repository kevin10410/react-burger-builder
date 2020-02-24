import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import mockPosts from './mockPosts';

class AxiosMocker {
  constructor() {
    this.mock = new MockAdapter(axios, { delayResponse: 500 });
  };

  init() {
    console.log('init AxiosMocker');
    this.mockGetRequest();
    this.mockPostRequest();
    this.mockUpdateRequest();
    this.mockDeleteRequest();
  };

  mockGetRequest() {
    this.mockGetOrders();
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
      .reply(({ data }) => {
        mockPosts.push({
          ...JSON.parse(data),
          orderId: mockPosts.length + 1,
        });
        return [200];
      });
  };
};

export default AxiosMocker;
