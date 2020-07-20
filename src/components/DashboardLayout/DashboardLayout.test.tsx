import { render, screen } from "@testing-library/react";
import React from "react";

import DashboardLayout from "./DashboardLayout";

// TODO: add proper tests for Homepage component
test("Homepage renders properly", () => {
    render(<DashboardLayout />);
    expect(screen.getByText("Homepage")).toBeInTheDocument();
});
