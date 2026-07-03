type Props = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: Props) {
  return (
    <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-white/15">
      {children}
    </h2>
  );
}