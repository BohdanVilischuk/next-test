import { Card, CardBody, Text, Heading, Divider } from '@chakra-ui/react'
import React, { FC } from 'react'
import { ICard } from '@/app/types/card'

export const CardComponent: FC<ICard> = ({ title, description }) => {
    return (
      <Card padding={5} margin={5}>
				<Heading size='md'>{title}</Heading>
				<Divider />
  			<CardBody>
    			<Text>{description}</Text>
  			</CardBody>
			</Card>
    )
}