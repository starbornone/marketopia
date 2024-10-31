"use client";

import { TextArea } from "@/components/text-area/text-area";
import { withVerbose } from "@/hoc/withVerbose";

function Content({ isVerbose }: { isVerbose: boolean }) {
  return (
    <>
      {isVerbose ? (
        <TextArea>
          <p>...</p>
        </TextArea>
      ) : (
        <TextArea>
          <p>...</p>
        </TextArea>
      )}
    </>
  );
}

export default withVerbose(Content);
