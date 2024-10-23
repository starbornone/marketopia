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
          alt="Referral & Rewards"
        />
      }
      text={
        <TextArea>
          <p>
            Referral programs with tiered rewards encourage your allies to
            recruit others to your cause. As they bring in more recruits, they
            earn exclusive rewards like discounts, free credits, or VIP access
            to new features. This creates a sense of community and competition,
            driving not only customer retention but also customer acquisition.
          </p>
        </TextArea>
      }
      buttons={
        <NavigationButtons
          links={[
            { route: "/gamification-magic", name: "Back" },
            {
              route: "/gamification-magic/quests-seasonal-events",
              name: "Quests & Seasonal Events",
            },
          ]}
        />
      }
    />
  );
}
