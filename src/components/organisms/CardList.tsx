import Molecule from "../molecules";

interface CardListProps {
  title: string;
  subTitle: string;
  category: "TIME_ROUTINE" | "COUNT_ROUTINE";
  created_at: string;
  isEnded: boolean;
}

interface Props {
  cardList: CardListProps[];
}

export default function CardList({ cardList }: Props) {
  return (
    <div className="flex flex-col gap-4 w-full items-center p-5">
      {cardList.map((list) => (
        <Molecule.RoutineCard
          title={list.title}
          category={list.category}
          subTitle={list.subTitle}
          isEnded={list.isEnded}
        />
      ))}
    </div>
  );
}
