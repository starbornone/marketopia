import { Container } from "@/components/container/container";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { TextArea } from "@/components/text-area/text-area";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Credits | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      buttons={
        <NavigationButtons hideVerbose={true} links={[{ name: "Back" }]} />
      }
    >
      <TextArea align="center">
        <h1>Credits</h1>
        <p>
          Design & Development:{" "}
          <a href="https://sha.codes" target="_blank">
            Sha
          </a>
        </p>
        <p>
          Art:{" "}
          <a href="https://deepai.org" target="_blank">
            DeepAI
          </a>
        </p>
        <p>Special thanks to Ogi for playtesting.</p>
        <p>Thank you for playing!</p>
      </TextArea>
    </Container>
  );
}
