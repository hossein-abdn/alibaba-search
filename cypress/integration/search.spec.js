/// <reference types="cypress" />

describe("search a ticket", function () {
    it("visit alibaba site", function () {
        cy.visit("https://www.alibaba.ir");
    });

    it("check two-way ticket option", function () {
        cy.get("#search_radio_43").check({ force: true });
    });

    it("select origin and destination", function () {
        cy.get("input[placeholder='مبدا']").click();
        cy.get("div.open li").contains("تهران").click();
        cy.get("div.open li").contains("مشهد").click();
    });

    it("select start and end date", function () {
        cy.get(".calendar__container .calendar__day").as("calendar").contains("24").click();
        cy.get("@calendar").contains("27").click();
        cy.get(".alibaba-datepicker__container").siblings("footer").contains("تایید").click();
    });

    it("increase passenger count", function () {
        cy.get("input[placeholder='مسافران']")
            .click()
            .prev()
            .within(() => {
                cy.get("div div.pull-left").eq(1).get("span").eq(1).as("increase");
            });
        for (let index = 1; index < 5; index++) {
            cy.get("@increase").click();
        }
    });

    it("submit search", function () {
        cy.get(".search-container form").submit();
    });

    it("check search result", function () {
        cy.location("pathname").should("include", "/flights/THR-MHD");
        cy.get("div.loading-banner", { timeout: 10000 }).should("be.visible");
        cy.get("div.loading-banner", { timeout: 60000 }).should("not.exist");
        cy.get("div.available").should("have.class", "isCompleted");
    });
});

describe("view <contact us> page", function () {
    it("find and click on <contact us>", function () {
        cy.get("footer.site-footer").contains("تماس با ما").scrollIntoView().as("contact");
        Cypress.on("uncaught:exception", (err, runnable) => {
            if (err.message.indexOf("Cypress detected that an uncaught error was thrown from a cross origin script.")) {
                return false;
            }
            return true;
        });
        cy.get("@contact").click();
    });

    it("check result of <contact us> page", function () {
        cy.location("pathname").should("include", "/contact-us");
        cy.get("section.staticpage-header h2").should("have.text", "تماس با ما");
    });
});