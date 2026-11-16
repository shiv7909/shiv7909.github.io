import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { SITE } from '../constants/site';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  const navLinks = [
    { label: 'Features', href: isHome ? '#features' : '/#features' },
    { label: 'How it works', href: isHome ? '#how-it-works' : '/#how-it-works' },
    { label: 'Pricing', href: isHome ? '#pricing' : '/#pricing' },
    { label: 'FAQ', href: isHome ? '#faq' : '/#faq' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight text-[#1F2A44]"
          onClick={() => setOpen(false)}
        >
          <img src="/favicon.svg" alt="" className="h-7 w-7 rounded-lg" aria-hidden="true" />
          <span>{SITE.appName}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((item) =>
            item.to ? (
              <Link
                key={item.label}
                to={item.to}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-[#1F2A44]"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-[#1F2A44]"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden md:flex">
          <a
            href={SITE.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#2E6B4F] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#24563F]"
          >
            Get on Google Play
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-[#1F2A44] md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((item) =>
              item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-100"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-100"
                >
                  {item.label}
                </a>
              )
            )}
            <a
              href={SITE.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-lg bg-[#2E6B4F] px-4 py-2.5 text-center text-base font-semibold text-white"
            >
              Get it on Google Play
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
