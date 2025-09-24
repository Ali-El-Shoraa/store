// app/track-order/page.jsx
"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  ArrowUpDown,
  Package,
  Eye,
  Calendar,
  Truck,
  CheckCircle,
  Clock,
  MapPin,
  CreditCard,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import HeroSubPage from "@/components/HeroSubPage";
import SupportSectionCard from "@/components/SupportSectionCard";

export default function TrackOrder() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [isLoading, setIsLoading] = useState(false);

  // Mock orders data - in a real app, this would come from an API
  const mockOrders = [
    {
      id: "ORD-123456",
      status: "shipped", // ordered, confirmed, processing, shipped, delivered
      orderDate: "2023-10-15",
      estimatedDelivery: "2023-10-20",
      items: [
        { name: "Wireless Headphones", quantity: 1, price: 99.99 },
        { name: "Phone Case", quantity: 2, price: 19.99 },
      ],
      customer: {
        name: "John Doe",
        email: "john.doe@example.com",
      },
      shippingAddress: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        country: "USA",
      },
      trackingNumber: "TRK-987654321",
      carrier: "Fast Shipping Co.",
      paymentMethod: "Credit Card",
      paymentStatus: "Paid",
    },
    {
      id: "ORD-789012",
      status: "delivered",
      orderDate: "2023-10-10",
      estimatedDelivery: "2023-10-15",
      items: [{ name: "Smart Watch", quantity: 1, price: 199.99 }],
      customer: {
        name: "Jane Smith",
        email: "jane.smith@example.com",
      },
      shippingAddress: {
        street: "456 Oak Ave",
        city: "Los Angeles",
        state: "CA",
        zipCode: "90001",
        country: "USA",
      },
      trackingNumber: "TRK-123456789",
      carrier: "Quick Delivery Inc.",
      paymentMethod: "PayPal",
      paymentStatus: "Paid",
    },
    {
      id: "ORD-345678",
      status: "processing",
      orderDate: "2023-10-18",
      estimatedDelivery: "2023-10-25",
      items: [
        { name: "Laptop", quantity: 1, price: 999.99 },
        { name: "Laptop Sleeve", quantity: 1, price: 29.99 },
      ],
      customer: {
        name: "Robert Johnson",
        email: "robert.j@example.com",
      },
      shippingAddress: {
        street: "789 Pine Rd",
        city: "Chicago",
        state: "IL",
        zipCode: "60007",
        country: "USA",
      },
      trackingNumber: "TRK-456789123",
      carrier: "Secure Ship Ltd.",
      paymentMethod: "Credit Card",
      paymentStatus: "Pending",
    },
    {
      id: "ORD-901234",
      status: "ordered",
      orderDate: "2023-10-19",
      estimatedDelivery: "2023-10-26",
      items: [
        { name: "Wireless Charger", quantity: 2, price: 39.99 },
        { name: "USB-C Cable", quantity: 3, price: 15.99 },
      ],
      customer: {
        name: "Sarah Williams",
        email: "sarah.w@example.com",
      },
      shippingAddress: {
        street: "321 Elm St",
        city: "Houston",
        state: "TX",
        zipCode: "77001",
        country: "USA",
      },
      trackingNumber: "TRK-789123456",
      carrier: "Express Logistics",
      paymentMethod: "Apple Pay",
      paymentStatus: "Paid",
    },
  ];

  // Simulate API call to fetch orders
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const getStatusBadge = (status) => {
    const statusConfig = {
      ordered: { label: "Ordered", variant: "secondary", icon: Clock },
      confirmed: { label: "Confirmed", variant: "outline", icon: CheckCircle },
      processing: { label: "Processing", variant: "default", icon: Clock },
      shipped: { label: "Shipped", variant: "default", icon: Truck },
      delivered: { label: "Delivered", variant: "success", icon: CheckCircle },
    };

    return (
      statusConfig[status] || {
        label: status,
        variant: "secondary",
        icon: Clock,
      }
    );
  };

  // Filter and sort orders
  const filteredOrders = mockOrders
    .filter((order) => {
      const matchesSearch =
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customer.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        filterStatus === "all" || order.status === filterStatus;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return sortOrder === "asc"
          ? new Date(a.orderDate) - new Date(b.orderDate)
          : new Date(b.orderDate) - new Date(a.orderDate);
      } else if (sortBy === "status") {
        const statusOrder = [
          "ordered",
          "confirmed",
          "processing",
          "shipped",
          "delivered",
        ];
        return sortOrder === "asc"
          ? statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status)
          : statusOrder.indexOf(b.status) - statusOrder.indexOf(a.status);
      }
      return 0;
    });

  return (
    <div className="container py-12 space-y-14 bg-gray-50">
      <HeroSubPage
        title={"Track Your Orders"}
        des={`View and track all your orders in one place`}
      />

      <Card className="w-full mb-8">
        <CardHeader>
          <CardTitle>Your Orders</CardTitle>
          <CardDescription>
            View all your orders and track their status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <Input
                type="text"
                placeholder="Search by order ID or customer name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="ordered">Ordered</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Date</SelectItem>
                <SelectItem value="status">Status</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              className="w-12"
            >
              <ArrowUpDown className="h-4 w-4" />
            </Button>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : filteredOrders.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order) => {
                  const statusInfo = getStatusBadge(order.status);
                  const StatusIcon = statusInfo.icon;
                  const total = order.items.reduce(
                    (sum, item) => sum + item.price * item.quantity,
                    0
                  );

                  return (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.customer.name}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          {order.orderDate}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={statusInfo.variant}
                          className="flex items-center gap-1 w-fit"
                        >
                          <StatusIcon className="h-3 w-3" />
                          {statusInfo.label}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {order.items.length} item
                        {order.items.length !== 1 ? "s" : ""}
                      </TableCell>
                      <TableCell className="font-medium">
                        ${total.toFixed(2)}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/track-order/${order.id}`}>
                            <Eye className="h-4 w-4 mr-1" />
                            View Details
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-8">
              <Package className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                No orders found
              </h3>
              <p className="mt-2 text-gray-500">
                {searchTerm || filterStatus !== "all"
                  ? "Try adjusting your search or filter to find what you're looking for."
                  : "You haven't placed any orders yet."}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Support Section */}
      <SupportSectionCard />
    </div>
  );
}
