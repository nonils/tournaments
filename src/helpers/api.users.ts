import {Api} from "./api";
import {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";
import {apiUsersConfig} from "./api.config";
import {UserNotFoundException} from "../exceptions/UserNotFoundException";

export class UserApi extends Api{
    public constructor (config: AxiosRequestConfig) {
        super(config);
    }

    public findUserById(userId:number): Promise<any> {
        return this.get(`/${userId}`).then((user:AxiosResponse) => {
            return user;
        }).catch((error: AxiosError)=> {
          throw new UserNotFoundException(userId.toString());
        })
    }
}

export const userApi = new UserApi(apiUsersConfig);
