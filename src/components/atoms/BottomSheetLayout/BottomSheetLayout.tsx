interface Props {
  children: React.ReactNode;
}

export default function BottomSheetLayout({ children }: Props) {
  return (
    <div className=" bg-white w-100% h-635px rounded-t-3xl overflow-scroll relative">
      {children}
    </div>
  );
}
