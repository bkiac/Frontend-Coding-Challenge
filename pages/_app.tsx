import type {AppProps} from "next/app"
import {QueryClient, QueryClientProvider} from "react-query"
import {ChakraProvider} from "@chakra-ui/react"

const queryClient = new QueryClient()

function MyApp({Component, pageProps}: AppProps): JSX.Element {
	return (
		<ChakraProvider>
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
			</QueryClientProvider>
		</ChakraProvider>
	)
}

export default MyApp
