import { Check, MapPin, Truck, AlertCircle } from "lucide-react";
import type { Skip } from "../types/skip";
import { getPriceWithVat } from "../utils";
import "../styles/SkipCard.scss";

interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: () => void;
}

export default function SkipCard({
  skip,
  isSelected,
  onSelect,
}: SkipCardProps) {
  const totalPrice = getPriceWithVat(skip.priceBeforeVat, skip.vat);
  const hasTransportCost = skip.transportCost && skip.perTonneCost;

  const getFeatures = () => {
    const features = [];
    if (skip.allowedOnRoad)
      features.push({
        icon: MapPin,
        text: "Road placement allowed",
        color: "text-green-400",
      });
    if (skip.allowsHeavyWaste)
      features.push({
        icon: Truck,
        text: "Heavy waste allowed",
        color: "text-blue-400",
      });
    if (!skip.allowedOnRoad)
      features.push({
        icon: AlertCircle,
        text: "Private land only",
        color: "text-amber-400",
      });
    return features;
  };

  return (
    <div
      className={`skip-card ${isSelected ? "selected" : ""} ${
        skip.forbidden ? "forbidden" : ""
      }`}
      onClick={onSelect}
    >
      <div className="skip-card-content">
        <div className="skip-image-container">
          <div className="skip-size-badge">{skip.size} Yards</div>
          {skip.forbidden && (
            <div className="skip-unavailable-badge">Unavailable</div>
          )}
          <img
            src={skip.imageUrl}
            alt={`${skip.size} yard yellow skip container`}
            className="skip-image"
            onError={(e) => {
              console.error("Image failed to load:", skip.imageUrl);
              const img = e.target as HTMLImageElement;
              img.style.backgroundColor = "#4b5563";
              img.style.display = "flex";
              img.style.alignItems = "center";
              img.style.justifyContent = "center";
            }}
            onLoad={() =>
              console.log("Image loaded successfully:", skip.imageUrl)
            }
          />
        </div>

        <div className="skip-details">
          <div className="skip-header">
            <h3 className="skip-title">{skip.size} Yard Skip</h3>
            <div className="skip-price-container">
              <div className="skip-price">£{totalPrice}</div>
              {hasTransportCost && (
                <div className="skip-transport-cost">
                  + £{skip.transportCost}/tonne
                </div>
              )}
            </div>
          </div>

          <div className="skip-hire-info">
            <span className="skip-hire-period">
              {skip.hirePeriodDays} day hire period
            </span>
            <span className="skip-postcode-badge">{skip.postcode}</span>
          </div>

          {/* Features */}
          <div className="skip-features">
            {getFeatures().map((feature, index) => (
              <div key={index} className="skip-feature">
                <feature.icon
                  className={`skip-feature-icon ${feature.color.replace(
                    "text-",
                    ""
                  )}`}
                />
                <span className="skip-feature-text">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="skip-price-breakdown">
            Price: £{skip.priceBeforeVat} + VAT ({skip.vat}%)
            {hasTransportCost && (
              <div>Transport: £{skip.transportCost} per tonne</div>
            )}
          </div>

          <button
            className={`skip-select-button ${
              skip.forbidden ? "forbidden" : isSelected ? "selected" : ""
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
              <div className="skip-selected-content">
                <Check className="check-icon" />
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
}
