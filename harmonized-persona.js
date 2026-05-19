// Harmonized Persona Module — Unified Delivery Timeline, Dependencies, Risks & Open Questions
document.addEventListener('DOMContentLoaded', () => {
    const anchor = document.getElementById('harmonized-persona-anchor');
    if (!anchor) return;

    anchor.innerHTML = `
    <section class="section plan-section" id="harmonized-plan">
        <h2 class="section-title"><i class="fa-solid fa-diagram-project highlight"></i> Harmonized Persona Delivery Plan</h2>
        <p class="section-subtitle">Unified 60-day timeline mapping all personas, teams, dependencies, edge cases, and risks.</p>

        <!-- SPRINT 1 -->
        <div class="phase-card">
            <h3>Sprint 1: Foundation Layer (Days 1–10)</h3>
            <div class="details">
                <table class="deliverable-table">
                    <thead><tr><th>Deliverable</th><th>Persona(s)</th><th>Team</th><th>Days</th></tr></thead>
                    <tbody>
                        <tr><td>DB Schema Design (users, roles, transactions, escrow ledger)</td><td>All</td><td>Backend</td><td>1–3</td></tr>
                        <tr><td>Fan Auth: OAuth (Google/Facebook/X), Magic Links, Guest Checkout</td><td>Fan</td><td>Backend + Frontend</td><td>1–5</td></tr>
                        <tr><td>Creator Auth: Signup → Email Verify → Category Select → KYC Submit</td><td>Creator</td><td>Backend + Frontend</td><td>1–5</td></tr>
                        <tr><td>Admin RBAC Middleware (Superadmin / Financial / Moderator)</td><td>Admin</td><td>Backend</td><td>3–6</td></tr>
                        <tr><td>Admin KYC Review Queue UI</td><td>Admin + Creator</td><td>Frontend</td><td>5–8</td></tr>
                        <tr><td>Geo-IP Detection + i18n Engine (EN/FR/ES) + Currency Conversion API</td><td>Fan</td><td>Full-Stack</td><td>6–10</td></tr>
                        <tr><td>Audit Log Table (tracks every admin action)</td><td>Admin</td><td>Backend</td><td>8–10</td></tr>
                    </tbody>
                </table>
                <h4>Dependencies</h4>
                <p>• KYC Queue UI depends on RBAC middleware being complete.<br>
                • Creator dashboard unlock depends on Admin approval endpoint being live.<br>
                • Geo-IP must be operational before any pricing UI is built (Sprint 2).</p>
                <h4>Edge Cases</h4>
                <p>• OAuth token expiry during multi-step creator onboarding wizard — must persist form state.<br>
                • Fan uses VPN → Geo-IP detects wrong country → must allow manual currency override.<br>
                • Admin accidentally rejects a valid KYC → need "Undo Rejection" within 24hrs.</p>
                <label class="task"><input type="checkbox" data-id="h_1_1"><span class="custom-cb"></span> All auth flows functional (Fan OAuth, Creator KYC, Admin RBAC)</label>
                <label class="task"><input type="checkbox" data-id="h_1_2"><span class="custom-cb"></span> Geo-IP + i18n engine returning correct language/currency by region</label>
                <label class="task"><input type="checkbox" data-id="h_1_3"><span class="custom-cb"></span> Admin can approve/reject creator KYC from queue</label>
            </div>
        </div>

        <!-- SPRINT 2 -->
        <div class="phase-card">
            <h3>Sprint 2: Booking Engine & Payments (Days 11–25)</h3>
            <div class="details">
                <table class="deliverable-table">
                    <thead><tr><th>Deliverable</th><th>Persona(s)</th><th>Team</th><th>Days</th></tr></thead>
                    <tbody>
                        <tr><td>Creator Offerings Engine (dynamic toggle UI by category)</td><td>Creator</td><td>Frontend</td><td>11–14</td></tr>
                        <tr><td>Shoutout Request Flow (prompt form → checkout → delivery)</td><td>Fan + Creator</td><td>Full-Stack</td><td>11–16</td></tr>
                        <tr><td>Video/Song Request Flow (category-specific MIME handling)</td><td>Fan + Creator</td><td>Full-Stack</td><td>11–16</td></tr>
                        <tr><td>Video Call Booking (calendar UI + time-slot row-locking)</td><td>Fan + Creator</td><td>Full-Stack</td><td>14–18</td></tr>
                        <tr><td>Payment Gateway Integration (Stripe + Paystack routing)</td><td>Fan</td><td>Backend</td><td>14–18</td></tr>
                        <tr><td>Escrow Ledger (double-entry accounting, platform commission split)</td><td>Admin + Creator</td><td>Backend</td><td>16–20</td></tr>
                        <tr><td>Business Ad Booking (negotiation state machine + messaging UI)</td><td>Fan + Creator</td><td>Full-Stack</td><td>18–22</td></tr>
                        <tr><td>Messaging / DMs System (Real-time Fan/Creator chat)</td><td>Fan + Creator</td><td>Full-Stack</td><td>18–22</td></tr>
                        <tr><td>Monthly Subscription (Stripe Billing / Paystack recurring)</td><td>Fan + Creator</td><td>Full-Stack</td><td>20–25</td></tr>
                    </tbody>
                </table>
                <h4>Dependencies</h4>
                <p>• All booking flows depend on payment gateway being integrated first.<br>
                • Escrow ledger must be live before any content delivery can be marked "complete."<br>
                • Offerings Engine must be live before any fan-facing booking UI can display dynamic prices.</p>
                <h4>Edge Cases</h4>
                <p>• Two fans book the same video call slot simultaneously → DB row lock must reject one.<br>
                • Payment succeeds but webhook fails → order stuck in limbo → need idempotent retry queue.<br>
                • Creator sets price in USD but fan pays in NGN → currency conversion drift between "Add to Cart" and "Pay" → lock exchange rate at checkout initiation.<br>
                • Brand rejects Business Ad video 3 times → auto-trigger escrow refund path.</p>
                <label class="task"><input type="checkbox" data-id="h_2_1"><span class="custom-cb"></span> Shoutouts + Video/Song requests E2E (fan submits → creator delivers → fan downloads)</label>
                <label class="task"><input type="checkbox" data-id="h_2_2"><span class="custom-cb"></span> Video Call booking with calendar + row-locking tested</label>
                <label class="task"><input type="checkbox" data-id="h_2_3"><span class="custom-cb"></span> Payment gateway live (Stripe global + Paystack Africa routing)</label>
                <label class="task"><input type="checkbox" data-id="h_2_4"><span class="custom-cb"></span> Escrow ledger accurately splitting platform commission</label>
                <label class="task"><input type="checkbox" data-id="h_2_5"><span class="custom-cb"></span> Monthly Subscription recurring billing + webhook revocation tested</label>
                <label class="task"><input type="checkbox" data-id="h_2_6"><span class="custom-cb"></span> Messaging/DMs system live and tested for real-time delivery</label>
            </div>
        </div>

        <!-- SPRINT 3 -->
        <div class="phase-card">
            <h3>Sprint 3: E-commerce, Live Events & Auctions (Days 26–40)</h3>
            <div class="details">
                <table class="deliverable-table">
                    <thead><tr><th>Deliverable</th><th>Persona(s)</th><th>Team</th><th>Days</th></tr></thead>
                    <tbody>
                        <tr><td>Merch Store (product CRUD, cart, inventory, shipping tracking)</td><td>Fan + Creator</td><td>Full-Stack</td><td>26–30</td></tr>
                        <tr><td>Auction System (WebSockets, Redis bidding, auto-charge winner)</td><td>Fan + Creator</td><td>Full-Stack</td><td>28–34</td></tr>
                        <tr><td>Live Event Ticketing + Streaming (Agora/Mux + secure tokens)</td><td>Fan + Creator</td><td>Full-Stack</td><td>30–36</td></tr>
                        <tr><td>Creator Delivery Dashboard (Kanban: Overdue / Due Today / New)</td><td>Creator</td><td>Frontend</td><td>34–37</td></tr>
                        <tr><td>Fan Content Library (My Library: videos, tickets, orders, subs)</td><td>Fan</td><td>Frontend</td><td>34–37</td></tr>
                        <tr><td>Admin Financial Dashboard (escrow balance, pending payouts, revenue)</td><td>Admin</td><td>Full-Stack</td><td>36–40</td></tr>
                        <tr><td>Notification Strategy Matrix (Email/SMS/Push integration)</td><td>All</td><td>Backend</td><td>34–38</td></tr>
                        <tr><td>SLA Auto-Refund Cron Job (missed deadlines → refund fan)</td><td>All</td><td>Backend</td><td>38–40</td></tr>
                    </tbody>
                </table>
                <h4>Dependencies</h4>
                <p>• Auction WebSockets depend on Redis infrastructure being provisioned.<br>
                • Live Event streaming depends on selecting and integrating a provider (Agora vs Mux vs AWS IVS).<br>
                • Admin Financial Dashboard depends on the escrow ledger from Sprint 2.<br>
                • SLA cron job depends on all content-delivery features being functional.</p>
                <h4>Edge Cases</h4>
                <p>• Auction: 100 concurrent bids in final 10 seconds → Redis must handle atomic increments, no race conditions.<br>
                • Merch: Fan purchases last item while another fan has it in cart → inventory must decrement atomically at payment, not at "Add to Cart."<br>
                • Live Event: Creator's internet drops mid-stream → platform must display "Creator reconnecting" instead of killing the session.<br>
                • Cart persistence: Fan adds merch, closes browser, returns 3 days later → cart must survive via localStorage + server-side sync.</p>
                <label class="task"><input type="checkbox" data-id="h_3_1"><span class="custom-cb"></span> Merch store E2E (create product → fan purchases → shipping tracking)</label>
                <label class="task"><input type="checkbox" data-id="h_3_2"><span class="custom-cb"></span> Auction system handles 100 concurrent bids with zero race conditions</label>
                <label class="task"><input type="checkbox" data-id="h_3_3"><span class="custom-cb"></span> Live Event stream stable with 1,000 concurrent viewers</label>
                <label class="task"><input type="checkbox" data-id="h_3_4"><span class="custom-cb"></span> Creator Delivery Dashboard + Fan Content Library functional</label>
                <label class="task"><input type="checkbox" data-id="h_3_5"><span class="custom-cb"></span> Admin Financial Dashboard showing real escrow/revenue data</label>
                <label class="task"><input type="checkbox" data-id="h_3_6"><span class="custom-cb"></span> Notification matrix integrated for all existing feature events</label>
            </div>
        </div>

        <!-- SPRINT 4 -->
        <div class="phase-card">
            <h3>Sprint 4: Moderation, Payouts & Hardening (Days 41–50)</h3>
            <div class="details">
                <table class="deliverable-table">
                    <thead><tr><th>Deliverable</th><th>Persona(s)</th><th>Team</th><th>Days</th></tr></thead>
                    <tbody>
                        <tr><td>Creator Wallet & Payout Requests (Pending vs Available balance)</td><td>Creator + Admin</td><td>Full-Stack</td><td>41–44</td></tr>
                        <tr><td>Admin Payout Processing (Stripe Connect / Paystack Transfers)</td><td>Admin</td><td>Backend</td><td>41–44</td></tr>
                        <tr><td>Dispute Resolution Flow (fan opens dispute → escrow freeze → moderator review)</td><td>All</td><td>Full-Stack</td><td>44–47</td></tr>
                        <tr><td>Content Moderation Queue (flagged videos, Ghost Mode for live events)</td><td>Admin</td><td>Full-Stack</td><td>44–47</td></tr>
                        <tr><td>Notification System (email + SMS + in-app for all transaction types)</td><td>All</td><td>Backend</td><td>47–50</td></tr>
                        <tr><td>Customer Support & Help Center (FAQ, Tickets, Live Chat)</td><td>All</td><td>Full-Stack</td><td>46–49</td></tr>
                        <tr><td>Superadmin Settings Panel (commission rate, platform variables)</td><td>Admin</td><td>Full-Stack</td><td>48–50</td></tr>
                    </tbody>
                </table>
                <h4>Dependencies</h4>
                <p>• Payout processing depends on escrow ledger + creator wallet being complete.<br>
                • Dispute flow depends on the escrow freeze logic being integrated into the payout cron job.<br>
                • Notification system must be tested against every single transaction type across all 8 features.</p>
                <h4>Edge Cases</h4>
                <p>• Creator clicks "Withdraw" twice rapidly → idempotency keys must prevent double payout.<br>
                • Creator attempts withdrawal while a dispute is open on one transaction → only freeze that specific transaction's funds, not the entire wallet.<br>
                • Superadmin changes commission from 20% to 15% → must only affect new transactions, not retroactive escrow.</p>
                <label class="task"><input type="checkbox" data-id="h_4_1"><span class="custom-cb"></span> Creator wallet showing accurate Pending vs Available balances</label>
                <label class="task"><input type="checkbox" data-id="h_4_2"><span class="custom-cb"></span> Admin can process payouts to real bank accounts (tested E2E)</label>
                <label class="task"><input type="checkbox" data-id="h_4_3"><span class="custom-cb"></span> Dispute flow freezes escrow correctly; moderator can refund or release</label>
                <label class="task"><input type="checkbox" data-id="h_4_4"><span class="custom-cb"></span> All notification channels (email/SMS/in-app) firing for all 8 features</label>
                <label class="task"><input type="checkbox" data-id="h_4_5"><span class="custom-cb"></span> Customer Support portal and Help Center live</label>
            </div>
        </div>

        <!-- SPRINT 5 -->
        <div class="phase-card">
            <h3>Sprint 5: QA Blitz & Go-Live (Days 51–60)</h3>
            <div class="details">
                <table class="deliverable-table">
                    <thead><tr><th>Deliverable</th><th>Persona(s)</th><th>Team</th><th>Days</th></tr></thead>
                    <tbody>
                        <tr><td>Closed Beta with 50–100 real users (15+ creators, 50+ fans)</td><td>All</td><td>QA + PM</td><td>51–55</td></tr>
                        <tr><td>Load Testing (k6/Artillery: browsing, bidding, streaming)</td><td>All</td><td>DevOps</td><td>54–56</td></tr>
                        <tr><td>Accessibility (WCAG 2.1 AA) Audit & Remediation</td><td>Fan + Creator</td><td>Frontend</td><td>52–55</td></tr>
                        <tr><td>Cross-Browser + Mobile QA (Chrome, Safari, Firefox, Samsung)</td><td>Fan</td><td>QA</td><td>55–57</td></tr>
                        <tr><td>P0/P1 Bug Resolution</td><td>All</td><td>All Devs</td><td>55–59</td></tr>
                        <tr><td>Production Deploy (DNS, SSL, CDN, Sentry, Uptime Monitoring)</td><td>All</td><td>DevOps</td><td>58–59</td></tr>
                        <tr><td>Public Launch + 72-Hour War Room</td><td>All</td><td>All Teams</td><td>60</td></tr>
                    </tbody>
                </table>
                <label class="task"><input type="checkbox" data-id="h_5_1"><span class="custom-cb"></span> Beta completed: 20+ real transactions executed successfully</label>
                <label class="task"><input type="checkbox" data-id="h_5_2"><span class="custom-cb"></span> Load tests passed for all critical flows</label>
                <label class="task"><input type="checkbox" data-id="h_5_3"><span class="custom-cb"></span> 0 P0 bugs, ≤ 1 P1 bug per feature at launch</label>
                <label class="task"><input type="checkbox" data-id="h_5_4"><span class="custom-cb"></span> Production live on afrostardom.com with SSL + CDN + monitoring</label>
                <label class="task"><input type="checkbox" data-id="h_5_5"><span class="custom-cb"></span> Platform achieves WCAG 2.1 AA Accessibility compliance</label>
            </div>
        </div>

        <!-- OPEN QUESTIONS -->
        <div class="phase-card risk-card">
            <h3>⚠️ Open Questions (Must Resolve Before Sprint 2)</h3>
            <div class="details">
                <label class="task"><input type="checkbox" data-id="oq_1"><span class="custom-cb"></span> Which payment processor is primary for Africa? Paystack or Flutterwave?</label>
                <label class="task"><input type="checkbox" data-id="oq_2"><span class="custom-cb"></span> Which video streaming provider for Live Events? Agora vs Mux Live vs AWS IVS?</label>
                <label class="task"><input type="checkbox" data-id="oq_3"><span class="custom-cb"></span> Is the Magdi Yacoub Foundation partnership confirmed for charity copy?</label>
                <label class="task"><input type="checkbox" data-id="oq_4"><span class="custom-cb"></span> What is the creator payout schedule? (Weekly? Bi-weekly? On-demand?)</label>
                <label class="task"><input type="checkbox" data-id="oq_5"><span class="custom-cb"></span> What is the platform commission rate? (15%? 20%? Tiered?)</label>
                <label class="task"><input type="checkbox" data-id="oq_6"><span class="custom-cb"></span> Is there a legal review scheduled for Terms of Service and NDPR compliance?</label>
                <label class="task"><input type="checkbox" data-id="oq_7"><span class="custom-cb"></span> What is the current bug/task tracker? (Jira, Linear, Trello, Notion?)</label>
                <label class="task"><input type="checkbox" data-id="oq_8"><span class="custom-cb"></span> Is the codebase on version control with staging → production CI/CD pipeline?</label>
            </div>
        </div>

        <!-- RISK REGISTER -->
        <div class="phase-card risk-card">
            <h3>🔴 Risk Register & Mitigation Plan</h3>
            <div class="details">
                <table class="deliverable-table risk-table">
                    <thead><tr><th>Risk</th><th>Impact</th><th>Likelihood</th><th>Mitigation</th></tr></thead>
                    <tbody>
                        <tr><td>Payment gateway fails for African cards (3D Secure issues)</td><td>Critical</td><td>High</td><td>Offer Mobile Money fallback (M-Pesa, MTN MoMo). Clear UI messaging for 3DS approval.</td></tr>
                        <tr><td>Insufficient creators at launch (&lt;10)</td><td>Critical</td><td>Medium</td><td>Anchor Creator Program with 0% commission for 90 days. Target 20+ creators pre-launch.</td></tr>
                        <tr><td>Video upload/delivery slow in low-bandwidth regions</td><td>High</td><td>High</td><td>Use Mux or CloudFront CDN with African PoPs. Implement adaptive bitrate streaming.</td></tr>
                        <tr><td>Auction race conditions cause incorrect winner</td><td>Critical</td><td>Medium</td><td>Redis atomic operations + pessimistic locking. Extensive load testing in Sprint 5.</td></tr>
                        <tr><td>Currency conversion drift causes financial loss</td><td>High</td><td>Medium</td><td>Lock exchange rate at checkout initiation. Store all base prices in USD.</td></tr>
                        <tr><td>Creator misses SLA, no auto-refund fires</td><td>High</td><td>Medium</td><td>Cron job runs every 15 minutes checking SLA deadlines. Alerting if cron fails.</td></tr>
                        <tr><td>NDPR/GDPR non-compliance discovered post-launch</td><td>Critical</td><td>Low</td><td>Legal review must be completed by Day 50. Cookie consent + data deletion endpoints.</td></tr>
                        <tr><td>Key developer leaves mid-sprint</td><td>High</td><td>Low</td><td>Ensure code documentation + pair programming. No single-developer dependencies.</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
    `;

    // Re-bind new checkboxes
    const newCbs = anchor.querySelectorAll('.task input[type="checkbox"]');
    const allCbs = document.querySelectorAll('.task input[type="checkbox"]');
    const bar = document.getElementById('nav-progress-bar');
    const txt = document.getElementById('nav-progress-text');
    const saved = JSON.parse(localStorage.getItem('afrostardom_roadmap_full')) || {};

    newCbs.forEach(cb => {
        const id = cb.getAttribute('data-id');
        if (saved[id]) { cb.checked = true; cb.parentElement.style.textDecoration = 'line-through'; cb.parentElement.style.opacity = '0.4'; }
    });

    const sync = () => {
        const data = {};
        allCbs.forEach(cb => { data[cb.getAttribute('data-id')] = cb.checked; });
        localStorage.setItem('afrostardom_roadmap_full', JSON.stringify(data));
        const total = allCbs.length;
        const checked = document.querySelectorAll('.task input:checked').length;
        const pct = total === 0 ? 0 : Math.round((checked / total) * 100);
        bar.style.width = `${pct}%`;
        txt.textContent = `${pct}%`;
    };

    newCbs.forEach(cb => {
        cb.addEventListener('change', (e) => {
            e.target.parentElement.style.textDecoration = e.target.checked ? 'line-through' : 'none';
            e.target.parentElement.style.opacity = e.target.checked ? '0.4' : '1';
            sync();
        });
    });
    sync();
});
