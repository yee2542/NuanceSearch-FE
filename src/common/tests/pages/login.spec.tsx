import { shallow } from 'enzyme';
import { OAuthEnum } from 'Models/oauth/enum';
import FormCenterLayout from 'Modules/user/components/Layouts/FormCenter';
import LoginPage from 'Modules/user/pages/login';
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { store } from 'Stores/index';

describe('Pages/Login test', () => {
  it('Render correctly', () => {
    const wrap = renderer
      .create(
        <Provider store={store}>
          <LoginPage />
        </Provider>,
      )
      .toJSON();
    expect(wrap).toMatchSnapshot();
  });

  // it('Should contain FormCenter Layout', () => {
  //   const wrap = shallow(<LoginPage />);
  //   expect(wrap.exists(FormCenterLayout)).toBe(true);
  // });

  // it('Should have email & password field / submit btn', () => {
  //   const wrap = shallow(<LoginPage />);
  //   const emailField = wrap.find('#email');
  //   const passwordField = wrap.find('#password');
  //   const submitButton = wrap.find('#login-btn');

  //   expect(emailField.exists()).toBe(true);
  //   expect(passwordField.exists()).toBe(true);
  //   expect(submitButton.exists()).toBe(true);
  // });

  // it('Should call onError when fill only email', () => {
  //   const onError = jest.fn(() => expect(onError).toBeCalledTimes(1));
  //   const onSubmit = jest.fn(() => expect(onSubmit).toBeCalledTimes(0));

  //   const wrap = shallow(<LoginPage onSubmit={onSubmit} onError={onError} />);
  //   const emailField = wrap.find('input[id="email"]');
  //   emailField.simulate('change', { target: { value: 'Hello@email.com' } });

  //   wrap.find('#login-btn').at(0).simulate('submit');
  // });

  // it('Should call onError when not a email', () => {
  //   const onError = jest.fn(() => expect(onError).toBeCalledTimes(1));
  //   const onSubmit = jest.fn(() => expect(onSubmit).toBeCalledTimes(0));

  //   const wrap = shallow(<LoginPage onSubmit={onSubmit} onError={onError} />);
  //   const emailField = wrap.find('input[id="email"]');
  //   emailField.simulate('change', { target: { value: 'Hello' } });

  //   wrap.find('#login-btn').at(0).simulate('submit');
  // });

  // it('Should call onSubmit when fullfill', () => {
  //   const onSubmit = jest.fn(() => expect(onSubmit).toBeCalledTimes(1));
  //   const onError = jest.fn(() => expect(onError).toBeCalledTimes(0));

  //   const wrap = shallow(<LoginPage onSubmit={onSubmit} onError={onError} />);
  //   const emailField = wrap.find('input[id="email"]');
  //   const passwordField = wrap.find('input[id="password"]');

  //   emailField.simulate('change', { target: { value: 'Hello@world.com' } });
  //   passwordField.simulate('change', { target: { value: '1234' } });

  //   wrap.find('#login-btn').at(0).simulate('submit');
  // });

  // it('Should call onSubmitOAuth and send OAuthEnum.Facebook via callback', () => {
  //   const onSumitOAuth = jest.fn((OAuth) => {
  //     expect(onSumitOAuth).toBeCalledTimes(1);
  //     expect(OAuth).toEqual(OAuthEnum.Facebook);
  //   });
  //   const wrap = shallow(<LoginPage onSubmitOAuth={onSumitOAuth} />);

  //   wrap.find('#fb-btn').at(0).simulate('click');
  // });
});
