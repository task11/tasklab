interface Props {
  label: string;
}

export default function Tooltip({ label }: Props) {
  return (
    <div className="flex items-center justify-center relative w-280px h-32px bg-white shadow-lg rounded-2xl p-3 after:border-t-8 after:border-t-white after:border-x-8 after:border-x-transparent after:border-b-8 after:border-b-transparent after:content-[''] after:absolute after:top-8 after:left-1/2 after:-translate-x-1/2">
      <span className="font-bold text-xs text-primary_100">{label}</span>
    </div>
  );
}
