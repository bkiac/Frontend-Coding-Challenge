import type {UseQueryOptions, UseQueryResult} from "react-query"
import {useQuery} from "react-query"
import type {GiphyTrendingRequest, GiphyTrendingResponse} from "../types"
import {frontendClient as giphy} from "../client"

export function useTrendingQuery(args?: {
	request?: GiphyTrendingRequest
	options?: UseQueryOptions<
		GiphyTrendingResponse,
		Error,
		GiphyTrendingResponse,
		"trending"
	>
}): UseQueryResult<GiphyTrendingResponse, Error> {
	return useQuery(
		"trending",
		async () => giphy.trending(args?.request),
		args?.options,
	)
}
