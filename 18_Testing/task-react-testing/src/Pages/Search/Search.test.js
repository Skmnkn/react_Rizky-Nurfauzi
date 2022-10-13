import React from "react";
import axios from "axios";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "./Search";

jest.mock("axios");

describe("Search", () => {
  test("fetch stories from API and display them", async () => {
    const stories = [
      { objectId: "1", title: "Hello" },
      { objectId: "2", title: "ReactJS" },
    ];

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { hits: stories } })
    );

    render(<Search />);

    await userEvent.click(screen.getByRole("button"));

    const items = await screen.findAllByRole("listitem");

    expect(items).toHaveLength(2);
  });

  test("fetch stories from API and fails", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));

    render(<Search />);

    await userEvent.click(screen.getByRole("button"));

    const items = await screen.findByText("Ada yang error ...");

    expect(items).toBeInTheDocument();
  });
});
