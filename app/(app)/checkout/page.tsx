"use client";
import { getCart } from "@/actions/cart";
import { getProductById } from "@/actions/products";
import CheckOutForm from "@/components/forms/CheckOutForm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { formatCurrency } from "@/lib/utils";
import { Cart } from "@/types&const";
import { ShoppingCart, WalletCards } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const CheckOut = () => {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");

  const [cart, setCart] = useState<Cart | null>(null);
  const [cartId, setCartId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const shipping = 35;
  const { data: session, status } = useSession();
  const [isSessionLoaded, setIsSessionLoaded] = useState<boolean>(false);
  const fetchCart = async () => {
    setLoading(true);
    try {
      if (session?.user) {
        const response = await getCart({
          userId: session?.user?.id as string,
        });
        if (response.success) {
          setCart({
            items: response.items || [],
            cartTotal: response.cartTotal,
          });
        } else {
          setError("Failed to fetch cart data.");
        }
      } else if (cartId) {
        const response = await getCart({
          cartId: cartId,
        });
        if (response.success) {
          setCart({
            items: response.items || [],
            cartTotal: response.cartTotal,
          });
        } else {
          setError("Failed to fetch cart data.");
        }
      }
    } catch (err) {
      setError("Failed to fetch cart data.");
    } finally {
      setLoading(false);
    }
  };
  const fetchProduct = async () => {
    setLoading(true);
    const id = searchParams.get("productId");
    const res = await getProductById(id as string);
    if (res.success) {
      const quantity = Number(searchParams.get("quantity"));
      setCart({
        cartTotal: res.product.price * quantity,
        items: [
          {
            productId: res.product._id,
            name: res.product.name,
            price: res.product.price,
            quantity: quantity,
            image: res.product.images[0],
            total: res.product.price * quantity,
          },
        ],
      });
    } else {
      setError(res.message || "something went wrong");
    }
  };

  useEffect(() => {
    if (mode === "cart") {
      if (status === "loading") return;
      if (session?.user) {
        localStorage.removeItem("cartId");
        setIsSessionLoaded(true);
      } else {
        const storedCartId = localStorage.getItem("cartId");
        if (!storedCartId) {
          const newCartId = Math.random().toString(36).substring(2, 15);
          localStorage.setItem("cartId", newCartId);
          setCartId(newCartId);
        } else {
          setCartId(storedCartId);
        }
      }
    }
  }, [session, status]);

  useEffect(() => {
    if (mode === "cart") {
      if (cartId || isSessionLoaded) {
        fetchCart();
      }
    }
    if (mode === "product") {
      fetchProduct();
    }
  }, [cartId, isSessionLoaded]);

  return (
    <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 min-h-screen">
      
      <h1 className="text-4xl sm:text-5xl md:text-6xl  font-light tracking-tighter max-w-5xl mb-5 sm:mb-6">
        Check out {mode === "cart" ? "your cart" : mode === "product" ? "your order" : ""}
      </h1>
      <div className=" flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/2 order-1 p-4 sm:p-6 md:p-8 lg:p-10 bg-white/40 dark:bg-emerald-900 rounded-lg ">
          <div className="mb-4">
            <CheckOutForm cart={cart} />
          </div>
        </div>
        <div className="w-full lg:w-1/2 order-2 lg:sticky lg:h-fit lg:top-20 ">
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
          {cart?.items?.length ? (
            <div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cart.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between items-start gap-4 p-3 bg-emerald-200/30 rounded-xl"
                  >
                    <div className="flex gap-3 relative">
                      <Badge className="text-xs absolute -top-2 -left-2 cursor-pointer z-10 rounded-full">
                        {item.quantity}
                      </Badge>
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                        <Link href={`/products/${item.productId}`}>
                          <Image
                            src={item.image}
                            fill
                            alt={item.name}
                            className="object-cover rounded-xl border"
                          />
                        </Link>
                      </div>
                      {item.name}
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <div className="items-end flex flex-col">
                        <p className="text-xs">Unit price</p>
                        <h2 className="text-sm sm:text-base">
                          {formatCurrency(item.price)}
                        </h2>
                      </div>
                      <div className="items-end flex flex-col">
                        <p className="text-xs">Total price</p>
                        <h4 className="text-sm">
                          {formatCurrency(item.price * item.quantity)}
                        </h4>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : loading ? (
            <Skeleton />
          ) : (
            <div className="flex flex-col items-center justify-center space-y-4 px-6 sm:px-8 py-12 sm:py-16">
              <ShoppingCart size={80} className="opacity-55" />
              <h1 className="text-lg font-medium">Your Cart is empty</h1>
              <Button
                asChild
              >
                <Link href="/products">Shop Now</Link>
              </Button>
            </div>
          )}
          {cart?.items?.length && cart?.items?.length > 0 && (
            <div className="space-y-3 mt-6 bg-emerald-200/30 rounded-3xl p-8">
              <div className=" font-semibold text-primary/80">
                <div className="flex justify-between ">
                  <span>Subtotal</span>
                  <span>{formatCurrency(cart.cartTotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{formatCurrency(shipping)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes</span>
                  <span>₹0.00</span>
                </div>
              </div>
              <div className="flex justify-between text-lg font-bold pt-2">
                <span>Total</span>
                <span>{formatCurrency(cart.cartTotal + shipping)}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
