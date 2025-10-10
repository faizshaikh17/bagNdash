'use client'

import { useRef, useState } from 'react';
import Image from "next/image";
import { X, CircleAlert } from "lucide-react";

export default function AboutUs() {
  const videoRef = useRef<HTMLElement>(null);
  const orderRef = useRef<HTMLElement>(null);
  const invoiceRef = useRef<HTMLElement>(null);
  const [isTrialOpen, setIsTrialOpen] = useState(false);

  const plans = [
    {
      name: 'Video Analytic',
      offer: ['Self-service transaction analysis.', 'Dedicated manager sends reviewed reports.', 'Monitoring team provides custom monitoring + incident analysis.', 'Team actively watches the store live.'],
      price: ['39', '99', '199', '395'],
      label: ['DIY Insights', 'Expert Review', 'Team Watch', 'Full Surveillance'],
      cards: [
        { title: 'DIY Insights', price: 39, features: ['Live Transactions', 'Live Security Footage', 'Video on Demand', 'Web Portal for Loss Prevention', 'Unlimited Users', 'Dedicated Account Manager'] },
        { title: 'Expert Review', price: 99, features: ['*Includes Everything in DIY Insights', 'Transaction Analysis', 'Customized Monitoring'] },
        { title: 'Team Watch', price: 199, features: ['*Includes Everything in Expert Review', 'Live Surveillance'] },
        { title: 'Full Surveillance', price: 395, features: ['*Includes Everything in Team Watch', 'Transactions'] }
      ]
    },
    {
      name: 'Order Management',
      offer: '*$99 to sign up (includes 3 months of service).',
      price: 59,
      label: 'Standard',
      features: ['Order Management', 'Item Management', 'Reports', 'Insights', 'Dedicated Account Manager']
    },
    {
      name: 'Invoice Processing',
      offer: 'Monthly subscription for entering all vendor invoices.',
      price: 49,
      label: 'Standard',
      features: ['Monthly subscription for entering all vendor invoices']
    }
  ];

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#020D2D]">
      <section className="relative w-full overflow-hidden md:py-0 py-10 md:bg-[#020D2D] md:bg-none bg-gradient-to-b from-[#020D2D] to-transparent">
        <div className="hidden md:block absolute inset-x-0 top-0 h-screen max-h-[1174px] opacity-35 pointer-events-none bg-[linear-gradient(180deg,#010314_40.24%,rgba(1,3,20,0)_100%),radial-gradient(85.05%_65.08%_at_50%_50%,#7B50FE_37.41%,#F462F3_69.27%,#FFFFFF_100%)] blur-[200px] rotate-180" />
        <div className="hidden md:block absolute inset-0 pointer-events-none bg-[radial-gradient(54.1%_56.99%_at_49.11%_40.56%,rgba(2,13,45,0)_1.5%,#020D2D_100%)]" />
        <div className="block absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] left-1/2 md:left-60 top-4 md:top-10 -translate-x-1/2 md:translate-x-0 opacity-60 md:opacity-10 pointer-events-none bg-blue-500/50 md:bg-blue-500 blur-[100px] md:blur-[150px]" />
        <div className="hidden md:block absolute w-[400px] h-[400px] right-40 top-10 opacity-35 pointer-events-none bg-green-400 blur-[180px]" />
        <div className="hidden md:block absolute w-[500px] h-[500px] left-20 -top-20 opacity-25 pointer-events-none bg-[radial-gradient(circle_at_center,#F462F3_0%,#7B50FE_50%,transparent_100%)] blur-[180px]" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full pt-16 md:pt-36 pb-8 md:pb-16 container mx-auto px-4">
          <div className="flex flex-col gap-5 items-center text-center max-w-7xl">
            <h1 className="font-extrabold text-3xl md:text-5xl lg:text-6xl leading-[1.5] text-white max-w-4xl">
              Pricing
            </h1>
            <p className="text-white text-sm lg:text-base max-w-3xl">
              No contracts. Cancel anytime. Every plan includes a 30-day free trial.
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full py-12 md:py-20 lg:py-30 md:bg-[#020D2D] md:bg-none bg-gradient-to-b from-[#020D2D] to-transparent overflow-hidden">
        <div className="container mx-auto flex flex-col items-center justify-center gap-12 max-w-7xl px-8">
          <div className="relative w-full max-w-4xl">
            <div className="flex justify-between items-center mb-6 gap-4">
              <button
                onClick={() => scrollToSection(videoRef)}
                className={`flex-1 text-center transition-all duration-300 text-white/50 font-medium hover:text-white/70`}
              >
                <span className="block text-sm md:text-base lg:text-lg">
                  {plans[0].name}
                </span>
              </button>
              <button
                onClick={() => scrollToSection(orderRef)}
                className={`flex-1 text-center transition-all duration-300 text-white/50 font-medium hover:text-white/70`}
              >
                <span className="block text-sm md:text-base lg:text-lg">
                  {plans[1].name}
                </span>
              </button>
              <button
                onClick={() => scrollToSection(invoiceRef)}
                className={`flex-1 text-center transition-all duration-300 text-white/50 font-medium hover:text-white/70`}
              >
                <span className="block text-sm md:text-base lg:text-lg">
                  {plans[2].name}
                </span>
              </button>
            </div>
            <div className="relative w-full h-[2px] bg-white/20">
              <div
                className="absolute top-1/2 -translate-y-1/2 h-1 bg-white rounded-full transition-all duration-500 ease-out"
                style={{
                  width: '33.33%',
                  left: `0%`
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Analytic Section */}
      <section ref={videoRef} className="relative w-full py-12 md:py-20 bg-[#020D2D] overflow-hidden">
        <div className="container mx-auto flex flex-col items-center justify-center gap-12 max-w-7xl px-8">
          <div className="w-full max-w-7xl mt-8 mx-auto">
            <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-8">
              {plans[0].name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {plans[0].cards?.map((card, idx) => (
                <div key={idx} className="relative rounded-2xl p-4 overflow-hidden group">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className=" h-[80%] min-w-5xl rounded-full bg-[radial-gradient(circle_at_center,_#064E3B_0%,_transparent_75%)] blur-[70px]"
                    />
                  </div>
                  <div className="absolute inset-0 border border-white/20 rounded-2xl" />
                  <div className="relative h-full flex flex-col gap-8 justify-between">
                    <div className='relative space-y-8'>
                      <div className="inline-block">
                        <div className="bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
                          <span className="text-white text-sm">
                            {card.title}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-2xl font-semibold text-white">
                          ${card.price}/ Month
                        </div>
                        <p className="text-gray-300 text-xs">
                          {plans[0].offer[idx]}
                        </p>
                      </div>
                      <div className="flex flex-col gap-4 pt-2">
                        {card.features.map((feature, index) => {
                          const isIncludes = feature.startsWith('*');
                          return (
                            <div key={index} className="flex items-start gap-3">
                              {!isIncludes && (
                                <Image
                                  src="/images/tick.png"
                                  alt="tick"
                                  width={20}
                                  height={20}
                                  className="w-4 h-4 flex-shrink-0 mt-0.5"
                                />
                              )}
                              <span className={`text-white flex justify-center items-center gap-2 text-xs leading-relaxed ${isIncludes ? 'ml-2' : ''}`}>
                                {feature} <CircleAlert size={14} />
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <button
                      onClick={() => setIsTrialOpen(true)}
                      className="bg-gradient-to-r from-[#F462F3] via-[#F462F3] to-[#7B50FE] px-6 py-2.5 rounded-full font-semibold text-sm text-white hover:opacity-90 transition w-full mt-4"
                    >
                      Start Free Trial
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-300 text-xs text-left mt-4">
              *One-time device cost of $150 (fully refundable in free trial period).
            </p>
          </div>
        </div>
      </section>

      {/* Order Management and Invoice Processing Section */}
      <section className='flex sm:flex-row sm:justify-center mx-auto max-w-7xl sm:gap-4 flex-col'>
        <section ref={orderRef} className="relative w-full py-12 md:py-20 bg-[#020D2D] overflow-hidden">
          <div className="container mx-auto flex flex-col items-center justify-center gap-12 max-w-7xl px-8">
            <div className="w-full max-w-2xl mt-8">
              <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-8">
                {plans[1].name}
              </h2>
              <div className="relative rounded-2xl p-8 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className=" h-full min-w-5xl rounded-full bg-[radial-gradient(circle_at_center,_#064E3B_0%,_transparent_75%)] blur-[70px]"
                  />
                </div>
                <div className="absolute inset-0 border border-white/20 rounded-2xl backdrop-blur-xl" />
                <div className="relative flex flex-col gap-8 justify-between">
                  <div className="relative space-y-8">
                    <div className="inline-block">
                      <div className="bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full border border-white/10">
                        <span className="text-white font-semibold text-sm">
                          {plans[1].label}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-semibold text-white">
                        ${plans[1].price}/ Month
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 pt-2">
                      {plans[1].features?.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Image
                            src="/images/tick.png"
                            alt="tick"
                            width={20}
                            height={20}
                            className="w-4 h-4 flex-shrink-0 mt-0.5"
                          />
                          <span className="text-white flex justify-center items-center gap-2 text-xs leading-relaxed">{feature} <CircleAlert size={14} /></span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => setIsTrialOpen(true)}
                    className="bg-gradient-to-r from-[#F462F3] via-[#F462F3] to-[#7B50FE] px-6 py-2.5 rounded-full font-semibold text-sm text-white hover:opacity-90 transition w-full mt-4"
                  >
                    Start Free Trial
                  </button>
                </div>
              </div>
              <p className="text-gray-300 text-xs text-left mt-4">
                {plans[1].offer}
              </p>
            </div>
          </div>
        </section>

        {/* Invoice Processing Section */}
        <section ref={invoiceRef} className="relative w-full py-12 md:py-20 bg-[#020D2D] overflow-hidden">
          <div className="container mx-auto flex flex-col items-center justify-center gap-12 max-w-7xl px-8">
            <div className="w-full max-w-2xl mt-8">
              <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-8">
                {plans[2].name}
              </h2>
              <div className="relative rounded-2xl p-8 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className=" h-full min-w-5xl rounded-full bg-[radial-gradient(circle_at_center,_#064E3B_0%,_transparent_75%)] blur-[70px]"
                  />
                </div>
                <div className="absolute inset-0 border border-white/20 rounded-2xl backdrop-blur-xl" />
                <div className="relative flex flex-col gap-8 justify-between">
                  <div className="relative space-y-8">
                    <div className="inline-block">
                      <div className="bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full border border-white/10">
                        <span className="text-white font-semibold text-sm">
                          {plans[2].label}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-semibold text-white">
                        ${plans[2].price}/ Month
                      </div>
                      <p className="text-gray-300 text-xs">
                        {plans[2].offer}
                      </p>
                    </div>
                    <div className="flex flex-col gap-4 pt-2">
                      {plans[2].features?.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Image
                            src="/images/tick.png"
                            alt="tick"
                            width={20}
                            height={20}
                            className="w-4 h-4 flex-shrink-0 mt-0.5"
                          />
                          <span className="text-white flex justify-center items-center gap-2 text-xs leading-relaxed">{feature} <CircleAlert size={14} /></span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => setIsTrialOpen(true)}
                    className="bg-gradient-to-r from-[#F462F3] via-[#F462F3] to-[#7B50FE] px-6 py-2.5 rounded-full font-semibold text-sm text-white hover:opacity-90 transition w-full mt-4"
                  >
                    Start Free Trial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {isTrialOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-[101]"
            onClick={() => setIsTrialOpen(false)}
          />
          <div className="fixed inset-0 flex items-center justify-center z-[102] pointer-events-none">
            <div className="bg-[#1b2542] border border-white/50 text-white rounded-2xl p-8 max-w-xl w-full shadow-2xl mx-4 pointer-events-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Start Free Trial</h2>
                <button
                  onClick={() => setIsTrialOpen(false)}
                  className="text-white/50 p-2 hover:opacity-80 transition-opacity"
                  aria-label="Close trial form"
                >
                  <X size={24} />
                </button>
              </div>
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full py-2 text-sm bg-transparent text-white placeholder-white border-b border-white focus:outline-none focus:border-white/50 transition"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full py-2 text-sm bg-transparent text-white placeholder-white border-b border-white focus:outline-none focus:border-white/50 transition"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full py-2 text-sm bg-transparent text-white placeholder-white border-b border-white focus:outline-none focus:border-white/50 transition"
                />
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full py-2 text-sm bg-transparent text-white placeholder-white border-b border-white focus:outline-none focus:border-white/50 transition"
                />
                <div className="space-y-2">
                  <label className="block text-white/70 text-sm font-semibold">
                    Select Services
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="accent-purple-500 w-4 h-4" />
                      <span className="text-white text-sm">Online Order Management</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="accent-purple-500 w-4 h-4" />
                      <span className="text-white text-sm">Video + Transaction Analytics</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="accent-purple-500 w-4 h-4" />
                      <span className="text-white text-sm">AI-Based Invoice Processing</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="accent-purple-500 w-4 h-4" />
                      <span className="text-white text-sm">Surveillance Monitoring</span>
                    </label>
                  </div>
                </div>
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full py-2 text-sm bg-transparent text-white placeholder-white border-b border-white focus:outline-none focus:border-white/50 transition"
                ></textarea>
                <button
                  type="submit"
                  className="w-full rounded-full py-3 tracking-wide text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{
                    background:
                      'linear-gradient(95.49deg, #F462F3 52.87%, #7B50FE 106.28%)',
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  )
}