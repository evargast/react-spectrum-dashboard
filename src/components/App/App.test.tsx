import { render } from "@testing-library/react";
import React from "react";

import App from "./App";

//TODO: Add a sample test here
test("renders", () => {
    render(<App />);
    expect(2).toBe(2);
});
