"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Printer } from "lucide-react";
import { formatCurrency } from "@/utils/formatCurrency";
import { useRef } from "react";
import { useRouter } from "@/i18n/navigation";

const InvoiceDetails = ({ invoice }) => {
  const router = useRouter();
  const invoiceRef = useRef(null);

  const handlePrint = () => {
    const printContent = invoiceRef.current;
    const WinPrint = window.open("", "", "width=900,height=650");

    WinPrint.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Invoice #${invoice.id}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: 'Inter', sans-serif; line-height: 1.6; color: #374151; }
            .invoice-container { max-width: 800px; margin: 0 auto; padding: 2rem; }
            .header { display: flex; justify-content: space-between; margin-bottom: 2rem; }
            .logo { font-size: 1.5rem; font-weight: 700; color: #111827; }
            .badge { display: inline-block; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.875rem; font-weight: 500; }
            .grid-cols-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; }
            .table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; }
            .table th { text-align: left; padding: 0.75rem 1rem; background-color: #f9fafb; border: 1px solid #e5e7eb; }
            .table td { padding: 0.75rem 1rem; border: 1px solid #e5e7eb; }
            .text-right { text-align: right; }
            .total-section { margin-top: 1.5rem; border-top: 1px solid #e5e7eb; padding-top: 1rem; }
            @media print {
              .no-print { display: none; }
              body { padding: 0; }
            }
          </style>
        </head>
        <body>
          <div class="invoice-container">
            ${printContent.innerHTML}
          </div>
        </body>
      </html>
    `);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
  };

  const getStatusVariant = (status) => {
    switch (status.toLowerCase()) {
      case "paid":
        return "success";
      case "pending":
        return "warning";
      case "overdue":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex justify-between items-center mb-6 no-print">
        <Button variant="ghost" onClick={() => router.back()}>
          ← Back to invoices
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handlePrint}>
            <Printer className="h-4 w-4 mr-2" />
            Print
          </Button>
          <Button onClick={handlePrint}>
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
      </div>

      <div
        ref={invoiceRef}
        className="bg-white rounded-lg shadow-sm border p-6 md:p-8"
      >
        {/* Invoice Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold text-gray-900">Invoice</h1>
            <p className="text-gray-500">#{invoice.id}</p>
          </div>
          <Badge variant={getStatusVariant(invoice.status)} className="text-sm">
            {invoice.status}
          </Badge>
        </div>

        {/* Invoice Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-sm font-medium text-gray-500 uppercase mb-2">
              From
            </h2>
            <p className="font-medium text-gray-900">Your Company Name</p>
            <p className="text-gray-500">123 Business Street</p>
            <p className="text-gray-500">City, State 10001</p>
            <p className="text-gray-500">contact@company.com</p>
            <p className="text-gray-500">(123) 456-7890</p>
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="text-sm font-medium text-gray-500 uppercase mb-2">
                Bill To
              </h2>
              <p className="font-medium text-gray-900">
                {invoice.customer.name}
              </p>
              <p className="text-gray-500">{invoice.customer.email}</p>
              <p className="text-gray-500">{invoice.customer.address}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-sm font-medium text-gray-500 uppercase mb-2">
                  Invoice Date
                </h2>
                <p>{invoice.date}</p>
              </div>
              <div>
                <h2 className="text-sm font-medium text-gray-500 uppercase mb-2">
                  Due Date
                </h2>
                <p>{invoice.dueDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Items Table */}
        <div className="border rounded-lg overflow-hidden mb-8">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase">
                  Item
                </th>
                <th className="py-3 px-4 text-right text-sm font-medium text-gray-500 uppercase">
                  Qty
                </th>
                <th className="py-3 px-4 text-right text-sm font-medium text-gray-500 uppercase">
                  Rate
                </th>
                <th className="py-3 px-4 text-right text-sm font-medium text-gray-500 uppercase">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {invoice.items.map((item, index) => (
                <tr key={index}>
                  <td className="py-3 px-4">
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </td>
                  <td className="py-3 px-4 text-right">{item.quantity}</td>
                  <td className="py-3 px-4 text-right">
                    {formatCurrency(item.price)}
                  </td>
                  <td className="py-3 px-4 text-right">
                    {formatCurrency(item.price * item.quantity)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="ml-auto max-w-xs space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-500">Subtotal</span>
            <span>{formatCurrency(invoice.subtotal)}</span>
          </div>
          {invoice.taxRate > 0 && (
            <div className="flex justify-between">
              <span className="text-gray-500">Tax ({invoice.taxRate}%)</span>
              <span>{formatCurrency(invoice.taxAmount)}</span>
            </div>
          )}
          {invoice.discount > 0 && (
            <div className="flex justify-between">
              <span className="text-gray-500">Discount</span>
              <span>-{formatCurrency(invoice.discount)}</span>
            </div>
          )}
          <div className="flex justify-between pt-2 border-t border-gray-200 font-bold text-lg">
            <span>Total</span>
            <span>{formatCurrency(invoice.total)}</span>
          </div>
        </div>

        {/* Notes */}
        {invoice.notes && (
          <div className="mt-8 pt-4 border-t border-gray-200">
            <h2 className="text-sm font-medium text-gray-500 uppercase mb-2">
              Notes
            </h2>
            <p className="text-gray-700">{invoice.notes}</p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 pt-4 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>Thank you for your business!</p>
          <p className="mt-1">Please make payment by the due date.</p>
        </div>
      </div>
    </div>
  );
};

// Sample invoice data structure
const sampleInvoice = {
  id: "INV-2023-001",
  status: "Paid",
  date: "2023-06-15",
  dueDate: "2023-07-15",
  customer: {
    name: "Acme Corporation",
    email: "billing@acme.com",
    address: "123 Main St, Anytown, CA 12345",
  },
  items: [
    {
      name: "Website Design",
      description: "Custom website redesign",
      quantity: 1,
      price: 2000,
    },
    {
      name: "Hosting (Annual)",
      description: "Business hosting package",
      quantity: 1,
      price: 500,
    },
    {
      name: "SEO Package",
      description: "Search engine optimization",
      quantity: 3,
      price: 300,
    },
  ],
  subtotal: 3400,
  taxRate: 10,
  taxAmount: 340,
  discount: 0,
  total: 3740,
  notes:
    "Payment terms: Net 30. Late fees may apply for payments received after due date.",
};

export default function Page() {
  return <InvoiceDetails invoice={sampleInvoice} />;
}
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import { formatCurrency } from "@/utils/formatCurrency";

// export default async function page({ params }) {
//   const { order_id } = await params;
//   return (
//     <div>
//       {order_id}

//       <div className="animate-in slide-in-from-right-5 duration-700">
//         <Card className="sticky top-4 transform transition-all duration-300 hover:shadow-lg">
//           <CardContent className="p-6">
//             <h2 className="text-xl font-bold mb-4">Order Summary</h2>
//             <div className="space-y-3">
//               <div className="flex justify-between transition-colors duration-200 hover:text-primary">
//                 <span className="text-muted-foreground">Subtotal</span>
//                 <span>{formatCurrency(200)}</span>
//               </div>
//               <div className="flex justify-between transition-colors duration-200 hover:text-primary">
//                 <span className="text-muted-foreground">Shipping</span>
//                 <span>{formatCurrency(700)}</span>
//               </div>
//               <div className="flex justify-between transition-colors duration-200 hover:text-primary">
//                 <span className="text-muted-foreground">Tax</span>
//                 <span>{formatCurrency(50)}</span>
//               </div>
//               <Separator className="my-2" />
//               <div className="flex justify-between font-bold text-lg">
//                 <span>Total</span>
//                 <span className="animate-pulse">{formatCurrency(30)}</span>
//               </div>
//               <Button
//                 className="w-full mt-4 transform transition-all duration-200 hover:scale-105 active:scale-95"
//                 size="lg"
//                 // onClick={onCheckout}
//                 // disabled={cartItems?.length === 0}
//               >
//                 Proceed to Checkout
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }
