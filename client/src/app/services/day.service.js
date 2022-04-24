import httpService from './http.service';

const dayEndPoint = 'day/';

const DayService = {
  fetch: async (payload) => {
    const params = payload ? { params: { date: payload } } : null;

    const { data } = await httpService.get(dayEndPoint, params);
    return data;
  },
  fetchById: async (payload) => {
    const { data } = await httpService.get(dayEndPoint + payload);
    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.post(dayEndPoint, payload);
    return data;
  },
  update: async (payload) => {
    const { data } = await httpService.patch(dayEndPoint, payload);
    return data;
  },
  delete: async (payload) => {
    const { data } = await httpService.delete(dayEndPoint + payload);
    return data;
  }
};

export default DayService;
