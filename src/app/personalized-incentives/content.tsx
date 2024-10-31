"use client";

import { TextArea } from "@/components/text-area/text-area";
import { withVerbose } from "@/hoc/withVerbose";

function Content({ isVerbose }: { isVerbose: boolean }) {
  return (
    <>
      {isVerbose ? (
        <TextArea>
          <h2>Personalized Incentives</h2>
          <p>
            Personalized incentives are a powerful strategy to engage and retain
            our customers. By tailoring rewards to individual behaviors and
            preferences, we can foster meaningful interactions and build
            long-term loyalty. Whether it&apos;s offering exclusive discounts to
            frequent users or providing early access to new features,
            personalized incentives create a unique and rewarding experience for
            each customer.
          </p>
          <h3>Key Features</h3>
          <ul>
            <li>
              <strong>Behavior-Based Rewards:</strong> Analyze customer
              interactions to offer rewards that match their usage patterns and
              preferences.
            </li>
            <li>
              <strong>Exclusive Discounts:</strong> Provide special pricing or
              discounts to customers who reach specific milestones or
              demonstrate loyalty.
            </li>
            <li>
              <strong>Early Access:</strong> Grant loyal customers early access
              to new features, beta programs, or premium content as a token of
              appreciation.
            </li>
            <li>
              <strong>Customized Offers:</strong> Create personalized offers
              based on customer data, such as their campaign performance or
              engagement levels.
            </li>
          </ul>
          <h3>Benefits</h3>
          <ul>
            <li>
              <strong>Enhanced Engagement:</strong> Personalized incentives make
              customers feel valued, encouraging them to interact more
              frequently with our platform.
            </li>
            <li>
              <strong>Increased Loyalty:</strong> Tailored rewards strengthen
              the emotional connection between our brand and customers, reducing
              churn rates.
            </li>
            <li>
              <strong>Higher Conversion Rates:</strong> Incentives aligned with
              customer preferences can drive higher conversion rates in
              campaigns and promotions.
            </li>
            <li>
              <strong>Valuable Insights:</strong> Tracking the effectiveness of
              personalized incentives provides data-driven insights to refine
              our marketing strategies.
            </li>
          </ul>
          <h3>Applications in Email Marketing</h3>
          <ul>
            <li>
              <strong>Campaign Milestones:</strong> Reward customers for
              launching a certain number of email campaigns, encouraging them to
              utilize the platform more effectively.
            </li>
            <li>
              <strong>Automation Setup:</strong> Offer incentives for setting up
              automated workflows, promoting advanced usage of email marketing
              tools.
            </li>
            <li>
              <strong>Engagement Optimization:</strong> Provide rewards for
              optimizing email content, such as achieving high open or
              click-through rates.
            </li>
            <li>
              <strong>Feedback Participation:</strong> Encourage customers to
              participate in surveys or provide feedback by offering
              personalized rewards.
            </li>
          </ul>
          <p>
            By implementing personalized incentives, we transform the customer
            experience into a tailored and engaging journey. This approach not
            only helps customers achieve their marketing goals more effectively
            but also solidifies their loyalty to our platform.
          </p>
        </TextArea>
      ) : (
        <TextArea>
          <h2>Personalized Incentives</h2>
          <p>
            A strategy to engage and retain our customers by tailoring rewards
            to individual behaviors and preferences.
          </p>
          <ul>
            <li>
              <strong>Key Features:</strong> Behavior-based rewards, exclusive
              discounts, early access, and customized offers.
            </li>
            <li>
              <strong>Benefits:</strong> Enhanced engagement, increased loyalty,
              higher conversion rates, and valuable insights.
            </li>
            <li>
              <strong>Applications:</strong> Campaign milestones, automation
              setup, engagement optimization, and feedback participation.
            </li>
          </ul>
        </TextArea>
      )}
    </>
  );
}

export default withVerbose(Content);
