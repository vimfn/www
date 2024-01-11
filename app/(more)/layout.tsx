export default function MoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="md:mt-8 lg:mt-10 pt-8 pb-16 dark:text-zinc-200">
      {children}
    </div>
  );
}
