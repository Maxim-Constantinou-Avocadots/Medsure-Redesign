"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getYear = () => new Date().getFullYear();
const getServerYear = () => null;

/**
 * Current year, resolved in the browser so the statically prerendered
 * page never shows a stale value.
 */
export function CurrentYear() {
  const year = useSyncExternalStore(subscribe, getYear, getServerYear);
  return <span>{year}</span>;
}
