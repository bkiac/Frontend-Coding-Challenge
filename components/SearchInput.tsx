import {CloseIcon, SearchIcon} from "@chakra-ui/icons"
import {
	InputGroup,
	InputLeftElement,
	IconButton,
	Input,
	InputRightElement,
	Spinner,
} from "@chakra-ui/react"

export type SearchInputProps = {
	value: string
	onChange: (value: string) => void
	isLoading?: boolean
	placeholder?: string
}

export const SearchInput: React.VFC<SearchInputProps> = ({
	value,
	onChange,
	placeholder,
	isLoading = false,
}) => (
	<InputGroup boxShadow="base" rounded="md">
		<InputLeftElement pointerEvents="none">
			{isLoading ? <Spinner color="gray.400" /> : <SearchIcon color="gray.400" />}
		</InputLeftElement>
		<Input
			value={value}
			onChange={(e) => onChange(e.target.value)}
			placeholder={placeholder}
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
