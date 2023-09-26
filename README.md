# @culur/antd-number-picker

> Ant design number picker.

[![Npm version](https://img.shields.io/npm/v/@culur/antd-number-picker.svg)](https://www.npmjs.com/package/@culur/antd-number-picker)
[![Downloads/month](https://img.shields.io/npm/dm/@culur/antd-number-picker.svg)](http://www.npmtrends.com/@culur/antd-number-picker)
[![Main](https://github.com/culur/antd-number-picker/actions/workflows/main.yml/badge.svg)](https://github.com/culur/antd-number-picker/actions/workflows/main.yml)
[![Publish](https://github.com/culur/antd-number-picker/actions/workflows/publish.yml/badge.svg)](https://github.com/culur/antd-number-picker/actions/workflows/publish.yml)
[![GitHub issues](https://img.shields.io/github/issues/culur/antd-number-picker)](https://github.com/culur/antd-number-picker/issues)

## Install

Add `@culur/antd-number-picker` dependency to your project.

```bash
# Using npm
npm install @culur/antd-number-picker

# Using yarn
yarn add @culur/antd-number-picker
```

## Usage

### Standalone

```tsx
function Example() {
  const [value, setValue] = setState(0);

  return (
    <AntdNumberPicker
      min={0}
      max={10}
      value={value}
      onChange={(value_) => setValue(value_)}
    />
  );
}
```

### Antd form

```tsx
function Example() {
  type FormValues = { number: number };
  const [form] = Form.useForm<FormValues>();

  const onFinish = (values: FormValues) => {
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
        <AntdNumberPicker min={0} max={10} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
```

## Props

| Property  | Description                                                                                                                                                                                           | Type                                                         | Default    | Required |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ---------- | -------- |
| className | InputNumber className                                                                                                                                                                                 | `string`                                                     | -          | -        |
| min       | The min value                                                                                                                                                                                         | `number`                                                     | -          | true     |
| max       | The max value                                                                                                                                                                                         | `number`                                                     | -          | true     |
| readOnly  | If readonly the input                                                                                                                                                                                 | `boolean`                                                    | false      | -        |
| placement | The position of the tooltip relative to the target, which can be one of `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | `string`                                                     | bottomLeft | -        |
| trigger   | Tooltip trigger mode. Could be multiple by passing an array                                                                                                                                           | `hover` \| `focus` \| `click` \| `contextMenu` \| `string[]` | click      | -        |
| cols      | Number of cols in popover                                                                                                                                                                             | `number`                                                     | 7          | -        |
| rows      | Number of rows in popover                                                                                                                                                                             | `number`                                                     | 7          | -        |
| value     | The current value                                                                                                                                                                                     | `number`                                                     | -          | -        |
| onChange  | The callback triggered when the value is changed                                                                                                                                                      | `function(value: number \| string \| null)`                  | -          | -        |

## License

`@culur/antd-number-picker` is released under the GNU GPLv3 license.
