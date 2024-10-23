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
          src="/images/d14ffd76-14ed-436e-adad-f977c037a873.png"
          alt="Bertrand Competition"
        />
      }
      text={
        <TextArea>
          <p>
            In a Bertrand Competition, firms compete by setting prices rather
            than quantities. Each firm assumes that its competitors&apos; prices
            will remain constant while it sets its own. The key outcome is that
            firms will continuously lower prices to gain market share until they
            reach a point where profits are driven to zero, leading to a price
            equal to marginal cost. This model illustrates the aggressive price
            competition in markets with identical products.
          </p>
        </TextArea>
      }
      buttons={
        <NavigationButtons
          links={[
            {
              route: "/gathering-allies/nash-equilibrium",
              name: "Nash Equilibrium",
            },
            { route: "/gathering-allies/simulation", name: "Simulation" },
          ]}
        />
      }
    />
  );
}
