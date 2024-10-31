import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { TextArea } from "@/components/text-area/text-area";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Customer Retention Outcomes | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          alt="Customer Retention Outcomes"
          src="/images/ccda0acc-744f-442a-83c7-a55c524678d0.png"
        />
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            { route: "/gather-tools", name: "Gather Tools" },
          ]}
        />
      }
    >
      <TextArea>
        <h2>Outcomes</h2>
        <p>
          When we look at the outcomes across all three strategies—Retention
          Investment, Service Quality, and Marketing Effort—we see that each
          approach affects customer churn in different ways. High retention
          investment paired with strong loyalty or high service quality with
          satisfaction leads to the most favorable outcomes. However, when
          customers are at risk of churn, a lack of effort or engagement on the
          business side can result in significant losses.
        </p>
        <p>
          Analyzing these outcomes effectively requires quantifiable data to
          track how changes in strategy impact churn, satisfaction, and loyalty.
          Each decision must be measured carefully because while some strategies
          are costly, they can lead to substantial long-term gains. The
          challenge lies in balancing short-term costs with the potential for
          sustained customer retention and growth over time.
        </p>
      </TextArea>
    </Container>
  );
}
