"use client";

import { useRef, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { ordersItemsHistory } from "@/lib/ordersItemsHistory";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency } from "@/utils/formatCurrency";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Link } from "@/i18n/navigation";

const statusFilters = [
  { value: "all", label: "All" },
  { value: "delivered", label: "Delivered" },
  { value: "shipped", label: "Shipped" },
  { value: "processing", label: "Processing" },
  { value: "cancelled", label: "Cancelled" },
];

export default function OrderHistoryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("all");
  const [openInvoiceDialog, setOpenInvoiceDialog] = useState(false);
  const [currentInvoice, setCurrentInvoice] = useState(null);
  const invoiceRef = useRef(null);
  const itemsPerPage = 5;

  const filteredOrders = ordersItemsHistory.filter((order) => {
    return filter === "all" || order.status.toLowerCase() === filter;
  });

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const currentItems = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleInvoiceClick = (order) => {
    setCurrentInvoice(order);
    setOpenInvoiceDialog(true);
  };

  const handleDownloadInvoice = () => {
    const printContent = invoiceRef.current;
    const WinPrint = window.open("", "", "width=800,height=650");
    if (!WinPrint || !printContent) return;

    WinPrint.document.write(`
      <html>
        <head>
          <title>Invoice</title>
          <style>
            body { font-family: Arial; padding: 20px; }
          </style>
        </head>
        <body>${printContent.innerHTML}</body>
      </html>
    `);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
  };

  const statusBadgeVariant = (status) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "success";
      case "shipped":
        return "info";
      case "processing":
        return "warning";
      case "cancelled":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Order History</h1>
          <p className="text-muted-foreground">
            View and manage your past orders
          </p>
        </div>

        {/* Status Tabs */}
        <Tabs
          value={filter}
          onValueChange={(value) => {
            setFilter(value);
            setCurrentPage(1);
          }}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-5 h-12">
            {statusFilters?.map((status) => (
              <TabsTrigger
                key={status?.value}
                value={status?.value}
                className="flex items-center gap-2.5"
              >
                <span>{status?.label}</span>
                <span className="text-xs font-normal mt-1">
                  (
                  {
                    ordersItemsHistory.filter(
                      (o) =>
                        status.value === "all" ||
                        o.status.toLowerCase() === status.value
                    )?.length
                  }
                  )
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Orders Table (Desktop) */}
      <div className="hidden md:block">
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Order ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Items</TableHead>
                <TableHead className="text-right">Total</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentItems.length > 0 ? (
                currentItems.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">
                      <span className="font-semibold">{order.id}</span>
                    </TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>
                      <Badge variant={statusBadgeVariant(order.status)}>
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{order.products.length}</TableCell>
                    <TableCell className="text-right font-medium">
                      {formatCurrency(order.total)}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 gap-1"
                          // onClick={() => handleInvoiceClick(order)}
                        >
                          <Link
                            href={`/invoices/${order?.id?.replace("#", "")}`}
                            className="flex justify-end gap-2"
                          >
                            <FileText className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                              View
                            </span>
                          </Link>
                        </Button>
                        <Button
                          variant="default"
                          size="sm"
                          className="h-8 gap-1"
                          onClick={() => handleInvoiceClick(order)}
                        >
                          <Download className="h-3.5 w-3.5" />
                          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                            Download
                          </span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">
                    No orders found for this filter.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Card>
      </div>

      {/* Orders Cards (Mobile) */}
      <div className="space-y-4 md:hidden">
        {currentItems.length > 0 ? (
          currentItems.map((order) => (
            <Card key={order.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{order.id}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {order.date}
                    </p>
                  </div>
                  <Badge variant={statusBadgeVariant(order.status)}>
                    {order.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Items:</span>
                    <span className="text-sm text-muted-foreground">
                      {order.products.length}
                    </span>
                  </div>
                  <div className="text-lg font-semibold">
                    {formatCurrency(order.total)}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 pt-0">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => handleInvoiceClick(order)}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  View
                </Button>
                <Button
                  variant="default"
                  className="flex-1"
                  onClick={() => handleInvoiceClick(order)}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">
                No orders found for this filter.
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Enhanced Pagination */}
      {filteredOrders.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-medium">
              {(currentPage - 1) * itemsPerPage + 1}
            </span>{" "}
            to{" "}
            <span className="font-medium">
              {Math.min(currentPage * itemsPerPage, filteredOrders.length)}
            </span>{" "}
            of <span className="font-medium">{filteredOrders.length}</span>{" "}
            orders
          </div>

          <Pagination className={`justify-end`}>
            <PaginationContent>
              <PaginationItem>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only sm:not-sr-only sm:ml-2">
                    Previous
                  </span>
                </Button>
              </PaginationItem>

              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }

                return (
                  <PaginationItem key={pageNum}>
                    <Button
                      variant={currentPage === pageNum ? "default" : "outline"}
                      size="sm"
                      onClick={() => handlePageChange(pageNum)}
                    >
                      {pageNum}
                    </Button>
                  </PaginationItem>
                );
              })}

              <PaginationItem>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <span className="sr-only sm:not-sr-only sm:mr-2">Next</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}

      {/* Invoice Dialog */}
      <Dialog open={openInvoiceDialog} onOpenChange={setOpenInvoiceDialog}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Invoice #{currentInvoice?.id}
            </DialogTitle>
          </DialogHeader>

          {currentInvoice && (
            <div ref={invoiceRef} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="font-semibold">Order Details</h3>
                  <div className="text-sm">
                    <p className="text-muted-foreground">
                      <span className="font-medium">Date:</span>{" "}
                      {currentInvoice.date}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Status:</span>{" "}
                      <Badge
                        variant={statusBadgeVariant(currentInvoice.status)}
                      >
                        {currentInvoice.status}
                      </Badge>
                    </p>
                  </div>
                </div>
                <div className="space-y-2 text-right">
                  <h3 className="font-semibold">Total Amount</h3>
                  <p className="text-2xl font-bold">
                    {formatCurrency(currentInvoice.total)}
                  </p>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead className="text-right">Quantity</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentInvoice.products.map((product, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div className="flex items-center gap-4">
                            <Image
                              width={48}
                              height={48}
                              src={product.image}
                              alt={product.name}
                              className="w-12 h-12 object-contain rounded-md"
                            />
                            <div>
                              <p className="font-medium">{product.name}</p>
                              <p className="text-sm text-muted-foreground">
                                SKU: {product.sku || "N/A"}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          {product.quantity}
                        </TableCell>
                        <TableCell className="text-right">
                          {formatCurrency(product.price)}
                        </TableCell>
                        <TableCell className="text-right">
                          {formatCurrency(product.price * product.quantity)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal:</span>
                  <span>{formatCurrency(currentInvoice.total)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping:</span>
                  <span>{formatCurrency(0.0)}</span>
                </div>
                <div className="flex justify-between border-t pt-2 font-bold text-lg">
                  <span>Total:</span>
                  <span>{formatCurrency(currentInvoice.total)}</span>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => setOpenInvoiceDialog(false)}
            >
              Close
            </Button>
            <Button onClick={handleDownloadInvoice} className="gap-2">
              <Download className="h-4 w-4" />
              Print / Save Invoice
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
