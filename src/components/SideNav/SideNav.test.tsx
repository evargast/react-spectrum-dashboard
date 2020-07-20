import { render, screen } from "@testing-library/react";
import React from "react";

import SideNav from "./SideNav";

// TODO: add proper tests for SideNav component
test("SideNav renders properly", () => {
    render(<SideNav />);
    expect(screen.getByText("SideNav")).toBeInTheDocument();
});
