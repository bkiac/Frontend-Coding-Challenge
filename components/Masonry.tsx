import {Box, Image} from "@chakra-ui/react"
import type {GIFObject} from "giphy-api"

export const Masonry: React.VFC<{gifs: GIFObject[]}> = ({gifs}) => (
	<Box w="100%" mx="auto" sx={{columnCount: [1, 2, 3, 4, 5], columnGap: 2}}>
		{gifs.map(({id, title, images: {fixed_width}}) => (
			<Image
				key={id}
				w="100%"
				borderRadius="xl"
				d="inline-block"
				src={fixed_width.url}
				alt={title}
			/>
		))}
	</Box>
)
