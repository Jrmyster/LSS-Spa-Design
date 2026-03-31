import { useEffect, useState } from "react";
import {
  BarChart2,
  MousePointerClick,
  Users,
  TrendingUp,
  RefreshCw,
  Lock,
  Tag,
  Eye,
  EyeOff,
} from "lucide-react";

const ADMIN_PASSWORD = "lss2026";

interface Stats {
  visits: number;
  bookingClicks: number;
  conversionRate: string;
}

interface CouponClaim {
  id: string;
  name: string;
  email: string;
  coupon: "MARCH20" | "REFER20";
  claimedAt: string;
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (value === ADMIN_PASSWORD) {
      onUnlock();
    } else {
      setError(true);
      setValue("");
      setTimeout(() => setError(false), 2500);
    }
  }

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-6">
      <div className="w-full max-w-sm bg-white rounded-3xl border border-border shadow-xl p-8 text-center">
        <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center mx-auto mb-4 border border-amber-200">
          <Lock className="w-7 h-7 text-amber-600" />
        </div>
        <h1 className="text-xl font-bold text-foreground mb-1">Admin Access</h1>
        <p className="text-sm text-muted-foreground mb-7">
          LSS Spa &amp; Wellness — Private Dashboard
        </p>
        <form onSubmit={handleSubmit} noValidate>
          <div className="relative mb-4">
            <input
              type={show ? "text" : "password"}
              autoFocus
              placeholder="Enter password"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className={`w-full border-2 rounded-xl px-4 py-3 pr-10 text-sm focus:outline-none transition-colors ${
                error
                  ? "border-red-400 bg-red-50 text-red-700 placeholder:text-red-400"
                  : "border-border focus:border-amber-400"
              }`}
            />
            <button
              type="button"
              onClick={() => setShow((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label={show ? "Hide password" : "Show password"}
            >
              {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {error && (
            <p className="text-sm text-red-600 mb-3 font-medium">Incorrect password. Try again.</p>
          )}
          <button
            type="submit"
            className="w-full bg-amber-400 hover:bg-amber-500 text-white font-bold rounded-full py-3 transition-colors shadow-sm"
          >
            Unlock Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}

export default function AdminStats() {
  const [unlocked, setUnlocked] = useState(false);
  const [stats, setStats] = useState<Stats | null>(null);
  const [claims, setClaims] = useState<CouponClaim[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());

  const fetchAll = async () => {
    setLoading(true);
    setError(false);
    try {
      const [statsRes, claimsRes] = await Promise.all([
        fetch("/api/analytics/stats"),
        fetch("/api/coupons/claims"),
      ]);
      if (!statsRes.ok || !claimsRes.ok) throw new Error("Failed");
      const statsData: Stats = await statsRes.json();
      const claimsData: { claims: CouponClaim[] } = await claimsRes.json();
      setStats(statsData);
      setClaims(claimsData.claims);
      setLastRefresh(new Date());
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (unlocked) fetchAll();
  }, [unlocked]);

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }

  const statCards = stats
    ? [
        {
          label: "Total Website Visits",
          value: stats.visits.toLocaleString(),
          icon: <Users className="w-6 h-6 text-sky-600" />,
          bg: "bg-sky-50 border-sky-200",
          iconBg: "bg-sky-100",
        },
        {
          label: "Total 'Book Now' Clicks",
          value: stats.bookingClicks.toLocaleString(),
          icon: <MousePointerClick className="w-6 h-6 text-amber-600" />,
          bg: "bg-amber-50 border-amber-200",
          iconBg: "bg-amber-100",
        },
        {
          label: "Conversion Rate",
          value: `${stats.conversionRate}%`,
          icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
          bg: "bg-emerald-50 border-emerald-200",
          iconBg: "bg-emerald-100",
        },
        {
          label: "Coupon Claims",
          value: claims.length.toLocaleString(),
          icon: <Tag className="w-6 h-6 text-violet-600" />,
          bg: "bg-violet-50 border-violet-200",
          iconBg: "bg-violet-100",
        },
      ]
    : [];

  const march20Claims = claims.filter((c) => c.coupon === "MARCH20");
  const refer20Claims = claims.filter((c) => c.coupon === "REFER20");

  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      {/* Header */}
      <div className="bg-white border-b border-border shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-sm">
              <BarChart2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground leading-none">Analytics Dashboard</h1>
              <p className="text-xs text-muted-foreground mt-0.5">LSS Spa &amp; Wellness — Private</p>
            </div>
          </div>
          <button
            onClick={fetchAll}
            disabled={loading}
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50 px-3 py-1.5 rounded-lg hover:bg-stone-100"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            Could not load data. Make sure the API server is running and try refreshing.
          </div>
        )}

        {/* ── Stat cards ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-2xl border bg-white p-6 animate-pulse h-28" />
              ))
            : statCards.map((card) => (
                <div
                  key={card.label}
                  className={`rounded-2xl border ${card.bg} p-5 flex flex-col gap-3`}
                >
                  <div className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center`}>
                    {card.icon}
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground leading-none mb-1">
                      {card.value}
                    </p>
                    <p className="text-xs text-muted-foreground leading-snug">{card.label}</p>
                  </div>
                </div>
              ))}
        </div>

        {/* ── Analytics detail table ── */}
        {stats && (
          <div className="rounded-2xl border border-border bg-white shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-border">
              <h2 className="font-semibold text-foreground text-sm">Website Analytics</h2>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-stone-50 border-b border-border">
                  <th className="text-left px-6 py-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">Metric</th>
                  <th className="text-right px-6 py-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">Value</th>
                  <th className="text-right px-6 py-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-6 py-4 font-medium text-foreground">Website Visits</td>
                  <td className="px-6 py-4 text-right font-semibold text-sky-700">{stats.visits.toLocaleString()}</td>
                  <td className="px-6 py-4 text-right text-muted-foreground text-xs">Page loads (anonymous)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-foreground">Book Now Clicks</td>
                  <td className="px-6 py-4 text-right font-semibold text-amber-700">{stats.bookingClicks.toLocaleString()}</td>
                  <td className="px-6 py-4 text-right text-muted-foreground text-xs">Clicks to Square booking</td>
                </tr>
                <tr className="bg-emerald-50/50">
                  <td className="px-6 py-4 font-semibold text-foreground">Conversion Rate</td>
                  <td className="px-6 py-4 text-right font-bold text-emerald-700 text-base">{stats.conversionRate}%</td>
                  <td className="px-6 py-4 text-right text-muted-foreground text-xs">Clicks ÷ Visits</td>
                </tr>
              </tbody>
            </table>
            <div className="px-6 py-3 border-t border-border bg-stone-50">
              <p className="text-xs text-muted-foreground">
                Last refreshed: {lastRefresh.toLocaleTimeString()} &nbsp;·&nbsp; No personal data in analytics
              </p>
            </div>
          </div>
        )}

        {/* ── Coupon Claims table ── */}
        <div className="rounded-2xl border border-border bg-white shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-border flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-foreground text-sm">Coupon Claims (Lead Bridge)</h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                {march20Claims.length} March Madness &nbsp;·&nbsp; {refer20Claims.length} Referral Reward
              </p>
            </div>
            <div className="flex gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
                MARCH20 ×{march20Claims.length}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-violet-100 text-violet-700 border border-violet-200">
                REFER20 ×{refer20Claims.length}
              </span>
            </div>
          </div>

          {loading ? (
            <div className="p-6 space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-10 rounded-lg bg-stone-100 animate-pulse" />
              ))}
            </div>
          ) : claims.length === 0 ? (
            <div className="px-6 py-10 text-center text-sm text-muted-foreground">
              No coupon claims yet. Once clients click "Get My 20% Off Coupon" and submit their info, they'll appear here.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-stone-50 border-b border-border">
                    <th className="text-left px-6 py-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">Name</th>
                    <th className="text-left px-6 py-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</th>
                    <th className="text-left px-6 py-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">Coupon</th>
                    <th className="text-left px-6 py-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">Claimed At</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[...claims].reverse().map((claim) => (
                    <tr key={claim.id} className="hover:bg-stone-50 transition-colors">
                      <td className="px-6 py-3.5 font-medium text-foreground">{claim.name}</td>
                      <td className="px-6 py-3.5 text-muted-foreground">
                        <a href={`mailto:${claim.email}`} className="hover:text-foreground hover:underline transition-colors">
                          {claim.email}
                        </a>
                      </td>
                      <td className="px-6 py-3.5">
                        <span
                          className={`inline-block text-[10px] font-extrabold uppercase tracking-widest border rounded-full px-2.5 py-0.5 ${
                            claim.coupon === "MARCH20"
                              ? "bg-emerald-100 text-emerald-700 border-emerald-200"
                              : "bg-violet-100 text-violet-700 border-violet-200"
                          }`}
                        >
                          {claim.coupon}
                        </span>
                      </td>
                      <td className="px-6 py-3.5 text-muted-foreground text-xs tabular-nums">
                        {formatDate(claim.claimedAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="px-6 py-3 border-t border-border bg-stone-50">
            <p className="text-xs text-muted-foreground">
              Showing {claims.length} total claim{claims.length !== 1 ? "s" : ""} · Most recent first · Data stored locally
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground pb-4">
          This page is not linked in the navigation. &nbsp;·&nbsp; Admin password: lss2026
        </p>
      </div>
    </div>
  );
}
