"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { ReserveProduct } from "@/actions/mail";
function WaitList() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await ReserveProduct(email);
      if (res.success) {
        setIsSuccess(true);
      } else {
        console.error(res.message);
      }
    } catch (error) {
      console.error((error as string) || "An error");
    }
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail("");
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };
  return (
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-medium text-stone-800 mb-2"
        >
          Join the Waitlist
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-stone-500"
        >
          Be the first to experience our ancient clay formula
        </motion.p>
      </div>

      <div className="mt-auto space-y-4">
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block w-full px-6 py-4 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded-lg"
          >
            Thank you for reserving! Check your email soon.
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <Input
              className="w-full rounded-full px-5 py-6 border-stone-300 focus:ring-2 focus:ring-emerald-500/50"
              placeholder="your@email.com"
              type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            {/* <Button className="w-full rounded-full py-6 bg-stone-800 hover:bg-stone-700">
              Reserve My Jar
            </Button> */}
            {/* <div className="relative flex-grow">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full rounded-full px-5 py-6 border-stone-300 focus:ring-2 focus:ring-emerald-500/50"
              />
              <div className="absolute right-3 top-3 h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
            </div> */}

            <Button
              type="submit"
              disabled={isSubmitting}
              className={`p-6 rounded-full font-medium flex items-center justify-center gap-2 transition-all ${
                isSubmitting
                  ? "bg-gray-200 dark:bg-gray-700 text-gray-500"
                  : "bg-black dark:bg-white text-white dark:text-black hover:shadow-lg"
              }`}
            >
              {isSubmitting ? (
                "Reserving..."
              ) : (
                <>
                  Reserve My Jar <ChevronRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </motion.form>
        )}
      </div>
    </div>
  );
}

export default WaitList;
