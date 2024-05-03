import { AsyncFetch } from "../../../utils/axios";


class authService{
    async login(payload){
        try {
            const url = `/login/tokenusingconfiguration.json`;
            const res = await AsyncFetch({
              url: url,
              method: "POST",
              data: payload,
            });
      
            return res;
          } catch (error) {
            throw error;
          }
    }
          
    async verifyotp(otp, userId) {
      try {
        const url = `/login/CheckAuthToken/${otp}/${userId}.json`;
        const res = await AsyncFetch({
          url: url,
          method: "GET",
        });
        return res;
      } catch (error) {
        throw error;
      }
    }   
    async getOtpTimeout(userId) {
      try {
        const url = `/login/SendAuthToken/${userId}.json`;
        const res = await AsyncFetch({
          url: url,
          method: "GET",
        });
        return res;
      } catch (error) {
        throw error;
      }
    }
    async getUserById(id){
    try {
      const url = `/AdminUser/get/${id}.json`;
      const res = await AsyncFetch({
        url: url,
        method: "GET",
      });
      return res;
    } catch (error) {
      
    }
  }
  async getOtpTimeout(userId) {
    try {
      const url = `/login/SendAuthToken/${userId}.json`;
      const res = await AsyncFetch({
        url: url,
        method: "get",
      });
      return res;
    } catch (error) {
      throw error;
    }
  }
  async sendResetPasswordLink(userEmail) {
    try {
      const url = `/AdminUser/SendResetPasswordLink/${userEmail}.json`;
      const res = await AsyncFetch({
        url: url,
        method: "GET",
      });
      return res;
    } catch (error) {
      throw error;
    }
  }
}
const authServiceCls = new authService();

export default authServiceCls;