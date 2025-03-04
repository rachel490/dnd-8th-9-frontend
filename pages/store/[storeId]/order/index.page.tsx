import { useRouter } from "next/router";
import { useTheme } from "@emotion/react";
import { store } from "@/mocks/mockData/store";
import { useGetStore } from "@/hooks/queries/store";
import useModalStore from "@/store/modal";

import { Copy } from "@/assets/icons";
import Modal from "@/components/shared/Modal/Modal";
import ModalMessage from "@/components/shared/ModalMessage/ModalMessage";
import SectionLayout from "@/components/store/SectionLayout/SectionLayout";
import Text from "@/components/shared/Text/Text";
import * as S from "./order.styled";

const TEMPLATE_TITLE = "주문양식이 복사되었습니다!";
const TEMPLATE_DETAIL =
  "주문 및 예약을 하러 가기 전에 공지사항과 주의사항을 꼼꼼히 읽었는지 한 번 더 확인해주세요.";

const ORDER_FORM_MOCK = store.orderForm;

function OrderTemplatePage() {
  const {
    query: { storeId },
  } = useRouter();
  const { colors } = useTheme();

  const { orderFormModalOpen, toggleOrderFormModal } = useModalStore();
  const { data: storeDetailsData, isLoading, isError } = useGetStore(Number(storeId));

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error...</h1>;

  const orderData = storeDetailsData.data.orderForm || ORDER_FORM_MOCK;

  return (
    <>
      {orderFormModalOpen && (
        <Modal closeModal={toggleOrderFormModal}>
          <ModalMessage title={TEMPLATE_TITLE} detail={TEMPLATE_DETAIL} />
        </Modal>
      )}
      <SectionLayout>
        <S.Container>
          <S.FormBox>
            {Object.keys(orderData).map(key => (
              <S.FormCell key={key}>
                <S.Title>{key}</S.Title>
                <input placeholder={orderData[key]} />
              </S.FormCell>
            ))}
          </S.FormBox>
          <S.TextBox>
            당도는 현재 예약/결제 서비스를 운영하고 있지 않습니다. 주문 양식은 업체에서 제공해준
            정보이며, 해당 업체를 통해 실제 결제가 이루어져야 케이크 주문/예약이 가능합니다.
          </S.TextBox>
          <S.CopyButton
            type="button"
            label="복사하기"
            shape="square"
            onClick={toggleOrderFormModal}
          >
            <Copy height={16} width={16} viewBox="0 0 19 19" />
            <Text size={16} color={colors.blue[700]} weight={500}>
              복사하기
            </Text>
          </S.CopyButton>
        </S.Container>
      </SectionLayout>
    </>
  );
}

export default OrderTemplatePage;
