import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load the Header component with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
            <Header />
        </Provider> 
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"})
    expect(loginButton).toBeInTheDocument();
})

it("Should render the Header component with cart items zero", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
            <Header />
        </Provider> 
        </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart (0)")
    expect(cartItems).toBeInTheDocument();
})

it("Should render the Header component with cart item", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
            <Header />
        </Provider> 
        </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/) // we can also pass the regex 
    expect(cartItems).toBeInTheDocument();
})

it("Should change login button to logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
            <Header />
        </Provider> 
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"})

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"})
    expect(logoutButton).toBeInTheDocument();
})