import Transition from "@/components/Transition";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ButtonGroup from "@/components/ui/demo/ButtonGroup";
import { FieldDemo } from "@/components/ui/demo/form/file";
import { CardDemo } from "@/components/ui/demo/form/card";

import { AnimatedTestimonialsDemo } from "@/components/ui/demo/AnimatedTestimonialsDemo";
import { AnimatedTooltipPreview } from "@/components/ui/demo/AnimatedTooltipPreview";
import { TypewriterEffectSmoothDemo } from "@/components/ui/demo/TypewriterEffectSmoothDemo";
import { InfiniteMovingCardsDemo } from "@/components/ui/demo/InfiniteMovingCardsDemo";

import { MarqueeDemo } from "@/components/ui/demo/MarqueeDemo";
import { BentoDemo } from "@/components/ui/demo/BentoDemo";

import { ArrowUpIcon } from "lucide-react";

const Home = Transition(() => {
  return (
    <div className="container mx-auto">
      <div className="pt-20 flex flex-col gap-4">
        {/* todo tailwindcss变量未生效 */}
        <div className="bg-background text-foreground">Hello Tailwindcss</div>
        <div className="bg-primary text-primary-foreground">Hello</div>
        <div className="bg-warning text-warning-foreground">justify center</div>

        <div className="mt-10 flex flex-col gap-4">
          <h1 className="text-4xl text-fuchsia-700">ui.shadcn</h1>
          <Switch />
          <div className="flex flex-wrap items-center gap-2 md:flex-row">
            <Button variant="outline">Button</Button>
            <Button variant="outline" size="icon" aria-label="Submit">
              <ArrowUpIcon />
            </Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>

            <ButtonGroup />
          </div>

          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Product Information</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-pink-500">
                <p>
                  Our flagship product combines cutting-edge technology with
                  sleek design. Built with premium materials, it offers
                  unparalleled performance and reliability.
                </p>
                <p>
                  Key features include advanced processing capabilities, and an
                  intuitive user interface designed for both beginners and
                  experts.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Shipping Details</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We offer worldwide shipping through trusted courier partners.
                  Standard delivery takes 3-5 business days, while express
                  shipping ensures delivery within 1-2 business days.
                </p>
                <p>
                  All orders are carefully packaged and fully insured. Track
                  your shipment in real-time through our dedicated tracking
                  portal.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Return Policy</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We stand behind our products with a comprehensive 30-day
                  return policy. If you&apos;re not completely satisfied, simply
                  return the item in its original condition.
                </p>
                <p>
                  Our hassle-free return process includes free return shipping
                  and full refunds processed within 48 hours of receiving the
                  returned item.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <FieldDemo />

          <CardDemo />

          <div className="mt-10 flex flex-col gap-4">
            <h1 className="text-4xl text-fuchsia-700">ui.aceternity</h1>
            <AnimatedTestimonialsDemo />

            <AnimatedTooltipPreview />

            <TypewriterEffectSmoothDemo />

            <InfiniteMovingCardsDemo />
          </div>

          <div className="mt-10 flex flex-col gap-4">
            <h1 className="text-4xl text-fuchsia-700">Magic UI</h1>
            <MarqueeDemo />
            <BentoDemo />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Home;
