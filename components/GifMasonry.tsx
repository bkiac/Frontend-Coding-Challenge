import {Masonry} from "./Masonry"
import type {MasonryItem, MasonryProps} from "./Masonry"

export type MasonryGif = {
	id: string
	title: string
	images: {fixed_width: {url: string}}
}

function gifToMasonryItem({
	id,
	title,
	images: {fixed_width},
}: MasonryGif): MasonryItem {
	return {
		id,
		alt: title,
		src: fixed_width.url,
	}
}

export type GifMasonryProps = Omit<MasonryProps, "items"> & {gifs: MasonryGif[]}

export const GifMasonry: React.VFC<GifMasonryProps> = ({gifs, ...props}) => (
	<Masonry {...props} items={gifs.map(gifToMasonryItem)} />
)
