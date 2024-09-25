"use strict";
// Define the OrderStatus enum with various statuses an order can have
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Delivered"] = "Delivered";
    OrderStatus["Cancelled"] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
// Function to update the status of an order
function updateOrderStatus(order, newStatus) {
    order.status = newStatus;
    console.log(`Order ${order.id} status updated to: ${order.status}`);
}
// Example usage:
const order1 = { id: 1, status: OrderStatus.Pending };
// Changing the status of the order
updateOrderStatus(order1, OrderStatus.Shipped); // Output: Order 1 status updated to: Shipped
updateOrderStatus(order1, OrderStatus.Delivered); // Output: Order 1 status updated to: Delivered
updateOrderStatus(order1, OrderStatus.Cancelled); // Output: Order 1 status updated to: Cancelled
