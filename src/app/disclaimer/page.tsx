import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { TextArea } from "@/components/text-area/text-area";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Disclaimer | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          alt="Marketopian Lawyer"
          src="/images/f4a71f31-74d6-473e-8970-8139df8b82bd.png"
        />
      }
      text={
        <TextArea>
          <h2>Disclaimer</h2>
          <p>
            All characters, events, locations, and entities depicted in this web
            app are entirely fictional. Any resemblance to real persons, living
            or dead, or real entities, is purely coincidental. The narratives,
            events, and scenarios presented are created for the purpose of
            entertainment and thought-provoking interaction and should not be
            interpreted as reflections of any real-world facts or occurrences.
          </p>
          <p>
            Unless explicitly stated otherwise, all data, statistics, and
            information presented within the web app are hypothetical and do not
            represent real-world data. Any similarities to actual data,
            entities, or individuals are coincidental and unintended. This web
            app does not aim to provide factual representations or advice, and
            should not be used as such in any legal, financial, or
            decision-making contexts.
          </p>
          <p>
            By using this web app, you acknowledge that the content is intended
            for fictional and hypothetical purposes and agree not to interpret
            any element as factual or based on real-world events, organizations,
            or people.
          </p>
        </TextArea>
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            {
              route: "/call-to-adventure",
              name: "Call to Adventure",
            },
          ]}
        />
      }
    />
  );
}
