import { Container } from "@/components/container/container";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { TextArea } from "@/components/text-area/text-area";
import { defaultTitle } from "@/config/metadata";
import { ImageArea } from "@/components/image-area/image-area";

export const metadata: Metadata = {
  title: `Resources | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          alt="Resources"
          src="/images/042be389-e61c-47ab-aed3-e6cc0cb3c68b.png"
        />
      }
      buttons={
        <NavigationButtons
          hideVerbose={true}
          links={[
            { name: "Back" },
            {
              route: "/",
              name: "Home",
            },
          ]}
        />
      }
    >
      <TextArea>
        <h1>Resources</h1>
        <ul>
          <li>
            <a
              href="https://www.youtube.com/playlist?list=PL6EF60E1027E1A10B"
              target="_blank"
            >
              Game Theory with Ben Polak
            </a>{" "}
            by{" "}
            <a href="https://www.youtube.com/@YaleCourses" target="_blank">
              Yale Courses
            </a>
          </li>
          <li>
            <a href="https://ncase.me/trust/" target="_blank">
              The Evolution of Trust
            </a>{" "}
            by{" "}
            <a href="https://ncase.me/" target="_blank">
              Nicky Case
            </a>
          </li>
          <li>
            Games of Strategy by Avinash Dixit, Susan Skeath, and David H.
            Reiley
          </li>
          <li>
            Thinking Strategically: The Competitive Edge in Business, Politics,
            and Everyday Life by Avinash Dixit and Barry Nalebuff
          </li>
        </ul>
      </TextArea>
    </Container>
  );
}
