"use client";

import { TextArea } from "@/components/text-area/text-area";
import { withVerbose } from "@/hoc/withVerbose";

function Content({ isVerbose }: { isVerbose: boolean }) {
  return (
    <>
      {isVerbose ? (
        <TextArea>
          <h2>The Magic of Gamification</h2>
          <p>
            Gamification is the application of game-design elements and
            principles in non-game contexts to engage and motivate people to
            achieve certain goals. By incorporating elements such as points,
            badges, leaderboards, and challenges, gamification transforms
            routine activities into more enjoyable and rewarding experiences.
          </p>
          <h3>Key Elements of Gamification</h3>
          <ul>
            <li>
              <strong>Points:</strong> Reward users for completing specific
              actions, providing a sense of achievement and progress.
            </li>
            <li>
              <strong>Badges:</strong> Offer visual symbols of accomplishment
              that users can collect and display, fostering a sense of pride and
              competition.
            </li>
            <li>
              <strong>Leaderboards:</strong> Create a competitive environment by
              ranking users based on their performance, encouraging them to
              improve and stay engaged.
            </li>
            <li>
              <strong>Challenges:</strong> Present users with tasks or missions
              that are both achievable and stimulating, keeping them motivated
              to participate.
            </li>
          </ul>
          <h3>Benefits of Gamification</h3>
          <p>
            Implementing gamification can lead to numerous benefits, including:
          </p>
          <ul>
            <li>
              <strong>Increased Engagement:</strong> Interactive elements make
              activities more enjoyable, encouraging users to spend more time
              participating.
            </li>
            <li>
              <strong>Enhanced Motivation:</strong> Rewards and recognition
              motivate users to achieve their goals and maintain consistent
              participation.
            </li>
            <li>
              <strong>Improved Retention:</strong> By making experiences more
              satisfying, gamification helps in retaining customers and
              fostering loyalty.
            </li>
            <li>
              <strong>Behavioral Insights:</strong> Tracking user interactions
              provides valuable data on preferences and behaviors, enabling
              better decision-making.
            </li>
          </ul>
          <h3>Applications of Gamification</h3>
          <p>
            Gamification can be applied in various fields to drive engagement
            and achieve specific objectives:
          </p>
          <ul>
            <li>
              <strong>Marketing:</strong> Engage customers through interactive
              campaigns, contests, and loyalty programs.
            </li>
            <li>
              <strong>Education:</strong> Enhance learning experiences with
              quizzes, rewards, and progress tracking.
            </li>
            <li>
              <strong>Employee Training:</strong> Make training programs more
              interactive and motivating for employees.
            </li>
            <li>
              <strong>Health &amp; Wellness:</strong> Encourage healthy habits
              through challenges and rewards for achieving fitness goals.
            </li>
          </ul>
          <p>
            By leveraging the principles of gamification, we can create
            compelling experiences that not only attract customers but also
            foster long-term loyalty and commitment. This strategic approach
            will be instrumental in driving the success of our campaigns.
          </p>
        </TextArea>
      ) : (
        <TextArea>
          <h2>The Magic of Gamification</h2>
          <p>
            Gamification is the application of game-design elements and
            principles in non-game contexts to engage and motivate people to
            achieve certain goals.
          </p>
          <ul>
            <li>
              <strong>Key Elements:</strong> Points, badges, leaderboards, and
              challenges.
            </li>
            <li>
              <strong>Benefits:</strong> Increased engagement, enhanced
              motivation, improved retention, and behavioral insights.
            </li>
            <li>
              <strong>Applications:</strong> Marketing, Education, Employee
              Training, Health &amp; Wellness, etc.
            </li>
          </ul>
        </TextArea>
      )}
    </>
  );
}

export default withVerbose(Content);
