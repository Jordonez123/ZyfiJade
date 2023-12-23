import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import styles from './index.less';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import { log } from '@antv/g2plot/lib/utils';
import { updateLoginValues } from '../../actions';

const onFinishFailed = (errorInfo) => {
  
};
const url = "api/peopleAccount";
const url2 = 'api/login';
const url3 = 'api/peopleInfo'
const App = () => {
  const [ profile, setProfile ] = useState([]);
  const [state, setState] = useState(null);
  const [registdata, setRegistData] = useState();
  const [logindata, setLoginData] = useState();
  const clientId = '216846483540-s7p8m9tl7bjth9duhi7orcfhetk7kk78.apps.googleusercontent.com';

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = (res) => {
        setProfile(res.profileObj);
        console.log(res.profileObj);
        const isCreated = async () => {
            const response = await fetch(url3 + "/" + profile.email)
            const json = await response.json();
            console.log(json.flag);
            return json.flag;
        }
        if (isCreated() != 1101) {
          const signgoogle = async () => {
            const response = await fetch (url, {
              method: "POST",
              body: JSON.stringify({
                username: profile.email,
                password : profile.googleId,
                role : "buyer"
              }),
              headers: {
                "Content-Type": "application/json",
              },
            })
            const json = response.json();
            console.log(json);
          }
          signgoogle();
          window.location.href = '/Order'
        }
        
    };

    const onFailure = (err) => {
        console.log('failed', err);
    };

    const logOut = () => {
        setProfile(null);
    };

  
  const getFormValue = () => {
    const value = form.getFieldsValue();
    setState({
      username : value.username,
      password : value.password,
      role : value.role
    })
    console.log(state);
    const signup = async () => {
      if (state != null) {
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(state),
          headers: {
            "Content-Type": "application/json",
          },
        })
        const json = await response.json();
        // console.log(json);
        setRegistData(json.flag);
      }
      console.log(registdata)
      if (registdata == 1201) {
        window.location.href = '/Order';
      }
    }
    signup();
    
  }

  const Login = () => {
    const value = form.getFieldsValue();
    setState({
      username : value.username,
      password : value.password,
      role : value.role
    })

    const signin = async () => {
      if (state != null) {
        const response = await fetch(url2, {
          method: "POST",
          body: JSON.stringify({
            username : state.username,
            password : state.password
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
        const json = await response.json();
        console.log("this is the json: ", json);
        ;
       
        setLoginData(json.flag);
        
      }
      console.log(logindata, "logindata")
      if(logindata == 1101) {
        window.location.href = '/Order';

      }
    }
    signin();
  }

  const onFinish = (values) => {
    // setState({
    //   username : values.username,
    //   Password : values.password,
    //   role : values.role
    // })
    // executeFetch();
  };

  const [form] = Form.useForm();
  return(
  
  <>
  <Form form = {form}
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      label="Role"
      name="role"
      rules={[
      ]}
    >
      {/* <SelectWindow/> */}
      <Input />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" onClick={() => {
        Login()
        // window.location.href = '/table'
      }}>
        Sign in
      </Button>
      <Button type="primary" htmlType="submit" className={styles.signup} onClick={()=>{
        getFormValue()
        
        // window.location.href = '/login';
      }}>
       Sign up
      </Button>
    </Form.Item>
  </Form>
          <GoogleLogin
              clientId={clientId}
              buttonText="Sign in with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
              className={styles.google}
          />
          
  </>
  )
};

export default App;
