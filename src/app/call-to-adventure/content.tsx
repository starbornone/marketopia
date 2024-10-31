"use client";

import { TextArea } from "@/components/text-area/text-area";
import { withVerbose } from "@/hoc/withVerbose";

function Content({ isVerbose }: { isVerbose: boolean }) {
  return (
    <>
      {isVerbose ? (
        <TextArea>
          <h2>Welcome to Marketopia!</h2>
          <p>
            We are here to assist Queen Celeste Mailer in her quest to save the
            kingdom from its latest threat. The formidable{" "}
            <strong>Churn Dragon</strong> threatens our customer base, and if
            left unchecked, it could drain the lifeblood of Marketopia: our
            customers. The Churn Dragon represents the ever-present danger of
            losing valuable clients who stop using our tools.
          </p>
          <p>
            To defeat this menace, we must come together and wield the powers of{" "}
            <strong>game theory</strong>, <strong>predictive analytics</strong>,
            and, as a bonus round, <strong>gamification</strong>. Together,
            these tools will allow us to predict customer behavior, craft
            strategies that increase loyalty, and reduce the destructive forces
            of churn. Our journey is essential for the survival of the kingdom,
            as maintaining a healthy, engaged customer base is the key to our
            prosperity.
          </p>
          <p>
            Join us in the fight! With careful planning and strategy, we can
            outsmart the Churn Dragon and ensure that Marketopia flourishes
            under Queen Celeste Mailer&apos;s reign.
          </p>
        </TextArea>
      ) : (
        <TextArea>
          <h2>Welcome to Marketopia!</h2>
          <p>
            We are here to assist Queen Celeste Mailer in her quest to save the
            kingdom from the formidable <strong>Churn Dragon</strong>.
          </p>
          <p>
            To defeat this menace, we must come together and wield the powers of{" "}
            <strong>game theory</strong>, <strong>predictive analytics</strong>,
            and <strong>gamification</strong>.
          </p>
        </TextArea>
      )}
    </>
  );
}

export default withVerbose(Content);
