import * as dotenv from "dotenv";
dotenv.config();

export const HOST = `${process.env.HOST}`;
export const PORT = process.env.PORT;
export const MONGO_URL = `${process.env.MONGO_URL}`
export const SWAGGER_PREFIX = `${process.env.SWAGGER_PREFIX}`

export const SESSION_TIMEOUT_TIME = parseInt(`${process.env.SESSION_TIMEOUT_TIME}`);

export const API_POWGAMING_SOFTCOIN_URL = `${process.env.API_POWGAMING_SOFTCOIN_URL}`;
