"use client";

import React, { useState } from "react";

import VisualNovelLayout from "@/components/visual-novel-layout/visual-novel-layout";
import ImageArea from "@/components/image-area/image-area";
import TextArea from "@/components/text-area/text-area";
import styles from "./final-battle.module.scss";
import NavigationButtons from "@/components/navigation-buttons/navigation-buttons";

export default function Page() {
  const [engagement, setEngagement] = useState(0);
  const [retentionLikelihood, setRetentionLikelihood] = useState(0);
  const [dragonHealth, setDragonHealth] = useState(100);
  const [actionLog, setActionLog] = useState<string[]>([]);
  const [victory, setVictory] = useState(false); // New victory state

  const gamificationEffect = 15;
  const predictiveAnalyticsEffect = 20;
  const competitorDiscountEffect = -10;
  const maxHealth = 100;

  const handleRunScenario = () => {
    let newEngagement = engagement + gamificationEffect;
    let newRetentionLikelihood =
      retentionLikelihood +
      predictiveAnalyticsEffect +
      competitorDiscountEffect;

    newEngagement = Math.min(Math.max(newEngagement, 0), 100);
    newRetentionLikelihood = Math.min(Math.max(newRetentionLikelihood, 0), 100);

    const healthReductionFactor =
      ((newEngagement + newRetentionLikelihood) / 200) * maxHealth;
    const newDragonHealth = Math.max(maxHealth - healthReductionFactor, 0);

    setActionLog([
      `Churn Dragon took damage! Health reduced to ${newDragonHealth}.`,
      `Competitor discount lowered retention by ${Math.abs(
        competitorDiscountEffect
      )}.`,
      `Predictive analytics boosted retention by ${predictiveAnalyticsEffect}.`,
      `Gamification increased engagement by ${gamificationEffect}.`,
      ...actionLog,
    ]);

    setEngagement(newEngagement);
    setRetentionLikelihood(newRetentionLikelihood);
    setDragonHealth(newDragonHealth);

    if (newDragonHealth === 0) {
      setVictory(true);
    }
  };

  return (
    <VisualNovelLayout
      image={
        <ImageArea
          src={
            victory
              ? "/src/assets/e24b8447-4492-46ff-b23c-b778a47dacd4.png"
              : "/src/assets/3df516b1-8cce-4b61-9af5-519719257762.png"
          }
          alt="The Final Battle"
        />
      }
      text={
        <TextArea>
          <p>
            The moment has come. You stand at the gates of the Churn
            Dragon&apos;s lair, ready for the ultimate showdown. With your
            allies by your side, and the magic of gamification and predictive
            analytics empowering your every move, it&apos;s time to defeat the
            Churn Dragon once and for all.
          </p>

          <div className={styles["health-bar-container"]}>
            <strong>Churn Dragon&apos;s Health:</strong>
            <div className={styles["health-bar"]}>
              <div
                className={styles["health-bar-fill"]}
                style={{ width: `${dragonHealth}%` }}
              />
            </div>
          </div>

          {!victory ? (
            <>
              <ul>
                <li>
                  <strong>Engagement Level:</strong> {engagement}/100
                </li>
                <li>
                  <strong>Retention Likelihood:</strong> {retentionLikelihood}%
                </li>
              </ul>
              <strong>Action Log:</strong>
              <div className={styles["action-log"]}>
                <ul>
                  {actionLog.map((action, index) => (
                    <li key={index}>{action}</li>
                  ))}
                </ul>
              </div>
              <button onClick={handleRunScenario}>Run Strategy</button>
            </>
          ) : (
            <p>
              The Churn Dragon roars in defeat, its grip on Marketopia
              shattered. You and your allies stand victorious as the remnants of
              the dragon fade into the shadows.
            </p>
          )}
        </TextArea>
      }
      buttons={
        <NavigationButtons
          links={[
            { route: "/gamification-magic", name: "Back" },
            {
              route: "/victory-rewards",
              name: "Victory Rewards",
              disabled: !victory,
            },
          ]}
        />
      }
    />
  );
}
