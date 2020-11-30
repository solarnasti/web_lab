import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {Link as RouterLink} from "react-router-dom";
import Copyright from "./Copyright";
import {withStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";

const styles =
    {
        image: {
            margin: 0,
            backgroundImage: "url(https://mdbootstrap.com/img/Photos/Horizontal/Technology/full%20page/1.jpg)",
            backgroundRepeat:'no-repeat',
            backgroundSize: 'cover',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
        },
        paper:{
            marginTop:'5%',
            marginLeft:'10%',
            width: '80%',
            display:'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar:{
            backgroundColor: '#FFFFFF',
            color: "#dc004e",
        }
    }

class SignUp extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.image}>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Регистрация
                        </Typography>
                        <form className={classes.form} >
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
                                    <Link component={RouterLink} to="/login" variant="body2">
                                        Уже есть аккаунт? Войти
                                    </Link>
                                </Grid>
                            </Grid>
                            <Box mt={5}>
                                <Copyright />
                            </Box>
                        </form>
                    </div>
                </Grid>
            </div>
        )
    }}

export default withStyles(styles)(SignUp);