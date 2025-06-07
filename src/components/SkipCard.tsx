import React from "react";
import "../styles/skip-card.scss";
import type { Skip } from "../types/skip";
interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: () => void;
}

interface Feature {
  symbol: string;
  text: string;
  className: string;
}

const SkipCard: React.FC<SkipCardProps> = ({ skip, isSelected, onSelect }) => {
  const totalPrice = Math.round(skip.priceBeforeVat * (1 + skip.vat / 100));
  const hasTransportCost = skip.transportCost && skip.perTonneCost;

  const getFeatures = (): Feature[] => {
    const features: Feature[] = [];
    if (skip.allowedOnRoad)
      features.push({
        symbol: "📍",
        text: "Road placement allowed",
        className: "text-green",
      });
    if (skip.allowsHeavyWaste)
      features.push({
        symbol: "🚛",
        text: "Heavy waste allowed",
        className: "text-blue",
      });
    if (!skip.allowedOnRoad)
      features.push({
        symbol: "⚠️",
        text: "Private land only",
        className: "text-amber",
      });
    return features;
  };

  return (
    <div
      className={`skip-card ${isSelected ? "skip-card--selected" : ""} ${
        skip.forbidden ? "skip-card--disabled" : ""
      }`}
      onClick={!skip.forbidden ? onSelect : undefined}
    >
      <div className="skip-card__content">
        <div className="skip-card__image-container">
          <div className="badge badge--primary size-badge">
            {skip.size} Yards
          </div>
          {skip.forbidden && (
            <div className="badge badge--danger unavailable-badge">
              Unavailable
            </div>
          )}
          <img
            src={skip.imageUrl}
            alt={`${skip.size} yard yellow skip container`}
            className="skip-card__image"
          />
        </div>

        <div className="skip-card__details">
          <div className="skip-card__header">
            <h3 className="skip-card__title">{skip.size} Yard Skip</h3>
            <div className="skip-card__price-info">
              <div className="skip-card__total-price text-yellow text-2xl text-bold">
                £{totalPrice}
              </div>
              {hasTransportCost && (
                <div className="skip-card__transport-cost text-xs text-muted">
                  + £{skip.transportCost}/tonne
                </div>
              )}
            </div>
          </div>

          <div className="skip-card__meta">
            <span className="skip-card__hire-period text-muted">
              {skip.hirePeriodDays} day hire period
            </span>
            <div className="badge badge--secondary">{skip.postcode}</div>
          </div>

          <div className="skip-card__features">
            {getFeatures().map((feature, index) => (
              <div key={index} className="skip-card__feature">
                <span
                  className={`skip-card__feature-icon ${feature.className}`}
                >
                  {feature.symbol}
                </span>
                <span className="skip-card__feature-text">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="skip-card__price-breakdown">
            Price: £{skip.priceBeforeVat} + VAT ({skip.vat}%)
            {hasTransportCost && (
              <div>Transport: £{skip.transportCost} per tonne</div>
            )}
          </div>

          <button
            className={`btn w-full ${
              skip.forbidden
                ? "btn--disabled"
                : isSelected
                ? "btn--primary"
                : "btn--secondary"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              if (!skip.forbidden) onSelect();
            }}
            disabled={skip.forbidden}
          >
            {skip.forbidden ? (
              "Unavailable"
            ) : isSelected ? (
              <div className="flex flex--align-center gap--sm">
                <span>✓</span>
                <span>Selected</span>
              </div>
            ) : (
              "Select This Skip"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkipCard;
