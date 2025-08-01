"use client";
import { addItemToCart, getCart, removeItemFromCart } from "@/actions/cart";
import Spinner from "@/components/intractive/Spinner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { Cart, ICartItem } from "@/types&const";
// import { IconShoppingBag } from "@tabler/icons-react";
import { ChevronRight, Minus, Plus, ShoppingBag, XCircle } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CartPage = () => {
  const [cart, setCart] = useState<Cart | null>(null);
  const [cartId, setCartId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [quantityLoading, setQuantityLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { data: session, status } = useSession();
  const [isSessionLoaded, setIsSessionLoaded] = useState<boolean>(false);
  const shipping = 35;
  useEffect(() => {
    localStorage.removeItem("cart-reminder");
    window.dispatchEvent(new Event("cartReminderChanged"));
  }, []);
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

  useEffect(() => {
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
  }, [session, status]);

  useEffect(() => {
    if (cartId || isSessionLoaded) {
      fetchCart();
    }
  }, [cartId, isSessionLoaded]);

  const calculateCartTotal = (items: ICartItem[]): number => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleQuantityChange = async (productId: string, quantity: number) => {
    setQuantityLoading(true)
    try {
      if (session?.user) {
        await addItemToCart({
          productId,
          quantity,
          userId: session.user.id,
        });
      } else if (cartId) {
        await addItemToCart({
          productId,
          quantity,
          cartId,
        });
      }

      const updatedItems =
        cart?.items.map((item) =>
          item.productId === productId
            ? {
                ...item,
                quantity: item.quantity + quantity,
                total: item.price * (item.quantity + quantity),
              }
            : item
        ) || [];

      const updatedCartTotal = calculateCartTotal(updatedItems);
      setCart({
        items: updatedItems,
        cartTotal: updatedCartTotal,
      });
    } catch (err) {
      setError("Failed to update item quantity.");
    } finally {
      setQuantityLoading(false);
    }
  };

  const removeItem = async ({ productId }: { productId: string }) => {
    try {
      removeItemFromCart({
        productId,
        cartId,
        userId: session?.user?.id,
      });
      const updatedItems =
        cart?.items.filter((item) => !(item.productId === productId)) || [];
      const updatedCartTotal = calculateCartTotal(updatedItems);
      setCart({
        items: updatedItems,
        cartTotal: updatedCartTotal,
      });
    } catch (err) {
      setError("Failed to remove item from cart.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 min-h-screen">
      <h1 className="text-4xl md:text-6xl tracking-tighter max-w-5xl mb-3 sm:mb-4">
        Your Cart
      </h1>
      
      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
      {loading ? (
        <Spinner />
      ) : cart?.items?.length ? (
        <div className=" flex flex-col lg:flex-row gap-6 ">
          <div className="w-full lg:w-2/3 order-1 p-4 sm:p-6  bg-white/40 dark:bg-gray-900 rounded-lg ">
            <div className="mb-4">
              <div>
                <ul className="gap-4 grid grid-cols-1 xl:grid-cols-2 ">
                  {cart.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between items-start gap-4 p-3 bg-gray-900/5 rounded-xl"
                    >
                      <div className="flex gap-3 relative">
                        <button
                          onClick={() =>
                            removeItem({
                              productId: item.productId,
                            })
                          }
                          className="absolute -top-4 -left-4 cursor-pointer z-10"
                          aria-label="Remove item"
                        >
                          <XCircle
                            className="w-6 h-6"
                            fill="var(--color-emerald-950)"
                            color="#fff"
                          />
                        </button>
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
                      </div>
                      <div className="flex flex-col items-end space-y-2 ">
                        <h2 className="text-sm sm:text-base">
                          {formatCurrency(item.price * item.quantity)}
                        </h2>
                        <div className="flex items-center gap-1">
                          <Button
                            variant="default"
                            size="sm"
                            className="h-8 w-8 p-0 rounded-full text-white bg-emerald-900 hover:bg-emerald-700 transition-all duration-300 ease-in-out"
                            onClick={() => {
                              if (item.quantity <= 1) return;
                              handleQuantityChange(item.productId, -1);
                            }}
                            disabled={quantityLoading || item.quantity <= 1}
                          >
                            <Minus className="h-2 w-2" />
                          </Button>
                          <span className="text-sm w-6 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="default"
                            size="sm"
                            className="h-8 w-8 p-0 rounded-full text-white bg-emerald-900 hover:bg-emerald-700 transition-all duration-300 ease-in-out"
                            onClick={() =>
                              handleQuantityChange(item.productId, 1)
                            }
                          >
                            <Plus className="h-2 w-2" />
                          </Button>
                        </div>
                        {/* <h4 className="text-sm">
                          {formatCurrency(item.price * item.quantity)}
                        </h4> */}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 order-2 lg:sticky lg:h-fit lg:top-20">
            <div className="space-y-3 mt-6 bg-gray-600/10 rounded-2xl p-8">
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
                  <span>{formatCurrency(0)}</span>
                </div>
              </div>
              <div className="flex justify-between text-lg font-bold pt-2">
                <span>Total</span>
                <span>{formatCurrency(cart.cartTotal + shipping)}</span>
              </div>
              <Button className="w-full rounded-2xl bg-emerald-300/80 hover:bg-emerald-300 transition-all duration-500 ease-in-out py-6" size={"lg"} variant={"outline"} asChild>
                <Link
                  href={{
                    pathname: "/checkout",
                    query: { mode: "cart" },
                  }}
                >
                  Proceed to Checkout <ChevronRight />
                </Link>
              </Button>
              <Button
                className="w-full rounded-2xl py-6  transition-all duration-500 ease-in-out"
                size={"lg"}
                asChild
                variant={"outline"}
              >
                <Link href="/products">Purchase more</Link>
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center px-6 py-20 text-center space-y-6 bg-emerald-200/40 rounded-2xl sm:px-10">
          <ShoppingBag size={72} className="text-black opacity-60" />

          <h2 className="text-2xl font-light tracking-tighter text-gray-800">
            Your cart is empty
          </h2>

          <p className="text-sm text-gray-500 max-w-md">
            Looks like you haven't added anything to your cart yet. Start
            shopping now to find the perfect products for you.
          </p>

          <Link href="/products">
            <Button
              className="mt-2 rounded-full px-6 py-3 text-sm "
              variant="default"
              size="lg"
            >
              Explore Products
              <ChevronRight className=" w-4 h-4" />
            </Button>
          </Link>
        </div>
      )}
      {!session?.user && (
        <div className="p-5 mt-10 rounded-xl bg-emerald-200/40 text-sm mb-5 w-full justify-center flex ">
          <p>
            You are not logged in. Please log in for a better experience.
            <Link href="/signin" className="ml-2 hover:underline">
              Login Now
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default CartPage;
