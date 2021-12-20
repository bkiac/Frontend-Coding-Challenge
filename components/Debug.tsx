export const Debug: React.VFC<{value: unknown}> = ({value}) => (
	<pre>{JSON.stringify(value, null, 1)}</pre>
)
