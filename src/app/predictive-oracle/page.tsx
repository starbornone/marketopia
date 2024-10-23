import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { TextArea } from "@/components/text-area/text-area";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `The Predictive Oracle | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          src="/images/a3f2f4bc-60a2-4d75-895d-676f299ba274.png"
          alt="The Predictive Oracle"
        />
      }
      text={
        <TextArea>
          <p>
            The Oracle of Predictive Analytics has foreseen the future of
            Marketopia. With her help, you can predict customer churn and act
            before it&apos;s too late. The Oracle&apos;s wisdom will be crucial
            in guiding you through the challenges ahead.
          </p>
        </TextArea>
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            {
              route: "/predictive-oracle/predictive-analytics",
              name: "Predictive Analytics",
            },
          ]}
        />
      }
    />
  );
}
