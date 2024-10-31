"use client";

import { TextArea } from "@/components/text-area/text-area";
import { withVerbose } from "@/hoc/withVerbose";

function Content({ isVerbose }: { isVerbose: boolean }) {
  return (
    <>
      {isVerbose ? (
        <TextArea>
          <h2>Mastery Path</h2>
          <p>
            The Mastery Path is a gamified journey designed to enhance our
            customers&apos; skills and mastery of our platform. By completing
            key milestones such as launching their first campaign, setting up
            automations, and optimizing their messaging, customers earn rewards,
            badges, and exclusive insights. This interactive path transforms
            their learning experience into an engaging and rewarding quest,
            fostering loyalty and long-term retention.
          </p>
          <h3>Key Features</h3>
          <ul>
            <li>
              <strong>Milestone Achievements:</strong> Encourage users to reach
              important goals by awarding points and badges for completing
              tasks.
            </li>
            <li>
              <strong>Rewards System:</strong> Offer incentives such as
              discounts, premium features, or exclusive content for progress.
            </li>
            <li>
              <strong>Progress Tracking:</strong> Provide visual indicators of
              users&apos; advancement through the Mastery Path.
            </li>
            <li>
              <strong>Exclusive Insights:</strong> Unlock advanced tips and best
              practices as users progress, adding value to their learning
              journey.
            </li>
          </ul>
          <h3>Benefits</h3>
          <ul>
            <li>
              <strong>Increased Engagement:</strong> Gamification elements make
              the learning process enjoyable, encouraging consistent use of the
              platform.
            </li>
            <li>
              <strong>Enhanced Retention:</strong> Rewarding progress fosters
              loyalty and reduces churn by keeping customers invested.
            </li>
            <li>
              <strong>Skill Development:</strong> Helps customers become
              proficient with the platform, leading to better campaign outcomes.
            </li>
            <li>
              <strong>Data Insights:</strong> Track user progress and
              interactions to understand customer needs and improve offerings.
            </li>
          </ul>
          <p>
            By implementing the Mastery Path, we turn the onboarding and ongoing
            usage of our platform into a compelling and interactive experience.
            This approach not only helps customers achieve their marketing goals
            but also strengthens their commitment to our services, driving
            sustained success for both our customer and our kingdom.
          </p>
        </TextArea>
      ) : (
        <TextArea>
          <h2>Mastery Path</h2>
          <p>
            A gamified journey designed to enhance our customers&apos; skills
            and mastery of our platform. This transforms their learning
            experience into an engaging and rewarding quest, fostering loyalty
            and long-term retention.
          </p>
          <ul>
            <li>
              <strong>Key Features:</strong> Milestones, rewards, progress
              tracking, and exclusive insights.
            </li>
            <li>
              <strong>Benefits:</strong> Increased engagement, enhanced
              retention, skill development, and data insights.
            </li>
            <li>
              <strong>Impact:</strong> Drives customer loyalty and company
              success.
            </li>
          </ul>
        </TextArea>
      )}
    </>
  );
}

export default withVerbose(Content);
