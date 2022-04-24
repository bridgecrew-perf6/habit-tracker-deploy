import httpService from './http.service';

const statusEndPoint = 'habitstatus/';

const HabitStatusService = {
  update: async (payload) => {
    const { data } = await httpService.patch(
      statusEndPoint + payload._id,
      payload.values
    );
    return data;
  }
};

export default HabitStatusService;
