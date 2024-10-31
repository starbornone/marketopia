"use client";

import { TextArea } from "@/components/text-area/text-area";
import { withVerbose } from "@/hoc/withVerbose";

function Content({ isVerbose }: { isVerbose: boolean }) {
  return (
    <>
      {isVerbose ? (
        <TextArea>
          <h2>Predictive Analytics</h2>
          <p>
            Predictive analytics enables businesses to forecast customer
            behavior and address issues like churn before they happen. Using
            historical data and advanced models, companies can take preemptive
            actions to retain customers.
          </p>

          <h3>Data Collection and Usage</h3>
          <p>
            Customer interactions, purchase patterns, and feedback provide rich
            datasets for building accurate models. Analyzing this data helps
            businesses gain insights into potential risks and opportunities.
          </p>

          <h3>Integrating Predictive Analytics into Web Apps</h3>
          <p>
            With predictive models embedded in web apps, businesses can monitor
            customer engagement in real-time. Dashboards can track at-risk
            customers and test strategies to reduce churn, empowering proactive
            decisions.
          </p>
          <p>
            This data-driven approach offers a significant advantage, helping
            businesses adapt quickly and improve customer retention strategies
            based on actionable insights.
          </p>
        </TextArea>
      ) : (
        <TextArea>
          <h2>Predictive Analytics</h2>
          <p>
            Enables businesses to forecast customer behavior and address issues
            before they happen by using historical data and advanced models.
          </p>

          <ul>
            <li>
              <strong>Data Collection:</strong> Uses purchase patterns and
              feedback to assess risks.
            </li>
            <li>
              <strong>Integration in Web Apps:</strong> Embedded models in apps
              track engagement and reduce churn with real-time insights.
            </li>
          </ul>
        </TextArea>
      )}
    </>
  );
}

export default withVerbose(Content);
