import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { TextArea } from "@/components/text-area/text-area";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Bertrand Competition Simulation Conclusion | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          alt="Bertrand Competition"
          src="/images/d14ffd76-14ed-436e-adad-f977c037a873.png"
        />
      }
      text={
        <TextArea>
          <h2>What We Can Learn</h2>
          <p>
            Bertrand Competition calculations help us understand the balance
            between pricing strategies and market capture. By setting prices
            lower than the competition, you may gain market share. Conversely,
            premium pricing might result in a smaller share but could lead to
            higher margins depending on the market. It&apos;s crucial to balance
            these aspects when making strategic decisions.
          </p>
          <h2>Potential Problems</h2>
          <p>
            While this model provides an estimate, it&apos;s based purely on
            price and does not account for factors such as product quality,
            brand loyalty, or marketing efforts. Also, the model can suggest
            extreme outcomes (such as negative or overly high market share),
            which might not be realistic. Additionally, the pricing of services
            often involves complex negotiations and other variables.
          </p>
        </TextArea>
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            {
              route: "/predictive-oracle",
              name: "Predictive Oracle",
            },
          ]}
        />
      }
    />
  );
}
