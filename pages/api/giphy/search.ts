import type {NextApiHandler} from "next"
import type {GiphySearchResponse, GiphySearchRequest} from "../../../util/giphy"
import {backendClient as giphy} from "../../../util/giphy"

const handler: NextApiHandler<GiphySearchResponse> = async (req, res) => {
	// TODO: query object validation
	const data = await giphy.search(req.query as unknown as GiphySearchRequest)
	res.status(200).json(data)
}

export default handler
