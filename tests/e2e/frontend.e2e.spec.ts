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

test.describe('PSV timeline page', () => {
  test('renders the provider targets, DHP processing times and the FAQ', async ({ page }) => {
    await page.goto('http://localhost:3000/qatar/psv/timeline')
    await expect(page.locator('h1')).toContainText('How long does PSV take for Qatar')
    const tables = page.locator('.article-body table')
    await expect(tables).toHaveCount(3)
    await expect(tables.first()).toContainText('Prestige: 14 business days')
    await expect(tables.nth(2)).toContainText('Evaluation')
    const schema = (await page.locator('script[type="application/ld+json"]').allTextContents()).join(' ')
    expect(schema).toContain('FAQPage')
  })

  test('is linked from the PSV pillar, the DataFlow and QuadraBay guides and the footer', async ({ page }) => {
    for (const path of ['/qatar/psv', '/qatar/psv/dataflow', '/qatar/psv/quadrabay']) {
      await page.goto(`http://localhost:3000${path}`)
      await expect(page.locator('.article-body a[href="/qatar/psv/timeline"]').first()).toBeVisible()
    }
    await expect(page.locator('.site-footer a[href="/qatar/psv/timeline"]')).toBeVisible()
  })
})

test.describe('Name mismatch page', () => {
  test('renders, links from the documents guide, and skips the missing /problems breadcrumb', async ({ page }) => {
    await page.goto('http://localhost:3000/qatar/psv/problems/name-mismatch')
    await expect(page.locator('h1')).toContainText('Name mismatch between passport and certificates')
    await expect(page.locator('.article-body table')).toContainText('Marriage certificate')
    const crumbs = page.locator('nav.breadcrumbs a')
    await expect(crumbs).toHaveText(['Home', 'Qatar', 'Primary Source Verification'])
    const schema = (await page.locator('script[type="application/ld+json"]').allTextContents()).join(' ')
    expect(schema).toContain('FAQPage')
    expect(schema).not.toContain('/qatar/psv/problems"')
    await page.goto('http://localhost:3000/qatar/psv/documents')
    await expect(page.locator('.article-body a[href="/qatar/psv/problems/name-mismatch"]').first()).toBeVisible()
  })
})

test.describe('Articles', () => {
  test('lists dated updates newest first and links each one', async ({ page }) => {
    await page.goto('http://localhost:3000/articles')
    await expect(page.locator('h1')).toContainText('Updates')
    const items = page.locator('.article-list li')
    await expect(items).toHaveCount(2)
    await expect(items.first().locator('h2')).toContainText('good-standing')
    await expect(page.locator('.site-header a[href="/articles"]')).toBeVisible()
  })

  test('an article shows its date, NewsArticle schema and an Articles breadcrumb', async ({ page }) => {
    await page.goto('http://localhost:3000/articles/qatar-good-standing-certificates-through-psv')
    await expect(page.locator('.article-date time')).toHaveText('17 Oct 2026')
    await expect(page.locator('nav.breadcrumbs a')).toHaveText(['Home', 'Articles'])
    const schema = (await page.locator('script[type="application/ld+json"]').allTextContents()).join(' ')
    expect(schema).toContain('"NewsArticle"')
    await expect(page.locator('.article-body a[href="/qatar/psv/documents"]').first()).toBeVisible()
  })
})

test.describe('India country guide', () => {
  test('renders the qualification table, NMC good-standing facts and is linked from documents and the footer', async ({ page }) => {
    await page.goto('http://localhost:3000/qatar/psv/countries/india')
    await expect(page.locator('h1')).toContainText('Qatar DHP licence from India')
    await expect(page.locator('.article-body table').first()).toContainText('GNM diploma')
    await expect(page.locator('.article-body')).toContainText('National Medical Commission')
    await expect(page.locator('nav.breadcrumbs a')).toHaveText(['Home', 'Qatar', 'Primary Source Verification'])
    await expect(page.locator('.site-footer a[href="/qatar/psv/countries/india"]')).toBeVisible()
    await page.goto('http://localhost:3000/qatar/psv/documents')
    await expect(page.locator('.article-body a[href="/qatar/psv/countries/india"]').first()).toBeVisible()
  })
})

test.describe('Philippines country guide', () => {
  test('renders the qualification table and PRC good-standing facts, linked from documents and the footer', async ({ page }) => {
    await page.goto('http://localhost:3000/qatar/psv/countries/philippines')
    await expect(page.locator('h1')).toContainText('Qatar DHP licence from the Philippines')
    await expect(page.locator('.article-body table').first()).toContainText('BS Nursing (BSN)')
    await expect(page.locator('.article-body')).toContainText('LERIS')
    await expect(page.locator('.site-footer a[href="/qatar/psv/countries/philippines"]')).toBeVisible()
    await page.goto('http://localhost:3000/qatar/psv/documents')
    await expect(page.locator('.article-body a[href="/qatar/psv/countries/philippines"]').first()).toBeVisible()
  })
})

test.describe('Pakistan country guide', () => {
  test('renders the qualification table, PM&DC and Category 3 facts, linked from documents, licensing and the footer', async ({ page }) => {
    await page.goto('http://localhost:3000/qatar/psv/countries/pakistan')
    await expect(page.locator('h1')).toContainText('Qatar DHP licence from Pakistan')
    await expect(page.locator('.article-body table').first()).toContainText('MBBS + FCPS')
    await expect(page.locator('.article-body')).toContainText('Category 3')
    await expect(page.locator('.article-body')).toContainText('PNMC')
    await expect(page.locator('.site-footer a[href="/qatar/psv/countries/pakistan"]')).toBeVisible()
    await page.goto('http://localhost:3000/qatar/psv/documents')
    await expect(page.locator('.article-body a[href="/qatar/psv/countries/pakistan"]').first()).toBeVisible()
    await page.goto('http://localhost:3000/qatar/licensing')
    await expect(page.locator('.article-body a[href="/qatar/psv/countries/pakistan"]').first()).toBeVisible()
  })
})

test.describe('Report-transfer guide', () => {
  test('renders the fee table and worked example and is linked from the provider guides and the footer', async ({ page }) => {
    await page.goto('http://localhost:3000/qatar/psv/report-transfer')
    await expect(page.locator('h1')).toContainText('Transferring a DataFlow or QuadraBay report')
    await expect(page.locator('.article-body table').first()).toContainText('QAR 323')
    await expect(page.locator('.article-body')).toContainText('QAR 1,223')
    await expect(page.locator('.site-footer a[href="/qatar/psv/report-transfer"]')).toBeVisible()
    await page.goto('http://localhost:3000/qatar/psv/dataflow')
    await expect(page.locator('.article-body a[href="/qatar/psv/report-transfer"]').first()).toBeVisible()
    await page.goto('http://localhost:3000/qatar/psv/quadrabay')
    await expect(page.locator('.article-body a[href="/qatar/psv/report-transfer"]').first()).toBeVisible()
  })
})

test.describe('Unable to Verify guide', () => {
  test('renders the label table and appeal steps and is linked from the status guide and the footer', async ({ page }) => {
    await page.goto('http://localhost:3000/qatar/psv/problems/unable-to-verify')
    await expect(page.locator('h1')).toContainText('Unable to Verify')
    await expect(page.locator('.article-body table').first()).toContainText('Unable to Check')
    await expect(page.locator('.article-body')).toContainText('within 180 days')
    await expect(page.locator('.site-footer a[href="/qatar/psv/problems/unable-to-verify"]')).toBeVisible()
    await page.goto('http://localhost:3000/qatar/psv/status')
    await expect(page.locator('.article-body a[href="/qatar/psv/problems/unable-to-verify"]').first()).toBeVisible()
  })
})

test.describe('Discrepancy guide', () => {
  test('renders the appeal facts and is linked from the status guide and the footer', async ({ page }) => {
    await page.goto('http://localhost:3000/qatar/psv/problems/discrepancy')
    await expect(page.locator('h1')).toContainText('Discrepancy or negative report')
    await expect(page.locator('.article-body')).toContainText('within 180 days of completion')
    await expect(page.locator('.site-footer a[href="/qatar/psv/problems/discrepancy"]')).toBeVisible()
    await page.goto('http://localhost:3000/qatar/psv/status')
    await expect(page.locator('.article-body a[href="/qatar/psv/problems/discrepancy"]').first()).toBeVisible()
  })
})

test.describe('Status-check guide', () => {
  test('renders the tracker table and is linked from the provider guides and the footer', async ({ page }) => {
    await page.goto('http://localhost:3000/qatar/psv/status')
    await expect(page.locator('h1')).toContainText('DataFlow status check for Qatar DHP')
    await expect(page.locator('.article-body table').first()).toContainText('dataflowstatus.com')
    await expect(page.locator('.site-footer a[href="/qatar/psv/status"]')).toBeVisible()
    for (const path of ['/qatar/psv/dataflow', '/qatar/psv/quadrabay', '/qatar/psv/avs', '/qatar/psv/timeline']) {
      await page.goto(`http://localhost:3000${path}`)
      await expect(page.locator('.article-body a[href="/qatar/psv/status"]').first()).toBeVisible()
    }
  })
})

test.describe('Prometric exam guide', () => {
  test('renders format, fee and exemption tables and is linked from fees and the footer', async ({ page }) => {
    await page.goto('http://localhost:3000/qatar/exam/prometric')
    await expect(page.locator('h1')).toContainText('Qatar Prometric exam')
    const tables = page.locator('.article-body table')
    await expect(tables).toHaveCount(3)
    await expect(tables.nth(1)).toContainText('US$244')
    await expect(tables.nth(2)).toContainText('NCLEX-RN')
    await expect(page.locator('.site-footer a[href="/qatar/exam/prometric"]')).toBeVisible()
    await page.goto('http://localhost:3000/qatar/psv/fees')
    await expect(page.locator('.article-body a[href="/qatar/exam/prometric"]').first()).toBeVisible()
  })
})

test.describe('Licensing hub', () => {
  test('renders the steps, CPD and profession tables and is in the header and footer', async ({ page }) => {
    await page.goto('http://localhost:3000/qatar/licensing')
    await expect(page.locator('h1')).toContainText('How to get a DHP licence in Qatar')
    const tables = page.locator('.article-body table')
    await expect(tables).toHaveCount(3)
    await expect(tables.first()).toContainText('Evaluation')
    await expect(page.locator('nav.breadcrumbs a')).toHaveText(['Home', 'Qatar'])
    await expect(page.locator('.site-header a[href="/qatar/licensing"]')).toBeVisible()
    await expect(page.locator('.site-footer a[href="/qatar/licensing"]')).toBeVisible()
  })
})
