// Missing Features Module — Prioritized for Launch vs Future
document.addEventListener('DOMContentLoaded', () => {
    const anchor = document.getElementById('missing-features-anchor');
    if (!anchor) return;

    anchor.innerHTML = `
    <section class="section plan-section" id="missing-features">
        <h2 class="section-title"><i class="fa-solid fa-puzzle-piece highlight"></i> Post-Launch & Future Features</h2>
        <p class="section-subtitle">Features planned for V2, prioritized for engagement and scale.</p>


        <div class="phase-card future-card">
            <h3>🟢 Reels & Stories <span class="priority-inline future-inline">POST-LAUNCH V2</span></h3>
            <div class="details">
                <p class="priority-reason">Visible on the staging sidebar but not a monetization driver for MVP. These are engagement and discovery features that increase time-on-platform. Build after the 8 core revenue features are stable.</p>
                <h4>Planned Scope</h4>
                <p><strong>Reels:</strong> Short-form vertical video feed (TikTok-style). Creators upload 15–60 second clips. Fans scroll and discover new creators organically.<br>
                <strong>Stories:</strong> Ephemeral 24-hour content (images/video). Creators use to tease upcoming live events, new merch drops, or behind-the-scenes content.<br>
                <strong>Dependencies:</strong> Requires video transcoding pipeline (Mux/AWS) which will already exist from the Shoutouts feature. Incremental effort.</p>
                <label class="task"><input type="checkbox" data-id="mf_5_1"><span class="custom-cb"></span> [V2] Reels upload + vertical feed UI</label>
                <label class="task"><input type="checkbox" data-id="mf_5_2"><span class="custom-cb"></span> [V2] Stories with 24-hour auto-expiry</label>
            </div>
        </div>

        <div class="phase-card future-card">
            <h3>🟢 Mobile App / PWA Strategy <span class="priority-inline future-inline">POST-LAUNCH V2</span></h3>
            <div class="details">
                <p class="priority-reason">The web app is sufficient for launch. However, a PWA (Progressive Web App) with "Add to Home Screen" and offline support should be implemented in V2 to capture the mobile-first African audience. Native apps (React Native) can follow in V3 if traction justifies the investment.</p>
                <h4>V2 Scope: PWA</h4>
                <p>Service worker for offline caching of static assets. Web push notifications via FCM. "Install App" prompt on mobile browsers. App manifest with Afrostardom branding.</p>
                <label class="task"><input type="checkbox" data-id="mf_6_1"><span class="custom-cb"></span> [V2] PWA manifest + service worker deployed</label>
                <label class="task"><input type="checkbox" data-id="mf_6_2"><span class="custom-cb"></span> [V2] Web push notifications via Firebase Cloud Messaging</label>
            </div>
        </div>

        <div class="phase-card future-card">
            <h3>🟢 Fan Referral / Affiliate Program <span class="priority-inline future-inline">POST-LAUNCH V2</span></h3>
            <div class="details">
                <p class="priority-reason">The GTM plan covers creator referrals. A fan-to-fan referral system ("Share this creator, get $5 credit") would accelerate demand-side growth but is not critical for Day 1.</p>
                <h4>Planned Scope</h4>
                <p>Unique referral link per fan. Credit applied after referred fan completes first purchase. Dashboard showing referral stats. Anti-fraud: limit credits per account, require unique email + payment method.</p>
                <label class="task"><input type="checkbox" data-id="mf_7_1"><span class="custom-cb"></span> [V2] Fan referral link generation + credit tracking</label>
            </div>
        </div>

        <div class="phase-card future-card">
            <h3>🟢 Tax & VAT Compliance <span class="priority-inline future-inline">POST-LAUNCH V2</span></h3>
            <div class="details">
                <p class="priority-reason">Not blocking for initial African market launch, but critical before expanding to EU/US where digital services VAT and 1099 reporting are legally required.</p>
                <h4>Planned Scope</h4>
                <p>Automated tax document generation for creators earning above threshold. VAT collection on EU transactions. Integration with tax APIs (e.g., TaxJar or Avalara). Creator dashboard showing annual earnings for tax filing.</p>
                <label class="task"><input type="checkbox" data-id="mf_8_1"><span class="custom-cb"></span> [V2] Tax/VAT compliance framework designed</label>
            </div>
        </div>

        <div class="phase-card future-card">
            <h3>🟢 A/B Testing Framework <span class="priority-inline future-inline">POST-LAUNCH V2</span></h3>
            <div class="details">
                <p class="priority-reason">Optimizing the ≥98% booking success rate requires data-driven experimentation on checkout flows, CTA placement, and pricing display. Not needed for Day 1 but essential for growth.</p>
                <h4>Planned Scope</h4>
                <p>Integration with GrowthBook, LaunchDarkly, or PostHog for feature flags and experiments. Track conversion impact of UI changes on the booking funnel.</p>
                <label class="task"><input type="checkbox" data-id="mf_9_1"><span class="custom-cb"></span> [V2] A/B testing infrastructure integrated</label>
            </div>
        </div>

        <div class="phase-card future-card">
            <h3>🟢 Data Backup & Disaster Recovery <span class="priority-inline future-inline">POST-LAUNCH V2</span></h3>
            <div class="details">
                <p class="priority-reason">Automated backups should ideally be in place by launch, but a full multi-region failover strategy is a V2 investment. At minimum, daily automated DB snapshots must be configured before go-live.</p>
                <h4>Minimum for Launch</h4>
                <p>Daily automated database snapshots (AWS RDS or equivalent). Documented recovery runbook. Tested restore from backup at least once pre-launch.</p>
                <label class="task"><input type="checkbox" data-id="mf_10_1"><span class="custom-cb"></span> Daily automated DB backups configured (move to Launch Checklist)</label>
                <label class="task"><input type="checkbox" data-id="mf_10_2"><span class="custom-cb"></span> [V2] Multi-region failover architecture designed</label>
            </div>
        </div>
    </section>
    `;

    // Re-bind checkboxes
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
