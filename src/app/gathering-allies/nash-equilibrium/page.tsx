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
          alt="Nash Equilibrium"
        />
      }
      text={
        <TextArea>
          <p>
            Nash Equilibrium is a fundamental concept in game theory where
            players reach a state in which no player can benefit from changing
            their strategy while others maintain their strategies. In this
            equilibrium, each player&apos;s choice is optimal, given the choices
            of others. This situation leads to a stable outcome where players
            are incentivized to stick to their strategies, highlighting the
            interdependence of strategic decision-making in competitive
            environments.
          </p>
        </TextArea>
      }
      buttons={
        <NavigationButtons
          links={[
            {
              route: "/gathering-allies/bertrand-competition",
              name: "Bertrand Competition",
            },
            { route: "/gathering-allies/simulation", name: "Simulation" },
          ]}
        />
      }
    />
  );
}
