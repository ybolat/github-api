import {IUserResponse} from "./IUserResponse";

export interface IServerResponse {
    total_count: number
    incomplete_results: boolean
    items: IUserResponse[]
}
