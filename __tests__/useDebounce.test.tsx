/**
 * @jest-environment jsdom
 */

import {renderHook} from "@testing-library/react-hooks"
import {useDebounce} from "../hooks"

jest.useFakeTimers()
jest.spyOn(global, "setTimeout")

describe("useDebounce", () => {
	it("debounces", () => {
		const value = "bitcoin"
		const delay = 1000
		const {result} = renderHook(() => useDebounce(value, delay))
		expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), delay)
		expect(result.current).toBe(value)
	})
})
