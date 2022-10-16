import type { AxiosRequestConfig, AxiosResponse, AxiosRequestHeaders, AxiosError, AxiosInstance } from 'axios';
import { ContentTypeEnum, HttpMethodEnum } from '../enums';
export declare type ErrorMessageMode = 'none' | 'modal' | 'message' | undefined;
export declare type RetryRequest = (value: any) => void;
export interface RequestOptions {
    contentType: ContentTypeEnum;
    prohibitRepeatRequests?: boolean;
    isTransformResponse?: boolean;
    errorMessageMode?: ErrorMessageMode;
    withToken?: boolean;
}
export interface AxiosTransform {
    /**
     * @description: 请求前处理配置
     */
    beforeRequestHook?: (config: AxiosRequestConfig, options: RequestOptions) => AxiosRequestConfig;
    /**
     * @description: 请求成功处理
     */
    transformRequestHook?: <D = unknown>(response: AxiosResponse<HttpResult<D>>, options?: RequestOptions) => AxiosHttpResult<D>;
    /**
     * @description: 请求失败处理
     */
    requestCatchHook?: <D = unknown>(error: AxiosError, options?: RequestOptions) => HttpResult<D>;
    /**
     * @description: 请求之前的拦截器
     */
    requestInterceptors: (config: AxiosRequestConfig) => AxiosRequestConfig;
    /**
     * @description: 请求之后的拦截器
     */
    responseInterceptors: (response: AxiosResponse<any>) => Promise<any>;
    /**
     * @description: 请求之前的拦截器错误处理
     */
    requestInterceptorsCatch: (axiosInstance: AxiosInstance, error: AxiosError) => Promise<any>;
    /**
     * @description: 请求之后的拦截器错误处理
     */
    responseInterceptorsCatch: (axiosInstance: AxiosInstance, error: AxiosError) => Promise<any>;
}
export interface AxiosConfig extends AxiosRequestConfig {
    authenticationScheme?: string;
    transform?: AxiosTransform;
    requestOptions?: RequestOptions;
}
export interface Policy {
    headers: AxiosRequestHeaders;
    dataConvert: (params: Record<string, any>) => any;
}
export interface AxiosRequestPolicy {
    config: AxiosRequestConfig;
    options: RequestOptions;
    dataConvert: (params: Record<string, any>) => any;
}
export declare type AxiosHttpResult<T = unknown> = AxiosResponse<HttpResult<T>> | HttpResult<T>;
export declare type HttpMethod = keyof typeof HttpMethodEnum;
export declare type Result<T = unknown> = {
    code: number;
    message: string;
    path: string;
    data: T;
    status: number;
    timestamp: string;
    error?: {
        detail: string;
        message: string;
        code: string;
        field: string;
    };
};
export declare type OAuth2Token = {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    license: string;
    openid: string;
    scope: string;
    token_type: string;
    id_token: string;
};
export declare type OAuth2IdToken = {
    sub: string;
    openid: string;
    roles: Array<string>;
    iss: string;
    active: boolean;
    token_type: string;
    client_id: string;
    aud: Array<string>;
    license: string;
    nbf: number;
    scope: string;
    exp: number;
    iat: number;
    jti: string;
};
export declare type BpmnListCount = {
    count: number;
};
export declare type HttpResult<T = unknown> = OAuth2Token & Result<T> & BpmnListCount & T[] & unknown;
