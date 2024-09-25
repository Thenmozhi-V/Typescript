// Define the OrderStatus enum with various statuses an order can have
enum OrderStatus {
    Pending = "Pending",
    Shipped = "Shipped",
    Delivered = "Delivered",
    Cancelled = "Cancelled",
  }
  
  // Define a type for Order which includes an id and status
  type Order = {
    id: number;
    status: OrderStatus;
  };
  
  // Function to update the status of an order
  function updateOrderStatus(order: Order, newStatus: OrderStatus): void {
    order.status = newStatus;
    console.log(`Order ${order.id} status updated to: ${order.status}`);
  }
  
  // Example usage:
  const order1: Order = { id: 1, status: OrderStatus.Pending };
  
  // Changing the status of the order
  updateOrderStatus(order1, OrderStatus.Shipped);   // Output: Order 1 status updated to: Shipped
  updateOrderStatus(order1, OrderStatus.Delivered); // Output: Order 1 status updated to: Delivered
  updateOrderStatus(order1, OrderStatus.Cancelled); // Output: Order 1 status updated to: Cancelled