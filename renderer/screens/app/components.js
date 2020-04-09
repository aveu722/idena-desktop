import React from 'react'
import {Heading, Box} from '@chakra-ui/core'
import {rem} from '../../shared/theme'

export function Page(props) {
  return <Box color="brandGray.500" flex={1} px={20} py={6} {...props} />
}

export function PageTitle(props) {
  return (
    <Heading
      as="h1"
      fontSize={rem(28)}
      fontWeight={500}
      lineHeight="32px"
      py={2}
      mb={4}
      {...props}
    />
  )
}
