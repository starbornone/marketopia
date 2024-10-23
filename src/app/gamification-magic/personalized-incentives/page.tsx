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
          src="/images/80fbd5cc-d902-44aa-aafa-3e28a9ab2fac.png"
          alt="Personalized Incentives"
        />
      }
      text={
        <TextArea>
          <p>
            Personalized incentives are a powerful way to engage and retain your
            allies. By tailoring rewards to individual behaviors and
            preferences, you can encourage meaningful engagement and drive
            loyalty. Whether it be offering special discounts for top performers
            or exclusive access to new features, these incentives can strengthen
            the bond between you and your allies.
          </p>
        </TextArea>
      }
      buttons={
        <NavigationButtons
          links={[
            { route: "/gamification-magic", name: "Back" },
            {
              route: "/gamification-magic/referral-rewards",
              name: "Referral & Rewards",
            },
          ]}
        />
      }
    />
  );
}
