import LaunchHeader from "@/components/launch/LaunchHeader";
import LaunchFooter from "@/components/launch/LaunchFooter";

export default function LaunchLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a0724] text-white overflow-x-clip">
      <LaunchHeader />
      <main>{children}</main>
      <LaunchFooter />
    </div>
  );
}
