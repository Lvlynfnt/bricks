export enum PaymentLocators {
    CardTab = `[data-testid="card"]`,
    CardNumber = `[name="number"]`,
    EPayment = `[data-test="card-option-STRIPE"]`,
    ExpiryDate = `#Field-expiryInput`,
    CVC = `#Field-cvcInput`,
    CardIFrame = ``,
    TermsConditionsCheckbox = `[data-test="components-buildOrder-termsAndConditions-accept"]`,
    PlaceOrderButton = `[data-test="components-buildOrder-continue"]`,
    SuccessOrder = `[data-test="components-orderThankYou-header"]`
}
