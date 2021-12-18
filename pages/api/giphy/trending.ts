import type {NextApiHandler} from "next"
import * as giphy from "../../../util/giphy"

const handler: NextApiHandler<giphy.GiphyTrendingResponse> = async (
	req,
	res,
) => {
	// TODO: query object validation
	const data = await giphy.trending(req.query as giphy.GiphyTrendingRequest)
	res.status(200).json(data)
}

export default handler
