import BaseFormItem from './FormItem';
import FormItemContent from './FormItemContent';
import FormItemCounter from './FormItemCounter';
import FormItemHelper from './FormItemHelper';
import FormItemLabel from './FormItemLabel';
import type { FormItemFnType } from './types';

// @ts-expect-error irfan@fithub.id
const FormItem: FormItemFnType = BaseFormItem;

FormItem.Content = FormItemContent;

FormItem.Helper = FormItemHelper;

FormItem.Label = FormItemLabel;

FormItem.Counter = FormItemCounter;

export default FormItem;
