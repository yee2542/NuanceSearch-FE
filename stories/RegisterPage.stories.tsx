import { Meta } from '@storybook/react';
import RegisterPage from 'Modules/user/pages/register';
import { GlobalStyle } from 'Styles/global';

export default {
  title: 'FluentSearch/Pages/RegisterPage',
  component: RegisterPage,
} as Meta;

export const Default = (): JSX.Element => (
  <>
    <GlobalStyle />
    <RegisterPage />
  </>
);
