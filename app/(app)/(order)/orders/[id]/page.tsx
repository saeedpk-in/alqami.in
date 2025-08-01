// import { getOrderById } from "@/actions/orders";
// import { formatDate, formatCurrency } from "@/lib/utils";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import {
//   Truck,
//   Package,
//   CreditCard,
//   MapPin,
//   Calendar,
// } from "lucide-react";
// import OrderStepper from "@/components/intractive/OrderStepper";
// import { connectToDatabase } from "@/lib/mongodb";
// import { Card } from "@/components/ui/card";
// import Link from "next/link";

// const page = async ({ params }: { params: Promise<{ id: string }> }) => {
//   const { id: orderId } = await params;

//   await connectToDatabase();
//   const { order, success } = await getOrderById(orderId);
//   if (!order || !success) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <Card className="p-8 text-center max-w-md w-full">
//           <h2 className="text-2xl font-bold mb-4">Order Not Found</h2>
//           <p className="text-gray-600 mb-6">
//             We couldn't find an order with that ID
//           </p>
//           <Button variant="outline" className="w-full">
//             Back to Orders
//           </Button>
//         </Card>
//       </div>
//     );
//   }

//   const currentStatusIndex = [
//     "confirmed",
//     "dispatched",
//     "shipped",
//     "out of delivery",
//     "delivered",
//   ].findIndex((step) => step === order.status);

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin tracking-tight uppercase max-w-5xl text-gray-900 mb-3 sm:mb-4">
//             Order <span className="font-bold">Details</span>
//           </h1>
//           <div className="flex items-center mt-2 text-sm text-gray-500">
//             <span>Order #{order._id}</span>
//             <span className="mx-2">•</span>
//             <span>{formatDate(order.createdAt)}</span>
//           </div>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Main Content */}
//           <div className="flex-1 space-y-6">
//             {/* Order Items Card */}
//             <Card className="overflow-hidden">
//               <div className="p-6 border-b">
//                 <div className="flex items-center justify-between">
//                   <h2 className="text-lg font-semibold flex items-center">
//                     <Package className="h-5 w-5 mr-2" />
//                     Order Items
//                   </h2>
//                   <Badge variant="outline">
//                     {order.products.reduce(
//                       (acc, product) => acc + product.quantity,
//                       0
//                     )}{" "}
//                     items
//                   </Badge>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <ul className="divide-y divide-gray-200">
//                   {order.products.map(async (product, index) => {
//                     return (
//                       <li key={index} className="py-4">
//                         <div className="flex items-start space-x-4">
//                           <div className="relative flex-shrink-0 w-20 h-20 rounded-md  border overflow-visible">
//                             <Image
//                               src={product.image || "/placeholder-product.jpg"}
//                               fill
//                               alt={product.name || ""}
//                               className="object-cover rounded-xl"
//                             />
//                             <Badge className="text-xs absolute -top-2 -left-2 cursor-pointer z-10 rounded-full">
//                               {product.quantity}
//                             </Badge>
//                           </div>
//                           <div className="flex-1 min-w-0">
//                             <div className="flex justify-between">
//                               <div>
//                                 <p className="text-sm font-medium text-gray-900 truncate">
//                                   {product.name}
//                                 </p>
//                               </div>
//                               <div className="text-right">
//                                 <p className="text-sm font-medium">
//                                   {formatCurrency(product.price)}
//                                 </p>
//                                 <p className="text-xs text-gray-500 mt-1">
//                                   {formatCurrency(
//                                     product.price * product.quantity
//                                   )}
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </li>
//                     );
//                   })}
//                 </ul>
//               </div>
//               <div className="border-t p-6 bg-gray-50">
//                 <div className="space-y-3 max-w-md ml-auto">
//                   <div className="flex justify-between text-sm">
//                     <span className="text-gray-600">Subtotal</span>
//                     <span>{order.paymentMethod === "COD" ? formatCurrency(order.totalAmount - 90) : formatCurrency(order.totalAmount)}</span>
//                   </div>
//                   <div className="flex justify-between text-sm">
//                     <span className="text-gray-600">Shipping</span>
//                     <span>{order.paymentMethod === "COD" ? formatCurrency(90) : "Free"}</span>
//                   </div>
//                   <div className="h-px bg-gray-200 my-2"></div>
//                   <div className="flex justify-between font-medium">
//                     <span>Total</span>
//                     <span>{formatCurrency(order.totalAmount)}</span>
//                   </div>
//                 </div>
//               </div>
//             </Card>

//             {/* Order Details Card */}
//             <Card>
//               <div className="p-6 border-b">
//                 <h2 className="text-lg font-semibold">Order Information</h2>
//               </div>
//               <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Payment Info */}
//                 <div>
//                   <div className="flex items-center mb-4">
//                     <CreditCard className="h-5 w-5 mr-2 text-gray-700" />
//                     <h3 className="font-medium">Payment Information</h3>
//                   </div>
//                   <div className="space-y-2 text-sm">
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Method</span>
//                       <span>
//                         {order.paymentMethod === "COD"
//                           ? "Cash on Delivery"
//                           : "Online Payment"}
//                       </span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Status</span>
//                       <Badge
//                         variant={
//                           order.paymentMethod === "COD" ? "outline" : "default"
//                         }
//                       >
//                         {order.paymentMethod === "COD" ? "Pending" : "Paid"}
//                       </Badge>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Shipping Info */}
//                 <div>
//                   <div className="flex items-center mb-4">
//                     <MapPin className="h-5 w-5 mr-2 text-gray-700" />
//                     <h3 className="font-medium">Shipping Information</h3>
//                   </div>
//                   <div className="space-y-2 text-sm">
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Status</span>
//                       <Badge>
//                         {order.status.charAt(0).toUpperCase() +
//                           order.status.slice(1)}
//                       </Badge>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Address</span>
//                       <span className="text-right">
//                         {order.city}, {order.state} - {order.pinCode}
//                       </span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Phone</span>
//                       <span>{order.mobile}</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Delivery Info */}
//                 <div>
//                   <div className="flex items-center mb-4">
//                     <Calendar className="h-5 w-5 mr-2 text-gray-700" />
//                     <h3 className="font-medium">Delivery Information</h3>
//                   </div>
//                   <div className="space-y-2 text-sm">
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Order Date</span>
//                       <span>{formatDate(order.createdAt)}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Estimated Delivery</span>
//                       <span>
//                         {order.deliveredAt
//                           ? formatDate(order.deliveredAt)
//                           : "Calculating..."}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Card>

            
//           </div>

//           {/* Order Status Sidebar */}
//           <div className="lg:w-80 space-y-6">
//             <Card>
//               <div className="p-6 border-b">
//                 <h2 className="text-lg font-semibold flex items-center">
//                   <Truck className="h-5 w-5 mr-2" />
//                   Order Status
//                 </h2>
//               </div>
//               <div className="p-6">
//                 <OrderStepper
//                   currentStatusIndex={currentStatusIndex}
//                   deliveryDate={order.deliveredAt}
//                 />
//                 <div className="mt-6 space-y-3 text-sm">
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Order ID</span>
//                     <span className="font-mono">#{order._id}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Order Date</span>
//                     <span>{formatDate(order.createdAt)}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Est. Delivery</span>
//                     <span>
//                       {order.deliveredAt
//                         ? formatDate(order.deliveredAt)
//                         : "Calculating..."}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </Card>

//             {/* Support Card */}
//             <Card className="px-6 py-4 gap-4">
//                 <h3 className="font-medium ">Need Help?</h3>
//                 <p className="text-sm text-gray-600 ">
//                   If you have any questions about your order, contact our
//                   customer support.
//                 </p>
//                 <Button variant="outline" className="w-full">
//                   Contact Support
//                 </Button>
//             </Card>
//             {/* Actions */}
//             <div className="flex justify-center">
//               {order.status === "confirmed" && (
//                 <Card className="w-full px-4 gap-3 py-4 bg-red-500/10">
//                   <h2 className="ml-3">Danger Zone</h2>
//                   <p className="text-sm text-muted-foreground px-4 py-2">
//                     You can cancel your order before it is shipped. Once
//                     shipped, cancellation is not allowed.
//                   </p>
//                   <Button
//                     variant="outline"
//                     className="w-full bg-red-400/40 hover:bg-red-400/60"
//                     asChild
//                   >
//                     <Link
//                       href={`https://wa.me/918590798723?text=${encodeURIComponent(
//                         `I want to cancel my order with ID ${order._id}`
//                       )}`}
//                       className="w-full"
//                     >
//                       Cancel Order
//                     </Link>
//                   </Button>
//                 </Card>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;
import { getOrderById } from "@/actions/orders";
import { formatDate, formatCurrency } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Truck, Package, CreditCard, MapPin, Calendar, HelpCircle, ArrowLeft } from "lucide-react";
import OrderStepper from "@/components/intractive/OrderStepper";
import { connectToDatabase } from "@/lib/mongodb";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id: orderId } = await params;

  await connectToDatabase();
  const { order, success } = await getOrderById(orderId);
  if (!order || !success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-emerald-50">
        <Card className="p-8 text-center max-w-md w-full bg-white shadow-sm border-emerald-100">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-800">Order Not Found</h2>
          <p className="text-gray-600 mb-6">
            We couldn't find this beauty order in our records
          </p>
          <Button variant="outline" className="w-full border-emerald-300 text-emerald-700" asChild>
            <Link href="/orders">Back to My Orders</Link>
          </Button>
        </Card>
      </div>
    );
  }

  const currentStatusIndex = [
    "confirmed",
    "dispatched",
    "shipped",
    "out of delivery",
    "delivered",
  ].findIndex((step) => step === order.status);

  return (
    <div className="min-h-screen  py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-light text-emerald-900 mb-2">
                Your Order Details
              </h1>
              <div className="flex items-center text-sm text-emerald-700/80">
                <span>Order #{order._id}</span>
                <span className="mx-2">•</span>
                <span>{formatDate(order.createdAt)}</span>
              </div>
            </div>
            <Button variant="outline" className="rounded-full" asChild>
              <Link href="/orders"><ArrowLeft />Back to Orders</Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Order Items Card */}
            <Card className="overflow-hidden bg-emerald-100/40 shadow-none border-0 ">
              <div className="p-6 border-b border-emerald-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold flex items-center text-emerald-800">
                    <Package className="h-5 w-5 mr-2 text-emerald-600" />
                    Your Beauty Products
                  </h2>
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                    {order.products.reduce((acc, product) => acc + product.quantity, 0)} items
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <ul className="divide-y divide-emerald-100">
                  {order.products.map((product, index) => (
                    <li key={index} className="py-4">
                      <div className="flex items-start space-x-4">
                        <div className="relative flex-shrink-0 w-20 h-20 rounded-md border border-emerald-100 overflow-visible">
                          <Image
                            src={product.image || "/placeholder-product.jpg"}
                            fill
                            alt={product.name || ""}
                            className="object-cover rounded-md"
                          />
                          <Badge className="text-xs absolute -top-2 -left-2 z-10 rounded-full bg-emerald-600 text-white">
                            {product.quantity}
                          </Badge>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between">
                            <div>
                              <p className="text-sm font-medium text-emerald-900 truncate">
                                {product.name}
                              </p>
                              <p className="text-xs text-emerald-600 mt-1">SKU: {product.productId}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium text-emerald-900">
                                {formatCurrency(product.price)}
                              </p>
                              <p className="text-xs text-emerald-600 mt-1">
                                {formatCurrency(product.price * product.quantity)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-emerald-100 p-6 bg-emerald-50/50">
                <div className="space-y-3 max-w-md ml-auto">
                  <div className="flex justify-between text-sm">
                    <span className="text-emerald-700">Subtotal</span>
                    <span className="text-emerald-900">
                      {order.paymentMethod === "COD" 
                        ? formatCurrency(order.totalAmount - 90) 
                        : formatCurrency(order.totalAmount)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-emerald-700">Shipping</span>
                    <span className="text-emerald-900">
                      {order.paymentMethod === "COD" ? formatCurrency(90) : "Free"}
                    </span>
                  </div>
                  <div className="h-px bg-emerald-200 my-2"></div>
                  <div className="flex justify-between font-medium text-emerald-900">
                    <span>Total</span>
                    <span>{formatCurrency(order.totalAmount)}</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Order Details Card */}
            <Card className="bg-emerald-100/40 shadow-none border-0 ">
              <div className="p-6 border-b border-emerald-100">
                <h2 className="text-lg font-semibold text-emerald-800">Order Information</h2>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Payment Info */}
                <div>
                  <div className="flex items-center mb-4">
                    <CreditCard className="h-5 w-5 mr-2 text-emerald-600" />
                    <h3 className="font-medium text-emerald-800">Payment Information</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-emerald-700">Method</span>
                      <span className="text-emerald-900">
                        {order.paymentMethod === "COD" ? "Cash on Delivery" : "Online Payment"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-emerald-700">Status</span>
                      <Badge
                        variant={order.paymentMethod === "COD" ? "outline" : "default"}
                      >
                        {order.paymentMethod === "COD" ? "Pending" : "Paid"}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Shipping Info */}
                <div>
                  <div className="flex items-center mb-4">
                    <MapPin className="h-5 w-5 mr-2 text-emerald-600" />
                    <h3 className="font-medium text-emerald-800">Shipping Information</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-emerald-700">Status</span>
                      <Badge >
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-emerald-700">Address</span>
                      <span className="text-right text-emerald-900">
                        {order.city}, {order.state} - {order.pinCode}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-emerald-700">Phone</span>
                      <span className="text-emerald-900">{order.mobile}</span>
                    </div>
                  </div>
                </div>

                {/* Delivery Info */}
                <div>
                  <div className="flex items-center mb-4">
                    <Calendar className="h-5 w-5 mr-2 text-emerald-600" />
                    <h3 className="font-medium text-emerald-800">Delivery Information</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-emerald-700">Order Date</span>
                      <span className="text-emerald-900">{formatDate(order.createdAt)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-emerald-700">Estimated Delivery</span>
                      <span className="text-emerald-900">
                        {order.deliveredAt ? formatDate(order.deliveredAt) : "Calculating..."}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Order Status Sidebar */}
          <div className="lg:w-80 space-y-6">
            <Card className="bg-emerald-100/40 shadow-none border-0 ">
              <div className="p-6 border-b border-emerald-100">
                <h2 className="text-lg font-semibold flex items-center text-emerald-800">
                  <Truck className="h-5 w-5 mr-2 text-emerald-600" />
                  Order Status
                </h2>
              </div>
              <div className="p-6">
                <OrderStepper
                  currentStatusIndex={currentStatusIndex}
                  deliveryDate={order.deliveredAt}
                />
                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-emerald-700">Order ID</span>
                    <span className="font-mono text-emerald-900">#{order._id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-emerald-700">Order Date</span>
                    <span className="text-emerald-900">{formatDate(order.createdAt)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-emerald-700">Est. Delivery</span>
                    <span className="text-emerald-900">
                      {order.deliveredAt ? formatDate(order.deliveredAt) : "Calculating..."}
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Support Card */}
            <Card className="bg-emerald-100/40 shadow-none border-0 ">
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <HelpCircle className="h-5 w-5 mr-2 text-emerald-600" />
                  <h3 className="font-medium text-emerald-800">Need Help?</h3>
                </div>
                <p className="text-sm text-emerald-700 mb-4">
                  Questions about your beauty order? Our customer care team is here to help.
                </p>
                <Button variant="outline" className="w-full bg-emerald-300 hover:bg-emerald-300/70 rounded-full">
                  Contact Support
                </Button>
              </div>
            </Card>

            {/* Cancel Order Card */}
            {order.status === "confirmed" && (
              <Card className="bg-red-100/60 shadow-none border-0">
                <div className="p-6">
                  <h3 className="font-medium text-red-800 mb-2">Cancel Order</h3>
                  <p className="text-sm text-red-700 mb-4">
                    You can cancel before shipment. Once shipped, cancellation isn't possible.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full bg-red-300 rounded-full hover:bg-red-300/50"
                    asChild
                  >
                    <Link
                      href={`https://wa.me/918590798723?text=${encodeURIComponent(
                        `I want to cancel my order with ID ${order._id}`
                      )}`}
                    >
                      Request Cancellation
                    </Link>
                  </Button>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;