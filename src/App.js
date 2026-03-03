import React, { useState } from 'react';
import { 
  Shield, 
  Check,
  Star,
  Plane,
  ChevronRight,
  Award,
  Zap,
  Smartphone,
  ShoppingBag,
  Lightbulb,
  CreditCard
} from 'lucide-react';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Specific Indian Credit Card Data
  const cardProducts = [
    // Lifetime Free Collection
    {
      id: 'kiwi-rupay',
      name: 'Kiwi RuPay',
      brand: 'kiwi',
      category: 'Lifetime Free',
      cardNumber: '**** **** **** 8821',
      annualFee: '₹0 (Lifetime Free)',
      colors: 'from-emerald-600 via-green-700 to-green-950',
      glow1: 'bg-emerald-500',
      glow2: 'bg-green-500',
      icon: Smartphone,
      popular: true,
      features: [
        'Lifetime Free: No joining/annual fee.',
        'Scan & Pay: Use UPI with Credit Card.',
        '5% Cashback on all UPI scans.'
      ]
    },
    {
      id: 'hdfc-pixel',
      name: 'HDFC Pixel Play',
      brand: 'PIXEL PLAY',
      category: 'Lifetime Free',
      cardNumber: '**** **** **** 4242',
      annualFee: '₹0 (Lifetime Free)',
      colors: 'from-blue-600 via-indigo-700 to-indigo-950',
      glow1: 'bg-blue-500',
      glow2: 'bg-indigo-500',
      icon: Zap,
      popular: false,
      features: [
        'Lifetime Free Digital Card.',
        'Customize billing cycle via App.',
        '5% Cashback on online spends.'
      ]
    },
    
    // Travel & Luxury
    {
      id: 'federal-scapia',
      name: 'Federal Scapia',
      brand: 'scapia',
      category: 'Travel & Luxury',
      cardNumber: '**** **** **** 1024',
      annualFee: '₹0 (Lifetime Free)',
      colors: 'from-orange-500 via-red-600 to-rose-950',
      glow1: 'bg-orange-500',
      glow2: 'bg-red-500',
      icon: Plane,
      popular: true,
      features: [
        'Unlimited Lounge Access (Domestic).',
        'Zero Forex Markup worldwide.',
        '20% Rewards on Scapia App travel bookings.'
      ]
    },
    {
      id: 'au-zenith-plus',
      name: 'AU Zenith+ (Metal)',
      brand: 'ZENITH+',
      category: 'Travel & Luxury',
      cardNumber: '**** **** **** 9999',
      annualFee: '₹4,999 + Taxes',
      colors: 'from-zinc-700 via-zinc-900 to-black',
      glow1: 'bg-zinc-500',
      glow2: 'bg-gray-600',
      border: 'border-zinc-700',
      icon: Award,
      popular: false,
      features: [
        'Taj Epicure Membership Included.',
        'Lowest Forex (0.99%) & Global Lounges.',
        'Golf Games & Luxury Vouchers.'
      ]
    },

    // Rewards & Shopping
    {
      id: 'yes-pop',
      name: 'Yes Bank Pop',
      brand: 'POP',
      category: 'Rewards & Shopping',
      cardNumber: '**** **** **** 2024',
      annualFee: '₹399 + Taxes',
      colors: 'from-pink-600 via-rose-700 to-red-950',
      glow1: 'bg-pink-500',
      glow2: 'bg-rose-500',
      icon: ShoppingBag,
      popular: false,
      features: [
        '5% Unlimited Cashback.',
        'Unlimited Shopping Vouchers.'
      ]
    },
    {
      id: 'au-altura-plus',
      name: 'AU Altura+',
      brand: 'Altura+',
      category: 'Rewards & Shopping',
      cardNumber: '**** **** **** 7777',
      annualFee: '₹499 + Taxes',
      colors: 'from-purple-600 via-violet-700 to-indigo-950',
      glow1: 'bg-purple-500',
      glow2: 'bg-violet-500',
      icon: CreditCard,
      popular: false,
      features: [
        '1.5% Cashback POS / 2X Online.',
        '2 Railway Lounge visits/qtr.'
      ]
    },
    {
      id: 'au-vetta',
      name: 'AU Vetta',
      brand: 'Vetta',
      category: 'Rewards & Shopping',
      cardNumber: '**** **** **** 3333',
      annualFee: '₹2,999 + Taxes',
      colors: 'from-amber-600 via-orange-700 to-stone-900',
      glow1: 'bg-amber-500',
      glow2: 'bg-orange-500',
      icon: Star,
      popular: false,
      features: [
        '4 Pts/₹100 on Grocery.',
        'Quarterly & Yearly Milestones.'
      ]
    },
    {
      id: 'axis-my-zone',
      name: 'AXIS My Zone',
      brand: 'MY ZONE',
      category: 'Rewards & Shopping',
      cardNumber: '**** **** **** 5577',
      annualFee: '₹500 + Taxes',
      colors: 'from-red-600 via-red-800 to-stone-950',
      glow1: 'bg-red-500',
      glow2: 'bg-rose-600',
      icon: Zap,
      popular: true,
      features: [
        'SonyLIV Premium annual subscription unlocked with first transaction in 30 days.',
        '100% off 2nd ticket via District app (max ₹200/month).',
        '1 complimentary domestic airport lounge visit per quarter.'
      ]
    },

    // Innovation & Smart EMI
    {
      id: 'au-lit',
      name: 'AU LIT (Customizable)',
      brand: 'LIT',
      category: 'Innovation',
      cardNumber: '**** **** **** 1111',
      annualFee: 'Customizable',
      colors: 'from-cyan-500 via-blue-700 to-slate-900',
      glow1: 'bg-cyan-400',
      glow2: 'bg-blue-500',
      icon: Lightbulb,
      popular: false,
      features: [
        'Switch Features On/Off via App.',
        'Up to 10X Rewards & 5% Cashback.',
        'Free ZEE5, Amazon Prime, cult.fit.'
      ]
    },
    {
      id: 'equitas-tiga',
      name: 'Equitas Tiga',
      brand: 'Tiga',
      category: 'Innovation',
      cardNumber: '**** **** **** 6666',
      annualFee: 'Check Details',
      colors: 'from-teal-600 via-emerald-800 to-green-950',
      glow1: 'bg-teal-500',
      glow2: 'bg-emerald-500',
      icon: Smartphone,
      popular: false,
      features: [
        '"Pay by 3": Auto-convert to EMI.',
        'Introductory APR 0.99% (3 months).',
        '3X Rewards on UPI & Contactless.'
      ]
    }
  ];

  const categories = ['All', 'Lifetime Free', 'Travel & Luxury', 'Rewards & Shopping', 'Innovation'];

  const filteredCards = selectedCategory === 'All' 
    ? cardProducts 
    : cardProducts.filter(card => card.category === selectedCategory);

  const handleApply = (cardName) => {
    const message = encodeURIComponent(`Hi Manish, I am interested in applying for the ${cardName} credit card.`);
    window.open(`https://wa.me/918441924720?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100 font-sans selection:bg-indigo-500/30">
      
      {/* Navigation - Simplified as requested */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 leading-tight">
                CREDIT & LOANS
              </span>
              <span className="text-[10px] text-gray-400 font-medium tracking-wide hidden sm:block">
                Your trusted partner for financial freedom
              </span>
            </div>
          </div>
          <div className="hidden sm:block">
             <span className="text-sm font-medium text-gray-400 tracking-widest uppercase">Credit Card Portal</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-12 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/20 rounded-full blur-[120px] -z-10"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Discover your next <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              premium credit card.
            </span>
          </h1>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Browse our curated collection of India's best credit cards. From lifetime free UPI cards to ultra-premium metal cards with unmatched travel perks.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cards Grid Showcase */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {filteredCards.map((card) => (
            <div 
              key={card.id} 
              className={`bg-[#12121a] border ${card.popular ? 'border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.1)]' : 'border-white/5'} rounded-3xl p-6 md:p-8 flex flex-col relative group hover:-translate-y-2 transition-transform duration-500`}
            >
              {card.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1 z-20 whitespace-nowrap">
                  <Star className="w-3.5 h-3.5 fill-white" /> Top Pick
                </div>
              )}

              {/* Card Visual Representation */}
              <div className={`relative h-56 rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-2xl mb-8 ${card.border || 'border border-white/10'}`}>
                {/* Background & Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.colors} z-0`}></div>
                <div className={`absolute -top-20 -right-20 w-48 h-48 ${card.glow1} rounded-full mix-blend-screen filter blur-[60px] opacity-60 group-hover:opacity-100 transition-opacity duration-700`}></div>
                <div className={`absolute -bottom-20 -left-20 w-48 h-48 ${card.glow2} rounded-full mix-blend-screen filter blur-[60px] opacity-60 group-hover:opacity-100 transition-opacity duration-700`}></div>
                
                {/* Glass overlay */}
                <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] z-0"></div>

                <div className="relative z-10 flex justify-between items-start">
                  <div className="text-white/80 font-bold tracking-widest text-lg">
                    {card.brand}
                  </div>
                  <svg className="w-8 h-8 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>

                <div className="relative z-10 font-mono text-xl tracking-[0.15em] text-white/90 mt-4">
                  {card.cardNumber}
                </div>

                <div className="relative z-10 mt-auto flex justify-between items-end">
                  <div>
                    <p className="text-[10px] text-white/60 uppercase tracking-widest mb-1">CLIENT</p>
                    <p className="text-sm font-semibold text-white tracking-wider">VALUED MEMBER</p>
                  </div>
                  {/* Fake Chip */}
                  <div className="w-10 h-8 rounded bg-gradient-to-br from-yellow-200 to-yellow-500 opacity-80 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-px bg-black/20"></div>
                  </div>
                </div>
              </div>

              {/* Card Details */}
              <div className="flex-1 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{card.name}</h3>
                  <div className="inline-block px-3 py-1 bg-white/5 rounded-md text-xs text-indigo-300 font-medium mb-2 border border-white/5">
                    {card.category}
                  </div>
                </div>

                <div className="mb-6 pb-6 border-b border-white/5">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Annual Fee</p>
                  <p className="text-lg font-semibold text-white">{card.annualFee}</p>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {card.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-indigo-500/20 p-1 flex-shrink-0">
                        <Check className="w-3 h-3 text-indigo-400" />
                      </div>
                      <span className="text-sm text-gray-300 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handleApply(card.name)}
                  className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                    card.popular 
                      ? 'bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40' 
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20'
                  }`}
                >
                  Apply Now <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#12121a] border-t border-white/5 py-16 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-green-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-3">CREDIT & LOANS</h2>
          <p className="text-lg text-gray-400 mb-10">Your trusted partner for financial freedom.</p>
          
          <div className="inline-flex flex-col items-center bg-[#0a0a0f] border border-white/10 rounded-3xl p-8 shadow-2xl relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl opacity-20 group-hover:opacity-40 transition duration-500 blur"></div>
            <div className="relative flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center mb-5 shadow-lg shadow-green-500/25">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </div>
              <p className="text-xs text-green-400 font-bold tracking-widest uppercase mb-1">Manager</p>
              <h3 className="text-2xl font-bold text-white mb-2">Manish Malviya</h3>
              <a href="https://wa.me/918441924720" target="_blank" rel="noopener noreferrer" className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 hover:from-green-300 hover:to-emerald-200 transition-all mb-4">
                +91 8441924720
              </a>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-sm text-green-400 font-medium">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                Available on WhatsApp
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Footer Area */}
      <footer className="border-t border-white/5 bg-[#0a0a0f] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-50">
            <Shield className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-400">Secure Application Portal</span>
          </div>
          <p className="text-xs text-gray-600 text-center md:text-right max-w-xl">
            *Rates and terms are subject to change. Approval is subject to credit check and income verification. KBS Bank is a Member FDIC.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default App;