import { render, screen } from "@testing-library/react";
import React from "react";

import Footer from ".";

// TODO: add proper tests for Footer component
test("Footer renders properly", () => {
    render(<Footer />);
    expect(screen.getByText("Footer")).toBeInTheDocument();
});
