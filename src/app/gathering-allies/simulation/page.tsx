"use client";

import React, { useState, useEffect } from "react";
import VisualNovelLayout from "@/components/visual-novel-layout/visual-novel-layout";
import ChartComponent from "@/components/chart/chart";
import TextArea from "@/components/text-area/text-area";
import NavigationButtons from "@/components/navigation-buttons/navigation-buttons";

import styles from "./simulation.module.scss";

export default function Page() {
  const [competitorPrice, setCompetitorPrice] = useState(99);
  const [campaignPrice, setCampaignPrice] = useState(69);
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
    <VisualNovelLayout
      image={
        <ChartComponent
          dataA={campaignPrice}
          dataB={competitorPrice}
          label="Pricing Strategy"
          labels={["Celeste Mailer", "Competitor"]}
        />
      }
      text={
        <TextArea>
          <h2>Market Share Simulation</h2>
          <p>
            Market share is a key factor in competitive markets. The formula
            here allows us to estimate how a pricing strategy influences the
            share of customers Celeste Mailer could capture in comparison to
            competitors. By adjusting prices, you can see how aggressive or
            premium pricing affects your standing in the market.
          </p>
          <form className={styles["form"]}>
            <label htmlFor="competitor-price">Competitor: </label>
            <input
              type="number"
              id="competitor-price"
              value={competitorPrice}
              onChange={(e) => setCompetitorPrice(Number(e.target.value))}
              disabled
            />
            <label htmlFor="campaign-price">Us: </label>
            <input
              type="number"
              id="campaign-price"
              value={campaignPrice}
              onChange={(e) => setCampaignPrice(Number(e.target.value))}
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
          <h3>What We Can Learn</h3>
          <p>
            This calculation helps us understand the balance between pricing
            strategies and market capture. By setting prices lower than the
            competition, you may gain market share. Conversely, premium pricing
            might result in a smaller share but could lead to higher margins
            depending on the market. It&apos;s crucial to balance these aspects
            when making strategic decisions.
          </p>
          <h3>Potential Problems</h3>
          <p>
            While this model provides an estimate, it&apos;s based purely on
            price and does not account for factors such as product quality,
            brand loyalty, or marketing efforts. Also, the model can suggest
            extreme outcomes (such as negative or overly high market share),
            which might not be realistic. Additionally, the pricing of services
            often involves complex negotiations and other variables.
          </p>
        </TextArea>
      }
      buttons={
        <NavigationButtons
          links={[
            {
              route: "/gather-allies",
              name: "Back",
            },
            {
              route: "/predictive-oracle",
              name: "Predictive Oracle",
            },
          ]}
        />
      }
    />
  );
}
