/* eslint-disable @next/next/no-html-link-for-pages -- next/link's shim throws
   "Invalid hook call" inside a vinext server component (vinext 1.0.0-beta.5).
   The rest of this site navigates with plain anchors; keep it consistent. */
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { BackToTop } from '@/components/BackToTop';
import { SiteFooter } from '@/components/SiteFooter';
import { StructuredData } from '@/components/StructuredData';
import { SITE, absoluteUrl } from '@/lib/site';

const PAGE_TITLE = 'Imprint & Privacy Policy';
const PAGE_DESCRIPTION =
  'Imprint, company information, and privacy policy for TDC Digital Advisory LLC, a Wyoming limited liability company.';

export const metadata: Metadata = {
  // The root layout's template appends "| TDC Digital Advisory".
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: '/imprint' },
  openGraph: {
    type: 'website',
    url: absoluteUrl('/imprint'),
    title: `${PAGE_TITLE} | ${SITE.name}`,
    description: PAGE_DESCRIPTION,
    siteName: SITE.name,
    locale: SITE.locale,
  },
  twitter: { card: 'summary_large_image', title: `${PAGE_TITLE} | ${SITE.name}`, description: PAGE_DESCRIPTION },
};

const EFFECTIVE_DATE = 'September 11, 2026';

function Fact({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="legal-fact">
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

function Clause({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section className="legal-clause" id={id} aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`}>{title}</h2>
      <div className="legal-prose">{children}</div>
    </section>
  );
}

export default function ImprintPage() {
  return (
    <div className="tdc legal">
      <a href="#main" className="skip">Skip to content</a>

      <header className="site-header">
        <a href="/" className="brand" aria-label="TDC Digital Advisory home">
          <span>TDC</span>
          <small>DIGITAL ADVISORY</small>
        </a>
        <nav aria-label="Main navigation">
          <a href="/#pillars">Three pillars</a>
          <a href="/#expertise">Expertise</a>
          <a href="/#approach">Approach</a>
          <a href="/#profile">Tanja Drefke</a>
        </nav>
        <a className="header-contact" href="/#conversation">
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="main" className="legal-main">
        <div className="legal-masthead">
          <nav className="legal-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Legal</span>
          </nav>
          <p className="eyebrow">Legal Notice</p>
          <h1>
            Imprint &amp;<br />
            <em>Privacy Policy.</em>
          </h1>
          <p className="legal-effective">Effective date: {EFFECTIVE_DATE}</p>
          <nav className="legal-jump" aria-label="On this page">
            <a href="#company">Company information</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy policy</a>
          </nav>
        </div>

        <div className="legal-body">
          <div className="section-mark legal-mark">
            <span>01 / Imprint</span>
            <span>TDC Digital Advisory LLC</span>
          </div>

          <Clause id="company" title="Company Information">
            <dl className="legal-facts">
              <Fact label="Legal Name">TDC Digital Advisory LLC</Fact>
              <Fact label="Entity Type">Limited Liability Company (LLC)</Fact>
              <Fact label="State of Formation">Wyoming, United States of America</Fact>
              <Fact label="Date of Formation">April 1, 2026</Fact>
              <Fact label="Filing Number">2026-001937434</Fact>
              <Fact label="EIN (Federal Tax ID)">38-4393380</Fact>
              <Fact label="Principal Business Address">
                30 N Gould St, Ste R<br />
                Sheridan, WY 82801<br />
                United States of America
              </Fact>
              <Fact label="Registered Agent">
                Registered Agents, Inc.<br />
                30 N Gould St, Ste R<br />
                Sheridan, WY 82801<br />
                United States of America
              </Fact>
            </dl>
          </Clause>

          <Clause id="contact" title="Contact Information">
            <dl className="legal-facts">
              <Fact label="Email">
                <a className="legal-link" href="mailto:tanja@tdc-advisory.com">
                  tanja@tdc-advisory.com
                </a>
              </Fact>
              <Fact label="Web">
                <a className="legal-link" href="https://www.tdc-advisory.com" rel="noopener noreferrer">
                  www.tdc-advisory.com
                </a>
              </Fact>
            </dl>
          </Clause>

          <Clause id="responsible" title="Responsible Person for Content">
            <p>
              Tanja Drefke, Sole Member &amp; Principal<br />
              TDC Digital Advisory LLC
            </p>
          </Clause>

          <Clause id="purpose" title="Business Purpose">
            <p>
              As stated in the Operating Agreement of TDC Digital Advisory LLC: Strategic advisory,
              management consulting, digital transformation services, and development of digital and
              health-related solutions.
            </p>
          </Clause>

          <Clause id="liability-content" title="Liability for Content">
            <p>
              The content on this website has been prepared with reasonable care. TDC Digital Advisory
              LLC assumes no liability for the accuracy, completeness, or timeliness of the information
              provided. References to third-party organizations, technologies, regulatory frameworks, or
              publications are for informational purposes and do not constitute endorsement.
            </p>
          </Clause>

          <Clause id="liability-links" title="Liability for Links">
            <p>
              This website may contain links to external websites operated by third parties. TDC Digital
              Advisory LLC exercises no control over the content of such external websites and assumes no
              responsibility for their accuracy, legality, or availability.
            </p>
          </Clause>

          <Clause id="copyright" title="Copyright">
            <p>
              All content on this website, including text, graphics, logos, and design elements, is the
              intellectual property of TDC Digital Advisory LLC or its licensors, and is protected under
              United States and international copyright law. Reproduction, distribution, or modification
              without prior written consent is prohibited.
            </p>
          </Clause>

          <Clause id="governing-law" title="Governing Law">
            <p>
              This imprint and any disputes arising in connection with this website shall be governed by
              and construed in accordance with the laws of the State of Wyoming, United States of America.
            </p>
          </Clause>

          <div className="section-mark legal-mark legal-mark--privacy" id="privacy">
            <span>02 / Privacy Policy</span>
            <span>Effective date: {EFFECTIVE_DATE}</span>
          </div>

          <div className="legal-privacy-heading">
            <h2>
              Privacy<br />
              <em>Policy.</em>
            </h2>
          </div>

          <Clause id="privacy-overview" title="1. Overview">
            <p>
              TDC Digital Advisory LLC (“TDC”, “we”, “us”, or “our”) is committed to protecting the
              privacy of visitors to our website and of individuals with whom we conduct business. This
              Privacy Policy describes how we collect, use, and safeguard information.
            </p>
          </Clause>

          <Clause id="privacy-collect" title="2. Information We Collect">
            <p>We collect two categories of information:</p>
            <p>
              <strong>Information you provide directly.</strong> If you contact us through the email
              address listed on our website, we collect your name, email address, and the content of your
              message. We do not operate web forms that collect additional personal information at this
              time.
            </p>
            <p>
              <strong>Technical and analytics information.</strong> When you visit this website, our
              hosting provider and analytics tools may automatically collect technical information such as
              your IP address, browser type, device information, referring website, and pages viewed. This
              information is used for security, site functionality, and to understand how our website is
              used.
            </p>
          </Clause>

          <Clause id="privacy-use" title="3. How We Use Information">
            <p>We use the information we collect to:</p>
            <ul className="legal-list">
              <li>Respond to inquiries and correspondence</li>
              <li>Provide and maintain our website</li>
              <li>Understand and analyze how visitors use our site</li>
              <li>Detect, prevent, and address technical or security issues</li>
              <li>Comply with applicable legal obligations</li>
            </ul>
          </Clause>

          <Clause id="privacy-cookies" title="4. Cookies and Similar Technologies">
            <p>
              This website may use cookies and similar technologies to enable basic site functionality,
              remember preferences, and understand site usage. You can control cookie settings through your
              browser. Disabling cookies may affect certain features of the website.
            </p>
            <p>
              We may also use analytics services to collect aggregated, non-identifying information about
              site usage. These services may set their own cookies in accordance with their respective
              privacy policies.
            </p>
          </Clause>

          <Clause id="privacy-sharing" title="5. Sharing of Information">
            <p>
              We do not sell, rent, or trade personal information. We may share information only in the
              following circumstances:
            </p>
            <ul className="legal-list">
              <li>With service providers who assist us in operating our website (hosting, analytics)</li>
              <li>When required by law, subpoena, or legal process</li>
              <li>To protect our rights, property, or safety, or that of others</li>
            </ul>
          </Clause>

          <Clause id="privacy-security" title="6. Data Security">
            <p>
              We implement reasonable administrative, technical, and physical measures to protect
              information against unauthorized access, alteration, or disclosure. However, no method of
              transmission or storage is entirely secure, and we cannot guarantee absolute security.
            </p>
          </Clause>

          <Clause id="privacy-retention" title="7. Data Retention">
            <p>
              We retain information only for as long as necessary to fulfill the purposes for which it was
              collected, to comply with legal obligations, resolve disputes, and enforce agreements.
            </p>
          </Clause>

          <Clause id="privacy-rights" title="8. Your Rights (California Residents)">
            <p>
              Under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act
              (CPRA), California residents have the following rights:
            </p>
            <ul className="legal-list">
              <li>Right to know what personal information is collected, used, shared, or sold</li>
              <li>Right to delete personal information held by us</li>
              <li>Right to correct inaccurate personal information</li>
              <li>
                Right to opt out of the sale or sharing of personal information (note: TDC does not sell
                personal information)
              </li>
              <li>Right to non-discrimination for exercising any of these rights</li>
            </ul>
            <p>
              To exercise these rights, please contact us at{' '}
              <a className="legal-link" href="mailto:privacy@tdc-advisory.com">
                privacy@tdc-advisory.com
              </a>
              .
            </p>
          </Clause>

          <Clause id="privacy-international" title="9. International Visitors">
            <p>
              TDC Digital Advisory LLC is a United States entity headquartered in Wyoming. This website is
              hosted and operated from the United States. If you access this website from outside the
              United States, your information may be transferred to, stored, and processed in the United
              States. By using this site, you consent to such transfer.
            </p>
            <p>
              International visitors who wish to exercise privacy rights under applicable local privacy
              frameworks may contact us at{' '}
              <a className="legal-link" href="mailto:privacy@tdc-advisory.com">
                privacy@tdc-advisory.com
              </a>
              , and we will respond in good faith consideration of the applicable framework.
            </p>
          </Clause>

          <Clause id="privacy-children" title="10. Children’s Privacy">
            <p>
              This website is not directed at children under the age of 13. We do not knowingly collect
              personal information from children. If you believe we may have inadvertently collected
              information from a child, please contact us and we will delete such information promptly.
            </p>
          </Clause>

          <Clause id="privacy-changes" title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices,
              technology, or legal requirements. Updates will be posted on this page with a revised
              effective date. We encourage you to review this policy periodically.
            </p>
          </Clause>

          <Clause id="privacy-contact" title="12. Contact">
            <p>For questions about this Privacy Policy or our privacy practices, please contact:</p>
            <p>
              TDC Digital Advisory LLC<br />
              30 N Gould St, Ste R<br />
              Sheridan, WY 82801, USA<br />
              Email:{' '}
              <a className="legal-link" href="mailto:privacy@tdc-advisory.com">
                privacy@tdc-advisory.com
              </a>
            </p>
          </Clause>

          <p className="legal-back">
            <a className="underlined" href="/">
              <span aria-hidden="true">←</span> Back to home
            </a>
          </p>
        </div>
      </main>

      <SiteFooter hrefPrefix="/" />
      <BackToTop />
      <StructuredData
        page={{ name: PAGE_TITLE, path: '/imprint', description: PAGE_DESCRIPTION }}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Legal', path: '/imprint' },
        ]}
      />
    </div>
  );
}
