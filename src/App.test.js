import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("ZOYA application renders successfully", () => {
  render(<App />);

  expect(document.body).toBeTruthy();
});

test("ZOYA application displays its content", () => {
  render(<App />);

  expect(document.body.textContent.length).toBeGreaterThan(0);
});
