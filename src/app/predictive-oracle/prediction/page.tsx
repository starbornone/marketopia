import * as React from "react";

import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { TextArea } from "@/components/text-area/text-area";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";

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
          <h2>The Power of Predictive Analytics</h2>
          <p>
            Predictive analytics is your key to foreseeing customer behavior and
            preventing customer churn. By analyzing historical data and using
            advanced machine learning models, businesses can predict which
            customers are most likely to leave.
          </p>

          <h3>Data Collection and Analysis</h3>
          <p>
            Every interaction with your product generates data that can be used
            to understand customer behavior. By collecting data on how customers
            interact with your service, their purchase patterns, and feedback,
            you can build a detailed profile of their experience.
          </p>

          <h3>Churn Prediction Models</h3>
          <p>
            Churn prediction models analyze this data to identify patterns
            common among customers who leave. These models can include variables
            like:
          </p>
          <ul>
            <li>Frequency of service usage</li>
            <li>Customer satisfaction scores</li>
            <li>Time since last interaction</li>
            <li>Competitive offers in the market</li>
          </ul>
          <p>
            By adjusting these variables in real-time, businesses can predict
            which customers are at risk and intervene with proactive strategies,
            such as offering promotions, personalized messages, or targeted
            support to keep them engaged.
          </p>

          <h3>Integrating Predictive Analytics in Web Apps</h3>
          <p>
            Modern web apps can integrate these predictions into dashboards that
            allow businesses to monitor at-risk customers and adjust strategies
            dynamically. You can test various variables and see how they affect
            churn predictions, providing insights into how changes in customer
            engagement might impact your business.
          </p>
          <p>
            The Oracle&apos;s wisdom offers the foresight to not only retain
            your customers but also adapt your business strategies based on
            real-time data and insights.
          </p>
        </TextArea>
      }
      buttons={
        <NavigationButtons
          links={[
            { route: "/predictive-oracle", name: "Back" },
            { route: "/predictive-oracle/dashboard", name: "Dashboard" },
          ]}
        />
      }
    />
  );
}
