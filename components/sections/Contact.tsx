"use client";
// components/ContactSection.tsx
import {
  MapPin,
  Mail,
  Phone,
  Instagram,
  Youtube,
  LinkIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import React, { useState, useTransition } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import Link from "next/link";
import { sendContactMessage } from "@/actions/mail";
import { motion } from "framer-motion";
export default function ContactSection() {
  const [pending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [messageData, setMessageData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  function onSubmit() {
    startTransition(async () => {
      try {
        const res = await sendContactMessage(messageData);
        if (res.success) {
          setIsSuccess(true);
        } else {
          setError(res.message || "Something went wrong!");
        }
      } catch (error) {
        setError((error as string) || "Something went wrong!");
        console.error((error as string) || "An error");
      }
    });
    setTimeout(() => {
      setIsSuccess(true);
      setMessageData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  }
  return (
    <section
      className=" py-16 md:py-24 bg-stone-50 overflow-hidden"
      id="contact"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-emerald-800 uppercase bg-emerald-100/50 rounded-full mb-4">
            Connect With Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl  text-stone-800 tracking-tighter">
            Let's <span className="font-black">Collaborate</span>
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto mt-4">
            We're here to answer your questions about our formulations and hear
            your feedback
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods - Left Side */}
          <div className="space-y-8">
            {/* Contact Card 1 */}
            <div className="bg-white p-6 rounded-3xl border border-stone-200/50 flex items-start gap-4">
              <div className="bg-emerald-100/30 p-3 rounded-full text-emerald-600">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-stone-800">Email Us</h3>
                <p className="text-stone-500 mt-1">For general inquiries</p>
                <a
                  href="mailto:alqami.in@gmail.com"
                  className="text-emerald-600 hover:text-emerald-800 transition-colors block mt-2"
                >
                  alqami.in@gmail.com
                </a>
              </div>
            </div>

            {/* Contact Card 2 */}
            <div className="bg-white p-6 rounded-3xl border border-stone-200/50 flex items-start gap-4">
              <div className="bg-amber-100/30 p-3 rounded-full text-amber-600">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-stone-800">Call Us</h3>
                <p className="text-stone-500 mt-1">
                  Monday - Friday, 10AM - 6PM
                </p>
                <Link
                  href="tel:+919643 51782"
                  className="text-amber-600 hover:text-amber-800 transition-colors block mt-2"
                >
                  +91 99643 51782
                </Link>
              </div>
            </div>

            {/* Contact Card 3 */}
            <div className="bg-white p-6 rounded-3xl border border-stone-200/50 flex items-start gap-4">
              <div className="bg-stone-100/30 p-3 rounded-full text-stone-600">
                <LinkIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-stone-800">
                  Meet the founders
                </h3>
                <p className="text-stone-500 mt-1">Connect us.</p>
                <p className="text-stone-600 mt-2 flex items-center gap-2">
                  Aflah basheer
                  <Link
                    href="tel:+9195622 31367"
                    className="text-amber-600 hover:text-amber-800 transition-colors block "
                  >
                   +91 9562231367
                  </Link>
                </p>
                <p className="text-stone-600 mt-2 flex items-center gap-2">
                  Ramees rafeek
                  <Link
                    href="tel:+9180756 39542"
                    className="text-amber-600 hover:text-amber-800 transition-colors block "
                  >
                    +91 8075639542
                  </Link>
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-2xl p-8 border-stone-300 w-full"
                asChild
              >
                <Link
                  href="https://instagram.com/alqami.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5 text-stone-600" />
                  <span className="">Instagram</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-2xl p-8 border-stone-300 w-full"
                asChild
              >
                <Link
                  href="https://youtube.com/@alqami_india?si=culslSRKk3zJMvJ6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="w-5 h-5 text-stone-600" />
                  <span className="">Youtube</span>
                </Link>
              </Button>
              {/* Add more social icons as needed */}
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="relative bg-white p-8 rounded-3xl border border-stone-200/50">
            <h3 className="text-2xl font-light text-stone-800 mb-6">
              Send us a <span className="font-medium">message</span>
            </h3>
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-stone-600 mb-1"
                >
                  Your Name
                </label>
                <Input
                  value={messageData.name}
                  onChange={(e) =>
                    setMessageData({
                      ...messageData,
                      name: e.target.value,
                    })
                  }
                  required
                  type="text"
                  id="name"
                  className="w-full px-4 py-6 rounded-xl border border-stone-300 "
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-stone-600 mb-1"
                >
                  Email Address
                </label>
                <Input
                  value={messageData.email}
                  onChange={(e) =>
                    setMessageData({
                      ...messageData,
                      email: e.target.value,
                    })
                  }
                  type="email"
                  required
                  id="email"
                  className="w-full px-4 py-6 rounded-xl border border-stone-300 "
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-stone-600 mb-1"
                >
                  Subject
                </label>
                <Input
                  value={messageData.subject}
                  onChange={(e) =>
                    setMessageData({
                      ...messageData,
                      subject: e.target.value,
                    })
                  }
                  required
                  type="text"
                  id="email"
                  className="w-full px-4 py-6 rounded-xl border border-stone-300 "
                  placeholder="subject"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-stone-600 mb-1"
                >
                  Your Message
                </label>
                <Textarea
                  value={messageData.message}
                  onChange={(e) =>
                    setMessageData({
                      ...messageData,
                      message: e.target.value,
                    })
                  }
                  id="message"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 "
                  placeholder="Tell us about your inquiry..."
                />
              </div>
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-block px-6 py-4 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded-lg"
                >
                  Thank you for subscribing! Check your email soon.
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Button
                    type="submit"
                    className="w-full rounded-full py-6 bg-stone-800 hover:bg-stone-700 mt-4"
                    disabled={pending}
                  >
                    {pending ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
    // <div className=""></div>
  );
}
