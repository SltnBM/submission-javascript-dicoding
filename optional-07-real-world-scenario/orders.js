// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
  const order = {
    id: generateUniqueId(),
    customerName,
    items, // items tetap berupa array of objects
    totalPrice,
    status: 'Menunggu',
  };
  orders.push(order);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const order = orders.find((order) => order.id === orderId);
  if (order) {
    order.status = status;
  }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders
    .filter((order) => order.status === 'Selesai')
    .reduce((sum, order) => sum + order.totalPrice, 0);
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  orders = orders.filter((order) => order.id !== id);
}

// Override console.log untuk menggunakan console.dir
const originalConsoleLog = console.log;
console.log = (...args) => {
  if (args.length === 1 && typeof args[0] === 'object') {
    console.dir(args[0], { depth: null, colors: true });
  } else {
    originalConsoleLog(...args);
  }
};

// Ekspor variabel dan fungsi
export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };