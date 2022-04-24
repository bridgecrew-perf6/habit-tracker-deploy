import httpService from './http.service';
import localStorageService from './localStorage.service';

const usersEndPoint = 'user/';

const usersService = {
  get: async () => {
    const { data } = await httpService.get(
      usersEndPoint + localStorageService.getUserIdToken()
    );
    return data;
  },
  update: async (payload) => {
    const { data } = await httpService.patch(
      usersEndPoint + payload._id,
      payload.habits
    );
    return data;
  }
};

export default usersService;
