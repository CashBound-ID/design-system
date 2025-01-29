import BaseFormItem from './FormItem';
import FormItemContent from './FormItemContent';
import FormItemHelper from './FormItemHelper';
import FormItemLabel from './FormItemLabel';
import type { FormItemFnType } from './types';

// @ts-expect-error irfan@fithub.id
const FormItem: FormItemFnType = BaseFormItem;

FormItem.Content = FormItemContent;

FormItem.Helper = FormItemHelper;

FormItem.Label = FormItemLabel;

export default FormItem;
