import test, { Page, expect } from "@playwright/test"
import { BuyerDetailsLocators } from "./buyerDetails.locatots"

export type TestDataBuyerDetails = {
    companyName: string,
    addressLine1: string,
    addressLine2: string,
    cityName: string,
    state: string,
    zip: string,
    country: string,
    pocFirstName: string,
    pocLastName: string,
    pocPreferredName: string,
    job: string,
    workEmail: string,
}

export class BuyerDetailsPage {

    page: Page;
    testData: TestDataBuyerDetails;

    constructor(page: Page, testData: TestDataBuyerDetails) {
        this.page = page;
        this.testData = testData;
    }

    async enterCompanyName(): Promise<void> {
        await this.page.locator(BuyerDetailsLocators.CompanyName).fill(this.testData.companyName)
    }

    async enterAddressLine1(): Promise<void> {
        await this.page.locator(BuyerDetailsLocators.AddressLine1).fill(this.testData.addressLine1)
    }

    async enterAddressLine2(): Promise<void> {
        await this.page.locator(BuyerDetailsLocators.AddressLine2).fill(this.testData.addressLine2)
    }

    async enterCity(): Promise<void> {
        await this.page.locator(BuyerDetailsLocators.City).fill(this.testData.cityName)
    }

    async selectState(): Promise<void> {
        
    }

    async enterZip(): Promise<void> {
        await this.page.locator(BuyerDetailsLocators.Zip).fill(this.testData.zip)
    }

    async selectCountry(): Promise<void> {
       
    }

    async enterPocFirstName(): Promise<void> {
        await this.page.locator(BuyerDetailsLocators.PocFirstName).fill(this.testData.pocFirstName)
    }

    async enterPocLastName(): Promise<void> {
        await this.page.locator(BuyerDetailsLocators.PocLastName).fill(this.testData.pocLastName)
    }

    async enterPreferredName(): Promise<void> {
       
    }

    async enterJobTitle(): Promise<void> {
        await this.page.locator(BuyerDetailsLocators.JobTitle).fill(this.testData.job)
    }

    async enterWorkEmail(): Promise<void> {
        await this.page.locator(BuyerDetailsLocators.WorkEmail).fill(this.testData.workEmail)
    }

    async fillBuyerDetails(): Promise<void> {
        await this.enterCompanyName()
        await this.enterAddressLine1()
        await this.enterAddressLine2()
        await this.enterCity()
        await this.enterZip()
        await this.enterPocFirstName()
        await this.enterPocLastName()
        await this.enterJobTitle()
        await this.enterWorkEmail()
    }

    async clickContinue(): Promise<void> {
        await this.page.locator(BuyerDetailsLocators.ContinueButton).click()
    }
}