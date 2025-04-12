import DatePicker from "./datePicker";

export default function Calendar() {
  return (
    <div className="flex gap-1">
      <div
        className="tooltip  tooltip-accent tooltip-bottom"
        data-tip="Pick a date"
      >
        <DatePicker />
      </div>
      <div className="badge badge-secondary">New!</div>
    </div>
  );
}
