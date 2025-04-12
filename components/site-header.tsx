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

export function SiteHeader() {
  return (
    <header className="bg-white sticky top-0 z-40 w-full border-b border-gray-200">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 p-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {/* <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link> */}
            {/* <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link> */}

            {/* <ThemeToggle /> */}
            <Link
              href=""
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
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                  <DrawerDescription>
                    This action cannot be undone.
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </nav>
        </div>
      </div>
    </header>
  );
}
