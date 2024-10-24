import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { TextArea } from "@/components/text-area/text-area";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Gamification Magic | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          src="/images/be5d2665-727c-4545-a328-9139642b7a73.png"
          alt="The Magic of Gamification"
        />
      }
      text={
        <TextArea>
          <p>
            The secret to engaging your allies lies in the ancient art of
            gamification. By using fun, rewards, and interactive elements, you
            can inspire them to fight harder and stay loyal throughout the
            campaign. This magic will be your key to success.
          </p>
        </TextArea>
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            {
              route: "/gamification-magic/mastery-path",
              name: "Mastery Path",
            },
          ]}
        />
      }
    />
  );
}
