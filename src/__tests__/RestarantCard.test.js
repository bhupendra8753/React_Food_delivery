import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render ResCard component with props Data", () => {
    render(<RestaurantCard resData = {MOCK_DATA}></RestaurantCard>)

    const name = screen.getByText("McDonald's");
    expect(name).toBeInTheDocument();
})