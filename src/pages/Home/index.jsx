import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useAuth } from "../../Hooks/useAuth";
import btn from "../../assets/button-icon.svg";
import TextField from "@material-ui/core/TextField";
import Logo from "../../components/Logo";
// import Input from "../../components/Input";
import Button from "../../components/Button";
import AuthLayout from "../../components/AuthLayout";
import { usernameRequired, passwordRequired } from "../../services/validations";
import { Container, ContainerLeft, ContainerRight } from "./styles";

export default function Home() {
  const { login } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async ({ username, password }) => {
    try {
      await login({ username, password });
    } catch (error) {
      //
    }
  };

  return (
    <AuthLayout>
      <Container>
        <ContainerLeft>
          <div>
            <Logo width={380} height={65} />
            <legend>
              Your event access <br />
              control platform
            </legend>
          </div>
        </ContainerLeft>
        <ContainerRight>
          <h1>EVENTIN</h1>
          <h2>Let’s get started!</h2>

          <Controller
            name="username"
            control={control}
            rules={{ validate: usernameRequired }}
            render={({ field }) => (
              <TextField
                error={!!errors.username}
                id="outlined-basic"
                label="Username"
                variant="outlined"
                placeholder="Type your username"
                helperText={errors.username?.message}
                margin="normal"
                style={{ width: 300 }}
                {...field}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            rules={{ validate: passwordRequired }}
            render={({ field }) => (
              <TextField
                error={!!errors.password}
                type="password"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                placeholder="Type your password"
                helperText={errors.password?.message}
                margin="normal"
                style={{ width: 300 }}
                {...field}
              />
            )}
          />

          <Button width="320px" height="50px" onClick={handleSubmit(onSubmit)}>
            <img src={btn} alt="Login" /> Login
          </Button>
        </ContainerRight>
      </Container>
    </AuthLayout>
  );
}

// {/* <Input width={300} height={100} placeholder="Username" />
// <Input width={300} height={100} placeholder="Password" /> */}
