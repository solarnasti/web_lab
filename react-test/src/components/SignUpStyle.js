import React from 'react';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";

import Login from './Login';

import Copyright from './Copyright';

const theme = {
    root: {
        justifyContent: "center",
        position: "relative",
        height: '100vh'
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    avatar: {
        marginTop: "8%",
        backgroundColor: "#dc004e",
    },
    form: {
        width: '100%',
        marginTop: "4%",
    },
    submit: {
        marginTop: "2%",
    },
}

class SignUpStyle extends React.Component {
    fname
    lname
    email
    password
    render() {
        const{classes}=this.props;
        return (
            <Grid container component="main" className={classes.root}>
                <CssBaseline/>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Регистрация
                        </Typography>
                        <form className={classes.form} onSubmit={this.onSignupSubmit} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="firstName"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="Имя"
                                        autoFocus
                                        value={this.fname}
                                        onChange={this.onFirstNameChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Фамилия"
                                        name="lastName"
                                        autoComplete="lname"
                                        value={this.lname}
                                        onChange={this.onLastNameChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Электронная почта"
                                        name="email"
                                        autoComplete="email"
                                        value={this.email}
                                        onChange={this.onEmailChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Пароль"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        value={this.password}
                                        onChange={this.onPasswordChahge}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                        label="Я даю согласие на обработку персональных данных."
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={() => {
                                    alert("First Name:" + document.getElementById("firstName").value + "     Last Name:" +
                                        document.getElementById("lastName").value + "     Email:" + document.getElementById("email").value +
                                        "     Password:" + document.getElementById("password").value)
                                }}
                            >
                                Зарегистрироваться
                            </Button>
                            <Grid  container justify="flex-end">
                                <Grid item >
                                    <Link component={Login} to="/login" variant="body2">
                                        Уже есть аккаунт? Войти
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                    <Box mt={5}>
                        <Copyright/>
                    </Box>
                </Grid>
            </Grid>
        )
    }
}
export default withStyles(theme)(SignUpStyle);