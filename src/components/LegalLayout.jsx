import Navbar from './Navbar';
import Footer from './Footer';

const LegalLayout = ({ eyebrow = 'Legal', title, subtitle, children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8F9FB]">
      <Navbar />
      <main className="flex-1 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <article className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2E6B4F]">
            {eyebrow}
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[#1F2A44] sm:text-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-sm text-gray-600">{subtitle}</p>
          )}
          <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-gray-700">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default LegalLayout;
