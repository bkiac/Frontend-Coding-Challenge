import {useEffect, useRef, useState} from "react"

/**
 * Note: Initial delay can not be changed
 */
export function useDebouncedInput(
	delay: number,
): [{raw: string; debounced: string}, (raw: string) => void] {
	const savedDelay = useRef(delay)
	const [raw, setRaw] = useState("")
	const [debounced, setDebounced] = useState("")
	useEffect(() => {
		let timeout: NodeJS.Timeout | undefined
		if (raw === "") {
			setDebounced("")
		} else {
			timeout = setTimeout(() => {
				setDebounced(raw)
			}, savedDelay.current)
		}
		return () => {
			if (timeout) {
				clearTimeout(timeout)
			}
		}
	}, [raw])
	return [{raw, debounced}, setRaw]
}
