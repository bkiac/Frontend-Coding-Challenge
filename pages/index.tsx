import {Box} from "@chakra-ui/react"
import type {NextPage} from "next"
import {useState} from "react"
import {Masonry, SearchInput} from "../components"
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
		<Box p="4">
			<SearchInput
				value={query}
				onChange={setQuery}
				placeholder="bitcoin"
				mb="2"
			/>

			{(trendingQuery.isLoading || searchQuery.isLoading) && <p>Loading...</p>}

			{(trendingQuery.error != null || searchQuery.error != null) && (
				<p>An error has occurred</p>
			)}

			{isSearching ? (
				<>{searchQuery.data && <Masonry gifs={searchQuery.data.data} />}</>
			) : (
				<>{trendingQuery.data && <Masonry gifs={trendingQuery.data.data} />}</>
			)}
		</Box>
	)
}

export default Home
