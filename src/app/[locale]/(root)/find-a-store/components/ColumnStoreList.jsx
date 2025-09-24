"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChevronDown,
  ChevronUp,
  Filter,
  Loader2,
  LocateFixed,
  MapPin,
  Search,
  X,
} from "lucide-react";
import StoreListItem from "./StoreListItem";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ColumnStoreList({
  searchQuery,
  activeFilter,
  selectedServices,
  setSearchQuery,
  isFiltersOpen,
  serviceLabels,
  isLoadingLocation,
  expandedStores,
  filteredStores,
  selectedStore,
  setSelectedStore,
  toggleStoreHours,
  serviceIcons,
  setActiveFilter,
  getUserLocation,
  userLocation,
  setIsFiltersOpen,
  toggleServiceFilter,
  clearFilters,
}) {
  return (
    <div className="lg:w-2/5 xl:w-1/3">
      <Card className="shadow-lg rounded-2xl overflow-hidden border-0 p-0">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-6">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Store List</h2>
              {(searchQuery ||
                activeFilter !== "all" ||
                selectedServices.length > 0) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-white hover:text-white hover:bg-white/20"
                >
                  <X className="h-4 w-4 ml-1" />
                  Clear filters
                </Button>
              )}
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search by city name, zip code or address"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 pl-4 py-3 rounded-lg bg-white/90 text-black backdrop-blur-sm"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col space-y-3">
              {/* Status Tabs */}
              <Tabs
                defaultValue="all"
                className="w-full"
                onValueChange={setActiveFilter}
              >
                <TabsList className="grid grid-cols-3 bg-white/20 p-1 rounded-lg">
                  <TabsTrigger
                    value="all"
                    className="rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-600 text-white"
                  >
                    All
                  </TabsTrigger>
                  <TabsTrigger
                    value="open"
                    className="rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-600 text-white"
                  >
                    Open
                  </TabsTrigger>
                  <TabsTrigger
                    value="closed"
                    className="rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-600 text-white"
                  >
                    Closed
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              {/* Services Filter */}
              <div className="relative">
                <Button
                  variant="outline"
                  className="w-full justify-between text-black bg-white/90 hover:bg-white"
                  onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                >
                  <div className="flex items-center">
                    <Filter className="h-4 w-4 ml-2" />
                    Services
                    {selectedServices.length > 0 && (
                      <Badge variant="secondary" className="mr-2">
                        {selectedServices.length}
                      </Badge>
                    )}
                  </div>
                  {isFiltersOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Button>

                {isFiltersOpen && (
                  <Card className="absolute top-full left-0 right-0 mt-1 z-10 shadow-xl border-0 p-0">
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        {Object.entries(serviceLabels).map(([key, label]) => (
                          <div
                            key={key}
                            className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50"
                          >
                            <input
                              type="checkbox"
                              id={`service-${key}`}
                              checked={selectedServices.includes(key)}
                              onChange={() => toggleServiceFilter(key)}
                              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <label
                              htmlFor={`service-${key}`}
                              className="flex items-center mr-3 text-sm cursor-pointer"
                            >
                              <span className="ml-2">{serviceIcons[key]}</span>
                              <span>{label}</span>
                            </label>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Use My Location Button */}
              <Button
                onClick={getUserLocation}
                className="w-full bg-white text-blue-600 hover:bg-gray-100"
                disabled={isLoadingLocation}
              >
                {isLoadingLocation ? (
                  <Loader2 className="h-4 w-4 ml-2 animate-spin" />
                ) : (
                  <LocateFixed className="h-4 w-4 ml-2" />
                )}
                {isLoadingLocation ? "Locating..." : "Find my current location"}
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          {/* Results Count */}
          <div className="p-4 border-b bg-white flex justify-between items-center">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">{filteredStores.length}</span>{" "}
              {filteredStores.length === 1 ? "Store" : "Store"} Available
            </p>
            {userLocation && (
              <Badge variant="outline" className="flex items-center">
                <MapPin className="h-3 w-3 ml-1" />
                Your location is specific
              </Badge>
            )}
          </div>

          {/* Store List */}
          <ScrollArea className="h-[600px] overflow-y-auto">
            {filteredStores.length === 0 ? (
              <div className="p-8 text-center">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full p-4 inline-flex mb-4">
                  <MapPin className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  We did not find any stores.
                </h3>
                <p className="text-gray-500 mb-4">
                  There are no stores that match your search criteria.
                </p>
                <Button
                  onClick={clearFilters}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Clear all filters
                </Button>
              </div>
            ) : (
              filteredStores.map((store) => (
                <StoreListItem
                  serviceIcons={serviceIcons}
                  serviceLabels={serviceLabels}
                  key={store.id}
                  store={store}
                  isExpanded={expandedStores[store.id]}
                  onToggleHours={() => toggleStoreHours(store.id)}
                  onSelectStore={() => setSelectedStore(store)}
                  isSelected={selectedStore?.id === store.id}
                />
              ))
            )}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
