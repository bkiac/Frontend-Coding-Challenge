/**
 * @jest-environment jsdom
 */

import React from "react"
import {render, screen} from "@testing-library/react"
import {ErrorAlert} from "../components"

describe("ErrorAlert", () => {
	it("renders an error", () => {
		const msg = "Error Message"
		const error = new Error(msg)
		render(<ErrorAlert error={error} />)
		const el = screen.getByText(msg)
		expect(el).toBeInTheDocument()
	})

	it("renders a string", () => {
		const msg = "Error Message"
		render(<ErrorAlert error={msg} />)
		const el = screen.getByText(msg)
		expect(el).toBeInTheDocument()
	})

	it("renders an unknown error", () => {
		render(<ErrorAlert error={() => {}} />)
		const el = screen.getByText("Unknown Error")
		expect(el).toBeInTheDocument()
	})
})
