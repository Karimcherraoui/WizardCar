describe("Car Item", () => {
  it("should render car item", () => {
    cy.request("GET", "http://localhost:3005/car/").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.be.an("object");

      const cars = response.body.cars;

      expect(cars).to.be.an("array").and.to.have.length.greaterThan(0);

      cars.forEach((car) => {
        expect(car).to.have.property("_id");
        expect(car).to.have.property("brand");
        expect(car).to.have.property("model");
        expect(car).to.have.property("image");
        expect(car).to.have.property("price");
        expect(car).to.have.property("disponibility");

        cy.visit(`/car/${car._id}`);

        cy.contains(
          "[data-cy='car-name']",
          car?.brand + " " + car?.model
        ).should("exist");
        cy.contains("[data-cy='car-price']", car?.price).should("exist");
        cy.contains("[data-cy='car-description']", car?.description).should(
          "exist"
        );
        cy.get("[data-cy='car-image']").should("exist");
      });
    });
  });
});
