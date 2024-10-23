import * as React from "react";
import ImageArea from "@/components/image-area/image-area";
import NavigationButtons from "@/components/navigation-buttons/navigation-buttons";
import TextArea from "@/components/text-area/text-area";
import VisualNovelLayout from "@/components/visual-novel-layout/visual-novel-layout";

export default function Page() {
  return (
    <VisualNovelLayout
      image={<ImageArea src="/images/kingdom.png" alt="Marketopia" />}
      text={
        <TextArea>
          <p>
            Welcome, brave strategists, to the realm of Marketopia. Our kingdom
            faces the formidable Churn Dragon threatening our customer base.
            Embark on your quest using game theory, predictive analytics, and
            gamification.
          </p>
        </TextArea>
      }
      buttons={
        <NavigationButtons
          links={[
            { route: "/", name: "Return Home" },
            {
              route: "/call-to-adventure/game-theory",
              name: "Game Theory 101",
            },
          ]}
        />
      }
    />
  );
}
