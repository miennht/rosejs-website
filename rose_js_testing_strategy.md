# Testing_Strategy.md

# RoseJS Website Testing Strategy

## 1. Purpose

This document defines the testing strategy for the RoseJS website MVP.

It supports the AI-First delivery methodology by ensuring that AI-assisted implementation is validated through meaningful automated and manual testing before code is merged or deployed.

This document is based on:

- `PRD.md`
- `Architecture.md`
- `Traceability_Matrix.md`
- `Tasks.md`

---

## 2. Testing Goals

The testing strategy must ensure that:

1. Core pages render correctly.
2. Navigation works across desktop and mobile.
3. CMS-managed content can be displayed safely.
4. Contact form validation works.
5. Calendly CTA or embed works.
6. Free lead magnet download works.
7. SEO-critical metadata and files are present.
8. Accessibility baseline is met.
9. CI/CD catches regressions before merge.
10. Production deployment can be validated before launch.
11. No custom backend or database is accidentally introduced for MVP.

---

## 3. Testing Principles

### 3.1 AI-First Testing Principles

AI may help generate tests, but the human engineer/architect must review them for usefulness.

AI-generated tests should not be accepted if they:

- Only test implementation details
- Assert trivial rendering without business value
- Mock everything so heavily that the test proves nothing
- Ignore accessibility
- Ignore failure states
- Duplicate the code logic instead of validating behavior
- Make deployment slower without improving confidence

### 3.2 Test What Matters

Focus tests on behavior that protects the business and user experience:

- Can a visitor understand the site?
- Can a visitor navigate the site?
- Can a visitor contact RoseJS?
- Can a visitor schedule a consultation?
- Can a visitor download the lead magnet?
- Can search engines crawl important content?
- Can CI prevent broken builds?

### 3.3 Avoid Over-Testing MVP

The MVP does not need exhaustive enterprise-level testing. It needs enough coverage to confidently launch and maintain the site.

Prioritize:

- Core page rendering
- Navigation
- Contact form
- CMS data mapping
- SEO metadata
- Build validation
- CI workflow

---

## 4. Testing Stack

| Test Layer          | Tool                                     | Purpose                                                           |
| ------------------- | ---------------------------------------- | ----------------------------------------------------------------- |
| Unit Tests          | Vitest                                   | Test utilities, CMS mappers, analytics wrappers, validation logic |
| Component Tests     | React Testing Library                    | Test React components and user-visible behavior                   |
| E2E Tests           | Playwright                               | Test full browser flows                                           |
| Accessibility Tests | Playwright + axe-core or manual review   | Validate accessibility baseline                                   |
| SEO Validation      | Manual review, Lighthouse, custom checks | Validate metadata, sitemap, robots.txt, headings                  |
| Build Validation    | Vite build                               | Ensure production build succeeds                                  |
| CI Validation       | GitHub Actions                           | Run quality gates automatically                                   |

---

## 5. Test Layers

## 5.1 Unit Tests

### Purpose

Unit tests validate isolated logic that should behave consistently.

### Good Candidates

- CMS response mappers
- SEO metadata builders
- Analytics wrapper functions
- Form validation helpers
- Utility functions
- Environment variable parsing helpers

### Example Files

```text
src/cms/mappers.test.ts
src/lib/seo.test.ts
src/lib/analytics.test.ts
src/lib/form.test.ts
src/lib/utils.test.ts
```

### Acceptance Criteria

- Unit tests focus on logic, not UI layout.
- Tests cover happy paths and important failure paths.
- CMS mappers handle missing or malformed fields gracefully.

---

## 5.2 Component Tests

### Purpose

Component tests validate user-visible React behavior without requiring a full browser flow.

### Components to Test

- Header
- Navigation
- MobileNavigation
- Button
- ServiceCard
- BlogCard
- CaseStudyCard
- ContactForm
- LeadMagnetSection
- CTASection

### Component Test Expectations

| Component           | Required Test Coverage                                      |
| ------------------- | ----------------------------------------------------------- |
| Header / Navigation | Renders links, supports expected navigation labels          |
| MobileNavigation    | Opens/closes menu, exposes accessible labels                |
| Button              | Renders children, supports link/button variants             |
| ServiceCard         | Displays title, summary, CTA                                |
| BlogCard            | Displays title, summary, date/tags where available          |
| CaseStudyCard       | Displays title, summary, CTA                                |
| ContactForm         | Required validation, email validation, success/error states |
| LeadMagnetSection   | Displays CTA and download link                              |
| CTASection          | Displays heading, message, and CTA link                     |

### Acceptance Criteria

- Tests use user-facing queries where possible.
- Tests avoid depending on Tailwind class names unless necessary.
- Accessibility labels are tested for interactive elements.

---

## 5.3 End-to-End Tests

### Purpose

E2E tests validate real user flows in a browser.

### Required MVP E2E Flows

| Flow ID | Flow                                                           | Priority |
| ------- | -------------------------------------------------------------- | -------- |
| E2E-001 | Home page loads                                                | P0       |
| E2E-002 | Header navigation works                                        | P0       |
| E2E-003 | Visitor navigates to Services                                  | P0       |
| E2E-004 | Visitor navigates to About                                     | P0       |
| E2E-005 | Visitor navigates to Insights                                  | P0       |
| E2E-006 | Visitor opens a blog article                                   | P0       |
| E2E-007 | Visitor opens Case Studies                                     | P0       |
| E2E-008 | Visitor opens a case study detail page                         | P1       |
| E2E-009 | Visitor opens Contact page                                     | P0       |
| E2E-010 | Contact form rejects missing required fields                   | P0       |
| E2E-011 | Contact form rejects invalid email                             | P0       |
| E2E-012 | Contact form displays success state using test-safe submission | P0       |
| E2E-013 | Calendly CTA is visible and clickable                          | P0       |
| E2E-014 | Lead magnet download link exists                               | P1       |
| E2E-015 | Invalid route displays 404 page                                | P1       |
| E2E-016 | Mobile navigation opens and closes                             | P0       |

### E2E Rules

- Do not send real production emails during automated tests.
- Mock or configure form submission safely.
- Do not rely on external Calendly page loading successfully.
- Test that Calendly CTA points to the correct URL or route.
- Keep E2E tests stable and focused.

---

## 5.4 Accessibility Testing

### Purpose

Accessibility testing ensures the site is usable by keyboard users, screen readers, and users with visual or motor impairments.

### MVP Accessibility Coverage

| Area       | Requirement                                             |
| ---------- | ------------------------------------------------------- |
| Navigation | Keyboard accessible; mobile menu usable                 |
| Forms      | Labels, validation messages, focus states               |
| Contrast   | Black-and-white palette must maintain readable contrast |
| Images     | Meaningful images have alt text                         |
| Headings   | Logical H1/H2 hierarchy                                 |
| Links      | Descriptive link text                                   |
| Buttons    | Accessible names and visible focus                      |

### Validation Methods

- Manual keyboard review
- Browser inspection
- Playwright accessibility smoke checks where available
- axe-core checks if added

### Manual Keyboard Checklist

1. Use `Tab` to move through the page.
2. Confirm focus indicator is visible.
3. Confirm navigation links can be activated by keyboard.
4. Confirm mobile menu can open and close by keyboard.
5. Confirm contact form fields are reachable.
6. Confirm validation errors are understandable.
7. Confirm CTAs are reachable and descriptive.

---

## 5.5 SEO Testing

### Purpose

SEO validation ensures that the site is crawlable, understandable, and ready for organic traffic growth.

### SEO Test Areas

| Area              | Validation                                            |
| ----------------- | ----------------------------------------------------- |
| Metadata          | Each page has unique title and description            |
| Heading Structure | One clear H1 per page; logical H2/H3 usage            |
| Sitemap           | `sitemap.xml` exists and includes core routes         |
| Robots            | `robots.txt` exists and allows production crawl       |
| Open Graph        | OG metadata exists where implemented                  |
| Structured Data   | Organization/ProfessionalService/Article where useful |
| Internal Links    | Services, blog posts, and case studies link logically |
| Slugs             | Blog and case study slugs are clean and readable      |

### SEO Acceptance Criteria

- Home page has healthcare-focused metadata.
- Services page has service-oriented metadata.
- Blog posts support CMS-managed SEO fields.
- Case studies support CMS-managed SEO fields.
- Sitemap and robots.txt are accessible in production.
- Google Search Console is configured after launch.

---

## 5.6 Build and CI Testing

### Purpose

Build and CI validation prevent broken code from reaching production.

### Required CI Commands

```text
npm ci
npm run lint
npm run typecheck
npm run test
npm run build
```

Optional when stable:

```text
npm run test:e2e
```

### Acceptance Criteria

- CI runs on pull requests.
- CI runs on pushes to `main`.
- Lint errors fail CI.
- TypeScript errors fail CI.
- Unit/component test failures fail CI.
- Production build failures fail CI.
- E2E tests run in CI when stable enough.

---

## 6. Test Data Strategy

### 6.1 CMS Test Data

Use mocked CMS data for tests instead of depending on live CMS availability.

Mock data should include:

- At least 3 services
- At least 3 blog posts
- At least 1 case study
- At least 1 lead magnet
- SEO fields
- Missing optional fields for edge-case tests

### 6.2 Fallback Content

Fallback content may be used for local development and early component testing.

Fallback content should live in:

```text
src/content/fallback/
```

### 6.3 Contact Form Test Data

Use safe fake data:

```text
Name: Test User
Email: test@example.com
Company: Example Health Co
Service Interest: Healthcare Insurance / RCM Platform Consulting
Message: This is a test message.
```

Never use real PHI/PII in tests.

---

## 7. Test File Organization

Recommended structure:

```text
src/
  tests/
    unit/
      seo.test.ts
      analytics.test.ts
      form.test.ts
      cms-mappers.test.ts

    components/
      Header.test.tsx
      Navigation.test.tsx
      ServiceCard.test.tsx
      BlogCard.test.tsx
      CaseStudyCard.test.tsx
      ContactForm.test.tsx
      LeadMagnetSection.test.tsx

    e2e/
      navigation.spec.ts
      contact-form.spec.ts
      content-pages.spec.ts
      calendly-leadmagnet.spec.ts
      accessibility.spec.ts
```

Alternative: colocate tests near components if preferred, but keep the convention consistent.

---

## 8. Required NPM Scripts

Recommended scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint .",
    "typecheck": "tsc --noEmit",
    "test": "vitest",
    "test:watch": "vitest --watch",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui"
  }
}
```

---

## 9. Pull Request Testing Requirements

Every pull request should include testing evidence.

### Minimum PR Testing Evidence

| Change Type         | Required Evidence                                  |
| ------------------- | -------------------------------------------------- |
| Documentation only  | Manual review                                      |
| UI component        | Component test or screenshot/manual review         |
| Page implementation | Component/E2E test and screenshot                  |
| Contact form        | Component test + E2E validation                    |
| CMS integration     | Mapper tests + manual CMS/fallback data validation |
| SEO change          | Metadata review                                    |
| CI/CD change        | Screenshot or log showing workflow run             |
| Deployment change   | Preview deployment or deployment verification      |

### PR Checklist

- Related task IDs included
- Tests added or updated
- Local validation run
- CI checks passing
- Screenshots attached for UI changes
- Accessibility considered
- SEO considered
- No secrets committed
- No custom backend/database introduced for MVP

---

## 10. Manual QA Checklist

Before MVP launch, manually verify:

### Core Pages

- Home page loads.
- Services page loads.
- About page loads.
- Insights page loads.
- Blog detail page loads.
- Case Studies page loads.
- Case study detail page loads.
- Contact page loads.
- Schedule page loads.
- 404 page works.

### UX

- Desktop layout works.
- Tablet layout works.
- Mobile layout works.
- Navigation works.
- Mobile menu works.
- CTAs are clear.
- Black-and-white design is readable.

### Forms and CTAs

- Contact form validates required fields.
- Invalid email is rejected.
- Valid submission works in production or test mode.
- Calendly CTA opens correct destination.
- Lead magnet download works.

### SEO

- Page titles are unique.
- Meta descriptions are unique.
- H1/H2 structure is logical.
- Sitemap exists.
- Robots.txt exists.
- Internal links work.

### Deployment

- HTTPS works.
- Production environment variables are configured.
- Plausible script loads.
- Search Console is configured.
- Rollback process is known.

---

## 11. Production Validation Tests

After deployment, verify:

1. Production site loads on final domain.
2. HTTPS is active.
3. All core routes load.
4. Contact form works.
5. Calendly CTA works.
6. Lead magnet download works.
7. Plausible receives page views.
8. Sitemap is accessible.
9. Robots.txt is accessible.
10. Search Console can read submitted sitemap.
11. No obvious console errors appear.
12. Mobile layout is usable.

---

## 12. Regression Testing Strategy

Regression testing should run when:

- A new page is added.
- CMS schema changes.
- Routing changes.
- Contact form changes.
- SEO utilities change.
- Deployment or CI/CD changes.
- Major UI components change.

Minimum regression set:

```text
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
```

If E2E tests are not yet stable in CI, run them locally before release.

---

## 13. Testing Definition of Done

Testing is considered complete for MVP when:

1. Vitest is configured.
2. React Testing Library is configured.
3. Playwright is configured.
4. Core component tests exist.
5. Contact form validation tests exist.
6. Navigation E2E tests exist.
7. Calendly CTA is tested.
8. Lead magnet CTA is tested.
9. Build validation passes.
10. CI runs required test commands on pull requests.
11. Manual accessibility review is complete.
12. SEO launch review is complete.
13. Production validation checklist is complete.

---

## 14. Future Testing Enhancements

Post-MVP testing improvements may include:

- Visual regression testing
- Automated accessibility checks with axe-core in CI
- Automated sitemap validation
- Broken link checker in CI
- Lighthouse CI
- CMS contract tests
- Deployment smoke tests
- Analytics event validation tests
- Cross-browser test matrix

---

## 15. Notes for Future AI Agents

Future AI agents must follow these testing rules:

1. Do not generate only shallow tests.
2. Focus tests on user-visible behavior.
3. Add tests when adding or changing business-critical flows.
4. Keep mocks realistic but not overly complex.
5. Do not send real contact form submissions in automated tests.
6. Do not introduce PHI/PII into tests.
7. Make sure CI commands remain fast enough for pull requests.
8. Keep tests aligned with PRD, Architecture.md, Traceability_Matrix.md, and Tasks.md.
