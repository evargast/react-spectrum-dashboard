import { render, screen } from "@testing-library/react";
import React from "react";

import Router from "./Router";

// TODO: add proper tests for Router component
test("Router renders properly", () => {
    render(<Router />);
    expect(screen.getByText("Router")).toBeInTheDocument();
});
