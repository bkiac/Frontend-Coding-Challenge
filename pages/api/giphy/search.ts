import type {NextApiHandler} from "next"
import * as giphy from "../../../util/giphy"

const handler: NextApiHandler<giphy.GiphySearchResponse> = async (req, res) => {
	// TODO: query object validation
	const data = await giphy.search(
		req.query as unknown as giphy.GiphySearchRequest,
	)
	res.status(200).json(data)
}

export default handler
