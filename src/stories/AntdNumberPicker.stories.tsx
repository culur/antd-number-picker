import { Meta, StoryFn } from '@storybook/react';
import { Button, Form } from 'antd';
import { AntdNumberPicker } from '..';

const meta: Meta<typeof AntdNumberPicker> = {
  title: 'Antd Number Picker',
  component: AntdNumberPicker,
  argTypes: {},
};
export default meta;

const TemplateStandalone: StoryFn<typeof AntdNumberPicker> = (args) => (
  <AntdNumberPicker {...args} />
);

export const Standalone = TemplateStandalone.bind({});
Standalone.args = {
  min: 1,
  max: 100,
};

const TemplateWithForm: StoryFn<typeof AntdNumberPicker> = (args) => {
  type FormValues = { number: number };
  const [form] = Form.useForm<FormValues>();

  const onFinish = (values: FormValues) => {
    // eslint-disable-next-line no-console
    console.log(`form values: ${values.number}`);
  };

  return (
    <Form
      layout="inline"
      form={form}
      onFinish={onFinish}
      initialValues={{
        number: 3,
      }}
    >
      <Form.Item name="number">
        <AntdNumberPicker {...args} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export const WithForm = TemplateWithForm.bind({});
WithForm.args = {
  min: 1,
  max: 100,
};
