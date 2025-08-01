import { auth } from "@/auth";
import OrderStepper from "@/components/intractive/OrderStepper";
import { SuccessConfetti } from "@/components/intractive/SuccessConfetti";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { connectToDatabase } from "@/lib/mongodb";
import { formatCurrency } from "@/lib/utils";
import Orders from "@/models/Order";
import Products from "@/models/Products";
import { CheckCircle, ShoppingBag, Clock, MapPin, Truck } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Order Confirmed",
};
const statusSteps = [
  {
    key: "confirmed",
    label: "Order confirmed",
    description: "We've received your order.",
  },
  {
    key: "dispatched",
    label: "Dispatched",
    description: "Your order has left our warehouse.",
  },
  {
    key: "shipped",
    label: "Shipped",
    description: "Your order is on its way.",
  },
  {
    key: "out of delivery",
    label: "Out for delivery",
    description: "Your order is almost there.",
  },
  { key: "delivered", label: "Delivered", description: "Expected by " }, // date will be added dynamically
];
export default async function OrderConfirmation({
  params,
}: {
  params: Promise<{ order: string }>;
}) {
  const { order: orderId } = await params;
  const session = await auth();
  await connectToDatabase();

  const orderDoc = await Orders.findById(orderId);
  if (!orderDoc) {
    notFound();
  }

  const order = {
    ...orderDoc.toObject(),
    _id: orderDoc._id.toString(),
    totalAmount: parseFloat(orderDoc.totalAmount),
    createdAt: orderDoc.createdAt.toISOString(),
  };

  // Optional: check user ownership
  if (session?.user && order.userId) {
    if (order.userId !== session.user.id) {
      notFound();
    }
  }

  // Step 1: Get all productIds from order
  const productIds = order.products.map((product: any) => product.productId);

  // Step 2: Fetch product details for all unique IDs
  const productsDocs = await Products.find({ _id: { $in: productIds } });

  // Step 3: Convert and clean product data
  const productsMap = new Map(
    productsDocs.map((doc) => {
      const obj = doc.toObject();
      return [
        obj._id.toString(),
        {
          ...obj,
          _id: obj._id.toString(),
          price: parseFloat(obj.price),
        },
      ];
    })
  );

  // Step 4: Merge each ordered item with its product data, keeping size and quantity
  const orderItems = order.products.map((item: any) => {
    const product = productsMap.get(item.productId);
    return {
      ...product,
      quantity: item.quantity,
    };
  });
  const currentStatusIndex = statusSteps.findIndex(
    (step) => step.key === order.status
  );

  return (
    <div className="min-h-screen py-12 pt-18 px-4 sm:px-6 lg:px-8">
      <SuccessConfetti />
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center flex flex-col items-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter max-w-5xl  mb-5 sm:mb-6">
            Order Placed.
          </h1>
          <p className="mt-2 text-lg text-center max-w-lg">
            Thank you very much for your purchase. Your order #{order._id} has been
            received.
          </p>
          <div className="mt-6 inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
            <Clock className="mr-2 h-4 w-4" />
            Estimated delivery:{" "}
            {new Date(order.deliveredAt).toLocaleDateString()}
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-emerald-300/10  rounded-2xl overflow-hidden mb-8">
          <div className="px-6 py-5 border-b border-emerald-200">
            <h2 className="text-lg font-medium  flex items-center">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Order Summary
            </h2>
          </div>

          <div className="divide-y divide-emerald-800">
            {orderItems.map((item: any, idx: any) => (
              <div key={idx} className="px-6 py-5 flex">
                <div className="flex-shrink-0 h-20 w-20 rounded-md overflow-hidden border border-emerald-200">
                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex justify-between text-base font-medium ">
                    <div className="">
                      <h3>{item.name}</h3>
                    </div>
                    <p>{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <p className="mt-1 text-sm text-emerald-700">
                    Qty:
                    {item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-emerald-200 px-6 py-5">
            <div className="flex justify-between text-base font-medium mb-2">
              <p>Shipping</p>
              <p>{formatCurrency(35)}</p>
            </div>
            <div className="flex justify-between text-xl font-bold mt-4 pt-4 border-t border-emerald-200">
              <p>Total</p>
              <p>{formatCurrency(order.totalAmount + 35)}</p>
            </div>
          </div>
        </div>

        {/* Shipping and Payment Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 ">
          <div className="bg-emerald-300/10  rounded-lg overflow-hidden">
            <div className="px-6 py-5 border-b border-emerald-200">
              <h2 className="text-lg font-medium  flex items-center">
                <Truck className="mr-2 h-5 w-5" />
                What's Next?
              </h2>
            </div>
            <div className="py-6 ">
              <OrderStepper
                currentStatusIndex={currentStatusIndex}
                deliveryDate={order.deliveredAt}
              />
            </div>
          </div>
          <div className="space-y-6 h-full">
            <div className="bg-emerald-300/10 rounded-lg overflow-hidden ">
              <div className="px-6 py-5 border-b border-emerald-200">
                <h2 className="text-lg font-medium  flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  Shipping Address
                </h2>
              </div>
              <div className="px-6 py-5">
                <p className="">{order.customerName}</p>
                <p className="text-gray-600">{order.email}</p>
                <p className="text-gray-600">
                  {order.city}, {order.state} {order.pinCode}
                </p>
                <p className="text-gray-600">India</p>
              </div>
            </div>

            <div className="bg-emerald-300/10 rounded-lg overflow-hidden ">
              <div className="px-6 py-5 border-b border-emerald-200">
                <h2 className="text-lg font-medium  flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                  Payment Method
                </h2>
              </div>
              <div className="px-6 py-5">
                <p className="">{order.paymentMethod}</p>
                <p className="mt-2 text-sm text-gray-600">
                  Billing address is the same as shipping address
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild >
            <Link href="/orders">View Order Details</Link>
          </Button>
          <Button asChild variant={"outline"}>
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>

        {/* Help Section */}
        <div className="mt-12 text-center text-sm text-emerald-500">
          <p>
            Need help?{" "}
            <Link
              href="/contact"
              className="text-emerald-900 hover:text-emerald-950"
            >
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
