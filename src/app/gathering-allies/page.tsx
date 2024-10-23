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
          alt="Gathering Allies"
        />
      }
      text={
        <TextArea>
          <p>
            Now that you&apos;ve heard the call, it&apos;s time to gather
            allies. In the kingdom of Marketopia, many are willing to help you
            defeat the Churn Dragon.
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
            {
              route: "/gathering-allies/bertrand-competition",
              name: "Bertrand Competition",
            },
          ]}
        />
      }
    />
  );
}
