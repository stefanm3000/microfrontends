export function MovieGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {children}
    </div>
  );
}
