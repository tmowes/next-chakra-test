// import Head from 'next/head';

import { Heading, Grid, Flex, Link, Button, Text } from '@chakra-ui/core';
import React from 'react';
import Input from '../components/Input';
import Divider from '../components/Divider';

export default function Home() {
  return (
    <Grid
      as='main'
      height='100vh'
      templateColumns='1fr 48rem 48rem 1fr'
      templateRows='1fr 48rem 1fr'
      templateAreas="
      '. . . .'
      '. logo form .'
      '. . . .'
    "
      alignItems='center'
      justifyContent='center'>
      <Flex gridArea='logo' flexDir='column' alignItems='flex-start'>
        <img src='/rocketseat.svg' alt='RocketSeat' />
        <Heading size='2xl' lineHeight='shorter' marginTop={16}>
          Faça seu login na platforma
        </Heading>
      </Flex>
      <Flex
        gridArea='form'
        backgroundColor='gray.700'
        borderRadius='md'
        flexDir='column'
        alignItems='stretch'
        padding={16}>
        <Input placeholder='E-mail' />
        <Input placeholder='Senha' marginTop={2} />
        <Link
          alignSelf='flex-start'
          marginTop={2}
          fontSize='sm'
          color='purple.600'
          fontWeight='bold'
          _hover={{ color: 'purple.500' }}>
          Esqueci minha senha
        </Link>
        <Button
          backgroundColor='purple.500'
          height='5rem'
          borderRadius='sm'
          marginTop={6}
          _hover={{ backgroundColor: 'purple.600' }}>
          ENTRAR
        </Button>
        <Text textAlign='center' fontSize='sm' color='gray.300' marginTop={6}>
          Não tem uma conta?{' '}
          <Link
            color='purple.600'
            fontWeight='bold'
            _hover={{ color: 'purple.500' }}>
            Registre-se
          </Link>
        </Text>
        <Divider />
        <Flex alignItems='center'>
          <Text fontSize='sm'>Ou entre com</Text>
          <Button
            height='5rem'
            flex='1'
            backgroundColor='gray.600'
            marginLeft={6}
            borderRadius='sm'
            _hover={{ backgroundColor: 'purple.500' }}>
            GITHUB
          </Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
