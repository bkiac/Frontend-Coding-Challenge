import {Box, Center} from "@chakra-ui/react"
import type {GetServerSideProps, NextPage} from "next"
import {useState} from "react"
import {ErrorAlert, GifMasonry, SearchInput} from "../components"
import {useDebounce} from "../hooks"
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
	const [search, setSearch] = useState("")
	const query = useDebounce(search, 1000)
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
					value={search}
					onChange={setSearch}
					isLoading={trendingQuery.isLoading || searchQuery.isLoading}
					placeholder="bitcoin"
				/>
			</Box>

			{error != null && (
				<Center>
					<ErrorAlert error={error} />
				</Center>
			)}

			<GifMasonry
				gifs={
					(isSearching ? searchQuery.data?.data : trendingQuery.data?.data) ?? []
				}
				columnCount={[1, 2, 3, 4, 5]}
				columnGap={2}
			/>
		</Box>
	)
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
	const trending = await giphy.trending()
	return {props: {trending}}
}

export default Home
