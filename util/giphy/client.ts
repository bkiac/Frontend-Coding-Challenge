import axios from "axios"
import type {
	GiphyRequest,
	GiphySearch,
	GiphyTrending,
	GiphySearchResponse,
} from "./types"

export type GiphyOptions = {
	url: string
	apiKey?: string
}

export type GiphyClient = {
	trending: GiphyTrending
	search: GiphySearch
}

export function createClient({url, apiKey}: GiphyOptions): GiphyClient {
	const giphy = axios.create({
		baseURL: url,
		params: {api_key: apiKey},
	})

	async function get<
		Request extends GiphyRequest | undefined,
		Response extends GiphySearchResponse,
	>(endpoint: string, request: Request): Promise<Response> {
		const {data} = await giphy.get<Response>(endpoint, {params: request})
		return data
	}

	const trending: GiphyTrending = async (request) => get("trending", request)
	const search: GiphySearch = async (request) => get("search", request)

	return {
		trending,
		search,
	}
}

export const backendClient = createClient({
	url: "https://api.giphy.com/v1/gifs",
	apiKey: process.env.GIPHY_API_KEY,
})

export const frontendClient = createClient({url: "/api/giphy"})
