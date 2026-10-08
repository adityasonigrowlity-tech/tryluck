import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bell,
  Check,
  ChevronDown,
  CircleHelp,
  Command,
  Instagram,
  LayoutDashboard,
  Mail,
  MessageCircle,
  MousePointer2,
  Plus,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import HeroScene from "@/components/hero-scene";

const leads = [
  { initials: "AK", name: "Aarav Khanna", company: "Northstar Studio", source: "Website", stage: "New lead", color: "mint", time: "2 min ago" },
  { initials: "SM", name: "Sara Mehta", company: "Mehta Wellness", source: "Instagram", stage: "Follow up", color: "lavender", time: "18 min ago" },
  { initials: "RV", name: "Rohan Verma", company: "Verma & Co.", source: "Referral", stage: "In conversation", color: "peach", time: "1 hr ago" },
];

function Brand({ small = false }: { small?: boolean }) {
  return (
    <a className={`brand ${small ? "brand-small" : ""}`} href="#top" aria-label="TryUrLuck home">
      <span className="brand-mark"><span /></span>
      <span>tryur<span className="brand-light">luck</span></span>
    </a>
  );
}

export default function Home() {
  return (
    <main id="top">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <nav className="nav-shell">
        <Brand />
        <div className="nav-links">
          <a href="#product">Product</a>
          <a href="#how-it-works">How it works</a>
          <a href="#pricing">Pricing</a>
        </div>
        <div className="nav-actions">
          <a className="login-link" href="#get-started">Log in</a>
          <a className="button button-nav" href="#get-started">Get early access <ArrowUpRight size={15} /></a>
        </div>
        <a className="mobile-menu" href="#get-started" aria-label="Get early access"><ArrowUpRight /></a>
      </nav>

      <section className="hero section-wrap">
        <div className="hero-copy">
          <a className="announce glass" href="#product">
            <span className="live-dot" /> A little luck. A lot more follow-through.
            <span className="announce-arrow"><ArrowRight size={13} /></span>
          </a>
          <h1>Your next customer<br />is <span className="gradient-text">closer than you think.</span></h1>
          <p className="hero-subtitle">A calmer way to catch every lead, remember every follow-up, and grow your business—without another spreadsheet.</p>
          <div className="hero-ctas">
            <a className="button button-primary" href="#get-started">Get early access <ArrowRight size={16} /></a>
            <a className="text-button" href="#product"><span className="play-icon"><ArrowDown size={14} /></span> See how it works</a>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack"><span>A</span><span>N</span><span>R</span><span>+</span></div>
            <span>Built for the people building things.<br /><b>Made for your next big break.</b></span>
          </div>
        </div>
        <div className="hero-visual" aria-label="GrowDesk lead management dashboard preview">
          <HeroScene />
          <div className="dashboard-shell glass">
            <div className="dashboard-topbar">
              <div className="dash-brand"><span className="mini-mark"><TrendingUp size={13} /></span> growdesk <span className="dash-workspace">/ overview</span></div>
              <div className="dash-top-actions"><span className="dash-search"><Search size={13} /> <span>Search...</span> <kbd>⌘ K</kbd></span><Bell size={15} /><span className="dash-user">A</span></div>
            </div>
            <div className="dashboard-body">
              <aside className="dash-sidebar">
                <div className="workspace-switch"><span className="workspace-icon">S</span><span><b>Studio Aditya</b><small>Free workspace</small></span><ChevronDown size={13} /></div>
                <div className="sidebar-label">WORKSPACE</div>
                <div className="side-item side-active"><LayoutDashboard size={14} /> Overview</div>
                <div className="side-item"><Users size={14} /> All leads <span className="side-count">24</span></div>
                <div className="side-item"><Target size={14} /> Pipeline</div>
                <div className="side-item"><MessageCircle size={14} /> Follow-ups <span className="side-ping" /></div>
                <div className="sidebar-label sidebar-label-lower">YOUR TOOLS</div>
                <div className="side-item"><Sparkles size={14} /> Growth assistant</div>
                <div className="side-item"><CircleHelp size={14} /> Help & support</div>
                <div className="sidebar-bottom"><div className="upgrade-glyph"><Zap size={13} fill="currentColor" /></div><div><b>Ready for more?</b><small>See what Pro can do.</small></div><ArrowUpRight size={13} /></div>
              </aside>
              <div className="dash-main">
                <div className="dash-greeting"><div><div className="eyebrow dash-date">TUESDAY, OCTOBER 8</div><h3>Good morning, Aditya <span>✦</span></h3><p>Here’s what’s happening with your growth.</p></div><button className="add-lead"><Plus size={13} /> Add a lead</button></div>
                <div className="metric-grid">
                  <div className="metric-card"><span className="metric-label">TOTAL LEADS <span className="metric-icon mint-icon"><Users size={12} /></span></span><strong>128</strong><span className="metric-change"><TrendingUp size={11} /> 18.4% <i>vs. last month</i></span></div>
                  <div className="metric-card"><span className="metric-label">IN CONVERSATION <span className="metric-icon purple-icon"><MessageCircle size={12} /></span></span><strong>32</strong><span className="metric-change"><TrendingUp size={11} /> 12.2% <i>vs. last month</i></span></div>
                  <div className="metric-card"><span className="metric-label">FOLLOW-UPS DUE <span className="metric-icon orange-icon"><Bell size={12} /></span></span><strong>08</strong><span className="metric-due"><span className="due-dot" /> 3 due today</span></div>
                </div>
                <div className="chart-card">
                  <div className="chart-heading"><div><b>Lead activity</b><span>Keep the momentum going</span></div><button>This month <ChevronDown size={12} /></button></div>
                  <div className="chart-area"><div className="chart-y"><span>40</span><span>30</span><span>20</span><span>10</span></div><div className="chart-graph"><div className="gridline g1" /><div className="gridline g2" /><div className="gridline g3" /><div className="gridline g4" /><svg viewBox="0 0 500 110" preserveAspectRatio="none" aria-label="Lead activity trending upward"><defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#a995ff" stopOpacity=".28" /><stop offset="100%" stopColor="#a995ff" stopOpacity="0" /></linearGradient></defs><path d="M0 88 C25 82 29 60 63 68 S99 77 119 55 S150 54 174 61 S198 39 226 46 S261 63 283 43 S313 44 335 34 S367 48 386 27 S415 39 437 20 S471 32 500 8 L500 110 L0 110Z" fill="url(#chartFill)" /><path d="M0 88 C25 82 29 60 63 68 S99 77 119 55 S150 54 174 61 S198 39 226 46 S261 63 283 43 S313 44 335 34 S367 48 386 27 S415 39 437 20 S471 32 500 8" fill="none" stroke="#b7a7ff" strokeWidth="2.2" vectorEffect="non-scaling-stroke" /></svg><div className="chart-tooltip"><span>SEP 24</span><b>+18 leads</b></div><div className="chart-x"><span>Sep 01</span><span>Sep 08</span><span>Sep 15</span><span>Sep 22</span><span>Sep 30</span></div></div></div>
                </div>
                <div className="leads-card"><div className="leads-heading"><b>Recent leads</b><a href="#product">View all <ArrowRight size={12} /></a></div>{leads.map((lead) => <div className="lead-row" key={lead.name}><span className={`lead-avatar ${lead.color}`}>{lead.initials}</span><span className="lead-name"><b>{lead.name}</b><small>{lead.company}</small></span><span className="lead-source">{lead.source}</span><span className={`lead-stage stage-${lead.color}`}><span />{lead.stage}</span><span className="lead-time">{lead.time}</span></div>)}</div>
              </div>
            </div>
            <div className="dash-bottom-bar"><span><span className="online-dot" /> All systems feeling lucky</span><span>Made for momentum <span className="tiny-spark">✦</span></span></div>
          </div>
          <div className="float-card follow-card glass"><span className="float-icon"><Bell size={15} /></span><span><b>Follow-up, remembered.</b><small>Every opportunity stays warm.</small></span><span className="float-check"><Check size={12} /></span></div>
          <div className="float-card growth-card glass"><span className="growth-arrow"><TrendingUp size={17} /></span><span><small>YOUR GROWTH SCORE</small><b>Looking up <span>↗</span></b></span></div>
          <div className="sparkle sparkle-a">✦</div><div className="sparkle sparkle-b">✳</div>
        </div>
        <div className="hero-bottom-note"><span className="scroll-line" /> <span>SCROLL TO FIND YOUR NEXT</span><ArrowDown size={13} /></div>
      </section>

      <section className="trust-strip section-wrap">
        <span className="trust-label">BIG AMBITIONS, SMALL TEAMS</span>
        <div className="trust-faces"><span>AK</span><span>SM</span><span>RV</span><span>PS</span><span>+</span></div>
        <p>Built for independent minds, freelancers &amp; teams of one.</p>
        <span className="trust-star">✳</span>
      </section>

      <section className="feature-section section-wrap" id="product">
        <div className="section-heading"><span className="eyebrow"><span className="eyebrow-dot" /> THE LUCK IS IN THE FOLLOW-THROUGH</span><h2>Good things happen<br />when nothing <span className="gradient-text">slips through.</span></h2><p>You’re great at what you do. GrowDesk makes sure more people find out.</p></div>
        <div className="feature-grid" id="how-it-works">
          <article className="feature-card feature-large glass"><div className="feature-copy"><span className="feature-number">01 / CATCH</span><div className="feature-icon feature-icon-purple"><MousePointer2 size={18} /></div><h3>Every lead,<br />in one lucky place.</h3><p>Website forms, referrals, DMs—you don’t have to remember where it all started. Your leads come to you.</p></div><div className="mini-inbox"><div className="mini-inbox-head"><span className="inbox-brand"><span className="mini-mark"><TrendingUp size={10} /></span> growdesk inbox</span><span className="inbox-count">+3 new</span></div><div className="inbox-item"><span className="inbox-avatar inbox-a">N</span><span><b>New website inquiry</b><small>Northstar Studio · just now</small></span><span className="inbox-new" /></div><div className="inbox-item"><span className="inbox-avatar inbox-b">M</span><span><b>Instagram message</b><small>Mehta Wellness · 4m ago</small></span><span className="inbox-new" /></div><div className="inbox-item"><span className="inbox-avatar inbox-c">V</span><span><b>Referral from Priya</b><small>Verma &amp; Co. · 25m ago</small></span><span className="inbox-new" /></div><div className="inbox-progress"><span>YOUR INBOX IS UP TO DATE</span><span>03 / 03</span></div></div></article>
          <article className="feature-card glass feature-follow"><span className="feature-number">02 / FOLLOW THROUGH</span><div className="feature-icon feature-icon-mint"><Zap size={17} /></div><h3>Show up at<br />just the right time.</h3><p>Set a gentle reminder. Keep the conversation going. Be the one they remember.</p><div className="reminder-widget"><div className="reminder-top"><span><span className="reminder-dot" /> UP NEXT</span><span>TODAY · 2:30 PM</span></div><div className="reminder-person"><span className="lead-avatar lavender">SM</span><span><b>Follow up with Sara</b><small>Share the project proposal</small></span><button><Check size={13} /></button></div><div className="reminder-progress"><span /></div></div></article>
          <article className="feature-card glass feature-grow"><span className="feature-number">03 / GROW</span><div className="feature-icon feature-icon-orange"><TrendingUp size={17} /></div><h3>Small wins<br />add up fast.</h3><p>See what’s working, spot what’s next, and build a business that keeps moving.</p><div className="growth-mini"><div className="growth-mini-top"><span>LEADS THIS MONTH</span><b>+24.8% <TrendingUp size={12} /></b></div><div className="growth-bars"><i style={{height:"30%"}}/><i style={{height:"48%"}}/><i style={{height:"38%"}}/><i style={{height:"64%"}}/><i style={{height:"54%"}}/><i style={{height:"77%"}}/><i style={{height:"62%"}}/><i style={{height:"91%"}}/><i style={{height:"75%"}}/><i style={{height:"100%"}}/></div><div className="growth-months"><span>AUG 01</span><span>AUG 15</span><span>AUG 30</span></div></div></article>
        </div>
      </section>

      <section className="quote-section section-wrap">
        <div className="quote-orb"><span>✳</span></div><div className="quote-content"><span className="eyebrow">A LITTLE MORE YOU, A LOT LESS ADMIN</span><blockquote>“You didn’t start your business to chase spreadsheets. You started it to do work that matters.”</blockquote><div className="quote-author"><span className="author-avatar">A</span><span><b>Aditya</b><small>Founder, TryUrLuck</small></span><span className="quote-line" /></div></div><div className="quote-stat"><span className="stat-spark">✦</span><b>More time<br />for the work<br /><span>you love.</span></b><small>THAT’S THE WHOLE IDEA.</small></div>
      </section>

      <section className="cta-section section-wrap" id="get-started"><div className="cta-card glass"><div className="cta-glow" /><div className="cta-icon"><Sparkles size={20} /></div><span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span><h2>Ready to make<br />your own <span className="gradient-text">luck?</span></h2><p>Get early access to GrowDesk. Your business has places to go.</p><form className="signup-form" action="#get-started"><div className="input-wrap"><Mail size={16} /><input type="email" placeholder="Your work email" aria-label="Your work email" required /><button type="submit">Get early access <ArrowRight size={15} /></button></div></form><span className="cta-note"><Check size={12} /> No credit card. No complicated setup. Just a better way forward.</span></div></section>

      <section className="pricing-section section-wrap" id="pricing"><div><span className="eyebrow">SIMPLE ON PURPOSE</span><h2>More momentum.<br /><span className="gradient-text">Less overhead.</span></h2><p>Start free. Grow when you’re ready.</p></div><div className="pricing-card glass"><div className="pricing-top"><span>EARLY ACCESS</span><span className="pricing-pill"><span /> LIMITED SPOTS</span></div><div className="price"><b>Free</b><span>while we’re building together</span></div><p>Everything you need to get your next customer over the line.</p><ul><li><Check size={14} /> Up to 50 leads</li><li><Check size={14} /> Simple sales pipeline</li><li><Check size={14} /> Follow-up reminders</li><li><Check size={14} /> Growth snapshot</li></ul><a className="button button-primary pricing-button" href="#get-started">Join the early list <ArrowRight size={15} /></a><span className="pricing-foot">Made with care by TryUrLuck · tryurluckaditya.in</span></div></section>

      <footer className="footer section-wrap"><div className="footer-top"><div className="footer-brand"><Brand small /><p>A little luck. A lot more follow-through.<br />A product by Aditya.</p></div><div className="footer-links"><a href="#product">Product</a><a href="#how-it-works">How it works</a><a href="#pricing">Pricing</a><a href="mailto:hello@tryurluckaditya.in">Contact</a></div><div className="social-links"><a href="https://www.instagram.com/" aria-label="Instagram"><Instagram size={15} /></a><a href="mailto:hello@tryurluckaditya.in" aria-label="Email"><Mail size={15} /></a><a href="#top" aria-label="Back to top"><ArrowUpRight size={15} /></a></div></div><div className="footer-bottom"><span>© 2026 TryUrLuck by Aditya. Made for momentum.</span><span>NO GAMBLING REQUIRED <span className="footer-star">✳</span></span></div></footer>
    </main>
  );
}
