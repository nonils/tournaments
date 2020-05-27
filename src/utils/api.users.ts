import {Api} from "./api";
import {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";
import {apiUsersConfig} from "./api.config";
import {UserNotFoundException} from "../exceptions";

export class UserApi extends Api {
    public constructor(config: AxiosRequestConfig) {
        super(config);
    }

    public findUserById(userId: number): Promise<any> {
        return this.get(`/${userId}`).then((user: AxiosResponse) => {
            return user.data;
        }).catch((error: AxiosError) => {
            console.error(error);
            throw new UserNotFoundException(userId.toString());
        })
    }
}

export const userApi = new UserApi(apiUsersConfig);
