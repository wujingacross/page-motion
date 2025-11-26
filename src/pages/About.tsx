import Transition from "../components/Transition";

import {
  AvatarGroup,
  AvatarGroupTooltip,
} from "@/components/animate-ui/components/animate/avatar-group";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import ThemeTogglerButtonDemo from "@/components/animate-ui/demo/buttons/theme-toggle";
import FlipButtonDemo from "@/components/animate-ui/demo/buttons/flip-button";
import { BubbleMenuDemo } from "@/components/ui/demo/BubbleMenuDemo";
import Carousel from "@/components/ui/Carousel";
import CardSwap, { Card } from "@/components/ui/CardSwap";
import CircularGallery from "@/components/ui/CircularGallery";
import Stack from "@/components/ui/Stack";
import { LogoLoopDemo } from "@/components/ui/demo/LogoLoopDemo";

const images = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
  },
];

const AVATARS = [
  {
    src: "https://pbs.twimg.com/profile_images/1948770261848756224/oPwqXMD6_400x400.jpg",
    fallback: "SK",
    tooltip: "Skyleen",
  },
  {
    src: "https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg",
    fallback: "CN",
    tooltip: "Shadcn",
  },
  {
    src: "https://pbs.twimg.com/profile_images/1677042510839857154/Kq4tpySA_400x400.jpg",
    fallback: "AW",
    tooltip: "Adam Wathan",
  },
  {
    src: "https://pbs.twimg.com/profile_images/1783856060249595904/8TfcCN0r_400x400.jpg",
    fallback: "GR",
    tooltip: "Guillermo Rauch",
  },
  {
    src: "https://pbs.twimg.com/profile_images/1534700564810018816/anAuSfkp_400x400.jpg",
    fallback: "JH",
    tooltip: "Jhey",
  },
  {
    src: "https://pbs.twimg.com/profile_images/1927474594102784000/Al0g-I6o_400x400.jpg",
    fallback: "DH",
    tooltip: "David Haz",
  },
];

const About = Transition(() => {
  return (
    <div className="container mx-auto">
      <div className="pt-20 flex flex-col gap-4">
        <h1 className="text-4xl text-fuchsia-700 text-center">animate-ui</h1>
        <div className="mt-20 flex flex-col gap-4">
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-4xl font-bold">AVATARS Demo</h1>
            <AvatarGroup>
              {AVATARS.map((avatar, index) => (
                <Avatar key={index}>
                  <AvatarImage src={avatar.src} />
                  <AvatarFallback>{avatar.fallback}</AvatarFallback>
                  <AvatarGroupTooltip>{avatar.tooltip}</AvatarGroupTooltip>
                </Avatar>
              ))}
            </AvatarGroup>
          </div>

          <div className="flex flex-col items-center gap-8">
            <h1 className="text-4xl font-bold">Theme Toggler Demo</h1>
            <ThemeTogglerButtonDemo
              variant="default"
              size="default"
              direction="ltr"
              system={false}
            />
          </div>

          <div className="flex flex-col items-center gap-8">
            <h1 className="text-4xl font-bold">Flip Button Demo</h1>
            <FlipButtonDemo />
          </div>
        </div>
      </div>
      <div className="pt-20 flex flex-col gap-4">
        <h1 className="text-4xl text-amber-700 text-center">React Bits</h1>
        <div className="mt-20 flex flex-col gap-4">
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-4xl font-bold">Bubble Menu</h1>
            <BubbleMenuDemo />
          </div>
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-4xl font-bold">Carousel Menu</h1>
            <div style={{ height: "600px", position: "relative" }}>
              <Carousel
                baseWidth={300}
                autoplay={true}
                autoplayDelay={3000}
                pauseOnHover={true}
                loop={true}
                round={false}
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-8">
            <h1 className="text-4xl font-bold">Carousel Menu</h1>
            <div style={{ height: "600px", position: "relative" }}>
              <CardSwap
                cardDistance={60}
                verticalDistance={70}
                delay={5000}
                pauseOnHover={false}
              >
                <Card>
                  <h3>Card 1</h3>
                  <p>Your content here</p>
                </Card>
                <Card>
                  <h3>Card 2</h3>
                  <p>Your content here</p>
                </Card>
                <Card>
                  <h3 className="text-white">Card 3</h3>
                  <p>Your content here</p>
                </Card>
              </CardSwap>
            </div>
          </div>

          <div className="my-40">
            <div>
              <div style={{ height: "600px", position: "relative" }}>
                <CircularGallery
                  bend={3}
                  textColor="#ffffff"
                  borderRadius={0.05}
                  scrollEase={0.02}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-4xl font-bold">Stack Demo</h1>
            <Stack
              randomRotation={true}
              sensitivity={180}
              sendToBackOnClick={false}
              cardDimensions={{ width: 200, height: 200 }}
              cardsData={images}
            />
          </div>
          <LogoLoopDemo />
        </div>
      </div>
    </div>
  );
});

export default About;
