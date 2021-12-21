import type {GIFObject} from "giphy-api"
import {Masonry} from "./Masonry"
import type {MasonryItem, MasonryProps} from "./Masonry"

export function gifToMasonryItem({
	id,
	title,
	images: {fixed_width},
}: GIFObject): MasonryItem {
	return {
		id,
		alt: title,
		src: fixed_width.url,
	}
}

export type GifMasonryProps = Omit<MasonryProps, "items"> & {gifs: GIFObject[]}

export const GifMasonry: React.VFC<GifMasonryProps> = ({gifs, ...props}) => (
	<Masonry {...props} items={gifs.map(gifToMasonryItem)} />
)
