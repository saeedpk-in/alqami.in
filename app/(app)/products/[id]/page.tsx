"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { IProduct } from "@/types&const";
import { useEffect, useState, useTransition } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getProductById, getProducts } from "@/actions/products";
import {
  BadgeCheck,
  Clock,
  Copy,
  Flame,
  FlameIcon,
  Minus,
  Plus,
  Share2,
  ShoppingBag,
  Star,
  Truck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { addItemToCart } from "@/actions/cart";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";

import Spinner from "@/components/intractive/Spinner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ProductCard from "@/components/intractive/ProductCard";
import { formatCurrency } from "@/lib/utils";
// import {
//   IconFlameFilled,
//   IconTruck,
//   IconTruckFilled,
// } from "@tabler/icons-react";
import { Card } from "@/components/ui/card";

export default function Page() {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [similarProducts, setSimilarProducts] = useState<IProduct[] | null>(
    null
  );
  const [emblaApi, setEmblaApi] = useState<any>(null);
  const { data: session } = useSession();
  const router = useRouter();
  const [cartId, setCartId] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [pending, startTransition] = useTransition();
  const [expanded, setExpanded] = useState(false);

  const loadCartId = () => {
    const storedCartId = localStorage.getItem("cartId");
    if (!storedCartId) {
      const newCartId = Math.random().toString(36).substring(2, 15);
      localStorage.setItem("cartId", newCartId);
      setCartId(newCartId);
    } else {
      setCartId(storedCartId);
    }
  };

  useEffect(() => {
    startTransition(async () => {
      try {
        const response = await getProductById(id as string);
        if (response.success && response.product) {
          setProduct(response.product);
        } else {
          console.log("Failed to fetch products");
          router.push("/404");
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    });

    if (!pending) {
      loadCartId();
    }
  }, []);

  useEffect(() => {
    if (!product) return;
    async function fetchSimilarProducts() {
      const category = product?.category;
      try {
        const response = await getProducts({ category, limit: 4 });
        if (response.success && response.products) {
          setSimilarProducts(
            response.products.filter((item: IProduct) => item._id !== id)
          );
        } else {
          console.log("Failed to fetch similar products");
        }
      } catch (error) {
        console.error("Error fetching similar products:", error);
      }
    }
    fetchSimilarProducts();
  }, [product]);

  if (!product) {
    if (pending) {
      return (
        <div className="min-h-screen justify-center items-center flex">
          <Spinner />
        </div>
      );
    } else {
      return;
    }
  }

  const { name, description, price, category, inStock, images, trending } =
    product;

  const handleThumbnailClick = (index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  };
  const handleAddToCart = async () => {
    startTransition(async () => {
      if (session?.user) {
        const response = await addItemToCart({
          userId: session?.user?.id,
          productId: product._id as string,
          quantity,
        });
        if (response.success) {
          toast(`${product.name} is added to your cart`, {
            description: `Added on ${new Date().toLocaleString()}`,
            action: {
              label: "view",
              onClick: () => router.push("/cart"),
            },
          });
          localStorage.setItem("cart-reminder", "true");
          window.dispatchEvent(new Event("cartReminderChanged"));
        }
      } else if (cartId) {
        const response = await addItemToCart({
          cartId,
          productId: product._id as string,
          quantity,
        });

        if (response.success) {
          toast(`${product.name} is added to your cart`, {
            description: `Added on ${new Date().toLocaleString()}`,
            action: {
              label: "view",
              onClick: () => router.push("/cart"),
            },
          });
          localStorage.setItem("cart-reminder", "true");
          window.dispatchEvent(new Event("cartReminderChanged"));
        }
      }
    });
  };

  return (
    <div className=" px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-52 py-6 md:py-10 ">
      <div className="flex flex-col md:flex-row">
        {/* Image Gallery Section */}
        <div className="w-full lg:w-1/2 p-2 sm:p-4 md:p-6 lg:p-8 h-fit md:sticky md:top-20 ">
          <Carousel className="h-auto w-full " setApi={setEmblaApi}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-square relative w-full h-full overflow-hidden rounded-xl">
                    <Image
                      src={image}
                      alt="product"
                      fill
                      className="object-cover rounded-xl"
                      priority={index === 0}
                      onClick={() => {
                        document.getElementById("dialog-trigger")?.click();
                      }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>

          {/* Thumbnail Navigation */}
          <div className="mt-4 flex flex-wrap gap-2 overflow-x-auto py-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 relative rounded-lg overflow-hidden"
              >
                <Image
                  src={image}
                  alt="thumbnail"
                  fill
                  className="object-cover hover:opacity-80 transition duration-300 ease-in-out"
                />
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <Button
              variant={"outline"}
              className="rounded-3xl  bg-white/80"
              onClick={async () => {
                if (navigator.share) {
                  try {
                    await navigator.share({
                      title: "Check this out!",
                      text: "Thought you might like this:",
                      url: window.location.href, // or use a specific URL
                    });
                    console.log("Content shared successfully");
                  } catch (error) {
                    console.error("Error sharing:", error);
                  }
                } else {
                  toast("Sharing is not supported on this browser.");
                }
              }}
            >
              <Share2 size={18} className="mr-2" />
              Share this product
            </Button>
            <Button
              variant={"outline"}
              className="rounded-3xl bg-white/80"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(window.location.href);
                  toast("Link copied to clipboard!");
                } catch (err) {
                  console.error("Failed to copy: ", err);
                  toast("Failed to copy link");
                }
              }}
            >
              <Copy size={18} className="mr-2" />
              Copy link
            </Button>
          </div>
        </div>

        {/* Product Info Section */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 md:px-8 lg:px-10 py-6 space-y-4 md:space-y-6 font-semibold">
          {/* <h1 className="text-2xl sm:text-3xl font-black uppercase">{name}</h1> */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight  max-w-5xl text-gray-900 mb-3 sm:mb-4">
            {name}
          </h1>
          <div className="flex gap-2 items-center">
            <div className="rounded-md bg-emerald-200/90 text-emerald-600 text-xs p-1 px-2  flex items-center justify-center gap-1">
              {trending
                ? Math.min(((price / 1000) % 5) + 4, 5).toFixed(1)
                : Math.min(((price / 1000) % 5) + 3.6, 5).toFixed(1)}
              <Star size={10} fill="green" />
            </div>
            <p className="text-xs">Best Reviews</p>
            <Badge variant={"outline"}>
              <BadgeCheck className="mr-1" size={14} />
              Assured
            </Badge>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <div className="col-span-2">
              <p className="text-green-600 font-bold">Limited Offer</p>
              <div className="flex items-center gap-3">
                <h4 className="text-2xl sm:text-3xl  tracking-tight font-sans">
                  {formatCurrency(price)}/-
                </h4>
              </div>
            </div>
            <div className="col-span-1 ">
              <Badge className="px-5 sm:px-10 py-2.5 text-xs sm:text-sm uppercase rounded-3xl font-medium bg-gray-100 text-gray-800">
                {category}
              </Badge>
            </div>

            {/* Stock Badge */}
            <div className="col-span-1 ">
              {inStock ? (
                <Badge
                  className="px-5 sm:px-10 py-2.5 text-xs sm:text-sm uppercase rounded-3xl font-medium text-green-700  bg-green-50"
                  variant="outline"
                >
                  Stock Available
                </Badge>
              ) : (
                <Badge
                  className="px-5 sm:px-10 py-2.5 text-xs sm:text-sm uppercase rounded-3xl font-medium text-red-700 bg-red-50"
                  variant="outline"
                >
                  Out of Stock
                </Badge>
              )}
            </div>
            <div className="col-span-2 sm:col-span-1 ">
              <h4 className="text-xs sm:text-sm">Quantity</h4>
              <div className="mt-2  w-fit ">
                <Button
                  variant="default"
                  className="rounded-3xl bg-emerald-950 hover:bg-emerald-900"
                  disabled={!(quantity > 1)}
                  onClick={() =>
                    quantity > 1 && setQuantity((prev) => prev - 1)
                  }
                >
                  <Minus className="w-1 scale-90 h-4" />
                </Button>
                <span className="mx-3">{quantity}</span>
                <Button
                  variant="default"
                  className="rounded-3xl bg-emerald-950 hover:bg-emerald-900"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  <Plus className="w-1 scale-90 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex w-full gap-3 mt-6">
            <Button
              className="w-1/2 flex items-center rounded-3xl py-6 bg-emerald-200 hover:bg-emerald-300/70 text-black"
              size="lg"
              onClick={handleAddToCart}
              disabled={pending}
            >
              {pending ? <span>Adding...</span> : <span>Add to Cart</span>}
            </Button>
            <Button
              className={`w-1/2  rounded-3xl`}
              size="lg"
              variant="outline"
              asChild
            >
              <Link
                href={{
                  pathname: "/checkout",
                  query: {
                    mode: "product",
                    productId: product._id,
                    quantity,
                  },
                }}
                className="flex py-6 bg-white/80"
              >
                Buy Now
              </Link>
            </Button>
          </div>

          <Card className="px-5 py-4 gap-1 col-span-2 bg-emerald-700/10 shadow-none font-normal">
            <h4 className="">Description</h4>
            <p className="text-primary/70 text-sm sm:text-base">
              {description.length > 140 ? (
                <>
                  {description.slice(0, 140)}
                  {!expanded && (
                    <>
                      ...
                      <button
                        onClick={() => setExpanded(true)}
                        className="ml-1 underline "
                      >
                        See more
                      </button>
                    </>
                  )}

                  <AnimatePresence initial={false}>
                    {expanded && (
                      <motion.span
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="inline-block overflow-hidden"
                      >
                        {description.slice(140)}
                        <button
                          onClick={() => setExpanded(false)}
                          className="ml-1 underline "
                        >
                          See less
                        </button>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                description
              )}
            </p>
          </Card>
        </div>
      </div>
      {similarProducts && similarProducts.length > 0 && (
        <div className="">
          <h3 className="text-2xl tracking-tight font-bold">
            Similar Products
          </h3>
          <div className="h-full  grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 py-10">
            {similarProducts?.map((product: IProduct) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
          {similarProducts.length > 4 && (
            <Button asChild variant="link" className="text-primary/70">
              <Link href={`/products?category=${category}`}>View More</Link>
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
