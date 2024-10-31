"use client";

import React, { useState } from "react";
import styles from "./final-battle.module.scss";
import { Container } from "@/components/container/container";
import { ImageArea } from "@/components/image-area/image-area";
import { NavigationButtons } from "@/components/navigation-buttons/navigation-buttons";
import { TextArea } from "@/components/text-area/text-area";
import { withVerbose } from "@/hoc/withVerbose";

function Battle({ isVerbose }: { isVerbose: boolean }) {
  const [engagement, setEngagement] = useState(50);
  const [retentionLikelihood, setRetentionLikelihood] = useState(50);
  const [dragonHealth, setDragonHealth] = useState(100);
  const [actionLog, setActionLog] = useState<string[]>([]);
  const [victory, setVictory] = useState(false);

  const actions = [
    {
      name: "Predictive Analytics",
      effect: () => {
        const retentionBoost = 20;
        const damage = retentionBoost;
        setRetentionLikelihood((prev) => Math.min(prev + retentionBoost, 100));
        setDragonHealth((prev) => Math.max(prev - damage, 0));
        setActionLog((prev) => [
          `Used Predictive Analytics! Retention likelihood increased by ${retentionBoost}%. Churn Dragon's health reduced by ${damage}.`,
          ...prev,
        ]);
      },
    },
    {
      name: "Seasonal Events",
      effect: () => {
        const engagementBoost = 20;
        const damage = engagementBoost;
        setEngagement((prev) => Math.min(prev + engagementBoost, 100));
        setDragonHealth((prev) => Math.max(prev - damage, 0));
        setActionLog((prev) => [
          `Launched Seasonal Events! Engagement increased by ${engagementBoost}. Churn Dragon's health reduced by ${damage}.`,
          ...prev,
        ]);
      },
    },
    {
      name: "Personalized Incentives",
      effect: () => {
        const engagementBoost = 10;
        const retentionBoost = 10;
        const damage = engagementBoost + retentionBoost;
        setEngagement((prev) => Math.min(prev + engagementBoost, 100));
        setRetentionLikelihood((prev) => Math.min(prev + retentionBoost, 100));
        setDragonHealth((prev) => Math.max(prev - damage, 0));
        setActionLog((prev) => [
          `Offered Personalized Incentives! Engagement increased by ${engagementBoost}, retention likelihood increased by ${retentionBoost}%. Churn Dragon's health reduced by ${damage}.`,
          ...prev,
        ]);
      },
    },
    {
      name: "Mastery Path",
      effect: () => {
        const engagementBoost = 15;
        const retentionBoost = 15;
        const damage = engagementBoost + retentionBoost;
        setEngagement((prev) => Math.min(prev + engagementBoost, 100));
        setRetentionLikelihood((prev) => Math.min(prev + retentionBoost, 100));
        setDragonHealth((prev) => Math.max(prev - damage, 0));
        setActionLog((prev) => [
          `Activated Mastery Path! Engagement increased by ${engagementBoost}, retention likelihood increased by ${retentionBoost}%. Churn Dragon's health reduced by ${damage}.`,
          ...prev,
        ]);
      },
    },
  ];

  const handleAction = (actionEffect: () => void) => {
    if (victory) return;
    actionEffect();
    if (dragonHealth <= 0) {
      setDragonHealth(0);
      setVictory(true);
      setActionLog((prev) => ["Churn Dragon has been defeated!", ...prev]);
    }
  };

  return (
    <Container
      image={
        <ImageArea
          src={
            victory
              ? "/images/e24b8447-4492-46ff-b23c-b778a47dacd4.png"
              : "/images/3df516b1-8cce-4b61-9af5-519719257762.png"
          }
          alt="The Final Battle"
        />
      }
      buttons={
        <NavigationButtons
          links={[
            { name: "Back" },
            {
              route: "/victory-rewards",
              name: "Victory Rewards",
              disabled: !victory,
            },
          ]}
        />
      }
    >
      <TextArea>
        {!victory ? (
          <>
            {isVerbose && (
              <p>
                The moment has come. We stand at the gates of the Churn
                Dragon&apos;s lair, ready for the ultimate showdown. With our
                allies by our side and a suite of strategic tools at our
                disposal, it&apos;s time to deploy our best tactics to defeat
                the Churn Dragon once and for all.
              </p>
            )}
            <div className={styles["health-bar-container"]}>
              <p>Churn Dragon&apos;s Health:</p>
              <div className={styles["health-bar"]}>
                <div
                  className={styles["health-bar-fill"]}
                  style={{ width: `${dragonHealth}%` }}
                />
              </div>
            </div>
            <ul>
              <li>
                <strong>Engagement Level:</strong> {engagement}/100
              </li>
              <li>
                <strong>Retention Likelihood:</strong> {retentionLikelihood}%
              </li>
            </ul>
            <div className={styles["action-log"]}>
              <ul>
                {actionLog.map((action, index) => (
                  <li key={index}>{action}</li>
                ))}
              </ul>
            </div>
            <div className="flex-content">
              {actions.map((action, index) => (
                <button key={index} onClick={() => handleAction(action.effect)}>
                  {action.name}
                </button>
              ))}
            </div>
          </>
        ) : (
          <p>
            The Churn Dragon roars in defeat, its grip on Marketopia shattered.
            Your strategic prowess and the combined strength of your tactics
            have led to a resounding victory. The realm is saved, and customer
            loyalty is restored.
          </p>
        )}
      </TextArea>
    </Container>
  );
}

export default withVerbose(Battle);
