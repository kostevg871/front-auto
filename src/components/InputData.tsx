import { Form, InputNumber } from "antd";

interface IProps {
  label: string;
  name: string;
}

export const InputData = ({ label, name }: IProps) => {
  return (
    <Form
      name="wrap"
      labelCol={{ flex: "300px" }}
      labelAlign="left"
      labelWrap
      wrapperCol={{ flex: 2 }}
      colon={false}
      style={{ maxWidth: 1000 }}
    >
      <Form.Item label={label} name={name} rules={[{ required: true }]}>
        <InputNumber min={1} max={10} defaultValue={3} onChange={() => {}} />
      </Form.Item>
    </Form>
  );
};
