import got from "got"
import type {
	GiphyTrendingRequest,
	GiphyTrendingResponse,
	GiphySearchRequest,
	GiphySearchResponse,
} from "./types"

const giphy = got.extend({
	prefixUrl: "https://api.giphy.com/v1/gifs",
})

async function get<Request, Response>(
	endpoint: string,
	request: Request,
): Promise<Response> {
	return giphy
		.get(endpoint, {
			searchParams: {...request, api_key: process.env.GIPHY_API_KEY},
		})
		.json<Response>()
}

export async function trending(
	request: GiphyTrendingRequest,
): Promise<GiphyTrendingResponse> {
	return get("trending", request)
}

export async function search(
	request: GiphySearchRequest,
): Promise<GiphySearchResponse> {
	return get("search", request)
}
