import ApiConfig from '../Config/ApiConfig';

export const baseURL = process.env.NODE_ENV === 'production' ? ApiConfig.baseProURL : ApiConfig.baseDevURL;