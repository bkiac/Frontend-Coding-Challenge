import type {NextApiHandler} from "next"
import type {
	GiphyTrendingRequest,
	GiphyTrendingResponse,
} from "../../../util/giphy"
import {backendClient as giphy} from "../../../util/giphy"

const handler: NextApiHandler<GiphyTrendingResponse> = async (req, res) => {
	const data = await giphy.trending(req.query as GiphyTrendingRequest)
	res.status(200).json(data)
}

export default handler
