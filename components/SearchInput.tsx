import {CloseIcon, SearchIcon} from "@chakra-ui/icons"
import {
	InputGroup,
	InputLeftElement,
	IconButton,
	Input,
	InputRightElement,
} from "@chakra-ui/react"
import type {InputProps} from "@chakra-ui/react"

export type SearchInputProps = Omit<InputProps, "value" | "onChange"> & {
	value: string
	onChange: (value: string) => void
}

export const SearchInput: React.VFC<SearchInputProps> = ({
	value,
	onChange,
	...props
}) => (
	<InputGroup>
		<InputLeftElement pointerEvents="none">
			<SearchIcon color="gray.300" />
		</InputLeftElement>
		<Input
			placeholder="bitcoin"
			{...props}
			value={value}
			onChange={(e) => onChange(e.target.value)}
		/>
		<InputRightElement>
			{value !== "" && (
				<IconButton
					icon={<CloseIcon />}
					aria-label="Reset"
					colorScheme="teal"
					size="xs"
					onClick={() => onChange("")}
				/>
			)}
		</InputRightElement>
	</InputGroup>
)
