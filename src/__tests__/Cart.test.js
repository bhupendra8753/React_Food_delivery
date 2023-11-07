import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../components/RestaurantMenu";
import Header from "../components/Header";
import Cart from "../components/Cart";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should load Restro menu component", async () => {
    await act(async () => render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
            <RestaurantMenu />
            <Cart />
        </Provider>
    ));

    const accordianHeader = screen.getByText("Recommended (14)");
    fireEvent.click(accordianHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(14);

    const addBtns = screen.getAllByRole("button", {name : "Add +"});

    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart (1)")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));
    expect(screen.getByText("Cart is Empty. Add items to Cart!")).toBeInTheDocument();
})