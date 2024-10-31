"use client";

import { TextArea } from "@/components/text-area/text-area";
import { withVerbose } from "@/hoc/withVerbose";

function Content({ isVerbose }: { isVerbose: boolean }) {
  return (
    <>
      {isVerbose ? (
        <TextArea>
          <h2>Quests and Seasonal Events</h2>
          <p>
            Quests and seasonal events infuse excitement and urgency into our
            email marketing campaigns. By designing time-limited challenges or
            extended quests, we can motivate our customers to engage more deeply
            with our platform. Whether it&apos;s a seasonal quest to launch a
            Black Friday campaign or a year-long journey to master campaign
            automation, these events transform routine tasks into epic
            adventures, enhancing customer retention and fostering a vibrant
            community.
          </p>
          <h3>Key Features</h3>
          <ul>
            <li>
              <strong>Time-Limited Challenges:</strong> Create urgent,
              short-term goals that encourage immediate participation, such as
              launching a holiday campaign within a specific timeframe.
            </li>
            <li>
              <strong>Extended Quests:</strong> Develop long-term missions that
              guide customers through mastering various aspects of our platform,
              such as setting up advanced automations or optimizing email
              content.
            </li>
            <li>
              <strong>Milestone Rewards:</strong> Award badges, points, or
              exclusive perks when customers reach key milestones, providing a
              sense of achievement and progression.
            </li>
            <li>
              <strong>Community Leaderboards:</strong> Foster friendly
              competition by displaying top participants, motivating users to
              strive for higher rankings and greater rewards.
            </li>
          </ul>
          <h3>Benefits</h3>
          <ul>
            <li>
              <strong>Increased Engagement:</strong> Interactive quests and
              events make using our platform more enjoyable, encouraging
              consistent and active participation.
            </li>
            <li>
              <strong>Enhanced Retention:</strong> By offering continuous
              challenges and rewards, we keep customers invested in our
              platform, reducing churn rates.
            </li>
            <li>
              <strong>Skill Development:</strong> Guided quests help customers
              develop deeper expertise in using our email marketing tools,
              leading to better campaign outcomes and satisfaction.
            </li>
            <li>
              <strong>Community Building:</strong> Seasonal events and quests
              create opportunities for customers to interact, share
              achievements, and build a sense of belonging within our user
              community.
            </li>
          </ul>
          <h3>Applications in Email Marketing</h3>
          <ul>
            <li>
              <strong>Seasonal Campaigns:</strong> Launch themed quests around
              holidays or special events, encouraging customers to create timely
              and relevant email campaigns.
            </li>
            <li>
              <strong>Automation Mastery:</strong> Design quests that guide
              users through setting up complex automation workflows, enhancing
              their ability to utilize advanced features.
            </li>
            <li>
              <strong>Content Optimization:</strong> Offer challenges that
              prompt customers to improve their email content, such as achieving
              higher open or click-through rates.
            </li>
            <li>
              <strong>Feedback and Improvement:</strong> Encourage participation
              in surveys or feedback sessions by integrating them into quests,
              rewarding users for their input and insights.
            </li>
          </ul>
          <p>
            By implementing Quests and Seasonal Events, we transform the
            customer experience into a dynamic and interactive journey. This
            approach not only drives customer engagement and retention but also
            empowers users to fully leverage our email marketing platform. As a
            result, we cultivate a dedicated and skilled user base, ensuring
            sustained growth and success for both our clients and our company
            through strategic and engaging gamification.
          </p>
        </TextArea>
      ) : (
        <TextArea>
          <h2>Quests and Seasonal Events</h2>
          <p>
            Infuse excitement and urgency by designing time-limited challenges
            or extended quests, we can motivate our customers to engage more
            deeply.
          </p>
          <ul>
            <li>
              <strong>Key Features:</strong> Time-limited challenges, extended
              quests, milestone rewards, and community leaderboards.
            </li>
            <li>
              <strong>Benefits:</strong> Increased engagement, enhanced
              retention, skill development, and community building.
            </li>
            <li>
              <strong>Applications:</strong> Seasonal campaigns, automation
              mastery, content optimization, and feedback and improvement.
            </li>
          </ul>
        </TextArea>
      )}
    </>
  );
}

export default withVerbose(Content);
