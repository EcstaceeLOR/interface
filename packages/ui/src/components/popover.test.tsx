import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover"

describe("Popover trigger-following motion (OB-016)", () => {
  it("applies the stylesheet-driven popover motion contract", () => {
    render(
      <Popover open>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent data-testid="popover-content">
          Popover body
        </PopoverContent>
      </Popover>
    )

    const content = screen.getByTestId("popover-content")
    expect(content.className).toContain("origin-(--transform-origin)")
    expect(content.className).toContain("so4-popover-content")
    // Base UI lifecycle animation is supplied by the .so4-popover-content
    // stylesheet rule; the component must retain its motion class and origin.
    expect(content).toHaveAttribute("data-slot", "popover-content")
  })
})
