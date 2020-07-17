import { render, screen } from "@testing-library/react";
import React from "react";

import Header from "./Header";

// TODO: add proper tests for Header component
test("Header renders properly", () => {
    render(<Header />);
    expect(screen.getByText("Header")).toBeInTheDocument();
});
