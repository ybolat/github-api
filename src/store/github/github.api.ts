import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IUserResponse} from "../../interfaces/IUserResponse";
import {IServerResponse} from "../../interfaces/IServerResponse";
import {IRepoResponse} from "../../interfaces/IRepoResponse";

export const githubApi = createApi({
    reducerPath: 'github/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),
    refetchOnFocus: true,
    endpoints: build => ({
        searchUsers: build.query<IUserResponse[], string>({
            query: (search: string) => ({
                url: `search/users`,
                params: {
                    q: search,
                    per_page: 10
                }
            }),
            transformResponse: (response: IServerResponse ) => response.items
        }),
        getUserRepos: build.query<IRepoResponse[], string>({
            query: (username: string) => ({
                url: `users/${username}/repos`
            })
        })
    })
});

export const {useSearchUsersQuery, useLazyGetUserReposQuery} = githubApi;