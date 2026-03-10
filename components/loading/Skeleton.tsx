import { cn } from "@/lib/utils";

type SkeletonProps = {
  className?: string;
};

export function Skeleton({ className }: SkeletonProps) {
  return <div className={cn("animate-pulse rounded-2xl bg-[linear-gradient(90deg,#e2ecf8_25%,#f5f9ff_50%,#e2ecf8_75%)] bg-[length:200%_100%] skeleton-shimmer", className)} />;
}
