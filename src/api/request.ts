import { baseUrl } from "@/api/config";
import {objTOParams} from "@/utils/requestTransform";
import { AxiosResponse } from 'axios'
import axios from 'axios'
import { http } from './config'

export type Response<T> = AxiosResponse<T>



export function get<T extends Object>(url:string,data?:Object):Promise<Response<T>>{
    if(!data){
        return http.get(url);
    }
    return http.get(url+'?'+objTOParams(data))
}

export function post<T>(url:string,data:object):Promise<Response<T>>{
    return http.post(url,data)
}


export function put<T>(url:string,data:object):Promise<Response<T>>{
    return http.put(url,data)
}

export function deleteI<T>(url:string):Promise<Response<T>>{
    return http.delete(url)
}

export function patch<T>(url:string,data:object):Promise<Response<T>>{
    return http.patch(url,data)
}



