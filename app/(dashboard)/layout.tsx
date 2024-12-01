import { CalendarHeader } from "@/components/ui/calendar/calendar-header";
import { ProductFeedack } from "@/components/ui/product-feedback";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen bg-black">
      {/* Header */}
      <CalendarHeader />
      
      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>

      {/* Footer (Product Feedback) */}
      <div className="p-4">
        <ProductFeedack />
      </div>
    </div>
  );
}
