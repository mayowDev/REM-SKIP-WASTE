import { Check } from "lucide-react";
import "../styles/progress-indicator.scss";

interface ProgressIndicatorProps {
  currentStep: number;
}

const steps = [
  { id: 1, name: "Postcode" },
  { id: 2, name: "Waste Type" },
  { id: 3, name: "Select Skip" },
  { id: 4, name: "Permit Check" },
  { id: 5, name: "Choose Date" },
  { id: 6, name: "Payment" },
];

export default function ProgressIndicator({
  currentStep,
}: ProgressIndicatorProps) {
  return (
    <div className="progress-indicator">
      {steps.map((step, index) => (
        <div key={step.id} className="progress-step">
          <div className="flex items-center space-x-2">
            {/* Step Circle */}
            <div
              className={`progress-circle ${
                step.id < currentStep
                  ? "completed"
                  : step.id === currentStep
                  ? "current"
                  : "pending"
              }`}
            >
              {step.id < currentStep ? (
                <Check className="check-icon" />
              ) : (
                <span className="step-number">{step.id}</span>
              )}
            </div>

            {/* Step Label */}
            <span
              className={`progress-label ${
                step.id < currentStep
                  ? "completed"
                  : step.id === currentStep
                  ? "current"
                  : "pending"
              }`}
            >
              {step.name}
            </span>
          </div>

          {/* Connector Line */}
          {index < steps.length - 1 && (
            <div
              className={`progress-connector ${
                step.id < currentStep
                  ? "completed"
                  : step.id === currentStep
                  ? "current"
                  : "pending"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
