import type {UseQueryResult} from "react-query"
import {useQuery} from "react-query"
import type {GiphyTrendingRequest, GiphyTrendingResponse} from "../types"
import {frontendClient as giphy} from "../client"

export function useTrendingQuery(
	request?: GiphyTrendingRequest,
): UseQueryResult<GiphyTrendingResponse> {
	return useQuery("trending", async () => giphy.trending(request))
}
