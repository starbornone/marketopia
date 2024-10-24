import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { TextArea } from "@/components/text-area/text-area";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `Prediction Models | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          src="/images/060d8bac-c9eb-4c01-bddb-eab28502c7e8.png"
          alt="Prediction Models"
        />
      }
      text={
        <TextArea>
          <h2>Prediction Models</h2>
          <p>
            Customer churn occurs when customers stop using a service. By
            analyzing key factors that contribute to churn, businesses can
            intervene early to retain customers. Here are common variables used
            in churn prediction models:
          </p>
          <ul>
            <li>
              <strong>Frequency of Usage:</strong> How often a customer
              interacts with your service. High frequency usually indicates
              greater engagement and lower churn risk.
            </li>
            <li>
              <strong>Satisfaction Score:</strong> Measured through surveys or
              feedback, higher scores typically mean a reduced risk of churn.
            </li>
            <li>
              <strong>Time Since Last Interaction:</strong> The longer the gap
              since the last interaction, the higher the likelihood of
              disengagement and churn.
            </li>
          </ul>
          <p>
            By monitoring these variables in real-time, businesses can identify
            at-risk customers and intervene with proactive strategies like
            personalized messages, promotions, or targeted support to keep them
            engaged.
          </p>
        </TextArea>
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            {
              route: "/predictive-oracle/dashboard",
              name: "Predictive Analytics Dashboard",
            },
          ]}
        />
      }
    />
  );
}
