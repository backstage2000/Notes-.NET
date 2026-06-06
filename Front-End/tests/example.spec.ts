import { test, expect } from "@playwright/test";

test.describe.configure({ mode: "serial" });

test("should create a note", async ({ page }) => {
  await page.goto("/note");

  const title = `Test note ${Date.now()}`;

  await page.getByTestId("note-title").fill(title);
  await page.getByTestId("note-description").fill("Test description");

  await page.getByTestId("note-submit").click();

  await expect(page.getByText(title)).toBeVisible();
});

test("should navigate to note detail page", async ({ page }) => {
  await page.goto("/note");

  const title = `Detail note ${Date.now()}`;

  await page.getByTestId("note-title").fill(title);
  await page.getByTestId("note-submit").click();

  await expect(page.getByText(title)).toBeVisible();

  await page.getByText(title).click();

  await expect(page).toHaveURL(/\/note\/.+/);

  await expect(page.getByText(title)).toBeVisible();
});

test("should delete a note", async ({ page }) => {
  await page.goto("/note");

  const title = `Delete note ${Date.now()}`;

  await page.getByTestId("note-title").fill(title);
  await page.getByTestId("note-submit").click();

  await expect(page.getByText(title)).toBeVisible();

  await page.locator("[data-testid='note-delete']").first().click();

  await expect(page.getByText(title)).toHaveCount(0);
});

test("should update a note", async ({ page }) => {
  await page.goto("/note");

  const title = `Note ${Date.now()}`;
  const updatedTitle = `Updated ${Date.now()}`;

  await page.getByTestId("note-title").fill(title);
  await page.getByTestId("note-submit").click();

  await expect(page.getByText(title)).toBeVisible();

  await page.locator("[data-testid='note-edit']").first().click();

  const input = page.locator("[data-testid='note-edit-title']").first();

  await input.fill("");
  await input.fill(updatedTitle);

  await page.locator("[data-testid='note-save']").first().click();

  await expect(page.getByText(updatedTitle)).toBeVisible();
});
