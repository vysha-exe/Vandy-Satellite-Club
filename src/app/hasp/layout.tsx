import { HaspSidebar } from "@/components/HaspSidebar";

export default function HaspLayout({ children }: LayoutProps<"/hasp">) {
  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-6 py-10 lg:grid-cols-[220px_minmax(0,1fr)]">
      <HaspSidebar />
      <div>{children}</div>
    </div>
  );
}
