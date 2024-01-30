type Props = {
  children: React.ReactNode;
};

export default function Button({ children }: Props) {
  return (
    <button className="w-64 h-12 border-r-8 disabled:opacity-50" type="button">
      {children}
    </button>
  );
}
