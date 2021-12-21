import {CloseIcon, SearchIcon} from "@chakra-ui/icons"
import {
	InputGroup,
	InputLeftElement,
	IconButton,
	Input,
	InputRightElement,
	Spinner,
} from "@chakra-ui/react"
import type {InputProps} from "@chakra-ui/react"

export type SearchInputProps = Omit<InputProps, "value" | "onChange"> & {
	value: string
	onChange: (value: string) => void
	isLoading?: boolean
}

export const SearchInput: React.VFC<SearchInputProps> = ({
	value,
	onChange,
	isLoading = false,
	...props
}) => (
	<InputGroup>
		<InputLeftElement pointerEvents="none">
			{isLoading ? <Spinner color="gray.300" /> : <SearchIcon color="gray.300" />}
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
