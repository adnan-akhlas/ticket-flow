import TaskStatusCard from "./TaskStatusCard";

export default function ProgressTaskStatus() {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">In Progress Task</h3>
      <TaskStatusCard />
    </div>
  );
}
