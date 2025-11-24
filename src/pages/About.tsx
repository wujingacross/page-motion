import Transition from "../components/Transition";

import {
  AvatarGroup,
  AvatarGroupTooltip,
} from "@/components/animate-ui/components/animate/avatar-group";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import ThemeTogglerButtonDemo from "@/components/animate-ui/demo/buttons/theme-toggle";
import FlipButtonDemo from "@/components/animate-ui/demo/buttons/flip-button";

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
    </div>
  );
});

export default About;
