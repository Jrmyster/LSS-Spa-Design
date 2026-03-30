import { useEffect, useState } from "react";
import { BarChart2, MousePointerClick, Users, TrendingUp, RefreshCw } from "lucide-react";

interface Stats {
  visits: number;
  bookingClicks: number;
  conversionRate: string;
}

export default function AdminStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());

  const fetchStats = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/analytics/stats");
      if (!res.ok) throw new Error("Failed");
      const data: Stats = await res.json();
      setStats(data);
      setLastRefresh(new Date());
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const cards = stats
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
      ]
    : [];

  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      {/* Header */}
      <div className="bg-white border-b border-border shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
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
            onClick={fetchStats}
            disabled={loading}
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50 px-3 py-1.5 rounded-lg hover:bg-stone-100"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">

        {error && (
          <div className="mb-8 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            Could not load analytics data. Make sure the API server is running and try refreshing.
          </div>
        )}

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="rounded-2xl border bg-white p-6 animate-pulse h-28" />
              ))
            : cards.map((card) => (
                <div
                  key={card.label}
                  className={`rounded-2xl border ${card.bg} p-6 flex items-center gap-4`}
                >
                  <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center shrink-0`}>
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

        {/* Detail table */}
        {stats && (
          <div className="rounded-2xl border border-border bg-white shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-border">
              <h2 className="font-semibold text-foreground text-sm">Detailed Breakdown</h2>
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
                Last refreshed: {lastRefresh.toLocaleTimeString()} &nbsp;·&nbsp; No personal data collected
              </p>
            </div>
          </div>
        )}

        <p className="text-center text-xs text-muted-foreground mt-8">
          This page is not linked in the navigation. All tracking is fully anonymous.
        </p>
      </div>
    </div>
  );
}
