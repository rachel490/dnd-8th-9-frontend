import React from "react";
import { useTheme } from "@emotion/react";
import Text from "@/components/shared/Text/Text";
import { ITable, IMenuOption } from "@/types/api";
import * as S from "./MenuTaste.styled";

interface IProp {
  taste: IMenuOption;
}

function MenuTaste({ taste }: IProp) {
  const { colors } = useTheme();

  return (
    <S.TasteContent>
      {taste.value.map((option, idx) => (
        <React.Fragment key={(option as ITable).name}>
          <S.NumberWrap>
            <Text weight={600} color={colors.blue[700]}>
              {idx + 1}
            </Text>
          </S.NumberWrap>
          <S.TextWrap>
            <Text size={15} weight={600}>
              {(option as ITable).name}
            </Text>
            <Text as="p" size={13} color={colors.grey[700]}>
              {(option as ITable).desc}
            </Text>
          </S.TextWrap>
        </React.Fragment>
      ))}
    </S.TasteContent>
  );
}

export default MenuTaste;
