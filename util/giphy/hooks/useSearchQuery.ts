import type {UseQueryOptions, UseQueryResult} from "react-query"
import {useQuery} from "react-query"
import type {GiphySearchRequest, GiphySearchResponse} from "../types"
import {frontendClient as giphy} from "../client"

export function useSearchQuery(args: {
	request: GiphySearchRequest
	options?: UseQueryOptions<
		GiphySearchResponse,
		Error,
		GiphySearchResponse,
		["search", string]
	>
}): UseQueryResult<GiphySearchResponse, Error> {
	return useQuery(
		["search", args.request.q],
		async () => giphy.search(args.request),
		args.options,
	)
}
