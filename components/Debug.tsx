import {Code} from "@chakra-ui/react"

export const Debug: React.VFC<{value: unknown}> = ({value}) => (
	<Code as="pre">{JSON.stringify(value, null, 1)}</Code>
)
