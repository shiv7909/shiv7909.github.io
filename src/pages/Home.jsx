import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  UserCheck,
  IndianRupee,
  Clock,
  ShieldCheck,
  BedDouble,
  Wrench,
  Users,
  LayoutDashboard,
  ChevronDown,
  BookOpen,
  AlertCircle,
  Search,
  Lock,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GooglePlayBadge from '../components/GooglePlayBadge';
import PageMeta from '../components/PageMeta';
import { SITE } from '../constants/site';

const PROBLEMS = [
  {
    icon: BookOpen,
    title: 'Rent tracked in notebooks',
    description:
      'Paper registers get messy, pages tear, and checking past payments takes time.',
  },
  {
    icon: AlertCircle,
    title: "Forgetting who hasn't paid",
    description:
      'Without a clear due list, overdue rent slips through the cracks every month.',
  },
  {
    icon: Search,
    title: 'No idea which beds are free',
    description:
      'Walking room to room or calling wardens just to check bed availability wastes hours.',
  },
];

const FEATURES = [
  {
    icon: Building2,
    title: 'Buildings, floors, rooms and beds of any size',
    description: 'Set up your entire PG or hostel structure in minutes.',
  },
  {
    icon: UserCheck,
    title: 'Tenant records with photo and ID documents',
    description: 'Keep tenant details organised. Only the last 4 Aadhaar digits are stored.',
  },
  {
    icon: IndianRupee,
    title: 'Automatic monthly rent dues',
    description: 'Record cash, UPI, bank or card payments and issue receipts.',
  },
  {
    icon: Clock,
    title: 'Overdue, due today and due this week at a glance',
    description: 'See exactly who needs to pay without digging through registers.',
  },
  {
    icon: ShieldCheck,
    title: 'Security deposit tracking',
    description: 'Track deposits collected, refunds issued and deductions made.',
  },
  {
    icon: BedDouble,
    title: 'Free bed finder with prices',
    description: 'Check vacant beds across rooms and floors along with bed rent.',
  },
  {
    icon: Wrench,
    title: 'Complaint tracking with priority and staff assignment',
    description: 'Log maintenance issues, set priority and assign them to your team.',
  },
  {
    icon: Users,
    title: 'Staff access with limited permissions',
    description: 'Invite staff by email while keeping income reports and ID documents private.',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard: collections, occupancy, open complaints',
    description: 'Get a clear daily summary of your hostel from one screen.',
  },
];

const STEPS = [
  {
    step: '1',
    title: 'Register your hostel',
    description: 'Create your account and add your PG or hostel details.',
  },
  {
    step: '2',
    title: 'Add rooms and tenants',
    description: 'Set up floors, rooms and beds, then enter tenant records.',
  },
  {
    step: '3',
    title: 'Track rent and complaints',
    description: 'Monitor monthly dues, record payments and resolve complaints.',
  },
];

const PLANS = [
  { name: 'Monthly', price: '₹299', note: 'Billed every month' },
  { name: '3 months', price: '₹849', note: '₹283/month' },
  { name: '6 months', price: '₹1,599', note: '₹267/month' },
  { name: '12 months', price: '₹2,999', note: '₹250/month, 2 months free', highlight: true },
];

const FAQS = [
  {
    q: 'Do my tenants need to install the app?',
    a: 'No, only the owner and staff use the app.',
  },
  {
    q: 'How do I log in?',
    a: 'With your email and a one-time code, or with Google.',
  },
  {
    q: 'What happens when my plan ends?',
    a: 'Your hostel becomes read-only. Your data is never deleted unless you delete your account.',
  },
  {
    q: 'Can my staff use it?',
    a: "Yes. Invite them by email. Staff can add tenants, collect rent, see dues and handle complaints, but can't see income reports or ID documents.",
  },
  {
    q: 'How do I cancel?',
    a: 'In Google Play → Payments & subscriptions → Subscriptions → Propden → Cancel.',
  },
  {
    q: 'How do I delete my account?',
    a: 'In the app (Profile → Delete account) or at propden.in/delete-account.',
  },
];

const Home = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#1F2A44]">
      <PageMeta
        title="Propden — Run your PG or hostel from your phone"
        description="Rooms, tenants, rent dues and complaints in one simple Android app for PG and hostel owners in India."
        path="/"
      />
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero */}
        <section className="border-b border-gray-100 bg-gradient-to-b from-[#F8F9FB] to-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center rounded-full bg-[#E6F2EC] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#2E6B4F]">
                Built for PG &amp; hostel owners in India
              </p>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#1F2A44] sm:text-5xl lg:leading-[1.12]">
                Run your PG or hostel from your phone
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
                Rooms, tenants, rent dues and complaints in one simple app. Know who paid,
                who&apos;s overdue and which beds are free.
              </p>
              <div className="mt-8 flex flex-col items-start gap-3">
                <GooglePlayBadge />
                <p className="text-sm font-medium text-gray-600">
                  14-day free trial · No card needed
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:col-span-5">
              <div className="w-[270px] rounded-[2.25rem] border-[8px] border-[#1F2A44] bg-[#1F2A44] p-1.5 shadow-xl sm:w-[290px]">
                <div className="overflow-hidden rounded-[1.75rem] bg-white">
                  <img
                    src="/images/hero.png"
                    alt="Propden Android app showing hostel rent collections, overdue dues and free beds"
                    width="540"
                    height="1170"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Problems we solve */}
        <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-2xl font-extrabold tracking-tight text-[#1F2A44] sm:text-3xl">
              Leave the paper register behind
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {PROBLEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xs"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E6F2EC] text-[#2E6B4F]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-[#1F2A44]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. Features */}
        <section id="features" className="border-y border-gray-100 bg-[#F8F9FB] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-extrabold tracking-tight text-[#1F2A44] sm:text-3xl">
                Everything you need to manage your hostel
              </h2>
              <p className="mt-3 text-base text-gray-600">
                Clear records for rooms, beds, rent, deposits and maintenance.
              </p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-gray-200 bg-white p-6"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E6F2EC] text-[#2E6B4F]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-[#1F2A44]">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. How it works */}
        <section id="how-it-works" className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-2xl font-extrabold tracking-tight text-[#1F2A44] sm:text-3xl">
              How it works
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {STEPS.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-gray-200 bg-white p-6"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1F2A44] text-sm font-bold text-white">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-[#1F2A44]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Pricing */}
        <section id="pricing" className="border-y border-gray-100 bg-[#F8F9FB] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-extrabold tracking-tight text-[#1F2A44] sm:text-3xl">
                Simple pricing
              </h2>
              <p className="mt-3 text-lg font-semibold text-[#2E6B4F]">
                One plan per hostel, up to 400 tenants
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {PLANS.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl border p-6 ${
                    plan.highlight
                      ? 'border-[#2E6B4F] bg-white ring-2 ring-[#2E6B4F]/15'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <p className="text-sm font-semibold text-gray-600">{plan.name}</p>
                  <p className="mt-2 text-3xl font-extrabold text-[#1F2A44]">{plan.price}</p>
                  <p className="mt-2 text-sm font-medium text-[#2E6B4F]">{plan.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm font-medium text-gray-700">
                14-day free trial. Billed through Google Play. Cancel anytime.
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Prices include applicable taxes as shown on Google Play.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Privacy & security */}
        <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-xs sm:p-10">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#E6F2EC] text-[#2E6B4F]">
              <Lock className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-[#1F2A44]">
              Privacy &amp; security
            </h2>
            <p className="mt-3 text-base leading-relaxed text-gray-600">
              Your hostel&apos;s data is visible only to you and the team you invite. Documents
              are stored privately. We never sell your data.
            </p>
            <Link
              to="/privacy"
              className="mt-5 inline-block text-sm font-semibold text-[#2E6B4F] underline underline-offset-4 hover:text-[#1F2A44]"
            >
              Read our Privacy Policy
            </Link>
          </div>
        </section>

        {/* 7. FAQ */}
        <section id="faq" className="border-t border-gray-100 bg-[#F8F9FB] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-extrabold tracking-tight text-[#1F2A44] sm:text-3xl">
              Frequently asked questions
            </h2>
            <div className="mt-8 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
              {FAQS.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={item.q}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-[#1F2A44] hover:bg-gray-50"
                    >
                      <span>{item.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-gray-500 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-4 text-sm leading-relaxed text-gray-600">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 8. Final call to action */}
        <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-2xl bg-[#1F2A44] px-6 py-12 text-center text-white sm:px-10">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Start your 14-day free trial
            </h2>
            <p className="mt-3 text-base text-gray-300">
              Download Propden on Android and set up your PG or hostel in minutes.
            </p>
            <div className="mt-7 flex justify-center">
              <GooglePlayBadge />
            </div>
            <p className="mt-6 text-sm text-gray-300">
              Questions?{' '}
              <a
                href={`mailto:${SITE.supportEmail}`}
                className="font-semibold text-white underline underline-offset-4"
              >
                {SITE.supportEmail}
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
