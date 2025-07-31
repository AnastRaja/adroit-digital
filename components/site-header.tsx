"use client";
import Link from "next/link";

import {siteConfig} from "@/config/site";
import {Button, buttonVariants} from "@/components/ui/button";
import {Icons} from "@/components/icons";
import {MainNav} from "@/components/main-nav";
import {ThemeToggle} from "@/components/theme-toggle";
import {AlignJustify} from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function SiteHeader() {
  return (
    <header className="bg-white sticky top-0 z-40 w-full border-b border-gray-200">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 p-3">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {/* <ThemeToggle /> */}
            <Link
              href="/contact-us"
              target="_blank"
              rel="noreferrer"
              className={buttonVariants()}
            >
              Get Quote Now
            </Link>
            <Drawer>
              <DrawerTrigger className="block md:hidden">
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <AlignJustify className="h-5 w-5 fill-current" />
                  <span className="sr-only">Twitter</span>
                </div>
              </DrawerTrigger>
              <DrawerContent className="h-[80vh]">
                <DrawerHeader>
                  {/* <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                  <DrawerDescription>
                    This action cannot be undone.
                  </DrawerDescription> */}
                </DrawerHeader>
                <div className="px-4 py-2">
                  <Accordion type="single" collapsible className="w-full ">
                    <AccordionItem value="services" className="border-none">
                      <AccordionTrigger className="text-lg font-medium">
                        Our Services
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3 mt-2">
                          <Link
                            href="/seo-service-provider"
                            className="block border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition"
                          >
                            <h4 className="font-semibold text-zinc-900">
                              SEO Service
                            </h4>
                            <p className="text-sm text-zinc-600">
                              A modal dialog that interrupts the user with
                              important content and expects a response.
                            </p>
                          </Link>
                          <Link
                            href="/web3-marketing-agency"
                            className="block border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition"
                          >
                            <h4 className="font-semibold text-zinc-900">
                              WEB3 Marketing Agency
                            </h4>
                            <p className="text-sm text-zinc-600">
                              For sighted users to preview content available
                              behind a link.
                            </p>
                          </Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {/* Additional Links */}
                  <div className=" space-y-3">
                    <Link
                      href="/blog"
                      className="block w-full text-left text-zinc-800 hover:underline text-lg font-medium"
                    >
                      Our Blog
                    </Link>
                    <Link
                      href="/contact-us"
                      className="block w-full text-left text-zinc-800 hover:underline text-lg font-medium"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
                {/* <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter> */}
              </DrawerContent>
            </Drawer>
          </nav>
        </div>
      </div>
    </header>
  );
}
