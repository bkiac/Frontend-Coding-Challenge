import {Box, Center} from "@chakra-ui/react"
import type {NextPage} from "next"
import {useEffect, useState} from "react"
import {ErrorAlert, Masonry, SearchInput} from "../components"
import {useSearchQuery, useTrendingQuery} from "../util/giphy"

const Home: NextPage = () => {
	const [searchInput, setSearchInput] = useState("")
	const [query, setQuery] = useState("")
	useEffect(() => {
		let timeout: NodeJS.Timeout | undefined
		if (searchInput === "") {
			setQuery("")
		} else {
			timeout = setTimeout(() => {
				setQuery(searchInput)
			}, 1000)
		}
		return () => {
			if (timeout) {
				clearTimeout(timeout)
			}
		}
	}, [searchInput])
	const isSearching = query !== ""

	const trendingQuery = useTrendingQuery({options: {enabled: !isSearching}})
	const searchQuery = useSearchQuery({
		request: {q: query},
		options: {enabled: isSearching, cacheTime: 1},
	})

	const error = trendingQuery.error ?? searchQuery.error

	return (
		<Box p="4">
			<Box mb="2">
				<SearchInput
					value={searchInput}
					onChange={setSearchInput}
					isLoading={trendingQuery.isLoading || searchQuery.isLoading}
					placeholder="bitcoin"
				/>
			</Box>

			{error != null && (
				<Center>
					<ErrorAlert error={error} />
				</Center>
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
