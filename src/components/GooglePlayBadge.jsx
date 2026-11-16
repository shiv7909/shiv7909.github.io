import { SITE } from '../constants/site';

const GooglePlayBadge = ({ className = '' }) => {
  return (
    <a
      href={SITE.playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get it on Google Play"
      className={`inline-flex items-center gap-3 rounded-xl bg-[#111827] px-5 py-3 text-white shadow-sm transition hover:bg-[#1F2A44] focus:outline-none focus:ring-2 focus:ring-[#2E6B4F] focus:ring-offset-2 ${className}`}
    >
      <svg className="h-7 w-7 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#4285F4"
          d="M3.6 2.3C3.3 2.6 3.1 3.1 3.1 3.8v16.4c0 .7.2 1.2.5 1.5l.1.1 9.2-9.2v-.2L3.7 2.2l-.1.1z"
        />
        <path
          fill="#34A853"
          d="M16 15.6l-3.1-3.1v-.2L16 9.2l.1.1 3.6 2.1c1 .6 1 1.6 0 2.2l-3.6 2-.1 0z"
        />
        <path
          fill="#FBBC05"
          d="M16.1 15.6L12.9 12.4 3.6 21.7c.3.4.9.4 1.6 0l10.9-6.1z"
        />
        <path
          fill="#EA4335"
          d="M16.1 9.2L5.2 3.1c-.7-.4-1.3-.4-1.6 0l9.3 9.3 3.2-3.2z"
        />
      </svg>
      <span className="flex flex-col text-left leading-tight">
        <span className="text-[10px] font-medium uppercase tracking-wider text-gray-300">
          Get it on
        </span>
        <span className="text-base font-semibold tracking-tight text-white">
          Google Play
        </span>
      </span>
    </a>
  );
};

export default GooglePlayBadge;
