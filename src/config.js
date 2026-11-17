import {
  BarChart3, Boxes, Gift, LayoutDashboard, Printer, Receipt, ScanBarcode, Settings, Store, Users, Wallet,
} from 'lucide-react'

export const app = {
  name: 'SwiftPOS',
  tagline: 'Billing & Point of Sale',
  logo: ScanBarcode,
  user: { name: 'Ritu Sharma', role: 'Cashier · Counter 2' },
  searchPlaceholder: 'Search bills, products, customers…',
}

// Items with `to` are implemented in this demo; others are locked (full version).
export const nav = [
  {
    title: 'Counter',
    items: [
      { label: 'New Bill', to: '/', icon: ScanBarcode },
      { label: 'Sales Dashboard', to: '/dashboard', icon: LayoutDashboard },
      { label: 'Bill History', to: '/bills', icon: Receipt },
    ],
  },
  {
    title: 'Store',
    items: [
      { label: 'Products & Stock', icon: Boxes },
      { label: 'Customers & Loyalty', icon: Gift },
      { label: 'Cash Register / Shift', icon: Wallet },
      { label: 'Multi-branch', icon: Store },
    ],
  },
  {
    title: 'Admin',
    items: [
      { label: 'Staff & Roles', icon: Users },
      { label: 'GST Reports', icon: BarChart3 },
      { label: 'Printer & Hardware', icon: Printer },
      { label: 'Settings', icon: Settings },
    ],
  },
]
