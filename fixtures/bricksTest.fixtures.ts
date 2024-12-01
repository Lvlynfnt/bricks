import { test as base } from "@playwright/test"
import { PlanSelectionPage, TestData } from "../pages/planSelection/planSelection.po"
import { BuyerDetailsPage, TestDataBuyerDetails } from "../pages/buyerDetails/buyerDetails.po"
import { PaymentsPage, PaymentDetails } from "../pages/payment/payment.po";
import { faker } from '@faker-js/faker';

export type MyFixtures = {
    planSelectionPage: PlanSelectionPage
    buyerDetailsPage: BuyerDetailsPage
    testData: TestData
    buyerDetails: TestDataBuyerDetails
    paymentPage: PaymentsPage
    paymentDetails: PaymentDetails
}

export const test = base.extend<MyFixtures> ({
    /* default test data */
    testData: [
        { 
            plan: "Free Plan",
            addOns: ["Additional Platform User"]
        },
        { option: true }
    ],

    buyerDetails: [
        {
            companyName: `${faker.company.name()}`,
            addressLine1: `${faker.location.streetAddress()}`,
            addressLine2: `${faker.location.buildingNumber()}`,
            cityName: `${faker.location.city()}`,
            state: `${faker.location.state()}`,
            zip: `${faker.location.zipCode()}`,
            country: `${faker.location.country()}`,
            pocFirstName: `${faker.person.firstName()}`,
            pocLastName: `${faker.person.lastName()}`,
            pocPreferredName: `${faker.person.firstName()}`,
            job: `${faker.person.jobTitle()}`,
            workEmail: `${faker.internet.email()}`,
        },
        { option: true }
    ],

    paymentDetails: [
        { 
            cardNumber: "4242424242424242",
            expiryDate: "1234",
            cvc: "123"
        },
        { option: true }
    ],


    planSelectionPage: async ({page, testData}, use) => {
        const planSelectionPage = new PlanSelectionPage(page, testData)
        await use(planSelectionPage)
    },

    buyerDetailsPage: async ({page, buyerDetails}, use) => {
        const buyerDetailsPage = new BuyerDetailsPage(page, buyerDetails)
        await use(buyerDetailsPage)
    },

    paymentPage: async ({page, paymentDetails}, use) => {
        const paymentPage = new PaymentsPage(page, paymentDetails)
        await use(paymentPage)
    }
})


export { expect } from "@playwright/test"