import { useState } from "react";
import Panel from "./Panel";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div>
      <h1>FAQ</h1>
      <Panel
        title="How many team members can I invite?"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        You can invite up to 2 additional users on the Free plan. There is no
        limit on team members for the Premium plan.
      </Panel>
      <Panel
        title="What is the maximum file upload size?"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        No more than 2GB. All files in your account must fit your allotted
        storage space.
      </Panel>
      <Panel
        title="How do I reset my password?"
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
      >
        Click “Forgot password” from the login page or “Change password” from
        your profile page. A reset link will be emailed to you.
      </Panel>
      <Panel
        title="Can I cancel my subscription?"
        isActive={activeIndex === 3}
        onShow={() => setActiveIndex(3)}
      >
        Yes! Send us a message and we’ll process your request no questions
        asked.
      </Panel>
      <Panel
        title="Do you provide additional support?"
        isActive={activeIndex === 4}
        onShow={() => setActiveIndex(4)}
      >
        Chat and email support is available 24/7. Phone lines are open during
        normal business hours.
      </Panel>
    </div>
  );
}
