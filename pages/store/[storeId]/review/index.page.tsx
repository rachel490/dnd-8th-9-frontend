/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useRouter } from "next/router";
import Link from "next/link";

import { reviews } from "@/mocks/mockData/review"; // TODO: msw에서 받아와야 함
import { storeTab } from "@/constants/navigations";
import StoreHero from "@/components/store/StoreHero/StoreHero";
import Tab from "@/components/shared/Tab/Tab";
import OverallStats from "@/components/store/review/OverallStats/OverallStats";
import Review from "@/components/store/review/Review/Review";
import Button from "@/components/shared/Button/Button";
import Icon from "@/components/shared/Icon/Icon";
import * as S from "./review.styled";

function ReviewPage() {
  const { rating, totalReviews, stats } = reviews.overallStats;
  const { asPath } = useRouter();

  return (
    <S.Container>
      <StoreHero />
      <Tab type="swipeable" menuList={storeTab} target="storeTab" />
      <OverallStats rating={rating} totalReviews={totalReviews} stats={stats} />
      <S.ReviewListWrap>
        {reviews.reviewList.slice(0, 2).map(review => (
          <Review key={review.id} review={review} />
        ))}
        <Link href={`${asPath}/all`}>
          <Button type="button" label="more reviews" shape="square" cssProp={S.buttonCss}>
            <>
              리뷰 전체보기
              <Icon name="arrowRight" size="m" />
            </>
          </Button>
        </Link>
      </S.ReviewListWrap>
    </S.Container>
  );
}

export default ReviewPage;
