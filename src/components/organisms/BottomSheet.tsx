import Molecule from "@/components/molecules";
import Organism from "@/components/organisms";

interface CardListProps {
  title: string;
  subTitle: string;
  category: "TIME_ROUTINE" | "COUNT_ROUTINE";
  created_at: string;
  isEnded: boolean;
}

export default function BottomSheet() {
  const MOCK_Daily_Card_List: Array<CardListProps> = [
    {
      title: "일찍 일어나기",
      subTitle: "오전 6:30",
      category: "TIME_ROUTINE",
      created_at: "2024-02-26",
      isEnded: true,
    },
    {
      title: "밥 한끼만 먹기",
      subTitle: "2회 달성",
      category: "COUNT_ROUTINE",
      created_at: "2024-02-10",
      isEnded: false,
    },
  ];

  const MOCK_Today_Card_List: Array<CardListProps> = [
    {
      title: "늦잠자기",
      subTitle: "오후 6:30",
      category: "TIME_ROUTINE",
      created_at: "2024-02-26",
      isEnded: false,
    },
    {
      title: "폭식하기",
      subTitle: "3회 달성",
      category: "COUNT_ROUTINE",
      created_at: "2024-02-10",
      isEnded: false,
    },
    {
      title: "운동 하기",
      subTitle: "3회 달성",
      category: "COUNT_ROUTINE",
      created_at: "2024-01-10",
      isEnded: false,
    },
    {
      title: "운동 하기",
      subTitle: "3회 달성",
      category: "COUNT_ROUTINE",
      created_at: "2024-01-10",
      isEnded: false,
    },

    {
      title: "운동 하기",
      subTitle: "3회 달성",
      category: "COUNT_ROUTINE",
      created_at: "2024-01-10",
      isEnded: false,
    },
    {
      title: "운동 하기",
      subTitle: "3회 달성",
      category: "COUNT_ROUTINE",
      created_at: "2024-01-10",
      isEnded: false,
    },
    {
      title: "운동 하기",
      subTitle: "3회 달성",
      category: "COUNT_ROUTINE",
      created_at: "2024-01-10",
      isEnded: false,
    },
    {
      title: "운동 하기",
      subTitle: "3회 달성",
      category: "COUNT_ROUTINE",
      created_at: "2024-01-10",
      isEnded: false,
    },
  ];

  return (
    <Molecule.FilteredSheet
      leftLabel="데일리"
      rightLabel="투데이"
      left={<Organism.CardList cardList={MOCK_Daily_Card_List} />}
      right={<Organism.CardList cardList={MOCK_Today_Card_List} />}
      isLeftActive={true}
    />
  );
}
