'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-x-hidden py-12">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ff41]/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff41]/10 border border-[#00ff41]/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00ff41] animate-pulse"></span>
            <span className="text-xs font-mono text-[#00ff41] tracking-widest">SYSTEM ONLINE</span>
          </div>

          {/* Logo/Görsel */}
          <div className="mb-10 flex justify-center">
            <div className="relative w-48 h-48 rounded-2xl border-2 border-[#00ff41]/30 bg-gradient-to-br from-black to-[#00ff41]/5 p-6 shadow-[0_0_40px_rgba(0,255,65,0.3)]">
              <img
                src="/images/trenchor.png"
                alt="Trenchor Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
            <span className="text-[#00ff41] animate-pulse">TRENCHOR</span>
            <span className="text-cyan-400 animate-pulse" style={{ animationDelay: '0.3s' }}> BASE</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed font-light mb-10">
            Advanced trading analytics and campaign management platform for the Virtual Protocol ecosystem on Base Chain.
          </p>


        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-20 text-left">
          <div className="p-6 rounded-2xl bg-[#0d1520] border border-white/5 hover:border-[#00ff41]/30 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-[#00ff41]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-[#00ff41]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Real-time Analytics</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Track price movements, volume, and liquidity changes instantly with our advanced terminal interface.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0d1520] border border-white/5 hover:border-[#00ff41]/30 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Campaign Rewards</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Participate in trading campaigns, track your ranking, and earn rewards for your trading activity.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0d1520] border border-white/5 hover:border-[#00ff41]/30 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Bot Filtering</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Our proprietary algorithms filter out bot activity to show true organic trading volume and movements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
