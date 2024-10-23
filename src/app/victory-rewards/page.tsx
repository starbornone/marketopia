import * as React from "react";

import VisualNovelLayout from "@/components/visual-novel-layout/visual-novel-layout";
import ImageArea from "@/components/image-area/image-area";
import TextArea from "@/components/text-area/text-area";
import NavigationButtons from "@/components/navigation-buttons/navigation-buttons";

export default function Page() {
  return (
    <VisualNovelLayout
      image={
        <ImageArea
          src="/images/03aefa7c-76ab-4d68-8f80-0a429ecddf37.png"
          alt="Victory Rewards"
        />
      }
      text={
        <TextArea>
          <h2>Congratulations, Champion!</h2>
          <p>
            You have defeated the Churn Dragon and saved Marketopia. Your allies
            celebrate your triumph, and the kingdom bestows upon you great
            rewards. Your efforts in mastering game theory, predictive
            analytics, and gamification have paid off.
          </p>
          <ul>
            <li>Incorporating game theory to outmaneuver competitors.</li>
            <li>Using predictive analytics to foresee and prevent churn.</li>
            <li>
              Enhancing customer engagement through gamification techniques.
            </li>
          </ul>
          <p>
            Now that you&apos;ve learned these powerful strategies, it&apos;s
            time to implement them in your own campaigns. Whether you&apos;re
            working to retain customers, increase engagement, or stay ahead of
            the competition, these strategies will lead to lasting success.
          </p>
          <h3>Treasure Chest</h3>
          <ul>
            <li>
              <a href="/resources">Customer Retention Guide</a>
            </li>
            <li>
              <a href="/resources">Predictive Analytics Toolkit</a>
            </li>
            <li>
              <a href="/resources">Gamification in Marketing Playbook</a>
            </li>
          </ul>
          <p>
            Continue your quest and take these resources to master the art of
            customer retention!
          </p>
        </TextArea>
      }
      buttons={<NavigationButtons links={[{ route: "/", name: "Home" }]} />}
    />
  );
}
