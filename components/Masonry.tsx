import {Box, Img} from "@chakra-ui/react"

export type MasonryItem = {id: string; alt: string; src: string}

export type MasonryProps = {
	items: MasonryItem[]
	columnCount: number[]
	columnGap: number
}

export const Masonry: React.VFC<MasonryProps> = ({
	items,
	columnCount,
	columnGap,
}) => (
	<Box sx={{columnCount, columnGap}}>
		{items.map(({id, ...item}) => (
			<Img key={id} {...item} w="100%" borderRadius="xl" d="inline-block" />
		))}
	</Box>
)
