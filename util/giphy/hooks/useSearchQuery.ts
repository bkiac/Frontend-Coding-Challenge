import type {UseQueryOptions, UseQueryResult} from "react-query"
import {useQuery} from "react-query"
import type {GiphySearchResponse} from "../types"
import {frontendClient as giphy} from "../client"

export function useSearchQuery(args: {
	variables: {q: string}
	options?: UseQueryOptions<
		GiphySearchResponse,
		Error,
		GiphySearchResponse,
		["search", string]
	>
}): UseQueryResult<GiphySearchResponse, Error> {
	return useQuery(
		["search", args.variables.q],
		async () => giphy.search(args.variables),
		args.options,
	)
}
