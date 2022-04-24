import httpService from './http.service';

const habitEndPoint = 'habit/';

const habitService = {
  fetchAll: async (payload) => {
    const { data } = await httpService.get(habitEndPoint + payload);
    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.post(habitEndPoint, payload);
    return data;
  },
  update: async (payload) => {
    const { data } = await httpService.patch(
      habitEndPoint + payload._id,
      payload
    );
    return data;
  },
  delete: async (payload) => {
    const { data } = await httpService.delete(habitEndPoint + payload);
    return data;
  }
};

export default habitService;
