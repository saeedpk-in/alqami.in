// "use client";
// import { getOrders } from "@/actions/orders";
// import { IOrder } from "@/types&const";
// import { useSession } from "next-auth/react";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import Spinner from "@/components/intractive/Spinner";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { formatCurrency, formatDate } from "@/lib/utils";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// const OrdersPage = () => {
//   const { data: session } = useSession();
//   const [orders, setOrders] = useState<(IOrder & { productsCount: number })[]>(
//     []
//   );
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         let res;

//         if (session?.user) {
//           res = await getOrders({ userId: session.user.id });
//         } else {
//           const orderIds = JSON.parse(localStorage.getItem("orderIds") || "[]");
//           if (orderIds && orderIds.length > 0) {
//             res = await getOrders({ orderIds });
//           }
//         }
//         if (res?.orders) {
//           setOrders(res.orders);
//         }
//       } catch (err) {
//         setError("Failed to fetch orders. Please try again later.");
//         console.error("Error fetching orders:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [session]);

//   if (loading) {
//     return (
//       <div className="h-screen w-full flex items-center justify-center">
//         <Spinner />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="container mx-auto py-8">
//         <div
//           className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
//           role="alert"
//         >
//           <strong className="font-bold">Error!</strong>
//           <span className="block sm:inline"> {error}</span>
//         </div>
//       </div>
//     );
//   }

//   if (orders.length === 0) {
//     return (
//       <div className="flex justify-center items-center py-8 min-h-screen">
//         <div className="text-center flex flex-col justify-center items-center">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tighter  text-gray-900 mb-3 sm:mb-4">
//             Your Orders
//           </h1>
//           <p className="text-gray-600 mb-6">
//             You haven't placed any orders yet.
//           </p>
//           <Link
//             href="/"
//             className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors"
//           >
//             Continue Shopping
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col gap-4 overflow-y-auto px-4 text-sm items-center py-8">
//       <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight max-w-5xl text-gray-900 mb-3 sm:mb-4">
//         Your Orders,Your Green Journey
//       </h1>
//       <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-2  md:px-10">
//         {orders.map((order) => (
//           <Card className="pb-0" key={order._id}>
//             <CardHeader>
//               <div className="flex  justify-between">
//                 <div className=" flex flex-col gap-2">
//                   <CardTitle className="text-gray-400/70">Order ID</CardTitle>
//                   <CardTitle className="text-xs">#{order._id}</CardTitle>
//                 </div>
//                 <div className="flex flex-col gap-2  items-end">
//                   <Badge className="rounded-full " variant={"outline"}>
//                     Estimated Delivery {formatDate(order.deliveredAt)}
//                   </Badge>
//                   <Badge className="bg-green-200/30 border-none text-green-600 uppercase rounded-full text-sm px-4 py-2">
//                     {order.status}
//                   </Badge>
//                 </div>
//               </div>
//               {/* <CardDescription>Card Description</CardDescription> */}
//             </CardHeader>
//             <CardContent>
//               <div className="">
//                 <h2 className="text-lg font-bold">Order Summary</h2>
//                 <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3  mt-4">
//                   {order.products.map((product, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center gap-4 shadow p-2 rounded-lg"
//                     >
//                       <Image
//                         src={product.image || ""}
//                         alt={product.name || ""}
//                         className="w-16 h-16 rounded-lg object-cover"
//                         width={64}
//                         height={64}
//                       />
//                       <div className="flex flex-col">
//                         <Link
//                           href={`/products/${product.productId}`}
//                           className="text-sm font-semibold hover:text-primary transition-colors"
//                         >
//                           {product.name}
//                         </Link>
//                         <p className="text-sm font-medium">
//                           {formatCurrency(product.price || 0)}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                   {order.products.length < order.productsCount && (
//                     <Link href={`/orders/${order._id}`} className=" text-xs">
//                       <div className="flex flex-col items-center justify-center p-4 border rounded-lg bg-gray-100">
//                         <span className="text-gray-500 text-xs mb-2">
//                           +{order.productsCount - order.products.length} more
//                           item
//                           {order.productsCount - order.products.length > 1
//                             ? "s"
//                             : ""}
//                         </span>
//                         View all
//                       </div>
//                     </Link>
//                   )}
//                 </div>
//               </div>
//             </CardContent>
//             <CardFooter className="bg-gray-300/30 rounded-b-xl ">
//               <div className="p-5 flex justify-between items-center w-full">
//                 <div className="flex">
//                   <p>{formatCurrency(order.totalAmount || 0)}</p>
//                   <p>
//                     ({order.productsCount} item{order.productsCount > 1 && "s"})
//                   </p>
//                 </div>
//                 <Button asChild className="rounded-full">
//                   <Link href={`/orders/${order._id}`}> Details</Link>
//                 </Button>
//               </div>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OrdersPage;
"use client";
import { getOrders } from "@/actions/orders";
import { IOrder } from "@/types&const";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Spinner from "@/components/intractive/Spinner";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { formatCurrency, formatDate } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const OrdersPage = () => {
  const { data: session } = useSession();
  const [orders, setOrders] = useState<(IOrder & { productsCount: number })[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        let res;

        if (session?.user) {
          res = await getOrders({ userId: session.user.id });
        } else {
          const orderIds = JSON.parse(localStorage.getItem("orderIds") || "[]");
          if (orderIds?.length > 0) {
            res = await getOrders({ orderIds });
          }
        }
        if (res?.orders) {
          setOrders(res.orders);
        }
      } catch (err) {
        setError("Failed to fetch orders. Please try again later.");
        console.error("Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [session]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="bg-rose-50 border border-rose-200 text-rose-600 px-4 py-3 rounded-md">
          <strong>Error:</strong> {error}
        </div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-md space-y-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl  tracking-tight text-gray-800">Your Beauty Orders</h1>
          <p className="text-gray-500">
            You haven't placed any orders yet. Discover our premium cosmetics collection.
          </p>
          <Link
            href="/products"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-800 tracking-tight mb-2">Your Beauty Journey</h1>
        <p className="text-gray-500">Review your past cosmetic orders</p>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {orders.map((order) => (
          <Card key={order._id} className="border border-gray-100 shadow-sm overflow-hidden py-0">
            <CardHeader className="bg-emerald-50 p-4 border-b border-emerald-100">
              <div className="flex flex-col sm:flex-row justify-between gap-2">
                <div>
                  <p className="text-xs text-gray-500">ORDER #</p>
                  <p className="text-sm font-medium">{order._id}</p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-xs text-gray-500">DELIVERY BY {formatDate(order.deliveredAt)}</p>
                  <span className={`text-xs px-2 py-1 rounded-full mt-1 ${
                    order.status === "delivered" 
                      ? "bg-green-100 text-green-700" 
                      : "bg-amber-100 text-amber-700"
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {order.products.slice(0, 2).map((product, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden">
                      <Image
                        src={product.image || "/placeholder-product.jpg"}
                        alt={product.name || "Cosmetic product"}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <Link 
                        href={`/products/${product.productId}`}
                        className="text-sm font-medium hover:text-emerald-600 transition-colors"
                      >
                        {product.name}
                      </Link>
                      <p className="text-sm text-gray-600">{formatCurrency(product.price || 0)}</p>
                    </div>
                  </div>
                ))}
                
                {order.products.length > 2 && (
                  <div className="flex items-center gap-3">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                      <span className="text-xs text-gray-500 text-center">
                        +{order.products.length - 2} more
                      </span>
                    </div>
                    <div>
                      <Link 
                        href={`/orders/${order._id}`}
                        className="text-sm font-medium hover:text-emerald-600 transition-colors"
                      >
                        View all items
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>

            <CardFooter className="bg-gray-50 p-4 border-t border-gray-100">
              <div className="w-full flex justify-between items-center">
                <div className="text-sm">
                  <span className="font-medium">{formatCurrency(order.totalAmount || 0)}</span>
                  <span className="text-gray-500 ml-1">
                    ({order.productsCount} item{order.productsCount > 1 ? "s" : ""})
                  </span>
                </div>
                <Button variant="outline" size="sm" asChild className="rounded-full">
                  <Link href={`/orders/${order._id}`}>Order Details</Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;