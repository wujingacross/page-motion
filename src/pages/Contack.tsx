import Transition from "@/components/Transition";
import { Button } from "@/components/ui/button";
import {
  AvatarGroup,
  AvatarGroupTooltip,
} from "@/components/animate-ui/components/animate/avatar-group";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ThemeTogglerButtonDemo from "@/components/animate-ui/demo/buttons/theme-toggle";
import FlipButtonDemo from "@/components/animate-ui/demo/buttons/flip-button";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRightIcon,
  StarIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "lucide-react";

const AVATARS = [
  {
    src: "https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg",
    fallback: "CN",
    tooltip: "Shadcn",
  },
  {
    src: "https://pbs.twimg.com/profile_images/1677042510839857154/Kq4tpySA_400x400.jpg",
    fallback: "AW",
    tooltip: "Adam",
  },
  {
    src: "https://pbs.twimg.com/profile_images/1783856060249595904/8TfcCN0r_400x400.jpg",
    fallback: "GR",
    tooltip: "Guillermo",
  },
];

const Contack = Transition(() => {
  return (
    <div className="container mx-auto">
      <div className="pt-20 flex flex-col gap-16">
        <section className="flex flex-col items-center text-center gap-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            acme registry
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button className="gap-2">
              开始使用 <ArrowRightIcon className="size-4" />
            </Button>
            <Button variant="outline">了解更多</Button>
          </div>
        </section>

        <Separator />

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg border bg-card p-6 flex flex-col gap-3">
            <SparklesIcon className="text-primary" />
            <h3 className="text-lg font-semibold">精美设计</h3>
            <p className="text-sm text-muted-foreground">
              采用现代设计语言与动画，提升品牌形象与页面质感。
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 flex flex-col gap-3">
            <StarIcon className="text-primary" />
            <h3 className="text-lg font-semibold">组件即用</h3>
            <p className="text-sm text-muted-foreground">
              通过 UI 组件快速拼装功能模块，缩短上线周期。
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 flex flex-col gap-3">
            <ShieldCheckIcon className="text-primary" />
            <h3 className="text-lg font-semibold">可靠体验</h3>
            <p className="text-sm text-muted-foreground">
              可访问性与响应式开箱即用，覆盖多终端与场景。
            </p>
          </div>
        </section>

        <section className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-semibold">受优秀开发者信赖</h2>
          <AvatarGroup>
            {AVATARS.map((avatar, idx) => (
              <Avatar key={idx}>
                <AvatarImage src={avatar.src} />
                <AvatarFallback>{avatar.fallback}</AvatarFallback>
                <AvatarGroupTooltip>{avatar.tooltip}</AvatarGroupTooltip>
              </Avatar>
            ))}
          </AvatarGroup>
        </section>

        <Separator />

        <section className="flex flex-col items-center gap-6">
          <p className="text-muted-foreground text-center max-w-xl">
            内置交互与主题切换，帮助你在保持品牌一致性的同时快速试验内容与样式。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <ThemeTogglerButtonDemo
              variant="default"
              size="default"
              direction="ltr"
              system={false}
            />
            <FlipButtonDemo />
          </div>
        </section>
      </div>
    </div>
  );
});

export default Contack;
