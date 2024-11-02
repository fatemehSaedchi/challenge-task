import {apiClient} from "./config/ApiClient";
import {loginResponseType} from "../../types/Auth";

interface RegisterData {
    username: string,
    password: string,
}
export function loginApiCall(data: RegisterData): Promise<loginResponseType> {
    return apiClient.post('/auth/login', data)
}