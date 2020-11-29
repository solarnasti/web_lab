import React from 'react';

import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles } from "@material-ui/core/styles";

import Copyright from './Copyright';
import SignUp from "./SignUp";

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

class LoginStyle extends React.Component {
    email
    password
       render(){
        const{classes}=this.props;
        return (
            <Grid container component="main" className={classes.root} >
                <CssBaseline />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Давай войдем в систему
                        </Typography>
                        <form className={classes.form} onSubmit={this.onSigninSubmit} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Электронная почта"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={this.email}
                                onChange={this.onEmailChange}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
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
                            <Button
                                type="submit"
                                id="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={()=>{
                                    alert("Email:"+ document.getElementById("email").value +"     Password:"+ document.getElementById("password").value)}}
                            >
                                Войти
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Забыли пароль?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link component={SignUp} to="/signup" variant="body2">
                                        Нет учетной записи? Зарегистрироваться
                                    </Link>
                                </Grid>
                            </Grid>
                            <Box mt={5}>
                                <Copyright />
                            </Box>
                        </form>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(theme)(LoginStyle);