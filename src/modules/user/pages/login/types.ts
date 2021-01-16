import { FormProps } from 'antd/lib/form/Form';
import { InternalNamePath } from 'antd/lib/form/interface';

export type FormLogin = { email: string; password: string };
export type FormLoginError = {
  values: FormLogin;
  errorFields: {
    name: InternalNamePath;
    errors: string[];
  }[];
};
export type FormErrorValue = FormProps['onFinishFailed'];
export type FormFinishValue = FormProps['onFinish'];
