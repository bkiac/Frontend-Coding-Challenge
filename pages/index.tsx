import {Container, Input} from "@chakra-ui/react"
import type {NextPage} from "next"
import {useState} from "react"
import {Debug} from "../components"
import {useSearchQuery, useTrendingQuery} from "../util/giphy"

const Home: NextPage = () => {
	const [query, setQuery] = useState("")
	const isSearching = query !== ""
	const trendingQuery = useTrendingQuery({options: {enabled: !isSearching}})
	const searchQuery = useSearchQuery({
		request: {q: query},
		options: {enabled: isSearching, cacheTime: 1},
	})

	return (
		<Container>
			<Input
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder="bitcoin"
			/>

			{(trendingQuery.isLoading || searchQuery.isLoading) && <p>Loading...</p>}

			{(trendingQuery.error != null || searchQuery.error != null) && (
				<p>An error has occurred</p>
			)}

			{isSearching
				? searchQuery.data?.data.map(({id, slug, source}) => (
						<Debug key={id} value={{id, slug, source}} />
				  ))
				: trendingQuery.data?.data.map(({id, slug, source}) => (
						<Debug key={id} value={{id, slug, source}} />
				  ))}
		</Container>
	)
}

export default Home
