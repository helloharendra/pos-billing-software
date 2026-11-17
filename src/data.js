// Sample data for the UI demo. The complete project uses live APIs + database.
export const categories = ['All', 'Beverages', 'Snacks', 'Dairy', 'Personal care', 'Staples']

export const products = [
  { id: 1, name: 'Cold Coffee 250ml', category: 'Beverages', price: 60, gst: 12, emoji: '🥤', code: '8901001' },
  { id: 2, name: 'Masala Chips', category: 'Snacks', price: 20, gst: 12, emoji: '🍟', code: '8901002' },
  { id: 3, name: 'Amul Butter 100g', category: 'Dairy', price: 58, gst: 12, emoji: '🧈', code: '8901003' },
  { id: 4, name: 'Toned Milk 1L', category: 'Dairy', price: 66, gst: 0, emoji: '🥛', code: '8901004' },
  { id: 5, name: 'Dark Chocolate', category: 'Snacks', price: 120, gst: 18, emoji: '🍫', code: '8901005' },
  { id: 6, name: 'Green Tea (25)', category: 'Beverages', price: 175, gst: 5, emoji: '🍵', code: '8901006' },
  { id: 7, name: 'Basmati Rice 1kg', category: 'Staples', price: 145, gst: 5, emoji: '🍚', code: '8901007' },
  { id: 8, name: 'Toor Dal 1kg', category: 'Staples', price: 168, gst: 0, emoji: '🫘', code: '8901008' },
  { id: 9, name: 'Herbal Shampoo', category: 'Personal care', price: 210, gst: 18, emoji: '🧴', code: '8901009' },
  { id: 10, name: 'Bath Soap (4)', category: 'Personal care', price: 160, gst: 18, emoji: '🧼', code: '8901010' },
  { id: 11, name: 'Orange Juice 1L', category: 'Beverages', price: 110, gst: 12, emoji: '🧃', code: '8901011' },
  { id: 12, name: 'Paneer 200g', category: 'Dairy', price: 90, gst: 5, emoji: '🧀', code: '8901012' },
]

export const hourly = [
  { label: '9am', sales: 4.2 }, { label: '10am', sales: 6.8 }, { label: '11am', sales: 9.1 }, { label: '12pm', sales: 12.4 },
  { label: '1pm', sales: 10.2 }, { label: '2pm', sales: 7.5 }, { label: '3pm', sales: 6.9 }, { label: '4pm', sales: 8.8 },
  { label: '5pm', sales: 13.6 }, { label: '6pm', sales: 16.2 }, { label: '7pm', sales: 18.9 }, { label: '8pm', sales: 14.1 },
]

export const payments = [
  { name: 'UPI', value: 58 }, { name: 'Cash', value: 24 }, { name: 'Card', value: 14 }, { name: 'Wallet', value: 4 },
]

export const topItems = [
  { name: 'Toned Milk 1L', qty: 184, amount: 12144 },
  { name: 'Cold Coffee 250ml', qty: 122, amount: 7320 },
  { name: 'Basmati Rice 1kg', qty: 63, amount: 9135 },
  { name: 'Masala Chips', qty: 240, amount: 4800 },
]

export const bills = [
  { id: 'B-20931', time: '7:42 PM', customer: 'Walk-in', items: 6, mode: 'UPI', amount: 742, status: 'Paid' },
  { id: 'B-20930', time: '7:38 PM', customer: 'Anil Kumar', items: 12, mode: 'Card', amount: 2186, status: 'Paid' },
  { id: 'B-20929', time: '7:31 PM', customer: 'Walk-in', items: 2, mode: 'Cash', amount: 126, status: 'Paid' },
  { id: 'B-20928', time: '7:20 PM', customer: 'Sunita Rao', items: 4, mode: 'UPI', amount: 512, status: 'Refunded' },
  { id: 'B-20927', time: '7:12 PM', customer: 'Walk-in', items: 9, mode: 'Cash', amount: 1048, status: 'Paid' },
  { id: 'B-20926', time: '7:05 PM', customer: 'Deepak Jain', items: 3, mode: 'Wallet', amount: 318, status: 'On hold' },
]
