import agent, {Promise} from "./agent"

export interface ICompletionRequest {
    name: string
    caret: number
    request: ISearchRequest
}

export interface ISearchRequest {
    query: string
}

export interface ICompletionResponse {
    name: string
    completions: ICompletionResponseItem[]
}

export interface ICompletionResponseItem {
    text: string
    kind: string
}

export const SearchApi = {
    complete: (request: ICompletionRequest): Promise<ICompletionResponse> => {
        return agent.post(`/account/search/complete`, request)
    },
}
