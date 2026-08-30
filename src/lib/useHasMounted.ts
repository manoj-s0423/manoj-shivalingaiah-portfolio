"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// Returns false during SSR and the initial client render, then true once
// hydrated — without calling setState from an effect (avoids the extra
// render pass that pattern causes).
export function useHasMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
