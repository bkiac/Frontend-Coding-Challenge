import type {MultiResponse} from "giphy-api"

export type GiphyRating = "g" | "pg" | "pg-13" | "r"

export type GiphyRequest = {
	// api_key: string
	limit?: number
	offset?: number
	rating?: GiphyRating
	random_id?: string
	bundle?: string
}

export type GiphyResponse = MultiResponse

export type GiphyTrendingRequest = GiphyRequest
export type GiphyTrendingResponse = GiphyResponse
export type GiphyTrending = (
	request?: GiphyTrendingRequest,
) => Promise<GiphyTrendingResponse>

export type GiphySearchRequest = GiphyRequest & {
	q: string
	lang?: string
}
export type GiphySearchResponse = GiphyResponse
export type GiphySearch = (
	request: GiphySearchRequest,
) => Promise<GiphySearchResponse>
