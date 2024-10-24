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
          <h2>Predictive Analytics</h2>
          <p>
            Predictive analytics enables businesses to forecast customer
            behavior and address issues like churn before they happen. Using
            historical data and advanced models, companies can take preemptive
            actions to retain customers.
          </p>

          <h3>Data Collection and Usage</h3>
          <p>
            Customer interactions, purchase patterns, and feedback provide rich
            datasets for building accurate models. Analyzing this data helps
            businesses gain insights into potential risks and opportunities.
          </p>

          <h3>Integrating Predictive Analytics into Web Apps</h3>
          <p>
            With predictive models embedded in web apps, businesses can monitor
            customer engagement in real-time. Dashboards can track at-risk
            customers and test strategies to reduce churn, empowering proactive
            decisions.
          </p>
          <p>
            This data-driven approach offers a significant advantage, helping
            businesses adapt quickly and improve customer retention strategies
            based on actionable insights.
          </p>
        </TextArea>
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            {
              route: "/predictive-analytics/models",
              name: "Prediction Models",
            },
          ]}
        />
      }
    />
  );
}
