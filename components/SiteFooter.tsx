// Plain anchors throughout: next/link's shim throws "Invalid hook call" inside
// a vinext server component (vinext 1.0.0-beta.5), and this footer renders on
// both the client home page and the server-rendered imprint page.

import { VeyagoCredit, VEYAGO_URL } from '@/components/VeyagoCredit';

// Section anchors resolve against the home page, so the footer works verbatim
// on a sub-page: pass hrefPrefix="/" there, leave it empty on the home page.
type SiteFooterProps = {
  hrefPrefix?: string;
  /** Hidden on the home page, whose Contact section already shows the address. */
  showEmail?: boolean;
};

const sections = [
  ['#pillars', 'Three pillars'],
  ['#expertise', 'Advisory & Delivery'],
  ['#approach', 'The 4D approach'],
  ['#intelligence-lab', 'Intelligence Lab'],
  ['#profile', 'Tanja Drefke'],
  ['#conversation', 'Contact'],
] as const;

export function SiteFooter({ hrefPrefix = '', showEmail = true }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-identity">
          <a href={hrefPrefix || '#opening'} className="footer-wordmark" aria-label="TDC Digital Advisory home">
            <span>TDC</span>
            <small>DIGITAL ADVISORY</small>
          </a>
          <p className="footer-statement">
            Enterprise advisory, accountable delivery<br />
            and independent applied intelligence.
          </p>
          <address className="footer-address">
            30 N Gould St, Ste R<br />
            Sheridan, WY 82801, USA
          </address>
        </div>

        <nav className="footer-column" aria-label="Sections">
          <h2>Navigate</h2>
          <ul>
            {sections.map(([hash, label]) => (
              <li key={hash}>
                <a href={hrefPrefix + hash}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-column">
          <h2>Connect</h2>
          <ul>
            {showEmail && (
              <li>
                <a href="mailto:tanja@tdc-advisory.com">tanja@tdc-advisory.com</a>
              </li>
            )}
            <li>
              <a href="https://linkedin.com/in/tanjadrefke" target="_blank" rel="noreferrer">
                LinkedIn <span aria-hidden="true">{'\u2197\uFE0E'}</span>
              </a>
            </li>
          </ul>
          <div className="footer-partner">
            <p>Connect with our partner</p>
            <a href={VEYAGO_URL} target="_blank" rel="noreferrer">
              Veyago <span aria-hidden="true">{'\u2197\uFE0E'}</span>
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h2>Legal</h2>
          <ul>
            <li><a href="/imprint">Imprint</a></li>
            <li><a href="/imprint#privacy">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-baseline">
        <span>© 2026 TDC Digital Advisory LLC</span>
        {/* Wrapper carries the hover colour: the credit's link is color:inherit. */}
        <span className="footer-credit">
          <VeyagoCredit iconSrc="/veyago-icon.png" size={20} />
        </span>
      </div>
    </footer>
  );
}
