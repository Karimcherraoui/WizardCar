import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { mount } from "@cypress/react"; // Import mount from @cypress/react
import CarItem from "../../src/components/UI/CarItem";

describe("CarItem component", () => {
  const carItemProps = {
    item: {
      image: "http://localhost:3005/images/1711403898949-audi A3.png",
      model: "Model",
      brand: "Brand",
      transmission: "Automatic",
      type: "Sedan",
      price: 170,
      disponibility: "Available",
      fuel: "Petrol",
      idAgency: {
        logo: "https://iconape.com/wp-content/png_logo_vector/avatar.png",
        agencyName: "Agency Cypress",
      },
      _id: "66019dfe940e6a8f6bcfa4ce",
    },
  };

  it("should render with correct props", () => {
    // Mount the component wrapped in a Router
    mount(
      <Router>
        <CarItem {...carItemProps} />
      </Router>
    );

    cy.get("[data-cy='car-name']").should("be.visible");
    cy.get("[data-cy='car-image']").should("be.visible");

    // Assert that the car name and image contain the correct content
    cy.contains(
      "[data-cy='car-name']",
      `${carItemProps.item.brand} ${carItemProps.item.model}`
    ).should("exist");
    cy.get("[data-cy='car-image']").should("exist");
    cy.get("[data-cy='agency-logo']").should("exist");

    cy.contains("[data-cy='car-price']", `${carItemProps.item.price} `).should(
      "exist"
    );

    cy.contains("button", "Rent").click();

    cy.url().should("include", `/car/${carItemProps.item._id}`);
  });
});
