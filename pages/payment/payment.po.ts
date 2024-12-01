import test, { Page, expect } from "@playwright/test"
import { PaymentLocators } from "./payment.locators";

export type PaymentDetails = {
    cardNumber: string,
    expiryDate: string,
    cvc: string
}

export class PaymentsPage {

    page: Page;
    paymentDetail: PaymentDetails;

    constructor(page: Page, paymentDetail: PaymentDetails) {
        this.page = page;
        this.paymentDetail = paymentDetail;
    }

    async clickEPayment(): Promise<void> {
        await this.page.locator(PaymentLocators.EPayment).click()
    }

    async clickOnCardTab(): Promise<void> {

        const paymentMethodCard = await this.page.locator(PaymentLocators.CardTab)
        await paymentMethodCard.waitFor();
        await paymentMethodCard.scrollIntoViewIfNeeded()
        await paymentMethodCard.click()
    }

    async enterCardNumber(): Promise<void> {
        const iframe = this.page.frameLocator('iframe[title="Secure payment input frame"]').first()
        await iframe.locator(PaymentLocators.CardNumber).first().fill(this.paymentDetail.cardNumber)
    }

    async enterExpiryDate(): Promise<void> {
        const iframe = this.page.frameLocator('iframe[title="Secure payment input frame"]').first()
        await iframe.locator(PaymentLocators.ExpiryDate).first().fill(this.paymentDetail.expiryDate)
    }

    async enterCVC(): Promise<void> {
        const iframe = this.page.frameLocator('iframe[title="Secure payment input frame"]').first()
        await iframe.locator(PaymentLocators.CVC).first().fill(this.paymentDetail.cvc)
    }

    async settlePayment(): Promise<void> {
        await this.enterCardNumber()
        await this.enterExpiryDate()
        await this.enterCVC()
    } 

    async agreeToTheTermsConditions(): Promise<void> {
        await this.page.locator(PaymentLocators.TermsConditionsCheckbox).check()
    }

    async placeOrder(): Promise<void> {
        await this.page.locator(PaymentLocators.PlaceOrderButton).click()
    }

    async verifyIfOrderIsComplete(): Promise<void> {
        const successMessage = this.page.locator(PaymentLocators.SuccessOrder)
        await successMessage.waitFor()
        await expect(successMessage).toBeVisible()
    }
}

// <h1 class="productOrderPage_title__teOTw" data-test="components-orderThankYou-header">Your order is complete</h1>