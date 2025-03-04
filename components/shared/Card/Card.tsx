import { IImage, IMenuListItem, IStoreListItem, IStoreMenuListItem } from "@/types/api";
import CardImage from "./CardImage";
import * as S from "./Card.styled";

interface IProp {
  mode?: "edit" | "bookmark" | "none";
  imgWidth?: number;
  imgHeight: number;
  gap: number;
  dir: "row" | "col";
  image: string | IImage[];
  rank?: number;
  className?: string;
  children: React.ReactNode;
  canDelivery?: boolean;
  canPickup?: boolean;
  data: IStoreListItem | IMenuListItem | IStoreMenuListItem;
  type: "menu" | "store";
}

function Card({
  image,
  dir,
  gap,
  imgWidth,
  imgHeight,
  mode,
  rank = 0,
  className,
  children,
  canDelivery = false,
  canPickup = false,
  data,
  type,
}: IProp) {
  return (
    <S.Container
      dir={dir}
      gap={gap}
      imgWidth={imgWidth}
      imgHeight={imgHeight}
      className={className}
    >
      <S.ImageWrap>
        <CardImage
          type={type}
          bookmarkData={data}
          data={image}
          rank={rank}
          canDelivery={canDelivery}
          canPickup={canPickup}
          mode={mode}
        />
      </S.ImageWrap>
      {children}
    </S.Container>
  );
}

export default Card;
