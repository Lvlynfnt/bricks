import test, { Page, expect } from "@playwright/test"
import { PlanSelectionLocators } from "./planSelection.locators";

export type TestData = {
    plan: string,
    addOns: Array<string>
}

export class PlanSelectionPage {

    page: Page;
    testData: TestData;

    constructor(page: Page, testData: TestData) {
        this.page = page;
        this.testData = testData;
    }

    async selectPlan(): Promise<void> {
        await this.page.goto('https://app.staging.salesbricks.com/products/platform/new?sku=d4fedad5-4c48-5a6d-b6e6-0381a6490757');
        await this.page.getByTestId(this.testData.plan).click();
    }

    async addAddOns() {
        for (const addOn of this.testData.addOns) {
            await this.page.getByTestId(addOn).click(); 
        }
    }

    async clickContinue() {
        await this.page.locator(PlanSelectionLocators.ContinueButton).click()
    }

    async getYearlyPrice(): Promise<string | null> {
        const priceText = await this.page.locator('.plansAndSubscriptionPricing_priceCurrency__s6oV3').first().textContent();
        return priceText?.trim() || null;
    }

    // To be improved: original plan is to parameterized the prices data. this is to dynamically handle the computation in any plan
    async verifyTotalCostAmmount() {
        const price = await this.getYearlyPrice()

        const TotalCosts = await this.page.locator(`[data-test-id="Total"]`)
        expect(TotalCosts).toContainText("$0.00")
        // expect(price).toBe("$0.00")
        
    }

}

//