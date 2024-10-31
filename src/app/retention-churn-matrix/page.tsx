import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { PayoffMatrix } from "@/components/payoff-matrix/payoff-matrix";
import { TextArea } from "@/components/text-area/text-area";
import { defaultTitle } from "@/config/metadata";

const retentionLoyalty = {
  labels: {
    playerA: "Business",
    playerB: "Customer",
    strategyA: "Retention Investment",
    strategyB: "Customer Loyalty",
  },
  data: [
    [
      { topLeft: "+200", bottomRight: "+0" },
      { topLeft: "+400", bottomRight: "+100" },
    ],
    [
      { topLeft: "-100", bottomRight: "+0" },
      { topLeft: "+800", bottomRight: "+300" },
    ],
  ],
};

const serviceSatisfaction = {
  labels: {
    playerA: "Business",
    playerB: "Customer",
    strategyA: "Service Quality",
    strategyB: "Customer Satisfaction",
  },
  data: [
    [
      { topLeft: "-200", bottomRight: "-0" },
      { topLeft: "+100", bottomRight: "+50" },
    ],
    [
      { topLeft: "+400", bottomRight: "+100" },
      { topLeft: "+700", bottomRight: "+300" },
    ],
  ],
};

const churnMarketing = {
  labels: {
    playerA: "Business",
    playerB: "Customer",
    strategyA: "Marketing Effort",
    strategyB: "Churn Risk",
  },
  data: [
    [
      { topLeft: "+50", bottomRight: "+0" },
      { topLeft: "+0", bottomRight: "-100" },
    ],
    [
      { topLeft: "+200", bottomRight: "+50" },
      { topLeft: "+100", bottomRight: "-50" },
    ],
    [
      { topLeft: "+500", bottomRight: "+100" },
      { topLeft: "+300", bottomRight: "+0" },
    ],
  ],
};

export const metadata: Metadata = {
  title: `Strategies and Costs | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          alt="Strategies and Costs"
          src="/images/dd2367bb-1a1b-408c-9fa6-1d9d1522b8a4.png"
        />
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            { route: "/retention-churn-matrix/outcomes", name: "Outcomes" },
          ]}
        />
      }
    >
      <TextArea>
        <h2>Strategies and Costs</h2>
        <p>
          In the <strong>Retention Investment vs. Customer Loyalty</strong>{" "}
          matrix, we explore the interplay between how much a business invests
          in retaining customers and the customers’ loyalty. When the business
          invests minimal effort into retention strategies and loyalty is low,
          the customer churns, and the business loses out with no gain. If
          loyalty is high with minimal effort, the business still benefits, but
          the payoff is smaller compared to when substantial retention efforts
          are made, leading to significant gains when loyalty is high. A
          substantial investment in retention coupled with high loyalty yields
          the most favorable outcome, with both the business and customer
          gaining value.
        </p>
        <PayoffMatrix matrix={retentionLoyalty} />
        <p>
          The <strong>Service Quality vs. Customer Satisfaction</strong> matrix
          highlights how service quality affects satisfaction, which in turn
          impacts churn. Poor service quality and low customer satisfaction
          result in churn and losses for the business. When customers are
          satisfied despite poor service, churn may occur at a slower rate,
          offering a small window of opportunity. High service quality with low
          satisfaction can still leave room for the customer to stay, but when
          satisfaction and quality are both high, the business sees the highest
          payoff and customer retention.
        </p>
        <PayoffMatrix matrix={serviceSatisfaction} />
        <p>
          Finally, the <strong>Marketing Effort vs. Churn Risk</strong> matrix
          shows how different levels of marketing efforts affect customers with
          varying churn risks. Minimal marketing effort with a low churn risk
          brings small gains, but when churn risk is high, a lack of marketing
          can lead to significant losses. Moderate marketing efforts help reduce
          churn risk, and significant marketing efforts paired with low churn
          risk yield strong customer retention. For high-risk customers,
          significant marketing can reduce churn but often comes at a cost,
          leading to more moderate gains.
        </p>
        <PayoffMatrix matrix={churnMarketing} />
      </TextArea>
    </Container>
  );
}
