import type {NextPage} from "next"
import {Debug} from "../components"
import {useTrendingQuery} from "../util/giphy"

const Home: NextPage = () => {
	const {isLoading, error, data} = useTrendingQuery()

	if (isLoading) {
		return <p>Loading...</p>
	}

	if (error != null) {
		console.error(error)
		return <p>An error has occurred</p>
	}

	return (
		<div>
			{data?.data.map(({id, slug, source}) => (
				<Debug key={id} value={{id, slug, source}} />
			))}
		</div>
	)
}

export default Home
