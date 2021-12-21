import {Alert, AlertIcon, AlertTitle, AlertDescription} from "@chakra-ui/react"

function formatError(error: Error | string | unknown): string {
	if (error instanceof Error) {
		return error.message
	}
	if (typeof error === "string") {
		return error
	}
	return "Unknown Error"
}

export const ErrorAlert: React.VFC<{error: Error | string | unknown}> = ({
	error,
}) => (
	<Alert status="error">
		<AlertIcon />
		<AlertTitle mr={2}>An error has occurred!</AlertTitle>
		<AlertDescription>{formatError(error)}</AlertDescription>
	</Alert>
)
