import { test, expect } from '@playwright/test'

test.describe('Frontend', () => {
  test('home page renders the hero, provider cards and the disclaimer', async ({ page }) => {
    await page.goto('http://localhost:3000')

    await expect(page).toHaveTitle(/Qatar DHP licensing/)
    await expect(page.locator('h1').first()).toContainText('Qatar DHP licensing and PSV')
    await expect(page.locator('.disclaimer-strip')).toContainText('Not an approved PSV provider')
  })

  test('PSV pillar page renders the live provider table and FAQ schema', async ({ page }) => {
    await page.goto('http://localhost:3000/qatar/psv')

    await expect(page.locator('h1').first()).toContainText('Primary Source Verification')
    await expect(page.locator('#vendor-table-title')).toBeVisible()
    const schema = await page.locator('script[type="application/ld+json"]').allTextContents()
    expect(schema.join(' ')).toContain('FAQPage')
  })

  test('legacy GBS portal URLs redirect to the explainer page', async ({ page }) => {
    const response = await page.goto('http://localhost:3000/Home/Login')
    expect(response?.url()).toContain('/gbs-psv-portal')
    await expect(page.locator('h1').first()).toContainText('GBS')
  })

  test('fee calculator updates totals when the profession changes', async ({ page }) => {
    await page.goto('http://localhost:3000/tools/psv-fee-calculator')
    await page.selectOption('#calc-profession', 'registered-nurse')
    await expect(page.locator('.result').first()).toContainText('QAR')
  })
})

test.describe('Provider guide pages', () => {
  for (const slug of ['dataflow', 'quadrabay', 'avs']) {
    test(`${slug} guide renders the fee schedule block, body and comparison table`, async ({ page }) => {
      await page.goto(`http://localhost:3000/qatar/psv/${slug}`)
      await expect(page.locator('#vendor-packages-title')).toBeVisible()
      await expect(page.locator('.vendor-packages table').first()).toContainText('Package A')
      await expect(page.locator('.article-body h2').first()).toBeVisible()
      await expect(page.locator('#vendor-table-title')).toContainText('compared with the other approved providers')
      const schema = (await page.locator('script[type="application/ld+json"]').allTextContents()).join(' ')
      expect(schema).toContain('FAQPage')
    })
  }
})
