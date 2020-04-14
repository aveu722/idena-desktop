import React from 'react'
import {Button, Icon, PseudoBox} from '@chakra-ui/core'

/* eslint-disable import/prefer-default-export */
export {default as Box} from './box'
export * from './typo'
export * from './tooltip'
export * from './table'
export {default as Group} from './group'
export {default as Button} from './button'
export {default as Drawer} from './drawer'
export {default as Modal} from './modal'
export * from './position'
export * from './placeholder'
export * from './form'
export * from './grid'
export * from './icons'
export {default as Link} from './link'
export {default as List} from './list'

function BaseButton(props) {
  return (
    <Button fontWeight={500} h={8} px={4} py="3/2" rounded="md" {...props} />
  )
}

export function PrimaryButton(props) {
  return <BaseButton variantColor="brandBlue" color="white" {...props} />
}

export function SecondaryButton(props) {
  return (
    <PseudoBox
      as="button"
      height={8}
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      fontWeight={500}
      h={8}
      px={4}
      py="3/2"
      rounded="md"
      bg="brandBlue.10"
      color="brandBlue.500"
      _hover={{bg: 'brandBlue.50'}}
      _active={{
        bg: 'brandBlue.100',
        transform: 'scale(0.98)',
      }}
      _focus={{
        boxShadow:
          '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
      }}
      {...props}
    />
  )
}

// eslint-disable-next-line react/prop-types
export function IconButton({icon, children, ...props}) {
  return (
    <Button
      variant="ghost"
      variantColor="brandBlue"
      fontWeight={500}
      h={10}
      px={3}
      py={3}
      rounded="md"
      transition="0.3s ease-in"
      {...props}
    >
      <Icon name={icon} size={5} mr={2} />
      {children}
    </Button>
  )
}
