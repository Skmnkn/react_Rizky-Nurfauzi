import { axiosInstance } from "../Configs/AxiosInstance";

const APITODO = {
  async getAllTodo() {
    try {
      const response = await axiosInstance.get("/todo");
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async deleteTodosById(id) {
    try {
      const response = await axiosInstance.delete(`/todo/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default APITODO;
