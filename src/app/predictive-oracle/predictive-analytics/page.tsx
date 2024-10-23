import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { Metadata } from "next";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { TextArea } from "@/components/text-area/text-area";
import { defaultTitle } from "@/config/metadata";

export const metadata: Metadata = {
  title: `The Power of Predictive Analytics | ${defaultTitle}`,
};

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          src="/images/a3f2f4bc-60a2-4d75-895d-676f299ba274.png"
          alt="The Power of Predictive Analytics"
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
            { name: "Back" },
            { route: "/predictive-oracle/models", name: "Prediction Models" },
          ]}
        />
      }
    />
  );
}
