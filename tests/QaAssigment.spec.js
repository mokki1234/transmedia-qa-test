const{test,expect}=require('@playwright/test');

test("QaAssingment",async({page})=>
{
await page.goto("http://localhost:3000/");
 // Create a board
await page.locator(".create-board").click();
await page.locator(".new-board-input").type("New Board 1");
await page.keyboard.press('Enter');
await expect(page.locator("[data-cy*='board-title']")).toHaveValue("New Board 1");

// Add  list
await page.locator("[data-cy*='add']").type("New List1");
await page.keyboard.press('Enter');
await expect(page.locator("[data-cy='list-name']")).toBeVisible();
await page.locator("[data-cy*='add']").type("New List2");
await page.keyboard.press('Enter');
await expect(page.locator("[data-cy='list-name']")).toBeVisible();

// Delete List 1
await page.locator("[data-cy='list-options']").first().click();
await page.locator("[data-cy='delete-list']").click();

await expect(page.locator("[data-cy='list-name']").first()).toBeVisible();




});