import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { TextArea } from "@/components/text-area/text-area";

export default function Page() {
  return (
    <Container
      image={
        <ImageArea
          src="/images/03aefa7c-76ab-4d68-8f80-0a429ecddf37.png"
          alt="Victory Rewards"
        />
      }
      buttons={
        <NavigationButtons
          links={[
            { route: "/", name: "Home" },
            { route: "/resources", name: "Resources" },
          ]}
        />
      }
    >
      <TextArea>
        <h2>Congratulations, Champion!</h2>
        <p>
          You have defeated the Churn Dragon and saved Marketopia. Your allies
          celebrate your triumph, and the kingdom bestows upon you great
          rewards. Your efforts in mastering game theory, predictive analytics,
          and gamification have paid off.
        </p>
        <ul>
          <li>Incorporating game theory to outmaneuver competitors.</li>
          <li>Using predictive analytics to foresee and prevent churn.</li>
          <li>
            Enhancing customer engagement through gamification techniques.
          </li>
        </ul>
        <p>
          Now that you&apos;ve learned these powerful strategies, it&apos;s time
          to implement them in your own campaigns. Whether you&apos;re working
          to retain customers, increase engagement, or stay ahead of the
          competition, these strategies will lead to lasting success.
        </p>
        <p>
          Continue your quest and take these resources to master the art of
          customer retention!
        </p>
      </TextArea>
    </Container>
  );
}
