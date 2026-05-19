// Launch Plan, Go-to-Market Strategy & SEO Optimization Module
// This file dynamically injects the Launch, GTM, and SEO sections into the main roadmap page.

document.addEventListener('DOMContentLoaded', () => {
    const insertionPoint = document.getElementById('launch-gtm-seo-anchor');
    if (!insertionPoint) return;

    insertionPoint.innerHTML = `

    <!-- ==================== LAUNCH PLAN ==================== -->
    <section class="section plan-section" id="launch-plan">
        <h2 class="section-title"><i class="fa-solid fa-rocket highlight"></i> Launch Plan (Days 46–60)</h2>
        <p class="section-subtitle">A phased deployment strategy to minimize risk and maximize early traction.</p>

        <div class="phase-card">
            <h3>Phase 1: Pre-Launch Infrastructure (Days 46–50)</h3>
            <div class="details">
                <h4>1. Production Environment Setup</h4>
                <p><strong>DNS & Domain:</strong> Point afrostardom.com to production servers. Configure SSL/TLS (HTTPS) via Let's Encrypt or Cloudflare.<br>
                <strong>CDN:</strong> Deploy CloudFront or Cloudflare CDN for global media delivery (video shoutouts, merch images). Target: &lt;200ms TTFB in Lagos, London, and New York.<br>
                <strong>Database:</strong> Migrate from staging DB to production (PostgreSQL/MySQL). Ensure all test/dummy data is purged. Seed only verified creator profiles.</p>
                <label class="task"><input type="checkbox" data-id="l_1_1"><span class="custom-cb"></span> Verify production DNS propagation and SSL certificates are live.</label>
                <label class="task"><input type="checkbox" data-id="l_1_2"><span class="custom-cb"></span> Confirm CDN caching rules are set correctly for video and image assets.</label>
                <label class="task"><input type="checkbox" data-id="l_1_3"><span class="custom-cb"></span> Purge all test users, dummy transactions, and placeholder content from production DB.</label>

                <h4>2. Monitoring & Alerting</h4>
                <p><strong>Error Tracking:</strong> Deploy Sentry (or Bugsnag) for real-time frontend and backend error monitoring.<br>
                <strong>Uptime:</strong> Configure UptimeRobot or Pingdom to monitor all critical endpoints (/api/auth, /api/checkout, /api/creators).<br>
                <strong>Performance:</strong> Set up New Relic or Datadog APM to track API response times. Alert threshold: any endpoint exceeding 500ms avg response.</p>
                <label class="task"><input type="checkbox" data-id="l_1_4"><span class="custom-cb"></span> Sentry integrated and capturing errors on both FE and BE.</label>
                <label class="task"><input type="checkbox" data-id="l_1_5"><span class="custom-cb"></span> Uptime monitoring configured for all critical API routes.</label>
            </div>
        </div>

        <div class="phase-card">
            <h3>Phase 2: Closed Beta / Soft Launch (Days 51–55)</h3>
            <div class="details">
                <h4>1. Beta Cohort Selection</h4>
                <p>Invite 50–100 users across all personas:<br>
                <strong>15–20 Creators:</strong> Spread across core categories (Musicians, Actors, Comedians, Athletes). Must complete full onboarding and list at least 1 offering.<br>
                <strong>50–70 Fans:</strong> Recruited from creator social media audiences. Must attempt at least 1 real transaction.<br>
                <strong>5–10 Internal Admins:</strong> Test KYC approval queues, dispute resolution, and payout processing with real escrow flows.</p>
                <label class="task"><input type="checkbox" data-id="l_2_1"><span class="custom-cb"></span> Recruit and onboard minimum 15 real creators across 5+ categories.</label>
                <label class="task"><input type="checkbox" data-id="l_2_2"><span class="custom-cb"></span> Execute minimum 20 real end-to-end transactions (booking → payment → delivery).</label>
                <label class="task"><input type="checkbox" data-id="l_2_3"><span class="custom-cb"></span> Admin team successfully processes at least 5 real creator payouts.</label>

                <h4>2. Beta Feedback Collection</h4>
                <p><strong>In-app:</strong> Deploy a lightweight feedback widget (e.g., Canny or Hotjar) to capture UX friction points.<br>
                <strong>Exit Surveys:</strong> After each transaction, prompt fans with a 1-question NPS survey ("How easy was this booking?").<br>
                <strong>Bug Triage:</strong> All beta bugs logged in Jira/Linear. P0 bugs must be resolved within 24 hours.</p>
                <label class="task"><input type="checkbox" data-id="l_2_4"><span class="custom-cb"></span> Feedback widget deployed and collecting real user submissions.</label>
                <label class="task"><input type="checkbox" data-id="l_2_5"><span class="custom-cb"></span> All P0 bugs from beta resolved. P1 bugs triaged and scheduled.</label>
            </div>
        </div>

        <div class="phase-card">
            <h3>Phase 3: Load Testing & Final QA (Days 56–58)</h3>
            <div class="details">
                <h4>1. Performance Stress Tests</h4>
                <p><strong>Tool:</strong> Use k6 or Artillery to simulate concurrent user load.<br>
                <strong>Target Scenarios:</strong><br>
                – 500 concurrent fans browsing the creator marketplace.<br>
                – 100 concurrent video shoutout uploads from creators.<br>
                – 200 concurrent auction bids in the final 30 seconds of an auction.<br>
                – Live event stream with 1,000 concurrent viewers + active chat.</p>
                <label class="task"><input type="checkbox" data-id="l_3_1"><span class="custom-cb"></span> Load test passed: 500 concurrent browsing users with &lt;1s page load.</label>
                <label class="task"><input type="checkbox" data-id="l_3_2"><span class="custom-cb"></span> Load test passed: Auction system handles 200 concurrent bids with zero race conditions.</label>
                <label class="task"><input type="checkbox" data-id="l_3_3"><span class="custom-cb"></span> Load test passed: Live event stream stable at 1,000 concurrent viewers.</label>

                <h4>2. Cross-Browser & Mobile QA Pass</h4>
                <p>Full regression test on: Chrome, Safari, Firefox, Samsung Internet.<br>
                Mobile devices: iPhone (Safari), Android (Chrome). Verify all checkout modals, video players, and calendar UIs render correctly.<br>
                <strong>Critical:</strong> The primary African audience is mobile-first. Mobile UX is non-negotiable.</p>
                <label class="task"><input type="checkbox" data-id="l_3_4"><span class="custom-cb"></span> Full cross-browser QA pass completed (Chrome, Safari, Firefox, Samsung Internet).</label>
                <label class="task"><input type="checkbox" data-id="l_3_5"><span class="custom-cb"></span> Mobile QA pass completed (iOS Safari + Android Chrome).</label>
            </div>
        </div>

        <div class="phase-card">
            <h3>Phase 4: Public Launch (Days 59–60)</h3>
            <div class="details">
                <h4>1. Go-Live Readiness Checklist</h4>
                <p>This is the final gate. All items must be checked before flipping the switch.</p>
                <label class="task"><input type="checkbox" data-id="l_4_1"><span class="custom-cb"></span> Payment gateways (Stripe + Paystack) are processing real transactions.</label>
                <label class="task"><input type="checkbox" data-id="l_4_2"><span class="custom-cb"></span> Email/SMS notifications working (SendGrid/Twilio) for all transaction types.</label>
                <label class="task"><input type="checkbox" data-id="l_4_3"><span class="custom-cb"></span> Admin dashboard fully operational (KYC, payouts, disputes, moderation).</label>
                <label class="task"><input type="checkbox" data-id="l_4_4"><span class="custom-cb"></span> Creator payout logic verified end-to-end with real bank accounts.</label>
                <label class="task"><input type="checkbox" data-id="l_4_5"><span class="custom-cb"></span> Terms of Service, Privacy Policy, and Auction Rules legally reviewed and published.</label>
                <label class="task"><input type="checkbox" data-id="l_4_6"><span class="custom-cb"></span> GDPR / NDPR (Nigeria Data Protection Regulation) compliance confirmed.</label>

                <h4>2. Post-Launch War Room (First 72 Hours)</h4>
                <p>Developers and support on standby. Monitor Sentry error dashboard, payment failure rates, and server CPU/memory.<br>
                Immediate rollback plan documented if a critical P0 is discovered in production.<br>
                Dedicated Slack/Discord channel for real-time incident response.</p>
                <label class="task"><input type="checkbox" data-id="l_4_7"><span class="custom-cb"></span> War room channel created and team notified of on-call schedule.</label>
                <label class="task"><input type="checkbox" data-id="l_4_8"><span class="custom-cb"></span> Rollback deployment plan documented and tested.</label>
            </div>
        </div>
    </section>

    <!-- ==================== GO-TO-MARKET STRATEGY ==================== -->
    <section class="section plan-section" id="gtm-plan">
        <h2 class="section-title"><i class="fa-solid fa-bullhorn highlight"></i> Go-to-Market (GTM) Strategy</h2>
        <p class="section-subtitle">A three-wave acquisition strategy targeting African creators and their global fanbases.</p>

        <div class="phase-card">
            <h3>Wave 1: Supply-Side First — Creator Acquisition (Pre-Launch → Week 2)</h3>
            <div class="details">
                <h4>1. Anchor Creator Program</h4>
                <p>Identify and personally onboard 5–10 "anchor" creators — mid-tier African celebrities (50K–500K followers) who are active on Instagram, TikTok, and X.<br>
                <strong>Value Prop:</strong> Offer 0% platform commission for the first 90 days. Provide white-glove onboarding (video call setup, profile optimization, pricing strategy advice).<br>
                <strong>Goal:</strong> These anchors generate organic demand by promoting their Afrostardom profiles to their own audiences.</p>
                <label class="task"><input type="checkbox" data-id="g_1_1"><span class="custom-cb"></span> Identify and reach out to 20+ potential anchor creators across Music, Comedy, Sports.</label>
                <label class="task"><input type="checkbox" data-id="g_1_2"><span class="custom-cb"></span> Secure commitments from minimum 5 anchor creators before public launch.</label>
                <label class="task"><input type="checkbox" data-id="g_1_3"><span class="custom-cb"></span> Complete white-glove onboarding for all anchor creators (profiles live, pricing set).</label>

                <h4>2. Creator Referral Engine</h4>
                <p>Build a referral system: every onboarded creator gets a unique invite link. For every new creator they bring, both earn a bonus (e.g., $50 credit or reduced commission for 30 days).</p>
                <label class="task"><input type="checkbox" data-id="g_1_4"><span class="custom-cb"></span> Creator referral tracking system built and tested.</label>
            </div>
        </div>

        <div class="phase-card">
            <h3>Wave 2: Demand-Side — Fan Acquisition (Week 1 → Week 8)</h3>
            <div class="details">
                <h4>1. Social Media Launch Campaign</h4>
                <p><strong>Content Strategy:</strong> Anchor creators post "My Afrostardom is LIVE — book me now!" across their channels. Platform provides pre-made templates (story cards, Reels scripts, tweet threads).<br>
                <strong>Hashtag:</strong> #MyAfrostardom — UGC campaign encouraging fans to share their received shoutout videos.<br>
                <strong>Paid Ads:</strong> Run targeted Meta (Instagram/Facebook) ads in Nigeria, Ghana, Kenya, South Africa, UK, and US diaspora markets. Budget: Start with $500–$1,000/week, optimize based on CPA.</p>
                <label class="task"><input type="checkbox" data-id="g_2_1"><span class="custom-cb"></span> Social media launch templates (stories, Reels, tweets) created and distributed to creators.</label>
                <label class="task"><input type="checkbox" data-id="g_2_2"><span class="custom-cb"></span> Meta Ads campaign configured targeting African + diaspora markets.</label>

                <h4>2. PR & Media Outreach</h4>
                <p>Pitch launch story to: TechCabal, Techpoint Africa, Disrupt Africa, BellaNaija, and Pulse.ng.<br>
                Angle: "African Cameo alternative built for African talent." Emphasize the charitable partnership (Magdi Yacoub Foundation).</p>
                <label class="task"><input type="checkbox" data-id="g_2_3"><span class="custom-cb"></span> Press kit prepared (one-pager, founder bio, high-res screenshots, key stats).</label>
                <label class="task"><input type="checkbox" data-id="g_2_4"><span class="custom-cb"></span> Outreach sent to minimum 10 relevant publications.</label>

                <h4>3. Gifting & Viral Moments</h4>
                <p>Seed 50 free shoutout credits to micro-influencers and entertainment bloggers. When they post the received video, it acts as organic, trust-building content.</p>
                <label class="task"><input type="checkbox" data-id="g_2_5"><span class="custom-cb"></span> 50 free shoutout credits distributed. Track redemption and social shares.</label>
            </div>
        </div>

        <div class="phase-card">
            <h3>Wave 3: Retention & Growth (Week 4 → Ongoing)</h3>
            <div class="details">
                <h4>1. Email & Push Notification Drips</h4>
                <p><strong>For Fans:</strong> "Your favorite creator just listed a new offering!" — triggered by creator activity.<br>
                <strong>For Creators:</strong> Weekly earnings digest email with tips to increase bookings.<br>
                <strong>Tool:</strong> SendGrid or Customer.io for behavioral email automation.</p>
                <label class="task"><input type="checkbox" data-id="g_3_1"><span class="custom-cb"></span> Behavioral email drip sequences configured for fans and creators.</label>

                <h4>2. Seasonal Campaigns & Partnerships</h4>
                <p>Plan campaigns around key cultural moments: Detty December, Valentine's Day ("Gift a Shoutout"), Mother's Day, and major African music award shows.<br>
                Partner with event organizers to offer "Afrostardom Live" co-branded virtual events.</p>
                <label class="task"><input type="checkbox" data-id="g_3_2"><span class="custom-cb"></span> Q3/Q4 seasonal campaign calendar drafted.</label>

                <h4>3. Key GTM Metrics to Track</h4>
                <p><strong>CAC (Customer Acquisition Cost):</strong> Target &lt;$5 per fan acquired.<br>
                <strong>LTV (Lifetime Value):</strong> Track average revenue per fan over 6 months.<br>
                <strong>Creator Activation Rate:</strong> % of onboarded creators who complete their first booking within 14 days (Target: ≥ 60%).<br>
                <strong>Viral Coefficient (K-factor):</strong> Track how many new fans each existing fan brings via sharing shoutout videos.</p>
                <label class="task"><input type="checkbox" data-id="g_3_3"><span class="custom-cb"></span> Analytics dashboards configured to track CAC, LTV, Creator Activation, and K-factor.</label>
            </div>
        </div>
    </section>

    <!-- ==================== SEO OPTIMIZATION ==================== -->
    <section class="section plan-section" id="seo-plan">
        <h2 class="section-title"><i class="fa-solid fa-magnifying-glass-chart highlight"></i> SEO Optimization Strategy</h2>
        <p class="section-subtitle">Ensuring Afrostardom ranks for high-intent discovery searches across African celebrity and fan engagement markets.</p>

        <div class="phase-card">
            <h3>1. Technical SEO Foundation</h3>
            <div class="details">
                <h4>Page Speed & Core Web Vitals</h4>
                <p><strong>LCP (Largest Contentful Paint):</strong> Target &lt;2.5s. Optimize hero images, lazy-load creator profile images below the fold.<br>
                <strong>CLS (Cumulative Layout Shift):</strong> Target &lt;0.1. Set explicit width/height on all images and video embeds.<br>
                <strong>FID (First Input Delay):</strong> Target &lt;100ms. Defer non-critical JavaScript (analytics, chat widgets).</p>
                <label class="task"><input type="checkbox" data-id="s_1_1"><span class="custom-cb"></span> Run Lighthouse audit on all key pages. Achieve score ≥ 90 for Performance.</label>
                <label class="task"><input type="checkbox" data-id="s_1_2"><span class="custom-cb"></span> Implement lazy-loading for all images below the fold.</label>

                <h4>Crawlability & Indexing</h4>
                <p><strong>Sitemap:</strong> Generate a dynamic XML sitemap (sitemap.xml) that auto-updates as new creator profiles are published.<br>
                <strong>Robots.txt:</strong> Ensure /admin, /api, and /dashboard routes are blocked from crawlers.<br>
                <strong>Canonical Tags:</strong> Prevent duplicate content issues between language variants (e.g., /en/creator/john vs /fr/creator/john).</p>
                <label class="task"><input type="checkbox" data-id="s_1_3"><span class="custom-cb"></span> Dynamic XML sitemap generated and submitted to Google Search Console.</label>
                <label class="task"><input type="checkbox" data-id="s_1_4"><span class="custom-cb"></span> Robots.txt verified: admin/API routes blocked, public pages crawlable.</label>
                <label class="task"><input type="checkbox" data-id="s_1_5"><span class="custom-cb"></span> Canonical tags implemented across all language variants.</label>

                <h4>Structured Data (Schema.org)</h4>
                <p>Implement JSON-LD structured data on key page types:<br>
                <strong>Creator Profiles:</strong> Use <code>Person</code> schema with name, image, description, and <code>makesOffer</code> for their services.<br>
                <strong>Live Events:</strong> Use <code>Event</code> schema with date, location (Online), price, and performer.<br>
                <strong>Merch Products:</strong> Use <code>Product</code> schema with price, availability, and reviews.<br>
                <strong>Reviews:</strong> Use <code>Review</code> and <code>AggregateRating</code> schema to get star ratings in SERPs.</p>
                <label class="task"><input type="checkbox" data-id="s_1_6"><span class="custom-cb"></span> JSON-LD structured data deployed on Creator Profiles, Events, and Products.</label>
                <label class="task"><input type="checkbox" data-id="s_1_7"><span class="custom-cb"></span> Validated in Google Rich Results Test with zero errors.</label>
            </div>
        </div>

        <div class="phase-card">
            <h3>2. On-Page SEO (Content & Meta Optimization)</h3>
            <div class="details">
                <h4>Meta Tags Strategy</h4>
                <p>Every page must have unique, keyword-rich title tags and meta descriptions. Examples:<br>
                <strong>Homepage:</strong> Title: "Afrostardom — Book Personalized Videos from African Celebrities" | Description: "Get video shoutouts, live events, and merch from top African musicians, actors, and athletes."<br>
                <strong>Creator Profile:</strong> Title: "[Creator Name] — Book a Personalized Shoutout | Afrostardom" | Description: "Request a custom video message from [Creator Name]. Available for shoutouts, live events, and business ads."<br>
                <strong>Category Page:</strong> Title: "Top African Musicians for Hire — Video Shoutouts & Live Events | Afrostardom"</p>
                <label class="task"><input type="checkbox" data-id="s_2_1"><span class="custom-cb"></span> Replace all Lorem Ipsum / placeholder meta descriptions across every page.</label>
                <label class="task"><input type="checkbox" data-id="s_2_2"><span class="custom-cb"></span> Implement dynamic meta tags for Creator Profiles and Category pages (server-side rendered).</label>

                <h4>Open Graph & Twitter Card Tags</h4>
                <p>Critical for social sharing virality. When a fan shares their received shoutout video on X or WhatsApp, the preview card must look polished.<br>
                <strong>OG Tags:</strong> og:title, og:description, og:image (creator profile photo), og:url.<br>
                <strong>Twitter Card:</strong> twitter:card = "summary_large_image" for maximum visual impact in feeds.</p>
                <label class="task"><input type="checkbox" data-id="s_2_3"><span class="custom-cb"></span> OG and Twitter Card tags implemented on all public-facing pages.</label>
                <label class="task"><input type="checkbox" data-id="s_2_4"><span class="custom-cb"></span> Test social sharing previews on Facebook Debugger and Twitter Card Validator.</label>

                <h4>Heading Hierarchy & Internal Linking</h4>
                <p>Each page must use a single <code>&lt;h1&gt;</code> with proper <code>&lt;h2&gt;</code>/<code>&lt;h3&gt;</code> nesting.<br>
                Implement breadcrumb navigation on Creator Profiles and Category Pages (Home > Musicians > [Creator Name]).<br>
                Internal linking: Each creator profile should link to their category page and related creators ("Fans also booked...").</p>
                <label class="task"><input type="checkbox" data-id="s_2_5"><span class="custom-cb"></span> Breadcrumb navigation implemented on Creator Profiles and Category Pages.</label>
                <label class="task"><input type="checkbox" data-id="s_2_6"><span class="custom-cb"></span> "Fans also booked" related creators section added to every profile page.</label>
            </div>
        </div>

        <div class="phase-card">
            <h3>3. Off-Page SEO & Content Marketing</h3>
            <div class="details">
                <h4>Content Hub / Blog</h4>
                <p>Launch an Afrostardom blog targeting long-tail keywords:<br>
                – "How to book a celebrity shoutout in Nigeria"<br>
                – "Best birthday gift ideas from African celebrities"<br>
                – "How musicians can monetize their fanbase in 2026"<br>
                <strong>Goal:</strong> Capture organic traffic from fans and aspiring creators searching for these topics.</p>
                <label class="task"><input type="checkbox" data-id="s_3_1"><span class="custom-cb"></span> Blog/content hub page created (/blog) with CMS integration.</label>
                <label class="task"><input type="checkbox" data-id="s_3_2"><span class="custom-cb"></span> Publish minimum 5 SEO-optimized articles before public launch.</label>

                <h4>Backlink Strategy</h4>
                <p>Earn backlinks from African tech publications (TechCabal, Techpoint Africa) via the PR outreach in the GTM plan.<br>
                Encourage creators to link to their Afrostardom profile from their Instagram/TikTok bios — these are high-authority referring domains.<br>
                Submit Afrostardom to relevant directories: Product Hunt, AlternativeTo (as a Cameo alternative), and African startup databases.</p>
                <label class="task"><input type="checkbox" data-id="s_3_3"><span class="custom-cb"></span> Submit to Product Hunt, AlternativeTo, and 3+ African startup directories.</label>
                <label class="task"><input type="checkbox" data-id="s_3_4"><span class="custom-cb"></span> Anchor creators have linked their Afrostardom profile in their social media bios.</label>
            </div>
        </div>

        <div class="phase-card">
            <h3>4. International SEO (Multi-Language & Multi-Currency)</h3>
            <div class="details">
                <h4>Hreflang Tags</h4>
                <p>Implement hreflang tags on all pages to signal language and region variants to Google:<br>
                <code>&lt;link rel="alternate" hreflang="en" href="https://afrostardom.com/creator/john" /&gt;</code><br>
                <code>&lt;link rel="alternate" hreflang="fr" href="https://afrostardom.com/fr/creator/john" /&gt;</code><br>
                <code>&lt;link rel="alternate" hreflang="es" href="https://afrostardom.com/es/creator/john" /&gt;</code></p>
                <label class="task"><input type="checkbox" data-id="s_4_1"><span class="custom-cb"></span> Hreflang tags implemented across all public pages for en, fr, es.</label>

                <h4>Localized Content</h4>
                <p>Ensure translated pages aren't just machine-translated gibberish. Key pages (Homepage, How It Works, About Us) must be professionally reviewed in French and Spanish.<br>
                Localize pricing examples in blog posts and landing pages to reflect the reader's local currency and cultural context.</p>
                <label class="task"><input type="checkbox" data-id="s_4_2"><span class="custom-cb"></span> Professional review of French and Spanish translations for key landing pages.</label>

                <h4>Analytics & Search Console Setup</h4>
                <p><strong>Google Search Console:</strong> Submit sitemap, monitor indexing status, track keyword rankings.<br>
                <strong>Google Analytics 4:</strong> Configure conversion events for: Signup, Booking Created, Payment Completed, Shoutout Delivered.<br>
                <strong>Funnel Tracking:</strong> Browse → Creator Profile → Booking Form → Checkout → Payment Success.</p>
                <label class="task"><input type="checkbox" data-id="s_4_3"><span class="custom-cb"></span> Google Search Console configured with sitemap submitted.</label>
                <label class="task"><input type="checkbox" data-id="s_4_4"><span class="custom-cb"></span> GA4 deployed with conversion events for all critical funnel steps.</label>
            </div>
        </div>
    </section>
    `;

    // Re-bind all new checkboxes to the localStorage system
    const newCheckboxes = insertionPoint.querySelectorAll('.task input[type="checkbox"]');
    const allCheckboxes = document.querySelectorAll('.task input[type="checkbox"]');
    const navProgressBar = document.getElementById('nav-progress-bar');
    const navProgressText = document.getElementById('nav-progress-text');

    const savedData = JSON.parse(localStorage.getItem('afrostardom_roadmap_full')) || {};

    // Load state for new checkboxes
    newCheckboxes.forEach(cb => {
        const id = cb.getAttribute('data-id');
        if (savedData[id]) {
            cb.checked = true;
            cb.parentElement.style.textDecoration = 'line-through';
            cb.parentElement.style.opacity = '0.4';
        }
    });

    // Save + progress update for new checkboxes
    const saveAndUpdate = () => {
        const data = {};
        allCheckboxes.forEach(cb => {
            data[cb.getAttribute('data-id')] = cb.checked;
        });
        localStorage.setItem('afrostardom_roadmap_full', JSON.stringify(data));

        const total = allCheckboxes.length;
        const checked = document.querySelectorAll('.task input[type="checkbox"]:checked').length;
        const pct = total === 0 ? 0 : Math.round((checked / total) * 100);
        navProgressBar.style.width = `${pct}%`;
        navProgressText.textContent = `${pct}%`;
    };

    newCheckboxes.forEach(cb => {
        cb.addEventListener('change', (e) => {
            if (e.target.checked) {
                e.target.parentElement.style.textDecoration = 'line-through';
                e.target.parentElement.style.opacity = '0.4';
            } else {
                e.target.parentElement.style.textDecoration = 'none';
                e.target.parentElement.style.opacity = '1';
            }
            saveAndUpdate();
        });
    });

    // Recalculate global progress now that new items exist
    saveAndUpdate();
});
