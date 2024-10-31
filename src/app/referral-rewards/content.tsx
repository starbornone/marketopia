"use client";

import { TextArea } from "@/components/text-area/text-area";
import { withVerbose } from "@/hoc/withVerbose";

function Content({ isVerbose }: { isVerbose: boolean }) {
  return (
    <>
      {isVerbose ? (
        <TextArea>
          <h2>Referral and Rewards</h2>
          <p>
            Referral programs with tiered rewards are a strategic way to
            encourage our customers to recruit others to our platform. By
            incentivizing referrals, we not only boost customer acquisition but
            also enhance community engagement and loyalty. As our customers
            bring in more recruits, they earn exclusive rewards such as
            discounts, free credits, or VIP access to new features, fostering a
            sense of achievement and belonging.
          </p>
          <h3>Key Features</h3>
          <ul>
            <li>
              <strong>Tiered Rewards:</strong> Offer multiple levels of rewards
              based on the number of successful referrals, motivating customers
              to refer more.
            </li>
            <li>
              <strong>Exclusive Discounts:</strong> Provide special pricing or
              discounts to customers who reach specific referral milestones,
              enhancing their value perception.
            </li>
            <li>
              <strong>Free Credits:</strong> Reward customers with free credits
              for each successful referral, enabling them to use additional
              features without extra cost.
            </li>
            <li>
              <strong>VIP Access:</strong> Grant top referrers early or
              exclusive access to new features, beta programs, or premium
              content as a token of appreciation.
            </li>
          </ul>
          <h3>Benefits</h3>
          <ul>
            <li>
              <strong>Increased Customer Acquisition:</strong> Leverage our
              existing customer base to attract new users through trusted
              referrals, reducing acquisition costs.
            </li>
            <li>
              <strong>Enhanced Customer Loyalty:</strong> Rewarding referrals
              strengthens the emotional connection between our brand and
              customers, encouraging long-term retention.
            </li>
            <li>
              <strong>Community Building:</strong> Foster a sense of community
              and competition among customers as they strive to achieve higher
              referral tiers and unlock better rewards.
            </li>
            <li>
              <strong>Boosted Engagement:</strong> Incentivized referrals keep
              customers actively engaged with our platform, as they participate
              in promoting our services to their network.
            </li>
          </ul>
          <h3>Applications in Email Marketing</h3>
          <ul>
            <li>
              <strong>Campaign Referrals:</strong> Encourage customers to refer
              peers to create their own email campaigns, expanding our user base
              organically.
            </li>
            <li>
              <strong>Automation Referrals:</strong> Incentivize referrals for
              setting up automated workflows, promoting advanced usage of our
              email marketing tools.
            </li>
            <li>
              <strong>Feature Access for Referred Users:</strong> Offer referred
              customers exclusive access to premium features, enhancing their
              initial experience and increasing the likelihood of continued use.
            </li>
            <li>
              <strong>Feedback and Testimonials:</strong> Reward customers for
              referring others who provide valuable feedback or testimonials,
              aiding in product improvement and credibility.
            </li>
          </ul>
          <p>
            By implementing a robust Referral and Rewards program, we transform
            the customer journey into a collaborative and rewarding experience.
            This approach not only accelerates customer acquisition through
            trusted networks but also reinforces loyalty and engagement among
            existing users. Ultimately, this strategic initiative drives
            sustained growth and success for both our clients and our company.
          </p>
        </TextArea>
      ) : (
        <TextArea>
          <h2>Referral and Rewards</h2>
          <p>
            Tiered rewards encourage our customers to recruit others to our
            platform and foster a sense of achievement and belonging.
          </p>
          <ul>
            <li>
              <strong>Key Features:</strong> Tiered rewards, exclusive
              discounts, free credits, and vip access.
            </li>
            <li>
              <strong>Benefits:</strong> Increased customer acquisition,
              enhanced loyalty, community building, and boosted engagement.
            </li>
            <li>
              <strong>Applications:</strong> Campaign referrals, automation
              referrals, feature access for referred users, and feedback and
              testimonials.
            </li>
          </ul>
        </TextArea>
      )}
    </>
  );
}

export default withVerbose(Content);
