import { Container } from "@/components/container/container";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { TextArea } from "@/components/text-area/text-area";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Resources | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container buttons={<NavigationButtons links={[{ name: "Back" }]} />}>
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
