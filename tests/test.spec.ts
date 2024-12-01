import { test } from "../fixtures/bricksTest.fixtures"

// 1. Configuring the Order
// ○ Selecting desired add-ons and quantities.
// 2. Entering Buyer Details
// ○ Providing information about yourself and the company on whose behalf you are
// purchasing.
// 3. Completing Checkout
// ○ Electronic Payment: Using Stripe for online payments (Stripe test cards can be
// used).
// ○ Order Form Signature: Completing the order via our signature feature.
// https://app.staging.salesbricks.com/products/platform/new?sku=d4fedad5-4c48-5a6d-b6e6-0381a6490757



test.beforeEach(async ({ context }) => {
    await context.clearCookies();
    await context.clearPermissions();
});

test.describe('TC-0001 @smoke', async () => {
    test.use({
        testData: {
            plan: 'SMB Plan',
            addOns: ['Additional Platform User', 'Platform Usage Brick']
        }
    })
    test("Self-Checkout: Free Plan", async ({planSelectionPage, buyerDetailsPage, paymentPage, page}) => {
        await test.step("Select Plan", async () => {
            await planSelectionPage.selectPlan()
            await planSelectionPage.addAddOns()
            await planSelectionPage.clickContinue()
        })
        await test.step("Fill-out Buyer Details", async () => {
            await buyerDetailsPage.fillBuyerDetails()
            await buyerDetailsPage.clickContinue()
        })
        await test.step("Settle Payment via Card", async () => {
            await paymentPage.clickEPayment()
            await paymentPage.settlePayment()
            await paymentPage.agreeToTheTermsConditions()
            await paymentPage.placeOrder()
            await paymentPage.verifyIfOrderIsComplete()
            await page.waitForTimeout(3000)
        })
    })
})

test.describe('TC-0002 @smoke', async () => {
    test.use({
        testData: {
            plan: 'SMB Plan',
            addOns: ['Additional Platform User', 'Platform Usage Brick']
        }
    })
    test("Self-Checkout: SMB Plan With Addons - Annual", async ({planSelectionPage, buyerDetailsPage, paymentPage, page}) => {
        await test.step("Select Plan", async () => {
            await planSelectionPage.selectPlan()
            await planSelectionPage.addAddOns()
            await planSelectionPage.clickContinue()
        })
        await test.step("Fill-out Buyer Details", async () => {
            await buyerDetailsPage.fillBuyerDetails()
            await buyerDetailsPage.clickContinue()
        })
        await test.step("Settle Payment via Card", async () => {
            await paymentPage.clickEPayment()
            await paymentPage.settlePayment()
            await paymentPage.agreeToTheTermsConditions()
            await paymentPage.placeOrder()
            await paymentPage.verifyIfOrderIsComplete()
            await page.waitForTimeout(3000)
        })
    })
})

test.describe('TC-0005 @smoke', async () => {
    test.use({
        testData: {
            plan: 'Enterprise Plan',
            addOns: ['Additional Platform User']
        }
    })
    test("Self-Checkout: Enterprise Plan With Addons - Annual", async ({planSelectionPage, buyerDetailsPage, paymentPage, page}) => {
        await test.step("Select Plan", async () => {
            await planSelectionPage.selectPlan()
            await planSelectionPage.addAddOns()
            await planSelectionPage.clickContinue()
        })
        await test.step("Fill-out Buyer Details", async () => {
            await buyerDetailsPage.fillBuyerDetails()
            await buyerDetailsPage.clickContinue()
        })
        await test.step("Settle Payment via Card", async () => {
            await paymentPage.clickEPayment()
            await paymentPage.settlePayment()
            await paymentPage.agreeToTheTermsConditions()
            await paymentPage.placeOrder()
            await paymentPage.verifyIfOrderIsComplete()
            await page.waitForTimeout(3000)
        })
    })
})
