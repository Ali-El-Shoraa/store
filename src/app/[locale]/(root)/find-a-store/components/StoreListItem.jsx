"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  ChevronDown,
  ChevronUp,
  Clock,
  Phone,
  Route,
  Star,
} from "lucide-react";

export default function StoreListItem({
  store,
  isExpanded,
  onToggleHours,
  onSelectStore,
  isSelected,
  serviceIcons,
  serviceLabels,
}) {
  const getStatusColor = (status) => {
    if (status === "Open now") return "text-green-800 bg-green-100";
    if (status === "Closes soon") return "text-amber-800 bg-amber-100";
    return "text-red-800 bg-red-100";
  };

  return (
    <div
      className={`store-item transition-all duration-200 border-b border-gray-100 last:border-b-0 ${
        isSelected
          ? "bg-blue-50 border-l-4 border-l-blue-500"
          : "bg-white hover:bg-gray-50"
      } ${store.featured ? "ring-1 ring-blue-200" : ""}`}
      data-store-id={store.id}
    >
      <div className="p-4 cursor-pointer" onClick={onSelectStore}>
        <div className="flex items-start space-x-4 space-x-reverse">
          <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-xl overflow-hidden shadow-sm relative">
            <img
              src={store.image}
              alt={store.name}
              className="w-full h-full object-cover"
            />
            {store.featured && (
              <div className="absolute top-2 right-2">
                <Badge className="bg-blue-600 text-xs py-0 px-1">
                  Distinct
                </Badge>
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <h3 className="font-semibold text-gray-900 truncate">
                {store.name}
              </h3>
              <Badge
                variant="outline"
                className={getStatusColor(store.currentStatus)}
              >
                {store.currentStatus}
              </Badge>
            </div>
            <p className="text-sm text-gray-600 truncate">{store.address}</p>
            <p className="text-sm text-gray-600">
              {store.city}, {store.zip}
            </p>
            <div className="mt-2 flex items-center flex-wrap gap-2">
              {/* Rating */}
              <div className="flex items-center text-sm text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                <Star className="h-3.5 w-3.5 fill-current" />
                <span className="ml-1 font-medium">{store.rating}</span>
                <span className="text-gray-500 mr-1">({store.reviews})</span>
              </div>

              {/* Distance */}
              {store.distance && (
                <div className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  Far away {store.distance}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Services */}
        {store.services.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {store.services.map((service) => (
              <Badge
                key={service}
                variant="outline"
                className="text-xs flex items-center gap-1 bg-gray-100 rounded-lg px-2 py-1"
              >
                {serviceIcons[service]}
                {serviceLabels[service]}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Hours Section */}
      <div className="border-t border-gray-100">
        <div
          className="px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={onToggleHours}
        >
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 ml-2" />
            Show working hours
          </div>
          {isExpanded ? (
            <ChevronUp className="h-4 w-4 text-gray-400" />
          ) : (
            <ChevronDown className="h-4 w-4 text-gray-400" />
          )}
        </div>

        {/* Expanded Hours */}
        {isExpanded && (
          <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
            <h4 className="font-medium text-sm mb-2 flex items-center">
              <Calendar className="h-4 w-4 ml-2" />
              working hours
            </h4>
            <div className="grid grid-cols-1 gap-2 text-sm">
              {Object.entries(store.hours).map(([day, hours]) => (
                <div
                  key={day}
                  className="flex justify-between items-center py-1"
                >
                  <span className="font-medium text-gray-700 capitalize">
                    {day}:
                  </span>
                  <span
                    className={
                      hours === "Closed" ? "text-gray-400" : "text-gray-900"
                    }
                  >
                    {hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex gap-2">
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <a href={`tel:${store.phone}`}>
                  <Phone className="h-4 w-4 ml-2" />
                  Contact the store
                </a>
              </Button>
              <Button size="sm" className="flex-1" asChild>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${store.lat},${store.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Route className="h-4 w-4 ml-2" />
                  Trends
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
