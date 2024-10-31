"use client";

import React, { useState, useEffect } from "react";
import styles from "./_simulation.module.scss";
import { Chart } from "@/components/chart/chart";
import { Container } from "@/components/container/container";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { TextArea } from "@/components/text-area/text-area";
import { withVerbose } from "@/hoc/withVerbose";

function Simulation({ isVerbose }: { isVerbose: boolean }) {
  const [competitorPrice, setCompetitorPrice] = useState(99);
  const [campaignPrice, setCampaignPrice] = useState(75);
  const [marketShare, setMarketShare] = useState(0);

  const presets = [
    { campaign: 60, label: "Aggressive Underpricing" },
    { campaign: 75, label: "Slight Undercut" },
    { campaign: 110, label: "Premium Positioning" },
  ];

  useEffect(() => {
    const marketShareValue =
      (competitorPrice - campaignPrice) / (competitorPrice + campaignPrice);
    setMarketShare(marketShareValue);
  }, [competitorPrice, campaignPrice]);

  const applyPreset = (presetIndex: number) => {
    const preset = presets[presetIndex];
    setCampaignPrice(preset.campaign);
  };

  return (
    <Container
      image={
        <Chart
          dataA={campaignPrice}
          dataB={competitorPrice}
          label="Pricing Strategy"
          labels={["Celeste Mailer", "Competitor"]}
        />
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            {
              route: "/bertrand-competition/simulation/conclusion",
              name: "Simulation Conclusion",
            },
          ]}
        />
      }
    >
      <TextArea>
        <h2>Market Share Simulation</h2>
        {isVerbose && (
          <p>
            Market share is a key factor in competitive markets. The formula
            here allows us to estimate how a pricing strategy influences the
            share of customers Celeste Mailer could capture in comparison to
            competitors. By adjusting prices, we can see how aggressive or
            premium pricing affects our standing in the market.
          </p>
        )}
        <form className={styles["form"]}>
          <label htmlFor="campaign-price">Us: </label>
          <input
            id="campaign-price"
            onChange={(e) => setCampaignPrice(Number(e.target.value))}
            type="number"
            value={campaignPrice}
          />
          <label htmlFor="competitor-price">Competitor: </label>
          <input
            disabled
            id="competitor-price"
            onChange={(e) => setCompetitorPrice(Number(e.target.value))}
            type="number"
            value={competitorPrice}
          />
        </form>
        <div className={styles["form"]}>
          {presets.map((preset, index) => (
            <button
              key={index}
              type="button"
              onClick={() => applyPreset(index)}
            >
              {preset.label}
            </button>
          ))}
        </div>
        <p className="emphasis">
          ({competitorPrice} - {campaignPrice}) / ({competitorPrice} +{" "}
          {campaignPrice}) = {(marketShare * 100).toFixed(2)}%
        </p>
      </TextArea>
    </Container>
  );
}

export default withVerbose(Simulation);
