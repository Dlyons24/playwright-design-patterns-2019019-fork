import { expect, test  } from '@playwright/test';


test.describe("Sign in button is visible", async () => {
    test("Sign in button is visible", async ({page}) => {
    await page.goto("https://binaryville.com/account");
    const signInButton = page.getByRole("button", { name: "Sign in" });
    await expect(signInButton).toBeVisible();
});

});