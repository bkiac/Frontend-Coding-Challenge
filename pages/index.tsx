import {Box, Image, Input, Wrap, WrapItem} from "@chakra-ui/react"
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
		<Box p="4">
			<Input
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder="bitcoin"
			/>

			{(trendingQuery.isLoading || searchQuery.isLoading) && <p>Loading...</p>}

			{(trendingQuery.error != null || searchQuery.error != null) && (
				<p>An error has occurred</p>
			)}

			<Wrap spacing="2" justify="center">
				{/* {isSearching
					? searchQuery.data?.data.map(({id, slug, source}) => (
							<Debug key={id} value={{id, slug, source}} />
					  ))
					: trendingQuery.data?.data.map(({id, slug, source}) => (
							<Debug key={id} value={{id, slug, source}} />
					  ))} */}
				{trendingQuery.data?.data.map(({id, images: {fixed_height}}) => (
					<WrapItem key={id}>
						<Image src={fixed_height.url} />
						{/* <Debug value={{id, slug, source}} /> */}
					</WrapItem>
				))}
			</Wrap>
		</Box>
	)
}

export default Home
