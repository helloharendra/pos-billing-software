import { IndianRupee, Receipt, ShoppingBasket, Users } from 'lucide-react'
import { Card, PageHeader, Progress, StatCard, inr } from '../components/ui'
import { DonutChart, TrendChart } from '../components/Charts'
import { hourly, payments, topItems } from '../data'

export default function Dashboard() {
  const max = Math.max(...topItems.map((t) => t.amount))
  return (
    <>
      <PageHeader title="Sales dashboard" subtitle="Today · All counters · Live" />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Today's sales" value="₹1,28,740" delta="12.5%" icon={IndianRupee} />
        <StatCard label="Bills generated" value="412" delta="8.1%" icon={Receipt} tone="sky" />
        <StatCard label="Avg. basket size" value="₹312" delta="4.0%" icon={ShoppingBasket} tone="amber" />
        <StatCard label="Repeat customers" value="38%" delta="-1.2%" icon={Users} tone="violet" />
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Card title="Hourly sales" subtitle="₹ thousand" className="xl:col-span-2">
          <TrendChart data={hourly} series={[{ key: 'sales', name: 'Sales' }]} format={(v) => `₹${v}k`} />
        </Card>
        <Card title="Payment modes">
          <DonutChart data={payments} centerValue="412" centerLabel="Bills" />
        </Card>
      </div>
      <Card title="Top-selling items" className="mt-6">
        <div className="grid gap-5 md:grid-cols-2">
          {topItems.map((t) => (
            <div key={t.name}>
              <div className="mb-2 flex justify-between text-sm"><span className="font-semibold text-slate-700">{t.name}</span><span className="text-slate-500">{t.qty} sold · <b className="text-slate-800">{inr(t.amount)}</b></span></div>
              <Progress value={(t.amount / max) * 100} />
            </div>
          ))}
        </div>
      </Card>
    </>
  )
}
