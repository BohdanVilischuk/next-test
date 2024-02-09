import { Button } from '@chakra-ui/react'
import React, { FC } from 'react'

const enum ButtonEnum {
  ADD_CARD = "Add card"
}
export interface IButton {
  onClick: () => void
}

export const ButtonComponent: FC<IButton> = ({ onClick }) => {
    return (
      <Button onClick={() => onClick()}>{ButtonEnum.ADD_CARD}</Button>
    )
}