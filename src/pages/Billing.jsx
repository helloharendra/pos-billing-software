import { useMemo, useState } from 'react'
import { Banknote, CheckCircle2, CreditCard, Minus, PauseCircle, Plus, ScanBarcode, Search, Smartphone, Trash2, UserPlus } from 'lucide-react'
import { inr } from '../components/ui'
import { useContact } from '../components/ContactModal'
import { categories, products } from '../data'

const modes = [
  { key: 'UPI', icon: Smartphone }, { key: 'Cash', icon: Banknote }, { key: 'Card', icon: CreditCard },
]

export default function Billing() {
  const { openContact } = useContact()
  const [cat, setCat] = useState('All')
  const [q, setQ] = useState('')
  const [cart, setCart] = useState({ 4: 2, 1: 1, 7: 1 })
  const [discount, setDiscount] = useState(0)
  const [mode, setMode] = useState('UPI')
  const [done, setDone] = useState(false)

  const list = products.filter((p) => (cat === 'All' || p.category === cat) && `${p.name} ${p.code}`.toLowerCase().includes(q.toLowerCase()))
  const add = (id, n = 1) => setCart((c) => {
    const next = { ...c, [id]: (c[id] || 0) + n }
    if (next[id] <= 0) delete next[id]
    return next
  })

  const lines = Object.entries(cart).map(([id, qty]) => ({ ...products.find((p) => p.id === +id), qty }))
  const totals = useMemo(() => {
    const sub = lines.reduce((s, l) => s + l.price * l.qty, 0)
    const gst = lines.reduce((s, l) => s + (l.price * l.qty * l.gst) / (100 + l.gst), 0) // GST-inclusive MRP
    const disc = (sub * discount) / 100
    return { sub, gst, disc, total: Math.round(sub - disc) }
  }, [lines, discount])

  const checkout = () => {
    setDone(true)
    setTimeout(() => { setDone(false); setCart({}); setDiscount(0) }, 1800)
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_400px]">
      {/* Products */}
      <div className="min-w-0 animate-fade-up">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search product or scan barcode…" className="input py-3 pl-10" autoFocus />
          </div>
          <button onClick={() => openContact('Barcode Scanner Integration')} className="btn-ghost"><ScanBarcode className="h-4 w-4" /> Scan</button>
        </div>
        <div className="scrollbar-thin mb-4 flex gap-2 overflow-x-auto pb-1">
          {categories.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold transition ${cat === c ? 'bg-slate-900 text-white shadow' : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:ring-slate-300'}`}>{c}</button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 2xl:grid-cols-4">
          {list.map((p) => (
            <button key={p.id} onClick={() => add(p.id)} className="card group relative p-4 text-left transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg active:scale-[.98]">
              {cart[p.id] && <span className="absolute right-3 top-3 grid h-6 min-w-6 place-items-center rounded-full bg-brand-500 px-1.5 text-xs font-bold text-white">{cart[p.id]}</span>}
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 text-3xl transition group-hover:scale-110">{p.emoji}</div>
              <p className="mt-3 line-clamp-1 text-sm font-semibold text-slate-800">{p.name}</p>
              <div className="mt-1 flex items-center justify-between">
                <span className="font-bold text-slate-900">{inr(p.price)}</span>
                <span className="text-[11px] text-slate-400">GST {p.gst}%</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Cart */}
      <aside className="card flex h-fit flex-col animate-fade-up xl:sticky xl:top-24">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div>
            <p className="font-semibold text-slate-900">Current bill</p>
            <p className="text-xs text-slate-400">#B-20932 · Counter 2</p>
          </div>
          <button onClick={() => openContact('Customer & Loyalty Points')} className="btn-ghost px-3 py-1.5 text-xs"><UserPlus className="h-3.5 w-3.5" /> Customer</button>
        </div>

        <div className="scrollbar-thin max-h-[320px] min-h-[160px] divide-y divide-slate-100 overflow-y-auto px-5">
          {lines.length === 0 && <p className="py-12 text-center text-sm text-slate-400">Tap a product to add it to the bill</p>}
          {lines.map((l) => (
            <div key={l.id} className="flex items-center gap-3 py-3">
              <span className="text-2xl">{l.emoji}</span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-800">{l.name}</p>
                <p className="text-xs text-slate-400">{inr(l.price)} × {l.qty}</p>
              </div>
              <div className="flex items-center rounded-lg ring-1 ring-slate-200">
                <button onClick={() => add(l.id, -1)} className="p-1.5 text-slate-500 hover:text-slate-900">{l.qty === 1 ? <Trash2 className="h-3.5 w-3.5" /> : <Minus className="h-3.5 w-3.5" />}</button>
                <span className="w-6 text-center text-sm font-semibold">{l.qty}</span>
                <button onClick={() => add(l.id)} className="p-1.5 text-slate-500 hover:text-slate-900"><Plus className="h-3.5 w-3.5" /></button>
              </div>
              <span className="w-16 text-right text-sm font-bold text-slate-900">{inr(l.price * l.qty)}</span>
            </div>
          ))}
        </div>

        <div className="space-y-2 border-t border-dashed border-slate-200 bg-slate-50/60 px-5 py-4 text-sm">
          <div className="flex justify-between text-slate-500"><span>Subtotal</span><span>{inr(totals.sub)}</span></div>
          <div className="flex items-center justify-between text-slate-500">
            <span>Discount</span>
            <div className="flex gap-1">
              {[0, 5, 10].map((d) => (
                <button key={d} onClick={() => setDiscount(d)} className={`rounded-md px-2 py-0.5 text-xs font-semibold ${discount === d ? 'bg-brand-500 text-white' : 'bg-white ring-1 ring-slate-200'}`}>{d}%</button>
              ))}
            </div>
          </div>
          {totals.disc > 0 && <div className="flex justify-between text-emerald-600"><span>Savings</span><span>−{inr(totals.disc.toFixed(0))}</span></div>}
          <div className="flex justify-between text-slate-500"><span>GST (incl.)</span><span>{inr(totals.gst.toFixed(2))}</span></div>
          <div className="flex items-end justify-between pt-2">
            <span className="font-semibold text-slate-700">Total payable</span>
            <span className="text-3xl font-extrabold tracking-tight text-slate-900">{inr(totals.total)}</span>
          </div>
        </div>

        <div className="space-y-3 p-5 pt-3">
          <div className="grid grid-cols-3 gap-2">
            {modes.map(({ key, icon: Icon }) => (
              <button key={key} onClick={() => setMode(key)} className={`flex flex-col items-center gap-1 rounded-xl py-2.5 text-xs font-semibold transition ${mode === key ? 'bg-brand-50 text-brand-700 ring-2 ring-brand-500' : 'bg-white text-slate-500 ring-1 ring-slate-200 hover:ring-slate-300'}`}>
                <Icon className="h-5 w-5" />{key}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-2">
            <button onClick={() => openContact('Hold & Recall Bills')} className="btn-ghost px-3"><PauseCircle className="h-4 w-4" /></button>
            <button disabled={!lines.length} onClick={checkout} className="btn-primary py-3.5 text-base disabled:opacity-50">
              {done ? <><CheckCircle2 className="h-5 w-5" /> Bill saved!</> : <>Charge {inr(totals.total)}</>}
            </button>
          </div>
        </div>
      </aside>
    </div>
  )
}
