import { useVerbose } from "@/context/VerboseContext";
import { ComponentType } from "react";

export function withVerbose<P>(
  Component: ComponentType<P & { isVerbose: boolean }>
) {
  return function VerboseComponent(props: P) {
    const { isVerbose } = useVerbose();

    return <Component {...props} isVerbose={isVerbose} />;
  };
}
