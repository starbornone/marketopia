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
          src="/images/a3f2f4bc-60a2-4d75-895d-676f299ba274.png"
          alt="The Predictive Oracle"
        />
      }
      text={
        <TextArea>
          <p>
            The Oracle of Predictive Analytics has foreseen the future of
            Marketopia. With her help, you can predict customer churn and act
            before it&apos;s too late. The Oracle&apos;s wisdom will be crucial
            in guiding you through the challenges ahead.
          </p>
        </TextArea>
      }
      buttons={
        <NavigationButtons
          links={[
            { route: "/gathering-allies", name: "Back" },
            { route: "/predictive-oracle/prediction", name: "Prediction" },
          ]}
        />
      }
    />
  );
}