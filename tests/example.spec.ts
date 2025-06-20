import { test, expect } from '@playwright/test';
import { HomePage } from './page-objects/HomePage';

test('has title', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.clickGetStarted();

  // Expects page to have a heading with the name of Installation.
  await expect(homePage.installationHeading).toBeVisible();
});
