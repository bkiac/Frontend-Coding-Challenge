import type {UseQueryResult} from "react-query"
import {useQuery} from "react-query"
import type {GiphySearchRequest, GiphySearchResponse} from "../types"
import {frontendClient as giphy} from "../client"

export function useSearchQuery(
	request: GiphySearchRequest,
): UseQueryResult<GiphySearchResponse> {
	return useQuery("search", async () => giphy.search(request))
}
