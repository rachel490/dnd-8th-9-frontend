import Link from "next/link";
import { useRouter } from "next/router";
import { useGetStore } from "@/api/queries/store";
import Card from "@/components/shared/Card/Card";
import Tab from "@/components/shared/Tab/Tab";
import { storeTab } from "@/constants/navigations";
import { menuList } from "@/mocks/mockData/menuList";
import StoreHero from "@/components/store/StoreHero/StoreHero";
import * as S from "./menu.styled";

function MenuPage() {
  const { data, isLoading, isError } = useGetStore({ storeId: 1 });
  const { asPath } = useRouter();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <S.Container>
      <StoreHero />
      <Tab type="swipeable" menuList={storeTab} target="storeTab" />
      <S.ListWrap>
        {menuList.menus.map(menu => (
          <Link key={menu.id} href={`${asPath}/${menu.id}`}>
            <Card menu={menu} />
          </Link>
        ))}
      </S.ListWrap>
    </S.Container>
  );
}

export default MenuPage;
