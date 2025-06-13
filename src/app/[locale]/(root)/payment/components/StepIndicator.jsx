export default function StepIndicator({ step, currentStep, icon, label }) {
  const isActive = step <= currentStep;
  const isCompleted = step < currentStep;

  return (
    <div className="flex flex-col items-center">
      <div
        className={`rounded-full w-10 h-10 flex items-center justify-center mb-2 transition-all duration-300 transform ${
          isActive
            ? "bg-primary text-primary-foreground scale-110"
            : "bg-muted text-muted-foreground scale-100"
        } ${isCompleted ? "animate-pulse" : ""}`}
      >
        {icon}
      </div>
      <span
        className={`text-sm transition-all duration-300 ${
          isActive ? "text-primary font-medium" : "text-muted-foreground"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
