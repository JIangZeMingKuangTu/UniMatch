import React, { useState, Fragment } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import * as actionCreators from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./Auth.module.css";

import CheckIcon from "../../components/UI/CheckIcon/CheckIcon";

const Auth = (props) => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    if (isSignUp) {
      props.onSubmitHandler(
        {
          username: data.userName,
          password: data.password,
          highschool: data.highschool,
          dreamschool: data.dreamschool,
        },
        isSignUp
      );
    } else {
      props.onSubmitHandler(
        {
          userName: data.userName,
          password: data.password,
        },
        isSignUp
      );
    }
  };
  const [isSignUp, setIsSignUp] = useState(true);

  const signUpChangeHandler = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const onConfirmFirstLogin = () => {
    props.history.replace("/");
  };

  let signUp = null;
  if (isSignUp) {
    signUp = (
      <Fragment>
        <Controller
          as={TextField}
          placeholder="Your Highschool here"
          inputProps={{
            maxLength: 50,
            pattern: "^[A-Za-z]+$",
            title: "Only letters can be used in this field",
          }}
          required
          name="highschool"
          control={control}
          defaultValue=""
        />
        <Controller
          as={TextField}
          placeholder="Your Dreamschool here"
          inputProps={{
            maxLength: 50,
            pattern: "^[A-Za-z]+$",
            title: "Only letters can be used in this field",
          }}
          required
          name="dreamschool"
          control={control}
          defaultValue=""
        />
      </Fragment>
    );
  }

  let mainClasses = [classes.Auth, classes.AuthSignup];

  let mainForm = (
    <Fragment>
      <CheckIcon />
      <Button color="primary" variant="contained" onClick={onConfirmFirstLogin}>
        CONFIRM
      </Button>
    </Fragment>
  );

  if (!props.signUp) {
    mainClasses.pop();
    const pattern = isSignUp ? "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}" : null;
    mainForm = (
      <Fragment>
        {props.isAuth && <Redirect to="/" />}
        {props.error && <p>{props.error.message}</p>}
        {props.loading ? (
          <Spinner />
        ) : (
          <form className={classes.Form} onSubmit={handleSubmit(onSubmit)}>
            <Controller
              as={TextField}
              placeholder="Your Username here"
              inputProps={{
                maxLength: 20,
                pattern: "^[A-Za-z]+$",
                title: "Only letters can be used in this field",
              }}
              required
              name="userName"
              control={control}
              defaultValue=""
            />
            <Controller
              as={TextField}
              placeholder="Your Password here"
              type="password"
              inputProps={{
                title:
                  "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",
                pattern: pattern,
              }}
              required
              name="password"
              control={control}
              defaultValue=""
            />
            {signUp}
            <Button type="submit" color="secondary" variant="contained">
              {isSignUp ? "Sign Up" : "Login"}
            </Button>
            <Button
              color="primary"
              variant="outlined"
              onClick={signUpChangeHandler}
            >
              Switch To {isSignUp ? "Login" : "Sign Up"}
            </Button>
          </form>
        )}
      </Fragment>
    );
  }

  return (
    <Fragment>
      <div className={mainClasses.join(" ")}>
        <div className={classes.AuthCard}>
          <p>
            <strong>Welcome To UniMatch</strong>
          </p>
          {mainForm}
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToPorps = (state) => {
  return {
    isAuth: state.auth.username !== null,
    loading: state.auth.loading,
    signup: state.auth.signup,
    error: state.auth.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitHandler: (data, signup) =>
      dispatch(actionCreators.auth(data, signup)),
  };
};

export default connect(mapStateToPorps, mapDispatchToProps)(React.memo(Auth));