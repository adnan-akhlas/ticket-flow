import ProgressCard from "./ProgressCard";

export default function ProgressSection({ progressCount, resolvedCount }) {
  return (
    <div className="grid grid-cols-2 gap-6 w-full">
      <ProgressCard
        title="In Progress"
        count={progressCount}
        from="from-primary"
        to="to-secondary"
      />
      <ProgressCard
        title="Resolved"
        count={resolvedCount}
        from="from-accent"
        to="to-accent-secondary"
      />
    </div>
  );
}
