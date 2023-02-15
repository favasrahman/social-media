import { GoogleOutlined, LoginOutlined } from "@ant-design/icons";
import { Row, Col, Layout, Form, Input, Button, Card } from "antd";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Typography } from "antd";
import { FEED, LOGIN } from "lib/Routes";
import { useSignup } from "hooks/Auth";

const { Text } = Typography;


function Signup() {
  const { signup, isLoading } = useSignup();

  const [form] = Form.useForm();
  const [emailError, setEmailError] = useState("");
  const [size] = useState("large");

  const onFinish = async (values) => {
    console.log(values, "blddddd");
    const succeeded = await signup({
      fullname: values.fullName,
      email: values.email,
      password: values.password,
      redirectTo: FEED,
    });

    if (succeeded) form.resetFields();
  };

  const validateEmail = (rule, value) => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!value) {
      setEmailError("Please input your email");
      return Promise.reject();
    }
    if (!emailRegex.test(value)) {
      setEmailError("Invalid email address");
      return Promise.reject();
    }
    setEmailError("");
    return Promise.resolve();
  };

  return (
    <Layout className="layout">
      <Content>
        <Row
          type="flex"
          justify="center"
          align="middle"
          style={{ height: "100vh" }}
        >
          <Col>
            <Card
              className="card"
              title="Sign Up"
              headStyle={{
                textAlign: "center",
                backgroundColor: "#f5f5f5",
                fontSize: "24px",
                color: "#7d5fff",
                fontWeight: "700",
              }}
            >
              <Form
                layout="vertical"
                form={form}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                <Form.Item
                  className="formItem"
                  label="Full Name"
                  name="fullName"
                  rules={[
                    { required: true, message: "Please input your full name!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  className="formItem"
                  label="Email"
                  name="email"
                  rules={[{ required: true, validator: validateEmail }]}
                  help={emailError || ""}
                  validateStatus={emailError ? "error" : ""}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  className="formItem"
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item>
                  <Button
                    block
                    type="primary"
                    size={size}
                    htmlType="submit"
                    icon={<LoginOutlined />}
                    loading={isLoading}
                    style={{
                      backgroundColor: "#7d5fff",
                      color: "#fff",
                      marginTop: "20px",
                    }}
                  >
                    Sign up
                  </Button>
                </Form.Item>
              </Form>
              <Button
                className="googleBtn"
                block
                icon={
                  <GoogleOutlined
                    className="gIcon"
                    style={{ color: "#DB4437" }}
                  />
                }
              >
                Login with Google
              </Button>
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <Text type="secondary">Have an account?</Text>
                <Link className="link" to={LOGIN}>
                  Log in
                </Link>
              </div>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default Signup;
