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

test.describe('Contact page', () => {
  test('renders the form and rejects an invalid email without sending', async ({ page }) => {
    await page.goto('http://localhost:3000/contact')
    await expect(page.locator('h1')).toContainText('Contact us')
    await expect(page.locator('.site-footer')).toContainText('MRP Business Consulting')
    const res = await page.request.post('http://localhost:3000/api/contact-messages/submit', {
      data: { name: 'Test', email: 'not-an-email', message: 'This should be rejected by validation.' },
    })
    expect(res.status()).toBe(400)
  })
})

test.describe('Privacy notice', () => {
  test('is linked from the footer and the contact form, and lists the processors', async ({ page }) => {
    await page.goto('http://localhost:3000/contact')
    await expect(page.locator('.contact-form a[href="/privacy"]')).toBeVisible()
    await page.locator('.site-footer a[href="/privacy"]').click()
    await expect(page).toHaveURL(/\/privacy$/)
    await expect(page.locator('h1')).toHaveText('Privacy notice')
    await expect(page.locator('main')).toContainText('MRP Business Consulting')
    await expect(page.locator('main table')).toContainText('Amazon Web Services')
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /\/privacy$/)
  })
})

test.describe('PSV fees page', () => {
  test('renders the master fee table from the Fees collection, the total-cost table and the calculator', async ({ page }) => {
    await page.goto('http://localhost:3000/qatar/psv/fees')
    await expect(page.locator('h1')).toContainText('PSV fees for Qatar DHP')
    const master = page.locator('.fee-compare')
    await expect(master.locator('thead').first()).toContainText('QuadraBay')
    await expect(master.locator('tbody tr').first()).toContainText('QAR 1,210')
    await expect(master).toContainText('Prestige: QAR 1,400 in total')
    await expect(master.locator('.fee-notes li')).toHaveCount(5)
    await expect(page.locator('.article-body table')).toContainText('US$244')
    await expect(page.locator('#calculator')).toBeVisible()
    const schema = (await page.locator('script[type="application/ld+json"]').allTextContents()).join(' ')
    expect(schema).toContain('FAQPage')
  })

  test('is linked from the PSV pillar and the footer', async ({ page }) => {
    await page.goto('http://localhost:3000/qatar/psv')
    await expect(page.locator('.article-body a[href="/qatar/psv/fees"]')).toBeVisible()
    await expect(page.locator('.site-footer a[href="/qatar/psv/fees"]')).toBeVisible()
  })
})

test.describe('PSV documents page', () => {
  test('renders the scope table, the upload-rules table and the FAQ', async ({ page }) => {
    await page.goto('http://localhost:3000/qatar/psv/documents')
    await expect(page.locator('h1')).toContainText('Documents required for PSV in Qatar')
    const tables = page.locator('.article-body table')
    await expect(tables).toHaveCount(2)
    await expect(tables.first()).toContainText('Nurses, midwives, pharmacists (E)')
    await expect(tables.nth(1)).toContainText('Must start with a letter')
    const schema = (await page.locator('script[type="application/ld+json"]').allTextContents()).join(' ')
    expect(schema).toContain('FAQPage')
  })

  test('is linked from the PSV pillar, the provider guides and the footer', async ({ page }) => {
    for (const path of ['/qatar/psv', '/qatar/psv/dataflow', '/qatar/psv/quadrabay', '/qatar/psv/avs']) {
      await page.goto(`http://localhost:3000${path}`)
      await expect(page.locator('.article-body a[href="/qatar/psv/documents"]').first()).toBeVisible()
    }
    await expect(page.locator('.site-footer a[href="/qatar/psv/documents"]')).toBeVisible()
  })
})
