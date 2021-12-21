/**
 * @jest-environment jsdom
 */

import React from "react"
import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {SearchInput} from "../components"

const props = {
	value: "bitcoin",
	onChange: (): void => {},
}

describe("SearchInput", () => {
	it("renders an input", () => {
		render(<SearchInput {...props} />)
		expect(screen.getByRole("textbox")).toBeInTheDocument()
	})

	it("renders loading state", () => {
		const {rerender} = render(<SearchInput {...props} />)
		expect(screen.queryByTestId("loader")).not.toBeInTheDocument()
		expect(screen.getByTestId("searchIcon")).toBeInTheDocument()
		rerender(<SearchInput {...props} isLoading />)
		expect(screen.getByTestId("loader")).toBeInTheDocument()
		expect(screen.queryByTestId("searchIcon")).not.toBeInTheDocument()
	})

	it("handles change", () => {
		let value = "a"
		const handleChange = jest.fn((nextValue: string): void => {
			value = nextValue
		})
		const {rerender} = render(
			<SearchInput value={value} onChange={handleChange} />,
		)
		userEvent.type(screen.getByRole("textbox"), "b")
		rerender(<SearchInput value={value} onChange={handleChange} />)
		expect(screen.getByRole("textbox")).toHaveValue("ab")
	})

	it("renders reset button", () => {
		const {rerender} = render(<SearchInput {...props} value="" />)
		expect(screen.queryByRole("button")).not.toBeInTheDocument()
		rerender(<SearchInput {...props} />)
		expect(screen.getByRole("button")).toBeInTheDocument()
	})

	it("handles reset button click", () => {
		let value = "bitcoin"
		const handleChange = jest.fn((nextValue: string): void => {
			value = nextValue
		})
		const {rerender} = render(
			<SearchInput value={value} onChange={handleChange} />,
		)
		userEvent.click(screen.getByRole("button"))
		rerender(<SearchInput value={value} onChange={handleChange} />)
		expect(screen.getByRole("textbox")).toHaveValue("")
	})
})
