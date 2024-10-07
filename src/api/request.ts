import { message } from "antd";
import axios from "axios";
import Config from "@/utils/config";
import { IRes } from "@/utils/interface";

const request = axios.create({
  baseURL: Config.API_URI,
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
});

request.interceptors.response.use((response) => {
  try {
    return response.data;
  } catch (error) {
    console.log(error)
    const res: IRes = response.data;
    if (res.error_code) {
      message.error(res.msg);
      throw new Error(res.msg);
    }
  }
});

export default request;
