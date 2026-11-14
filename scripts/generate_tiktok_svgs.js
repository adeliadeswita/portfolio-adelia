const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../public/images/projects/tiktok-shop');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function renderHeader(title, subtitle = 'Looker Studio • TikTok Shop Analytics Data Mart') {
  return `
    <!-- Top Looker Studio Navigation & Filter Bar -->
    <rect x="0" y="0" width="1200" height="64" fill="#0A2540"/>
    <g transform="translate(24, 18)">
      <rect x="0" y="0" width="28" height="28" rx="6" fill="#2563EB"/>
      <path d="M8 14 L14 8 L20 14 L14 20 Z" fill="#FFFFFF"/>
      <text x="36" y="19" fill="#FFFFFF" font-size="16" font-weight="800" letter-spacing="0.5">TIKTOK SHOP BI</text>
      <text x="175" y="19" fill="#64748B" font-size="12">|</text>
      <text x="190" y="19" fill="#E2E8F0" font-size="13" font-weight="600">${title}</text>
    </g>

    <!-- Filters in Top Bar -->
    <g transform="translate(730, 16)">
      <!-- Date Picker Mock -->
      <rect x="0" y="0" width="165" height="32" rx="6" fill="#132F51" stroke="#254B78" stroke-width="1"/>
      <text x="12" y="20" fill="#E2E8F0" font-size="11">Sep 1 – Nov 30, 2026</text>
      <path d="M152 19 L156 14 L148 14 Z" fill="#94A3B8"/>

      <!-- Brand Picker Mock -->
      <rect x="175" y="0" width="150" height="32" rx="6" fill="#132F51" stroke="#254B78" stroke-width="1"/>
      <text x="187" y="20" fill="#38BDF8" font-size="11" font-weight="600">All 22 Brands</text>
      <path d="M312 19 L316 14 L308 14 Z" fill="#94A3B8"/>

      <!-- Dummy Demo Pill -->
      <rect x="335" y="0" width="110" height="32" rx="16" fill="#065F46" stroke="#10B981" stroke-width="1"/>
      <text x="390" y="20" fill="#A7F3D0" font-size="10.5" font-weight="700" text-anchor="middle">SYNTHETIC DEMO</text>
    </g>

    <!-- Subheader Notice -->
    <rect x="0" y="64" width="1200" height="26" fill="#0F172A"/>
    <text x="24" y="81" fill="#94A3B8" font-size="10" font-weight="600">🔒 DEMONSTRATION SUITE • All Client Identities &amp; Figures Masked for Confidentiality Compliance • Source: BigQuery Data Mart</text>
  `;
}

function card(x, y, w, h, title, val, sub, subColor = "#10B981") {
  return `
    <g transform="translate(${x}, ${y})">
      <rect x="0" y="0" width="${w}" height="${h}" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
      <text x="16" y="22" fill="#64748B" font-size="11" font-weight="600">${title}</text>
      <text x="16" y="46" fill="#0F172A" font-size="17" font-weight="800">${val}</text>
      <text x="16" y="63" fill="${subColor}" font-size="10.5" font-weight="600">${sub}</text>
    </g>
  `;
}

// =========================================================================
// 01. GENERAL OVERVIEW
// =========================================================================
const svg01 = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760" width="100%" height="100%" style="background:#F1F5F9; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  ${renderHeader('General Overview – Portfolio Performance', 'Consolidated E-Commerce &amp; Content Performance across 22 Brands')}

  <!-- 6 Top KPI Cards -->
  ${card(24, 105, 185, 74, 'GMV (LIVE + Video)', 'Rp 275.4B', '+14.2% MoM growth', '#10B981')}
  ${card(221, 105, 185, 74, 'GMV LIVE', 'Rp 148.6B', '+18.5% MoM growth', '#2563EB')}
  ${card(418, 105, 185, 74, 'GMV Video', 'Rp 126.8B', '+9.6% MoM growth', '#F97316')}
  ${card(615, 105, 185, 74, 'Content Share of GMV', '52.4%', '+4.8% pt vs Q2', '#10B981')}
  ${card(812, 105, 185, 74, 'Total Orders', '2.85M', '+11.8% volume lift', '#10B981')}
  ${card(1009, 105, 167, 74, 'GPM (LIVE + Video)', 'Rp 42.8K', 'Revenue per 1K views', '#64748B')}

  <!-- Chart 1: Daily GMV Stacked Bar Chart (LIVE vs Video) -->
  <g transform="translate(24, 195)">
    <rect x="0" y="0" width="670" height="535" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
    <text x="20" y="28" fill="#0F172A" font-size="13.5" font-weight="700">Daily Content GMV Trajectory (LIVE vs Video Contribution)</text>
    <text x="20" y="44" fill="#64748B" font-size="11">Daily revenue accumulation separated by Live Broadcasts and Short-Form Videos</text>

    <!-- Legend -->
    <rect x="470" y="16" width="12" height="12" rx="2" fill="#2563EB"/>
    <text x="488" y="26" fill="#334155" font-size="11">LIVE GMV</text>
    <rect x="560" y="16" width="12" height="12" rx="2" fill="#F97316"/>
    <text x="578" y="26" fill="#334155" font-size="11">Video GMV</text>

    <!-- Grid lines -->
    <line x1="50" y1="460" x2="640" y2="460" stroke="#CBD5E1" stroke-width="1"/>
    <line x1="50" y1="360" x2="640" y2="360" stroke="#F1F5F9" stroke-width="1"/>
    <line x1="50" y1="260" x2="640" y2="260" stroke="#F1F5F9" stroke-width="1"/>
    <line x1="50" y1="160" x2="640" y2="160" stroke="#F1F5F9" stroke-width="1"/>
    <line x1="50" y1="60" x2="640" y2="60" stroke="#F1F5F9" stroke-width="1"/>

    <text x="40" y="464" fill="#94A3B8" font-size="10" text-anchor="end">0</text>
    <text x="40" y="364" fill="#94A3B8" font-size="10" text-anchor="end">100M</text>
    <text x="40" y="264" fill="#94A3B8" font-size="10" text-anchor="end">200M</text>
    <text x="40" y="164" fill="#94A3B8" font-size="10" text-anchor="end">300M</text>
    <text x="40" y="64" fill="#94A3B8" font-size="10" text-anchor="end">400M</text>

    <!-- Stacked Daily Bars -->
    ${[
      {day: 'Nov 1', vH: 45, lH: 40},
      {day: 'Nov 2', vH: 38, lH: 75},
      {day: 'Nov 3', vH: 35, lH: 65},
      {day: 'Nov 4', vH: 36, lH: 115},
      {day: 'Nov 5', vH: 48, lH: 52},
      {day: 'Nov 6', vH: 28, lH: 12},
      {day: 'Nov 7', vH: 32, lH: 50},
      {day: 'Nov 8', vH: 26, lH: 56},
      {day: 'Nov 9', vH: 48, lH: 58},
      {day: 'Nov 10', vH: 30, lH: 160},
      {day: 'Nov 11', vH: 60, lH: 280}, // Mega Campaign Peak
      {day: 'Nov 12', vH: 20, lH: 15},
      {day: 'Nov 13', vH: 18, lH: 12}
    ].map((b, i) => {
      const x = 65 + i * 44;
      const totalH = b.vH + b.lH;
      const vY = 460 - b.vH;
      const lY = vY - b.lH;
      return `
        <rect x="${x}" y="${vY}" width="28" height="${b.vH}" fill="#F97316" rx="2"/>
        <rect x="${x}" y="${lY}" width="28" height="${b.lH}" fill="#2563EB" rx="2"/>
        ${i === 10 ? `
          <text x="${x + 14}" y="${lY - 14}" fill="#1D4ED8" font-size="10" font-weight="800" text-anchor="middle">340M</text>
          <text x="${x + 14}" y="${lY - 4}" fill="#EA580C" font-size="8.5" font-weight="700" text-anchor="middle">11.11 Peak</text>
        ` : ''}
        <text x="${x + 14}" y="478" fill="#64748B" font-size="9" text-anchor="middle">${b.day}</text>
      `;
    }).join('')}
  </g>

  <!-- Chart 2: Share of Total Shop GMV by Sales Channel -->
  <g transform="translate(710, 195)">
    <rect x="0" y="0" width="466" height="535" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
    <text x="20" y="28" fill="#0F172A" font-size="13.5" font-weight="700">Share of Total Shop GMV by Sales Channel</text>
    <text x="20" y="44" fill="#64748B" font-size="11">Comparing LIVE vs Video vs Organic Product Card contribution</text>

    <!-- 100% Horizontal Stacked Bar -->
    <g transform="translate(20, 70)">
      <text x="0" y="-8" fill="#1E293B" font-size="11" font-weight="700">Client Portfolio Total</text>
      <rect x="0" y="0" width="426" height="34" rx="4" fill="#F1F5F9"/>
      
      <!-- LIVE (42%) -->
      <rect x="0" y="0" width="178" height="34" rx="4 0 0 4" fill="#2563EB"/>
      <text x="89" y="21" fill="#FFFFFF" font-size="11" font-weight="700" text-anchor="middle">LIVE 42%</text>

      <!-- Video (26%) -->
      <rect x="178" y="0" width="111" height="34" fill="#F97316"/>
      <text x="233" y="21" fill="#FFFFFF" font-size="11" font-weight="700" text-anchor="middle">Video 26%</text>

      <!-- Product Card (32%) -->
      <rect x="289" y="0" width="137" height="34" rx="0 4 4 0" fill="#10B981"/>
      <text x="357" y="21" fill="#FFFFFF" font-size="11" font-weight="700" text-anchor="middle">Card 32%</text>
    </g>

    <!-- Account Type Breakdown Table -->
    <g transform="translate(20, 140)">
      <text x="0" y="0" fill="#0F172A" font-size="12" font-weight="700">Channel Contribution by Account Type</text>

      <rect x="0" y="12" width="426" height="24" fill="#F8FAFC"/>
      <text x="10" y="28" fill="#475569" font-size="9.5" font-weight="700">ACCOUNT TYPE</text>
      <text x="140" y="28" fill="#475569" font-size="9.5" font-weight="700">LIVE GMV</text>
      <text x="240" y="28" fill="#475569" font-size="9.5" font-weight="700">VIDEO GMV</text>
      <text x="340" y="28" fill="#475569" font-size="9.5" font-weight="700">PRODUCT CARD</text>

      <!-- Official -->
      <text x="10" y="60" fill="#1E293B" font-size="10.5" font-weight="700">Official Account</text>
      <text x="140" y="60" fill="#1D4ED8" font-size="10.5" font-weight="700">Rp 78.4B</text>
      <text x="240" y="60" fill="#EA580C" font-size="10.5">Rp 12.8B</text>
      <text x="340" y="60" fill="#059669" font-size="10.5">Rp 98.5B</text>

      <!-- Affiliate -->
      <text x="10" y="92" fill="#1E293B" font-size="10.5" font-weight="700">Affiliate Creators</text>
      <text x="140" y="92" fill="#1D4ED8" font-size="10.5">Rp 58.2B</text>
      <text x="240" y="92" fill="#EA580C" font-size="10.5" font-weight="700">Rp 108.5B</text>
      <text x="340" y="92" fill="#64748B" font-size="10.5">-</text>

      <!-- Marketing -->
      <text x="10" y="124" fill="#1E293B" font-size="10.5" font-weight="700">Marketing Accounts</text>
      <text x="140" y="124" fill="#1D4ED8" font-size="10.5">Rp 12.0B</text>
      <text x="240" y="124" fill="#EA580C" font-size="10.5">Rp 5.5B</text>
      <text x="340" y="124" fill="#059669" font-size="10.5">Rp 8.5B</text>

      <!-- Total -->
      <rect x="0" y="142" width="426" height="30" rx="4" fill="#0F172A"/>
      <text x="10" y="161" fill="#FFFFFF" font-size="10.5" font-weight="800">Grand Total</text>
      <text x="140" y="161" fill="#93C5FD" font-size="10.5" font-weight="700">Rp 148.6B</text>
      <text x="240" y="161" fill="#FED7AA" font-size="10.5" font-weight="700">Rp 126.8B</text>
      <text x="340" y="161" fill="#A7F3D0" font-size="10.5" font-weight="700">Rp 107.0B</text>
    </g>

    <!-- Strategic Insight Callout -->
    <g transform="translate(20, 360)">
      <rect x="0" y="0" width="426" height="150" rx="6" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1"/>
      <text x="14" y="24" fill="#1D4ED8" font-size="11.5" font-weight="700">Content Revenue Insight:</text>
      <text x="14" y="46" fill="#475569" font-size="10.5">• LIVE revenue is heavily driven by Official brand</text>
      <text x="14" y="62" fill="#475569" font-size="10.5">  streamers (52.8% of total live sales).</text>
      <text x="14" y="82" fill="#475569" font-size="10.5">• Video revenue is overwhelmingly dominated by</text>
      <text x="14" y="98" fill="#475569" font-size="10.5">  Affiliate creators (85.6% of video GMV).</text>
      <text x="14" y="122" fill="#065F46" font-size="10.5" font-weight="700">✓ Opportunity: Scale brand-owned marketing video slots.</text>
    </g>
  </g>
</svg>
`;

// =========================================================================
// 02. GMV BREAKDOWN BY BRAND (Monthly Matrix Table with Heatmap)
// =========================================================================
const svg02 = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760" width="100%" height="100%" style="background:#F1F5F9; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  ${renderHeader('GMV Breakdown by Brand – Monthly Channel Pivot', 'Comparative Multi-Brand Matrix: LIVE vs Video vs Product Card')}

  <g transform="translate(24, 105)">
    <rect x="0" y="0" width="1152" height="625" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
    <text x="24" y="32" fill="#0F172A" font-size="15" font-weight="700">Monthly GMV Matrix by Brand &amp; Sales Channel (Sep – Nov 2026)</text>
    <text x="24" y="50" fill="#64748B" font-size="11.5">Anonymized cross-brand revenue benchmark showing channel mix and month-over-month trajectory</text>

    <!-- Matrix Header Rows -->
    <rect x="20" y="70" width="1112" height="28" fill="#0F172A"/>
    <text x="35" y="88" fill="#FFFFFF" font-size="10.5" font-weight="700">BRAND (ANONYMIZED)</text>
    
    <!-- Oct 2026 Section -->
    <rect x="220" y="72" width="300" height="24" fill="#1E3A8A" rx="2"/>
    <text x="370" y="88" fill="#FFFFFF" font-size="10.5" font-weight="700" text-anchor="middle">OCTOBER 2026 (PEAK CAMPAIGN)</text>

    <!-- Sep 2026 Section -->
    <rect x="530" y="72" width="300" height="24" fill="#1E293B" rx="2"/>
    <text x="680" y="88" fill="#FFFFFF" font-size="10.5" font-weight="700" text-anchor="middle">SEPTEMBER 2026</text>

    <!-- Nov 2026 Section -->
    <rect x="840" y="72" width="280" height="24" fill="#1E293B" rx="2"/>
    <text x="980" y="88" fill="#FFFFFF" font-size="10.5" font-weight="700" text-anchor="middle">NOVEMBER 2026 (PARTIAL)</text>

    <!-- Subheaders -->
    <rect x="20" y="98" width="1112" height="24" fill="#F8FAFC"/>
    <text x="230" y="114" fill="#475569" font-size="9" font-weight="700">TOTAL GMV</text>
    <text x="310" y="114" fill="#475569" font-size="9" font-weight="700">LIVE</text>
    <text x="385" y="114" fill="#475569" font-size="9" font-weight="700">VIDEO</text>
    <text x="460" y="114" fill="#475569" font-size="9" font-weight="700">CARD</text>

    <text x="540" y="114" fill="#475569" font-size="9" font-weight="700">TOTAL GMV</text>
    <text x="620" y="114" fill="#475569" font-size="9" font-weight="700">LIVE</text>
    <text x="695" y="114" fill="#475569" font-size="9" font-weight="700">VIDEO</text>
    <text x="770" y="114" fill="#475569" font-size="9" font-weight="700">CARD</text>

    <text x="850" y="114" fill="#475569" font-size="9" font-weight="700">TOTAL GMV</text>
    <text x="930" y="114" fill="#475569" font-size="9" font-weight="700">LIVE</text>
    <text x="1005" y="114" fill="#475569" font-size="9" font-weight="700">VIDEO</text>

    <!-- Brand Rows -->
    ${[
      {name: 'Brand Alpha (Personal Care)', octT: 'Rp 54.8B', octL: '24.5B', octV: '19.8B', octC: '10.5B', sepT: 'Rp 48.2B', sepL: '21.4B', novT: 'Rp 38.6B'},
      {name: 'Brand Beta (Electronics)', octT: 'Rp 31.2B', octL: '14.2B', octV: '10.5B', octC: '6.5B', sepT: 'Rp 29.5B', sepL: '12.8B', novT: 'Rp 21.4B'},
      {name: 'Brand Gamma (Home & Living)', octT: 'Rp 22.5B', octL: '8.1B', octV: '11.2B', octC: '3.2B', sepT: 'Rp 19.8B', sepL: '7.2B', novT: 'Rp 16.5B'},
      {name: 'Brand Delta (Fragrance)', octT: 'Rp 16.4B', octL: '4.8B', octV: '8.2B', octC: '3.4B', sepT: 'Rp 14.1B', sepL: '3.9B', novT: 'Rp 11.2B'},
      {name: 'Brand Epsilon (Health & OTC)', octT: 'Rp 12.8B', octL: '3.6B', octV: '7.4B', octC: '1.8B', sepT: 'Rp 11.2B', sepL: '3.1B', novT: 'Rp 8.9B'},
      {name: 'Brand Zeta (FMCG Foods)', octT: 'Rp 9.5B', octL: '2.8B', octV: '4.5B', octC: '2.2B', sepT: 'Rp 8.6B', sepL: '2.4B', novT: 'Rp 6.8B'},
      {name: 'Brand Eta (Mother & Baby)', octT: 'Rp 8.2B', octL: '2.1B', octV: '3.8B', octC: '2.3B', sepT: 'Rp 7.4B', sepL: '1.9B', novT: 'Rp 5.4B'},
      {name: 'Brand Theta (Skincare)', octT: 'Rp 6.8B', octL: '1.8B', octV: '3.2B', octC: '1.8B', sepT: 'Rp 6.1B', sepL: '1.6B', novT: 'Rp 4.5B'},
      {name: 'Brand Iota (Cosmetics)', octT: 'Rp 5.4B', octL: '1.4B', octV: '2.6B', octC: '1.4B', sepT: 'Rp 4.8B', sepL: '1.2B', novT: 'Rp 3.8B'},
      {name: 'Remaining 13 Brands Total', octT: 'Rp 28.5B', octL: '8.2B', octV: '13.4B', octC: '6.9B', sepT: 'Rp 24.2B', sepL: '6.8B', novT: 'Rp 19.8B'}
    ].map((r, idx) => {
      const y = 145 + idx * 40;
      const bg = idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC';
      return `
        <rect x="20" y="${y - 18}" width="1112" height="38" fill="${bg}"/>
        <text x="35" y="${y + 4}" fill="#1E293B" font-size="10.5" font-weight="700">${r.name}</text>
        
        <!-- Oct cell with heatmap fill -->
        <rect x="225" y="${y - 14}" width="75" height="28" rx="4" fill="#DBEAFE"/>
        <text x="262" y="${y + 4}" fill="#1D4ED8" font-size="10.5" font-weight="800" text-anchor="middle">${r.octT}</text>
        <text x="325" y="${y + 4}" fill="#475569" font-size="10">${r.octL}</text>
        <text x="400" y="${y + 4}" fill="#475569" font-size="10">${r.octV}</text>
        <text x="475" y="${y + 4}" fill="#475569" font-size="10">${r.octC}</text>

        <!-- Sep cell -->
        <text x="560" y="${y + 4}" fill="#334155" font-size="10.5" font-weight="600">${r.sepT}</text>
        <text x="635" y="${y + 4}" fill="#64748B" font-size="10">${r.sepL}</text>
        <text x="710" y="${y + 4}" fill="#64748B" font-size="10">8.2B</text>
        <text x="785" y="${y + 4}" fill="#64748B" font-size="10">5.1B</text>

        <!-- Nov cell -->
        <text x="870" y="${y + 4}" fill="#334155" font-size="10.5" font-weight="600">${r.novT}</text>
        <text x="945" y="${y + 4}" fill="#64748B" font-size="10">7.2B</text>
        <text x="1020" y="${y + 4}" fill="#64748B" font-size="10">5.8B</text>
      `;
    }).join('')}

    <!-- Total Row -->
    <rect x="20" y="555" width="1112" height="42" rx="4" fill="#0F172A"/>
    <text x="35" y="581" fill="#FFFFFF" font-size="11.5" font-weight="800">Grand Total (22 Brands)</text>
    <text x="262" y="581" fill="#38BDF8" font-size="12" font-weight="800" text-anchor="middle">Rp 196.1B</text>
    <text x="325" y="581" fill="#FFFFFF" font-size="11" font-weight="700">81.5B</text>
    <text x="400" y="581" fill="#FFFFFF" font-size="11" font-weight="700">81.2B</text>
    <text x="475" y="581" fill="#FFFFFF" font-size="11" font-weight="700">33.4B</text>
    <text x="560" y="581" fill="#FFFFFF" font-size="11" font-weight="700">Rp 172.5B</text>
    <text x="870" y="581" fill="#FFFFFF" font-size="11" font-weight="700">Rp 136.8B</text>
  </g>
</svg>
`;

// =========================================================================
// 03. BRAND DEEP-DIVE (e.g. Anchor Brand Performance & Sales Channel Share)
// =========================================================================
const svg03 = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760" width="100%" height="100%" style="background:#F1F5F9; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  ${renderHeader('Brand Deep-Dive – Anchor Brand Performance', 'Single-Brand Audit: Content GMV Share, Channel Mix &amp; Daily Momentum')}

  <!-- 6 Top Metric Cards for Anchor Account -->
  ${card(24, 105, 185, 74, 'GMV (LIVE + Video)', 'Rp 1.38B', '-6.2% vs prev month', '#EF4444')}
  ${card(221, 105, 185, 74, 'GMV LIVE', 'Rp 940.5M', '+7.1% vs prev month', '#10B981')}
  ${card(418, 105, 185, 74, 'GMV Video', 'Rp 439.5M', '-26.4% vs prev month', '#EF4444')}
  ${card(615, 105, 185, 74, 'Content Share of Shop GMV', '53.9%', '+19.6% vs prev month', '#10B981')}
  ${card(812, 105, 185, 74, 'Shop Orders', '9.4K', '-20.1% volume shift', '#EF4444')}
  ${card(1009, 105, 167, 74, 'GPM (LIVE + Video)', 'Rp 45.1K', '+98.0% efficiency', '#10B981')}

  <!-- Daily Stacked GMV Chart -->
  <g transform="translate(24, 195)">
    <rect x="0" y="0" width="560" height="535" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
    <text x="20" y="28" fill="#0F172A" font-size="13.5" font-weight="700">Daily GMV Progression (Anchor Brand)</text>
    <text x="20" y="44" fill="#64748B" font-size="11">Massive Payday and Mega Campaign Live Spikes</text>

    <!-- Legend -->
    <rect x="380" y="16" width="12" height="12" rx="2" fill="#2563EB"/>
    <text x="398" y="26" fill="#334155" font-size="11">gmv_live</text>
    <rect x="465" y="16" width="12" height="12" rx="2" fill="#F97316"/>
    <text x="483" y="26" fill="#334155" font-size="11">gmv_video</text>

    <!-- Daily Bars -->
    <line x1="45" y1="460" x2="530" y2="460" stroke="#CBD5E1" stroke-width="1"/>
    <line x1="45" y1="360" x2="530" y2="360" stroke="#F1F5F9" stroke-width="1"/>
    <line x1="45" y1="260" x2="530" y2="260" stroke="#F1F5F9" stroke-width="1"/>
    <line x1="45" y1="160" x2="530" y2="160" stroke="#F1F5F9" stroke-width="1"/>
    <line x1="45" y1="60" x2="530" y2="60" stroke="#F1F5F9" stroke-width="1"/>

    <text x="35" y="464" fill="#94A3B8" font-size="9.5" text-anchor="end">0</text>
    <text x="35" y="364" fill="#94A3B8" font-size="9.5" text-anchor="end">100M</text>
    <text x="35" y="264" fill="#94A3B8" font-size="9.5" text-anchor="end">200M</text>
    <text x="35" y="164" fill="#94A3B8" font-size="9.5" text-anchor="end">300M</text>

    ${[
      {d: 'Nov 1', l: 43.9, v: 47.8},
      {d: 'Nov 2', l: 85.1, v: 40.7},
      {d: 'Nov 3', l: 70.2, v: 36.2},
      {d: 'Nov 4', l: 126.4, v: 38.0},
      {d: 'Nov 5', l: 56.0, v: 50.1},
      {d: 'Nov 6', l: 0, v: 29.4},
      {d: 'Nov 7', l: 54.6, v: 33.2},
      {d: 'Nov 8', l: 60.5, v: 25.7},
      {d: 'Nov 9', l: 62.1, v: 51.4},
      {d: 'Nov 10', l: 170.5, v: 31.7},
      {d: 'Nov 11', l: 297.4, v: 61.5}, // Huge 11.11 spike
      {d: 'Nov 12', l: 13.4, v: 20.2}
    ].map((r, i) => {
      const x = 55 + i * 39;
      const vH = r.v * 1.0;
      const lH = r.l * 1.0;
      const vY = 460 - vH;
      const lY = vY - lH;
      return `
        <rect x="${x}" y="${vY}" width="24" height="${vH}" fill="#F97316" rx="2"/>
        <rect x="${x}" y="${lY}" width="24" height="${lH}" fill="#2563EB" rx="2"/>
        ${i === 10 ? `
          <text x="${x + 12}" y="${lY - 8}" fill="#1D4ED8" font-size="9" font-weight="800" text-anchor="middle">297M</text>
        ` : ''}
        <text x="${x + 12}" y="476" fill="#64748B" font-size="8.5" text-anchor="middle">${r.d}</text>
      `;
    }).join('')}
  </g>

  <!-- Share of Total Shop GMV by Sales Channel (Right) -->
  <g transform="translate(604, 195)">
    <rect x="0" y="0" width="572" height="535" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
    <text x="20" y="28" fill="#0F172A" font-size="13.5" font-weight="700">Share of Total Shop GMV by Sales Channel</text>
    <text x="20" y="44" fill="#64748B" font-size="11">Official vs Affiliate vs Organic Product Card Allocation</text>

    <!-- Horizontal 100% Bar -->
    <g transform="translate(20, 68)">
      <rect x="0" y="0" width="532" height="36" rx="4" fill="#F1F5F9"/>
      <rect x="0" y="0" width="220" height="36" rx="4 0 0 4" fill="#2563EB"/>
      <text x="110" y="22" fill="#FFFFFF" font-size="11" font-weight="700" text-anchor="middle">LIVE (41%)</text>
      <rect x="220" y="0" width="112" height="36" fill="#1E40AF"/>
      <text x="276" y="22" fill="#FFFFFF" font-size="11" font-weight="700" text-anchor="middle">Video (21%)</text>
      <rect x="332" y="0" width="200" height="36" rx="0 4 4 0" fill="#F97316"/>
      <text x="432" y="22" fill="#FFFFFF" font-size="11" font-weight="700" text-anchor="middle">Product Card (38%)</text>
    </g>

    <!-- Account Type Matrix Table -->
    <g transform="translate(20, 140)">
      <rect x="0" y="0" width="532" height="26" fill="#F8FAFC"/>
      <text x="12" y="17" fill="#475569" font-size="9.5" font-weight="700">ACCOUNT TYPE</text>
      <text x="140" y="17" fill="#475569" font-size="9.5" font-weight="700">GMV LIVE</text>
      <text x="260" y="17" fill="#475569" font-size="9.5" font-weight="700">GMV VIDEO</text>
      <text x="380" y="17" fill="#475569" font-size="9.5" font-weight="700">PRODUCT CARD</text>

      <text x="12" y="50" fill="#1E293B" font-size="11" font-weight="700">Official Account</text>
      <text x="140" y="50" fill="#1D4ED8" font-size="11" font-weight="700">Rp 582.2M</text>
      <text x="260" y="50" fill="#EA580C" font-size="11">Rp 48.3M</text>
      <text x="380" y="50" fill="#334155" font-size="11">Rp 945.6M</text>

      <text x="12" y="85" fill="#1E293B" font-size="11" font-weight="700">Affiliate Creators</text>
      <text x="140" y="85" fill="#1D4ED8" font-size="11">Rp 457.7M</text>
      <text x="260" y="85" fill="#EA580C" font-size="11" font-weight="700">Rp 417.7M</text>
      <text x="380" y="85" fill="#64748B" font-size="11">-</text>

      <text x="12" y="120" fill="#1E293B" font-size="11" font-weight="700">Marketing (Unassigned)</text>
      <text x="140" y="120" fill="#64748B" font-size="11">-</text>
      <text x="260" y="120" fill="#64748B" font-size="11">-</text>
      <text x="380" y="120" fill="#334155" font-size="11">Rp 46.5M</text>

      <rect x="0" y="145" width="532" height="34" rx="4" fill="#0F172A"/>
      <text x="12" y="167" fill="#FFFFFF" font-size="11" font-weight="800">Grand Total</text>
      <text x="140" y="167" fill="#93C5FD" font-size="11" font-weight="800">Rp 1.04B</text>
      <text x="260" y="167" fill="#FED7AA" font-size="11" font-weight="800">Rp 466.0M</text>
      <text x="380" y="167" fill="#E2E8F0" font-size="11" font-weight="800">Rp 992.1M</text>
    </g>

    <!-- Key Finding Box -->
    <g transform="translate(20, 360)">
      <rect x="0" y="0" width="532" height="150" rx="6" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1"/>
      <text x="16" y="24" fill="#0F172A" font-size="12" font-weight="700">Strategic Account Finding:</text>
      <text x="16" y="48" fill="#475569" font-size="11">• Official Live generates 56% of total live GMV, proving high customer trust.</text>
      <text x="16" y="70" fill="#475569" font-size="11">• Affiliate Creators drive 89.6% of video revenue through viral short reviews.</text>
      <text x="16" y="92" fill="#475569" font-size="11">• 4 out of 5 allowed Marketing Account slots are currently idle/unassigned.</text>
      <text x="16" y="120" fill="#1D4ED8" font-size="11" font-weight="700">✓ Growth Pitch: Activate 2 dedicated Marketing streaming sub-accounts.</text>
    </g>
  </g>
</svg>
`;

// =========================================================================
// 04. FUNNEL & EFFICIENCY (LIVE vs Video Funnel Benchmarking)
// =========================================================================
const svg04 = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760" width="100%" height="100%" style="background:#F1F5F9; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  ${renderHeader('Funnel &amp; Efficiency – LIVE vs Video Conversion', 'Comparing Product CTR, Click-to-Order (CTOR), AOV, and GPM Yield')}

  <!-- Left: Funnel Step Rates -->
  <g transform="translate(24, 105)">
    <rect x="0" y="0" width="560" height="625" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
    <text x="24" y="32" fill="#0F172A" font-size="14" font-weight="700">Funnel Step Rates: LIVE vs Short Video</text>
    <text x="24" y="50" fill="#64748B" font-size="11.5">Where does viewer drop-off occur between content exposure and checkout?</text>

    <!-- Product CTR Benchmark -->
    <g transform="translate(24, 80)">
      <text x="0" y="0" fill="#1E293B" font-size="12" font-weight="700">Product CTR (Click-Through Rate)</text>
      <text x="0" y="16" fill="#64748B" font-size="10.5">Ratio of viewers who click through to product details</text>

      <text x="0" y="48" fill="#1D4ED8" font-size="11" font-weight="700">LIVE</text>
      <rect x="50" y="36" width="380" height="24" rx="4" fill="#2563EB"/>
      <text x="440" y="52" fill="#1D4ED8" font-size="11.5" font-weight="800">6.74% (9.5× Higher)</text>

      <text x="0" y="90" fill="#EA580C" font-size="11" font-weight="700">VIDEO</text>
      <rect x="50" y="78" width="40" height="24" rx="4" fill="#F97316"/>
      <text x="100" y="94" fill="#EA580C" font-size="11.5" font-weight="800">0.71% (Bottleneck)</text>
    </g>

    <!-- Click to Order Benchmark (CTOR) -->
    <g transform="translate(24, 230)">
      <text x="0" y="0" fill="#1E293B" font-size="12" font-weight="700">Click &rarr; Order (CTOR)</text>
      <text x="0" y="16" fill="#64748B" font-size="10.5">Conversion rate from product detail page to completed purchase</text>

      <text x="0" y="48" fill="#1D4ED8" font-size="11" font-weight="700">LIVE</text>
      <rect x="50" y="36" width="310" height="24" rx="4" fill="#2563EB"/>
      <text x="370" y="52" fill="#1D4ED8" font-size="11.5" font-weight="800">9.14%</text>

      <text x="0" y="90" fill="#EA580C" font-size="11" font-weight="700">VIDEO</text>
      <rect x="50" y="78" width="292" height="24" rx="4" fill="#F97316"/>
      <text x="352" y="94" fill="#EA580C" font-size="11.5" font-weight="800">8.62%</text>
    </g>

    <!-- Average Order Value (AOV) -->
    <g transform="translate(24, 380)">
      <text x="0" y="0" fill="#1E293B" font-size="12" font-weight="700">Average Order Value (AOV)</text>
      
      <text x="0" y="40" fill="#1D4ED8" font-size="11" font-weight="700">LIVE</text>
      <rect x="50" y="28" width="320" height="22" rx="4" fill="#2563EB"/>
      <text x="380" y="44" fill="#1D4ED8" font-size="11" font-weight="700">Rp 108.3K</text>

      <text x="0" y="76" fill="#EA580C" font-size="11" font-weight="700">VIDEO</text>
      <rect x="50" y="64" width="270" height="22" rx="4" fill="#F97316"/>
      <text x="330" y="80" fill="#EA580C" font-size="11" font-weight="700">Rp 92.7K</text>
    </g>

    <!-- Key Takeaway -->
    <g transform="translate(24, 495)">
      <rect x="0" y="0" width="512" height="105" rx="6" fill="#ECFDF5" stroke="#A7F3D0" stroke-width="1"/>
      <text x="14" y="22" fill="#065F46" font-size="11.5" font-weight="700">Strategic Funnel Conclusion:</text>
      <text x="14" y="42" fill="#047857" font-size="10.5">• Once shoppers click, Video converts almost as well as Live (8.6% vs 9.1%).</text>
      <text x="14" y="60" fill="#047857" font-size="10.5">• The primary breakdown is video hook-to-click (0.71% vs 6.74%).</text>
      <text x="14" y="82" fill="#065F46" font-size="10.5" font-weight="700">&rarr; Action: Focus creative briefs on product pinning and yellow-cart calls to action.</text>
    </g>
  </g>

  <!-- Right: Top Contributors Table -->
  <g transform="translate(604, 105)">
    <rect x="0" y="0" width="572" height="625" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
    <text x="24" y="32" fill="#0F172A" font-size="14" font-weight="700">Top Contributors – What Moved GMV vs Last Period?</text>
    <text x="24" y="50" fill="#64748B" font-size="11.5">Top performing Live broadcast sessions and viral affiliate video content</text>

    <!-- Table Header -->
    <rect x="20" y="70" width="532" height="26" fill="#F8FAFC"/>
    <text x="30" y="87" fill="#475569" font-size="9.5" font-weight="700">CONTENT TITLE / LABEL</text>
    <text x="360" y="87" fill="#475569" font-size="9.5" font-weight="700">TYPE</text>
    <text x="440" y="87" fill="#475569" font-size="9.5" font-weight="700">ATTRIBUTED GMV</text>

    ${[
      {title: '[HERO] 11.11 Mega Live Marathon Broadcast', type: 'LIVE', gmv: 'Rp 117.1M'},
      {title: '[SALE] Exclusive Beauty Brand Day Broadcast', type: 'LIVE', gmv: 'Rp 69.3M'},
      {title: '[BUNDLE] Payday Skincare Special Live Stream', type: 'LIVE', gmv: 'Rp 54.7M'},
      {title: 'Viral Affiliate Review: Body Foam Deep Cleanse', type: 'VIDEO', gmv: 'Rp 38.1M'},
      {title: 'Creator Showcase: Weekend Flash Promo Haul', type: 'VIDEO', gmv: 'Rp 31.9M'},
      {title: 'Host Spotlight: Morning Health & Wellness Live', type: 'LIVE', gmv: 'Rp 28.5M'},
      {title: 'Affiliate Testimonial: 30-Day Skincare Routine', type: 'VIDEO', gmv: 'Rp 27.2M'},
      {title: 'Flash Sale: Buy 1 Get 1 Shower Gel Refill', type: 'LIVE', gmv: 'Rp 26.9M'},
      {title: 'Creator Clip: Travel Size Daily Essentials Pack', type: 'VIDEO', gmv: 'Rp 25.2M'},
      {title: 'Evening Prime Broadcast: Payday Midnight Rush', type: 'LIVE', gmv: 'Rp 22.4M'},
      {title: 'Affiliate Clip: Top 3 Budget Fragrance Finds', type: 'VIDEO', gmv: 'Rp 20.2M'}
    ].map((r, i) => {
      const y = 115 + i * 44;
      const bg = i % 2 === 0 ? '#FFFFFF' : '#F8FAFC';
      const isLive = r.type === 'LIVE';
      return `
        <rect x="20" y="${y - 14}" width="532" height="38" fill="${bg}"/>
        <text x="30" y="${y + 6}" fill="#1E293B" font-size="10.5" font-weight="600">${r.title}</text>
        <rect x="360" y="${y - 6}" width="50" height="20" rx="3" fill="${isLive ? '#DBEAFE' : '#FFEDD5'}"/>
        <text x="385" y="${y + 8}" fill="${isLive ? '#1D4ED8' : '#C2410C'}" font-size="9.5" font-weight="700" text-anchor="middle">${r.type}</text>
        <text x="440" y="${y + 7}" fill="#0F172A" font-size="11" font-weight="700">${r.gmv}</text>
      `;
    }).join('')}
  </g>
</svg>
`;

// =========================================================================
// 05. LIVE DEEP-DIVE & SESSION PICKER
// =========================================================================
const svg05 = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760" width="100%" height="100%" style="background:#F1F5F9; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  ${renderHeader('LIVE Deep-Dive – Session Analytics &amp; Cross-Filtering', 'Official &amp; Affiliate Live Sessions, Duration, GPM, and Creator Performance')}

  <!-- 5 KPI Cards -->
  ${card(24, 105, 220, 74, 'Selected Session GMV', 'Rp 977.4M', 'Active audit window', '#2563EB')}
  ${card(258, 105, 220, 74, 'Total Duration (Hours)', '9.0K hrs', 'Cumulative stream time', '#64748B')}
  ${card(492, 105, 220, 74, 'Show GPM', 'Rp 20.1K', 'Revenue per 1,000 views', '#2563EB')}
  ${card(726, 105, 220, 74, 'Product CTR', '3.6%', 'Catalog click rate', '#10B981')}
  ${card(960, 105, 216, 74, 'Click &rarr; Order (CTOR)', '4.7%', 'Session checkout rate', '#10B981')}

  <!-- Pick a Session Interactive Table -->
  <g transform="translate(24, 195)">
    <rect x="0" y="0" width="1152" height="255" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
    
    <!-- Table Header Bar -->
    <rect x="0" y="0" width="1152" height="40" rx="8 8 0 0" fill="#0F3B68"/>
    <text x="24" y="25" fill="#FFFFFF" font-size="13.5" font-weight="700">Pick a Live Session (Interactive Cross-Filtering Selector)</text>
    <text x="960" y="25" fill="#93C5FD" font-size="11">Clicking session updates minute telemetry</text>

    <rect x="16" y="50" width="1120" height="24" fill="#F8FAFC"/>
    <text x="26" y="66" fill="#475569" font-size="9.5" font-weight="700">SESSION TIME (WIB)</text>
    <text x="180" y="66" fill="#475569" font-size="9.5" font-weight="700">BRAND</text>
    <text x="340" y="66" fill="#475569" font-size="9.5" font-weight="700">SESSION TITLE</text>
    <text x="750" y="66" fill="#475569" font-size="9.5" font-weight="700">DURATION (MINS)</text>
    <text x="900" y="66" fill="#475569" font-size="9.5" font-weight="700">LIVE GMV</text>
    <text x="1030" y="66" fill="#475569" font-size="9.5" font-weight="700">STATUS</text>

    ${[
      {time: 'Sun 25 Oct • 00:00', brand: 'Brand Alpha', title: 'PAYDAY SALE MEGA LIVE BROADCAST [SELECTED]', mins: '910 mins', gmv: 'Rp 7.69M', active: true},
      {time: 'Sun 25 Oct • 08:00', brand: 'Brand Alpha', title: 'WEEKEND DEALS & FLASH VOUCHERS', mins: '506 mins', gmv: 'Rp 6.18M', active: false},
      {time: 'Sat 31 Oct • 09:00', brand: 'Brand Alpha', title: 'HALLOWEEN PROMO MARATHON STREAM', mins: '850 mins', gmv: 'Rp 14.78M', active: false},
      {time: 'Sat 31 Oct • 11:00', brand: 'Brand Alpha', title: 'TOP CREATOR COLLAB LIVE SHOW', mins: '689 mins', gmv: 'Rp 16.15M', active: false},
      {time: 'Fri 23 Oct • 12:00', brand: 'Brand Alpha', title: 'LUNCH BREAK SPECIAL VALUE BUNDLES', mins: '594 mins', gmv: 'Rp 5.72M', active: false}
    ].map((r, i) => {
      const y = 92 + i * 32;
      return `
        <rect x="16" y="${y - 12}" width="1120" height="28" fill="${r.active ? '#EFF6FF' : (i % 2 === 0 ? '#FFFFFF' : '#F8FAFC')}" stroke="${r.active ? '#3B82F6' : 'transparent'}" stroke-width="1"/>
        <text x="26" y="${y + 6}" fill="#1E293B" font-size="10.5">${r.time}</text>
        <text x="180" y="${y + 6}" fill="#334155" font-size="10.5" font-weight="600">${r.brand}</text>
        <text x="340" y="${y + 6}" fill="${r.active ? '#1D4ED8' : '#1E293B'}" font-size="10.5" font-weight="${r.active ? '700' : '500'}">${r.title}</text>
        <text x="750" y="${y + 6}" fill="#475569" font-size="10.5">${r.mins}</text>
        <text x="900" y="${y + 6}" fill="${r.active ? '#1D4ED8' : '#0F172A'}" font-size="11" font-weight="700">${r.gmv}</text>
        <text x="1030" y="${y + 6}" fill="${r.active ? '#10B981' : '#64748B'}" font-size="10" font-weight="700">${r.active ? 'ACTIVE' : 'COMPLETED'}</text>
      `;
    }).join('')}
  </g>

  <!-- Creator Performance Sub-Table -->
  <g transform="translate(24, 465)">
    <rect x="0" y="0" width="1152" height="265" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
    <text x="24" y="28" fill="#0F172A" font-size="13.5" font-weight="700">Detail Live Performance by Creator Streamers</text>
    <text x="24" y="44" fill="#64748B" font-size="11">Creator benchmark showing stream count, total viewers, revenue yield, and conversion rate</text>

    <rect x="20" y="60" width="1112" height="24" fill="#F8FAFC"/>
    <text x="30" y="76" fill="#475569" font-size="9.5" font-weight="700">CREATOR HANDLE (ANONYMIZED)</text>
    <text x="240" y="76" fill="#475569" font-size="9.5" font-weight="700">LIVE TYPE</text>
    <text x="380" y="76" fill="#475569" font-size="9.5" font-weight="700">TOTAL SESSIONS</text>
    <text x="520" y="76" fill="#475569" font-size="9.5" font-weight="700">IMPRESSIONS</text>
    <text x="680" y="76" fill="#475569" font-size="9.5" font-weight="700">TOTAL GMV</text>
    <text x="840" y="76" fill="#475569" font-size="9.5" font-weight="700">GMV / SESSION</text>
    <text x="1000" y="76" fill="#475569" font-size="9.5" font-weight="700">CONVERSION %</text>

    ${[
      {handle: 'creator_talent_01', type: 'Official Host', live: '295 sessions', imp: '1.2M', gmv: 'Rp 210.5M', perLive: 'Rp 713.5K', cvr: '5.82%'},
      {handle: 'creator_talent_02', type: 'Affiliate Creator', live: '285 sessions', imp: '980K', gmv: 'Rp 197.5M', perLive: 'Rp 692.9K', cvr: '5.14%'},
      {handle: 'creator_talent_03', type: 'Affiliate Creator', live: '261 sessions', imp: '1.5M', gmv: 'Rp 185.0M', perLive: 'Rp 708.8K', cvr: '4.95%'},
      {handle: 'creator_talent_04', type: 'Marketing Host', live: '250 sessions', imp: '840K', gmv: 'Rp 165.2M', perLive: 'Rp 660.8K', cvr: '4.62%'},
      {handle: 'creator_talent_05', type: 'Affiliate Creator', live: '190 sessions', imp: '620K', gmv: 'Rp 118.4M', perLive: 'Rp 623.1K', cvr: '4.20%'}
    ].map((r, idx) => {
      const y = 105 + idx * 32;
      return `
        <text x="30" y="${y}" fill="#1E293B" font-size="10.5" font-weight="600">${r.handle}</text>
        <text x="240" y="${y}" fill="#2563EB" font-size="10.5">${r.type}</text>
        <text x="380" y="${y}" fill="#475569" font-size="10.5">${r.live}</text>
        <text x="520" y="${y}" fill="#475569" font-size="10.5">${r.imp}</text>
        <text x="680" y="${y}" fill="#0F172A" font-size="10.5" font-weight="700">${r.gmv}</text>
        <text x="840" y="${y}" fill="#0F172A" font-size="10.5">${r.perLive}</text>
        <text x="1000" y="${y}" fill="#10B981" font-size="10.5" font-weight="700">${r.cvr}</text>
      `;
    }).join('')}
  </g>
</svg>
`;

// =========================================================================
// 06. LIVE MINUTE-BY-MINUTE TELEMETRY
// =========================================================================
const svg06 = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760" width="100%" height="100%" style="background:#F1F5F9; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  ${renderHeader('LIVE – Minute-by-Minute Telemetry', 'Granular Operational Drilldown: Viewers vs GMV Velocity inside a Single Stream')}

  <!-- 5 Session KPI Cards -->
  ${card(24, 105, 220, 74, 'Selected Stream GMV', 'Rp 7.69M', 'Payday Sale Stream #7702', '#2563EB')}
  ${card(258, 105, 220, 74, 'SKU Orders Completed', '65 Orders', 'High Unit Basket Velocity', '#10B981')}
  ${card(492, 105, 220, 74, 'Peak Concurrent Viewers', '4.4K Viewers', 'Sustained audience retention', '#2563EB')}
  ${card(726, 105, 220, 74, 'Product Click Rate', '4.0%', 'Active catalog engagement', '#10B981')}
  ${card(960, 105, 216, 74, 'Total Duration', '910 Mins', '15.1 Continuous Live Hours', '#64748B')}

  <!-- Main Chart: Minute-by-Minute Telemetry Dual Axis -->
  <g transform="translate(24, 195)">
    <rect x="0" y="0" width="1152" height="535" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
    <text x="24" y="32" fill="#0F172A" font-size="14" font-weight="700">Minute-by-Minute Live Telemetry: Viewers Line vs GMV Bars</text>
    <text x="24" y="50" fill="#64748B" font-size="11.5">Correlation between concurrent audience surges and revenue conversion spikes</text>

    <!-- Legend -->
    <line x1="880" y1="26" x2="905" y2="26" stroke="#2563EB" stroke-width="3"/>
    <circle cx="892" cy="26" r="3" fill="#2563EB"/>
    <text x="915" y="30" fill="#334155" font-size="11">Concurrent Viewers</text>
    <rect x="1035" y="20" width="12" height="12" rx="2" fill="#F97316"/>
    <text x="1053" y="30" fill="#334155" font-size="11">GMV Velocity (Rp)</text>

    <!-- Left Y Axis (Viewers): 0 to 100 -->
    <!-- Right Y Axis (GMV): 0 to 800K -->
    <line x1="60" y1="460" x2="1100" y2="460" stroke="#CBD5E1" stroke-width="1"/>
    <line x1="60" y1="360" x2="1100" y2="360" stroke="#F1F5F9" stroke-width="1"/>
    <line x1="60" y1="260" x2="1100" y2="260" stroke="#F1F5F9" stroke-width="1"/>
    <line x1="60" y1="160" x2="1100" y2="160" stroke="#F1F5F9" stroke-width="1"/>
    <line x1="60" y1="60" x2="1100" y2="60" stroke="#F1F5F9" stroke-width="1"/>

    <text x="50" y="464" fill="#94A3B8" font-size="10" text-anchor="end">0</text>
    <text x="50" y="364" fill="#94A3B8" font-size="10" text-anchor="end">25</text>
    <text x="50" y="264" fill="#94A3B8" font-size="10" text-anchor="end">50</text>
    <text x="50" y="164" fill="#94A3B8" font-size="10" text-anchor="end">75</text>
    <text x="50" y="64" fill="#94A3B8" font-size="10" text-anchor="end">100</text>

    <text x="1110" y="464" fill="#EA580C" font-size="10">0</text>
    <text x="1110" y="364" fill="#EA580C" font-size="10">200K</text>
    <text x="1110" y="264" fill="#EA580C" font-size="10">400K</text>
    <text x="1110" y="164" fill="#EA580C" font-size="10">600K</text>
    <text x="1110" y="64" fill="#EA580C" font-size="10">800K</text>

    <!-- Minute GMV Bars (Orange) -->
    <!-- Initial spike at minute 1: Rp 721K -->
    <rect x="75" y="99" width="16" height="361" fill="#EA580C" rx="2"/>
    <text x="83" y="88" fill="#EA580C" font-size="9" font-weight="700" text-anchor="middle">Rp 721.6K</text>

    ${[
      {x: 105, h: 290, val: ''},
      {x: 135, h: 140, val: '278K'},
      {x: 165, h: 155, val: ''},
      {x: 195, h: 162, val: '324K'},
      {x: 225, h: 132, val: ''},
      {x: 255, h: 116, val: '233K'},
      {x: 285, h: 145, val: ''},
      {x: 315, h: 112, val: '225K'},
      {x: 345, h: 144, val: '128K'},
      {x: 375, h: 72, val: ''},
      {x: 405, h: 68, val: '118K'},
      {x: 435, h: 74, val: ''},
      {x: 465, h: 86, val: '127K'},
      {x: 495, h: 42, val: ''},
      {x: 525, h: 49, val: '49K'},
      {x: 555, h: 58, val: ''},
      {x: 585, h: 80, val: '160K'},
      {x: 615, h: 68, val: ''},
      {x: 645, h: 54, val: '106K'},
      {x: 675, h: 60, val: ''},
      {x: 705, h: 55, val: '110K'},
      {x: 735, h: 54, val: ''},
      {x: 765, h: 55, val: '109K'},
      {x: 795, h: 22, val: ''},
      {x: 825, h: 0, val: '0'},
      {x: 855, h: 0, val: '0'},
      {x: 885, h: 0, val: '0'},
      {x: 915, h: 0, val: '0'},
      {x: 945, h: 0, val: '0'},
      {x: 975, h: 0, val: '0'}
    ].map(b => `
      <rect x="${b.x}" y="${460 - b.h}" width="16" height="${b.h}" fill="#F97316" rx="2"/>
      ${b.val && b.val !== '0' ? `<text x="${b.x + 8}" y="${452 - b.h}" fill="#EA580C" font-size="8" font-weight="700" text-anchor="middle">${b.val}</text>` : ''}
    `).join('')}

    <!-- Concurrent Viewers Line (Blue) -->
    <path d="M 75 188 L 105 180 L 135 174 L 165 170 L 195 172 L 225 182 L 255 174 L 285 160 L 315 174 L 345 176 L 375 185 L 405 172 L 435 185 L 465 180 L 495 178 L 525 182 L 555 174 L 585 172 L 615 168 L 645 174 L 675 188 L 705 180 L 735 175 L 765 165 L 795 180 L 825 185 L 855 180 L 885 168 L 915 170 L 945 162 L 975 174" 
          fill="none" stroke="#2563EB" stroke-width="2.5"/>

    <!-- Shaded viewer area -->
    <path d="M 75 188 L 105 180 L 135 174 L 165 170 L 195 172 L 225 182 L 255 174 L 285 160 L 315 174 L 345 176 L 375 185 L 405 172 L 435 185 L 465 180 L 495 178 L 525 182 L 555 174 L 585 172 L 615 168 L 645 174 L 675 188 L 705 180 L 735 175 L 765 165 L 795 180 L 825 185 L 855 180 L 885 168 L 915 170 L 945 162 L 975 174 L 975 460 L 75 460 Z" 
          fill="#3B82F6" opacity="0.08"/>

    <!-- Key minute timestamps -->
    <text x="75" y="480" fill="#64748B" font-size="9" text-anchor="middle">12:53</text>
    <text x="195" y="480" fill="#64748B" font-size="9" text-anchor="middle">12:18</text>
    <text x="345" y="480" fill="#64748B" font-size="9" text-anchor="middle">12:35</text>
    <text x="495" y="480" fill="#64748B" font-size="9" text-anchor="middle">12:47</text>
    <text x="645" y="480" fill="#64748B" font-size="9" text-anchor="middle">12:43</text>
    <text x="795" y="480" fill="#64748B" font-size="9" text-anchor="middle">12:49</text>
    <text x="945" y="480" fill="#64748B" font-size="9" text-anchor="middle">12:37</text>
  </g>
</svg>
`;

// =========================================================================
// 07. VIDEO DEEP-DIVE (Scale/Fix/Stop Bubble Chart & Days Decay)
// =========================================================================
const svg07 = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760" width="100%" height="100%" style="background:#F1F5F9; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  ${renderHeader('Video Deep-Dive – Scale, Fix or Stop Decision Matrix', 'Bubble Quadrant (Views vs CTR vs GMV) and Video Lifespan Revenue Decay')}

  <!-- 5 Video KPI Cards -->
  ${card(24, 105, 220, 74, 'Video GMV Tracked', 'Rp 4.82B', '-7.4% vs prev month', '#EF4444')}
  ${card(258, 105, 220, 74, 'Videos Evaluated', '1.38K Videos', '-7.2% vs prev month', '#64748B')}
  ${card(492, 105, 220, 74, 'Total Video Views', '325.4M Views', '+168.2% viral impressions', '#10B981')}
  ${card(726, 105, 220, 74, 'Avg Duration', '28.5 Secs', 'Optimal short-form length', '#64748B')}
  ${card(960, 105, 216, 74, 'Average GPM', 'Rp 4.8M', '+28.5% efficiency lift', '#10B981')}

  <!-- Left: Which videos to scale, fix or stop? Bubble Chart -->
  <g transform="translate(24, 195)">
    <rect x="0" y="0" width="560" height="535" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
    <text x="24" y="32" fill="#0F172A" font-size="14" font-weight="700">Which videos to scale, fix or stop? (Decision Matrix)</text>
    <text x="24" y="50" fill="#64748B" font-size="11.5">Sumbu X: Views • Sumbu Y: Click-Through Rate • Ukuran Bubble: Total GMV</text>

    <!-- Quadrant Background Zones -->
    <!-- Top-Right: SCALE (High Views, High CTR) -->
    <rect x="280" y="70" width="250" height="190" fill="#ECFDF5" opacity="0.6"/>
    <text x="510" y="95" fill="#047857" font-size="12" font-weight="800" text-anchor="end">SCALE &amp; BOOST AD</text>

    <!-- Top-Left: FIX HOOK (Low Views, High CTR) -->
    <rect x="60" y="70" width="220" height="190" fill="#EFF6FF" opacity="0.6"/>
    <text x="75" y="95" fill="#1D4ED8" font-size="12" font-weight="800">FIX HOOK / DISTRIBUTE</text>

    <!-- Bottom-Right: FIX CTA (High Views, Low CTR) -->
    <rect x="280" y="260" width="250" height="190" fill="#FEF3C7" opacity="0.6"/>
    <text x="510" y="435" fill="#B45309" font-size="12" font-weight="800" text-anchor="end">FIX PRODUCT CTA</text>

    <!-- Bottom-Left: STOP (Low Views, Low CTR) -->
    <rect x="60" y="260" width="220" height="190" fill="#FFF1F2" opacity="0.6"/>
    <text x="75" y="435" fill="#E11D48" font-size="12" font-weight="800">STOP / PRUNE</text>

    <!-- Center Decision Threshold Line -->
    <line x1="60" y1="260" x2="530" y2="260" stroke="#64748B" stroke-width="1.5" stroke-dasharray="4 2"/>
    <line x1="280" y1="70" x2="280" y2="450" stroke="#64748B" stroke-width="1.5" stroke-dasharray="4 2"/>

    <!-- Y Axis Labels: CTR -->
    <text x="50" y="75" fill="#64748B" font-size="9.5" text-anchor="end">1.2%</text>
    <text x="50" y="170" fill="#64748B" font-size="9.5" text-anchor="end">0.8%</text>
    <text x="50" y="264" fill="#0F172A" font-size="9.5" font-weight="700" text-anchor="end">0.4%</text>
    <text x="50" y="355" fill="#64748B" font-size="9.5" text-anchor="end">0.2%</text>
    <text x="50" y="450" fill="#64748B" font-size="9.5" text-anchor="end">0%</text>

    <!-- X Axis Labels: Views -->
    <text x="60" y="475" fill="#64748B" font-size="9.5">10K</text>
    <text x="280" y="475" fill="#0F172A" font-size="9.5" font-weight="700" text-anchor="middle">5M Views</text>
    <text x="520" y="475" fill="#64748B" font-size="9.5" text-anchor="end">50M+</text>

    <!-- Bubbles -->
    <!-- Bubble 1 (SCALE - Winner Video) -->
    <circle cx="390" cy="140" r="32" fill="#8B5CF6" opacity="0.75" stroke="#7C3AED" stroke-width="2"/>
    <text x="390" y="144" fill="#FFFFFF" font-size="10" font-weight="800" text-anchor="middle">Rp 92M</text>

    <!-- Bubble 2 (SCALE) -->
    <circle cx="340" cy="190" r="24" fill="#3B82F6" opacity="0.75"/>
    <text x="340" y="194" fill="#FFFFFF" font-size="9" font-weight="700" text-anchor="middle">Rp 64M</text>

    <!-- Cluster in Fix CTA (High views, sub-threshold CTR) -->
    <circle cx="410" cy="300" r="28" fill="#10B981" opacity="0.6"/>
    <circle cx="430" cy="320" r="22" fill="#F59E0B" opacity="0.6"/>
    <circle cx="390" cy="330" r="20" fill="#EC4899" opacity="0.6"/>

    <!-- Small cluster in Stop -->
    <circle cx="160" cy="370" r="14" fill="#94A3B8" opacity="0.6"/>
    <circle cx="210" cy="340" r="16" fill="#F43F5E" opacity="0.6"/>

    <text x="24" y="515" fill="#64748B" font-size="10.5">Threshold benchmark: 0.4% CTR • Bubble size directly proportional to SKU orders</text>
  </g>

  <!-- Right: How long do videos keep selling? (Days Decay Bar Chart) -->
  <g transform="translate(604, 195)">
    <rect x="0" y="0" width="572" height="535" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
    <text x="24" y="32" fill="#0F172A" font-size="14" font-weight="700">How long do videos keep selling? (GMV Decay)</text>
    <text x="24" y="50" fill="#64748B" font-size="11.5">Attributed sales volume by days elapsed since video publication</text>

    <!-- Y Axis: 0 to 100M -->
    <line x1="55" y1="450" x2="530" y2="450" stroke="#CBD5E1" stroke-width="1"/>
    <line x1="55" y1="350" x2="530" y2="350" stroke="#F1F5F9" stroke-width="1"/>
    <line x1="55" y1="250" x2="530" y2="250" stroke="#F1F5F9" stroke-width="1"/>
    <line x1="55" y1="150" x2="530" y2="150" stroke="#F1F5F9" stroke-width="1"/>

    <text x="45" y="454" fill="#94A3B8" font-size="10" text-anchor="end">0</text>
    <text x="45" y="354" fill="#94A3B8" font-size="10" text-anchor="end">30M</text>
    <text x="45" y="254" fill="#94A3B8" font-size="10" text-anchor="end">60M</text>
    <text x="45" y="154" fill="#94A3B8" font-size="10" text-anchor="end">100M</text>

    <!-- Decay Bars: Days 0 to 8+ -->
    ${[
      {day: 'Day 0', h: 32, val: '8.1M'},
      {day: 'Day 1', h: 330, val: '92.6M (PEAK)'},
      {day: 'Day 2', h: 220, val: '64.9M'},
      {day: 'Day 3', h: 235, val: '68.8M'},
      {day: 'Day 4', h: 180, val: '52.7M'},
      {day: 'Day 5', h: 165, val: '48.3M'},
      {day: 'Day 6', h: 210, val: '61.8M'},
      {day: 'Day 7', h: 105, val: '31.7M'},
      {day: 'Day 8+', h: 80, val: '22.8M'}
    ].map((b, idx) => {
      const x = 70 + idx * 51;
      const y = 450 - b.h;
      return `
        <rect x="${x}" y="${y}" width="36" height="${b.h}" fill="${idx === 1 ? '#1D4ED8' : '#3B82F6'}" rx="3"/>
        <text x="${x + 18}" y="${y - 8}" fill="${idx === 1 ? '#1D4ED8' : '#475569'}" font-size="${idx === 1 ? '9.5' : '8.5'}" font-weight="${idx === 1 ? '800' : '600'}" text-anchor="middle">${b.val}</text>
        <text x="${x + 18}" y="470" fill="#64748B" font-size="9" text-anchor="middle">${b.day}</text>
      `;
    }).join('')}

    <!-- Strategic Decay Callout Box -->
    <g transform="translate(24, 490)">
      <rect x="0" y="0" width="524" height="35" rx="6" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1"/>
      <text x="12" y="22" fill="#1E293B" font-size="10.5"><strong>Insight:</strong> Videos peak on Day 1 (Rp 92.6M) and sustain 50M+ through Day 6 before decaying.</text>
    </g>
  </g>
</svg>
`;

// =========================================================================
// 08. PRODUCT SOLD THROUGH CONTENT (Affiliate vs Official SKU Monetization)
// =========================================================================
const svg08 = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760" width="100%" height="100%" style="background:#F1F5F9; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  ${renderHeader('Product Sold Through Content – Channel Attribution', 'Top SKU Monetization: Official Brand Store vs Affiliate Creator Content Split')}

  <g transform="translate(24, 105)">
    <rect x="0" y="0" width="1152" height="625" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
    <text x="24" y="32" fill="#0F172A" font-size="15" font-weight="700">Top Products Sold Through Content (Affiliate vs Official Split)</text>
    <text x="24" y="50" fill="#64748B" font-size="11.5">Evaluating SKU sales velocity attributed to creator affiliate videos versus official live broadcasts</text>

    <rect x="20" y="70" width="1112" height="28" fill="#0F172A"/>
    <text x="35" y="88" fill="#FFFFFF" font-size="10" font-weight="700">PRODUCT ITEM / SKU DESCRIPTION</text>
    <text x="560" y="88" fill="#FDBA74" font-size="10" font-weight="700">GMV AFFILIATE CREATORS</text>
    <text x="820" y="88" fill="#93C5FD" font-size="10" font-weight="700">GMV OFFICIAL STORE</text>
    <text x="1020" y="88" fill="#A7F3D0" font-size="10" font-weight="700">TOTAL CONTENT GMV</text>

    ${[
      {sku: '[NEW HERO] Refreshing Body Wash Refill 800ml Duo Pack', aff: 'Rp 2.47B', off: 'Rp 885.3M', total: 'Rp 3.35B'},
      {sku: '[EXCLUSIVE CREATOR BUNDLE] Herbal Relief Roll-On 10ml Pack of 3', aff: 'Rp 2.17B', off: 'Rp 1.64B', total: 'Rp 3.81B'},
      {sku: 'Top-Load Smart Washing Machine 8.5kg Inverter Model', aff: 'Rp 1.55B', off: 'Rp 90.2M', total: 'Rp 1.64B'},
      {sku: 'High-Performance 4G Android Tablet 10.1-inch with Kids Mode', aff: 'Rp 1.41B', off: 'Rp 19.1M', total: 'Rp 1.43B'},
      {sku: 'Compact Quad-Core Smartphone 6.5-inch 128GB Storage', aff: 'Rp 1.29B', off: 'Rp 35.7M', total: 'Rp 1.32B'},
      {sku: 'Creator Endorsement: Slim 5G Smartphone with AMOLED Display', aff: 'Rp 1.27B', off: 'Rp 2.2M', total: 'Rp 1.27B'},
      {sku: 'Dual-Wing Automatic Washing Machine 9kg Stainless Tub', aff: 'Rp 1.01B', off: 'Rp 111.6M', total: 'Rp 1.12B'},
      {sku: 'Long-Lasting Eau De Parfum 100ml Luxury Scent Series', aff: 'Rp 790.6M', off: 'Rp 13.1M', total: 'Rp 803.7M'},
      {sku: 'Digital Airfryer 4.2L Low-Watt Non-Stick Basket', aff: 'Rp 752.5M', off: 'Rp 352.0M', total: 'Rp 1.10B'},
      {sku: '[BESTSELLER BUNDLE] Fragrance Mist + Perfume Body Oil Gift Set', aff: 'Rp 738.6M', off: 'Rp 81.0M', total: 'Rp 819.6M'},
      {sku: 'Family Pack Disposable Diaper Pants Size L 44s', aff: 'Rp 692.1M', off: 'Rp 420.5M', total: 'Rp 1.11B'}
    ].map((r, idx) => {
      const y = 125 + idx * 42;
      const bg = idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC';
      return `
        <rect x="20" y="${y - 18}" width="1112" height="40" fill="${bg}"/>
        <text x="35" y="${y + 6}" fill="#1E293B" font-size="10.5" font-weight="600">${r.sku}</text>
        <text x="560" y="${y + 6}" fill="#C2410C" font-size="11" font-weight="700">${r.aff}</text>
        <text x="820" y="${y + 6}" fill="#1D4ED8" font-size="11" font-weight="700">${r.off}</text>
        <text x="1020" y="${y + 6}" fill="#065F46" font-size="11.5" font-weight="800">${r.total}</text>
      `;
    }).join('')}

    <!-- Summary Footnote -->
    <g transform="translate(20, 580)">
      <text x="10" y="16" fill="#64748B" font-size="10.5" font-style="italic">Tracking 10,392 active product SKUs • Affiliate creator networks represent 74.2% of total content-attributed product sales.</text>
    </g>
  </g>
</svg>
`;

const svgs = [
  { name: '01-general-overview.svg', content: svg01 },
  { name: '02-gmv-breakdown-by-brand.svg', content: svg02 },
  { name: '03-brand-deep-dive.svg', content: svg03 },
  { name: '04-funnel-and-efficiency.svg', content: svg04 },
  { name: '05-live-deep-dive.svg', content: svg05 },
  { name: '06-live-minute-by-minute.svg', content: svg06 },
  { name: '07-video-deep-dive.svg', content: svg07 },
  { name: '08-product-sold-through-content.svg', content: svg08 }
];

svgs.forEach(({ name, content }) => {
  const filePath = path.join(targetDir, name);
  let sanitized = content.replace(/&rarr;/g, '→');
  sanitized = sanitized.replace(/&(?!(amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);)/g, '&amp;');
  fs.writeFileSync(filePath, sanitized.trim(), 'utf-8');
  console.log('Saved:', filePath);
});

console.log('Successfully generated all 8 TikTok Shop dummy SVGs!');
