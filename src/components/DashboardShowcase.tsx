import React, { useState } from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { TrendingDown, Users, Sparkles, CheckCircle2, ShieldAlert, Zap, Calendar, TrendingUp } from "lucide-react";
import { CHART_DYNAMIC_DATA, MOCK_METRICS } from "../data";

export default function DashboardShowcase() {
  const [activeSegment, setActiveSegment] = useState<"staffing" | "traffic">("staffing");
  const [selectedAlert, setSelectedAlert] = useState<string>("alert-1");

  const alerts = [
    {
      id: "alert-1",
      level: "critical",
      time: "18:00 (Saturday Dinner Peak)",
      title: "Predictive Understaffing Warning",
      desc: "Reservation volume is pacing 22% higher than typical Saturday rosters. Recommend adding +2 floor teammates between 19:30 and 21:30.",
      impact: "Preserves $1,140 in potential dinner beverage revenue",
      badge: "Staffing Optimization"
    },
    {
      id: "alert-2",
      level: "warning",
      time: "22:30 (Closing Block)",
      title: "Overstaffing Alert & Early Clock-off",
      desc: "POS telemetry detects dessert courses wrapping up 40 minutes ahead of scheduled trend vectors. Recommend clocking-off 3 floor hosts early.",
      impact: "Trims $144 in redundant payroll instantly",
      badge: "Labor Efficiency"
    },
    {
      id: "alert-3",
      level: "success",
      time: "Tomorrow's Sourcing Plan",
      title: "Premium Seafood Overstock Sentry",
      desc: "Warm weather shift forecasted for Sunday is shifting sales vectors towards light cold appetisers. Raw Wagyu/Trophy Ribeye demand predicted to decrease.",
      impact: "Reduces raw meat over-prep spoilage by 21%",
      badge: "Inventory Intelligence"
    }
  ];

  return (
    <div className="rounded-3xl border border-[#383330] bg-[#12100f] p-6 lg:p-10 shadow-2xl overflow-hidden relative" id="dashboard-playground">
      {/* Decorative premium grain and glare */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#eb5a3c]/30 to-transparent" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#eb5a3c]/10 rounded-full blur-3xl" />
      
      {/* Dashboard Top Navigation Mockup */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#292422] pb-6 mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5ClassName">
            <span className="h-2 w-2 rounded-full bg-[#eb5a3c] animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#eb5a3c]">Aura Live Control Hub</span>
          </div>
          <h3 className="font-heading text-2xl lg:text-3xl font-bold tracking-tight text-[#f7f3f0]">
            Operational Intelligence Console
          </h3>
          <p className="text-sm text-[#bcaea6] mt-1">
            Visualising active analytics and live neural optimization vectors.
          </p>
        </div>

        {/* Dashboard Interactive Segment Controls */}
        <div className="flex p-1 bg-[#1c1817] rounded-xl border border-[#2b2523] self-start md:self-center">
          <button
            onClick={() => setActiveSegment("staffing")}
            className={`cursor-pointer px-4 py-2 rounded-lg text-xs font-medium transition-all ${
              activeSegment === "staffing"
                ? "bg-[#eb5a3c] text-white shadow-md font-semibold"
                : "text-[#bcaea6] hover:text-[#f7f3f0]"
            }`}
          >
            Staff optimization
          </button>
          <button
            onClick={() => setActiveSegment("traffic")}
            className={`cursor-pointer px-4 py-2 rounded-lg text-xs font-medium transition-all ${
              activeSegment === "traffic"
                ? "bg-[#eb5a3c] text-white shadow-md font-semibold"
                : "text-[#bcaea6] hover:text-[#f7f3f0]"
            }`}
          >
            Occupancy Volatility
          </button>
        </div>
      </div>

      {/* Grid: Indicators and Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Live Left Column: Dynamic Metrics Cards */}
        <div className="xl:col-span-1 flex flex-col gap-4">
          <p className="text-xs font-mono uppercase tracking-wider text-[#9c8b82]">
            Key Property Analytics
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4">
            {MOCK_METRICS.map((metric) => (
              <div
                key={metric.id}
                className="p-5 rounded-2xl bg-[#191514] border border-[#2e2826] hover:border-[#eb5a3c]/30 transition-all group duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs text-[#bcaea6] tracking-tight">{metric.label}</span>
                  {metric.trend === "down" ? (
                    <TrendingDown className="h-4 w-4 text-[#eb5a3c]" />
                  ) : (
                    <TrendingUp className="h-4 w-4 text-[#10b981]" />
                  )}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold font-heading text-[#f7f3f0] group-hover:text-white transition-colors duration-300">
                    {metric.value}
                  </span>
                  <span className={`text-[11px] font-medium font-mono ${
                    metric.trend === "down" ? "text-[#eb5a3c]" : "text-[#10b981]"
                  }`}>
                    {metric.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-2 p-4 rounded-2xl bg-[#191312] border border-[#e35d44]/15 flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-[#eb5a3c] shrink-0 mt-0.5" />
            <div>
              <h5 className="text-xs font-bold text-[#f7f3f0]">Aura Recommendation Model</h5>
              <p className="text-[11px] text-[#bcaea6] mt-0.5 leading-relaxed">
                By auto-balancing your staffing rosters based on cloud occupancy projections, Aura is pacing to save this location **$2,488** in payroll overhead this week alone.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column Grid Segment For Graphic Showcase */}
        <div className="xl:col-span-2 flex flex-col gap-6">
          <div className="p-5 rounded-2xl bg-[#171413] border border-[#2b2523] flex-1 min-h-[300px] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#eb5a3c]" />
                <span className="text-xs text-[#f7f3f0] font-mono">Today's Peak Demand Projection Profile</span>
              </div>
              <div className="flex items-center gap-4 text-[10px] font-mono">
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-[#fdecdb]" />
                  <span className="text-[#bcaea6]">Predicted guests</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-[#eb5a3c]" />
                  <span className="text-[#bcaea6]">
                    {activeSegment === "staffing" ? "Optimized Roster level" : "Peak Volatility Indicator"}
                  </span>
                </div>
              </div>
            </div>

            {/* CHART PLOT AREA */}
            <div className="h-[250px] w-full mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={CHART_DYNAMIC_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#fdecdb" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#fdecdb" stopOpacity={0.01}/>
                    </linearGradient>
                    <linearGradient id="colorStaffing" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#eb5a3c" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#eb5a3c" stopOpacity={0.01}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#2c2725" strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="hour"
                    stroke="#8c7d75"
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#8c7d75"
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1c1817",
                      borderColor: "#423835",
                      borderRadius: "12px",
                      color: "#f7f3f0",
                      fontSize: "12px",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey={activeSegment === "staffing" ? "predictedGuests" : "actualGuests"}
                    stroke="#fdecdb"
                    fillOpacity={1}
                    fill="url(#colorPredicted)"
                    strokeWidth={1.5}
                    name="Projected Traffic"
                  />
                  <Area
                    type="monotone"
                    dataKey={activeSegment === "staffing" ? "recommendedStaff" : "recommendedStaff"}
                    stroke="#eb5a3c"
                    fillOpacity={1}
                    fill="url(#colorStaffing)"
                    strokeWidth={2}
                    name="Optimized Staff Roster"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <p className="text-[11px] text-center text-[#9c8b82] mt-4 font-mono">
              Aura forecast nodes align shift rosters with real transaction data intervals, eliminating up to 18% of labor waste.
            </p>
          </div>

          {/* Interactive Mock Alerts System */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#9c8b82]">
              Live Automated Operational Directives
            </span>
            <div className="flex flex-col gap-2">
              {alerts.map((alert) => {
                const isSelected = selectedAlert === alert.id;
                return (
                  <button
                    key={alert.id}
                    onClick={() => setSelectedAlert(alert.id)}
                    className={`cursor-pointer w-full text-left p-4 rounded-xl transition-all duration-300 border flex flex-col md:flex-row md:items-center justify-between gap-3 ${
                      isSelected
                        ? "bg-[#211a18] border-[#eb5a3c] shadow-lg"
                        : "bg-[#141211] border-[#2b2523] hover:border-[#4a403c]"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 shrink-0">
                        {alert.level === "critical" ? (
                          <ShieldAlert className="h-5 w-5 text-[#eb5a3c]" />
                        ) : alert.level === "warning" ? (
                          <Zap className="h-5 w-5 text-[#f59e0b]" />
                        ) : (
                          <CheckCircle2 className="h-5 w-5 text-[#10b981]" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-full ${
                            alert.level === "critical"
                              ? "bg-[#eb5a3c]/20 text-[#eb5a3c]"
                              : alert.level === "warning"
                              ? "bg-[#f59e0b]/20 text-[#f59e0b]"
                              : "bg-[#10b981]/20 text-[#10b981]"
                          }`}>
                            {alert.badge}
                          </span>
                          <span className="text-[11px] text-[#9c8b82] font-mono">{alert.time}</span>
                        </div>
                        <h4 className="text-xs font-semibold text-[#f7f3f0] mt-1">{alert.title}</h4>
                        {isSelected && (
                          <p className="text-[11px] text-[#bcaea6] mt-1.5 leading-relaxed">
                            {alert.desc}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="text-right shrink-0">
                      <span className="text-[10px] font-mono text-[#bcaea6] block">Aura Projected Impact</span>
                      <span className="text-[11px] font-bold text-[#f7f3f0]">{alert.impact}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
