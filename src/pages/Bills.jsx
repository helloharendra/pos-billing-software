import { Printer, RotateCcw } from 'lucide-react'
import { Badge, Card, DataTable, PageHeader, inr } from '../components/ui'
import { useContact } from '../components/ContactModal'
import { bills } from '../data'

const tone = { Paid: 'green', Refunded: 'red', 'On hold': 'amber' }

export default function Bills() {
  const { openContact } = useContact()
  return (
    <>
      <PageHeader title="Bill history" subtitle="Reprint, refund or share bills on WhatsApp." />
      <Card bodyClass="">
        <DataTable
          rows={bills}
          columns={[
            { key: 'id', label: 'Bill no.', render: (r) => <span className="font-semibold text-slate-800">{r.id}</span> },
            { key: 'time', label: 'Time' },
            { key: 'customer', label: 'Customer' },
            { key: 'items', label: 'Items' },
            { key: 'mode', label: 'Payment', render: (r) => <Badge tone="slate" dot={false}>{r.mode}</Badge> },
            { key: 'status', label: 'Status', render: (r) => <Badge tone={tone[r.status]}>{r.status}</Badge> },
            { key: 'amount', label: 'Amount', align: 'right', render: (r) => <span className="font-semibold text-slate-800">{inr(r.amount)}</span> },
            {
              key: 'a', label: '', align: 'right', render: () => (
                <div className="flex justify-end gap-1">
                  <button onClick={() => openContact('Thermal Receipt Printing')} className="rounded-lg p-2 text-slate-400 hover:bg-brand-50 hover:text-brand-600"><Printer className="h-4 w-4" /></button>
                  <button onClick={() => openContact('Returns & Refunds')} className="rounded-lg p-2 text-slate-400 hover:bg-rose-50 hover:text-rose-600"><RotateCcw className="h-4 w-4" /></button>
                </div>
              ),
            },
          ]}
        />
      </Card>
    </>
  )
}
