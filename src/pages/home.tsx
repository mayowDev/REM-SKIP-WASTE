import { useState } from "react";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";
import ProgressIndicator from "../components/ProgressIndicator";
import SkipCard from "../components/SkipCard";
import { skipOptions } from "../data/skipData";
import { getPriceWithVat } from "../utils";
import "../styles/home.scss";

export default function Home() {
  const [selectedSkipId, setSelectedSkipId] = useState<number | null>(17934); // Default to 6-yard skip

  const handleSkipSelect = (skipId: number) => {
    // Toggle selection - deselect if clicking the same skip
    setSelectedSkipId(selectedSkipId === skipId ? null : skipId);
  };

  const handleBack = () => {
    // Navigate to previous step
    console.log("Navigate back to waste type selection");
  };

  const handleContinue = () => {
    if (selectedSkipId) {
      console.log(
        "Continue to permit check with selected skip:",
        selectedSkipId
      );
    }
  };

  return (
    <div className="home-container">
      {/* Header with Progress Indicator */}
      <header className="home-header">
        <div className="home-header-content">
          <ProgressIndicator currentStep={3} />
        </div>
      </header>

      {/* Main Content */}
      <main className="home-main">
        <div className="home-main-content">
          {/* Title Section */}
          <div className="home-title-section">
            <h1 className="home-title">Choose Your Skip Size</h1>
            <p className="home-subtitle">
              Select the skip size that best suits your needs
            </p>
          </div>

          <div className="home-skip-grid">
            {skipOptions.map((skip) => (
              <SkipCard
                key={skip.id}
                skip={skip}
                isSelected={selectedSkipId === skip.id}
                onSelect={() => handleSkipSelect(skip.id)}
              />
            ))}
          </div>

          {/* Additional Information */}
          <div className="home-info-card">
            <div className="home-info-content">
              <div className="home-info-header">
                <div className="home-info-icon">
                  <Info className="home-info-icon-svg" />
                </div>
                <div className="home-info-text-container">
                  <h4 className="home-info-title">Important Information</h4>
                  <p className="home-info-description">
                    Imagery and information shown throughout this website are
                    primarily and not reflect the exact colour or size
                    specification. Colours may vary, painted accessories may be
                    featured at additional cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Navigation Footer - Only show when a skip is selected */}
      {selectedSkipId && (
        <div className="home-navigation-footer">
          <div className="home-navigation-container">
            {/* Selected Skip Info */}
            <div className="home-selected-skip-info">
              {(() => {
                const selectedSkip = skipOptions.find(
                  (skip) => skip.id === selectedSkipId
                );
                if (selectedSkip) {
                  return (
                    <>
                      <span className="home-skip-size">
                        {selectedSkip.size} Yard Skip
                      </span>
                      <span className="home-skip-price">
                        £
                        {getPriceWithVat(
                          selectedSkip.priceBeforeVat,
                          selectedSkip.vat
                        )}
                      </span>
                      <span className="home-skip-period">
                        {selectedSkip.hirePeriodDays} day hire
                      </span>
                    </>
                  );
                }
                return null;
              })()}
            </div>

            {/* Navigation Buttons */}
            <div className="home-navigation-buttons">
              <button
                onClick={handleBack}
                className="home-nav-button home-nav-button-back"
              >
                <ChevronLeft className="home-nav-icon" />
                Back
              </button>

              <button
                onClick={handleContinue}
                className="home-nav-button home-nav-button-continue"
              >
                Continue
                <ChevronRight className="home-nav-icon" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
