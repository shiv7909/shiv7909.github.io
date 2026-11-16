import { Link } from 'react-router-dom';
import { SITE } from '../constants/site';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-[#1F2A44] text-gray-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2 text-xl font-extrabold text-white">
              <img src="/favicon.svg" alt="" className="h-7 w-7 rounded-lg" aria-hidden="true" />
              <span>{SITE.appName}</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-300">
              {SITE.tagline}.
            </p>
            <p className="mt-3 text-sm">
              <a
                href={`mailto:${SITE.supportEmail}`}
                className="font-medium text-white underline decoration-gray-500 underline-offset-4 hover:decoration-white"
              >
                {SITE.supportEmail}
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Product
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <a
                  href={SITE.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Google Play Store
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact &amp; Grievance Officer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Legal &amp; Policies
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/refund" className="hover:text-white">
                  Subscription, Cancellation &amp; Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/delete-account" className="hover:text-white">
                  Delete Account &amp; Data
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Developer
            </h3>
            <p className="mt-4 text-sm font-medium text-white">{SITE.legalName}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-gray-300">{SITE.address}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-gray-400 sm:flex-row sm:items-center">
          <p>
            © {SITE.copyrightYear} {SITE.legalName}. All rights reserved.
          </p>
          <p>Package: {SITE.packageName}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
