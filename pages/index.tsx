import {Box, Center} from "@chakra-ui/react"
import type {GetServerSideProps, NextPage} from "next"
import {ErrorAlert, Masonry, SearchInput} from "../components"
import {useDebouncedInput} from "../hooks"
import type {GiphyTrendingResponse} from "../util/giphy"
import {
	useSearchQuery,
	useTrendingQuery,
	backendClient as giphy,
} from "../util/giphy"

export type HomeProps = {
	trending: GiphyTrendingResponse
}

const Home: NextPage<HomeProps> = ({trending}) => {
	const [{raw: searchInput, debounced: query}, setSearchInput] =
		useDebouncedInput(1000)
	const isSearching = query !== ""

	const trendingQuery = useTrendingQuery({
		options: {initialData: trending, enabled: !isSearching},
	})
	const searchQuery = useSearchQuery({
		variables: {q: query},
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

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
	const trending = await giphy.trending()
	return {props: {trending}}
}

export default Home
