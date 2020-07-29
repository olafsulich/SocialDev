import { RenderOptions, RenderResult } from "@testing-library/react";
import { Matcher } from "@testing-library/dom/matches";

declare module "@testing-library/react" {
  type OverrideRenderResult = {
    getByLabelText: <T extends HTMLElement>(text: Matcher) => T;
    getByText: <T extends HTMLElement>(text: Matcher) => T;
    getByTestId: <T extends HTMLElement>(text: Matcher) => T;
  } & RenderResult;

  export function render(
    ui: React.ReactElement,
    options?: Omit<RenderOptions, "queries">
  ): OverrideRenderResult;
}
