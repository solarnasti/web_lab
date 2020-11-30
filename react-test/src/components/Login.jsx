import React from 'react';
import Button from '@material-ui/core/Button'
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Link as RouterLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Copyright from "./Copyright";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import { withStyles } from "@material-ui/core/styles";

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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar:{
            backgroundColor: '#FFFFFF',
            color: "#dc004e",
        }
    }


class Login extends React.Component {
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
                            Давай войдем в систему
                        </Typography>
                        <form className={classes.form} >
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Электронная почта"
                                name="email"
                                value={this.email}
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                value={this.password}
                                label="Пароль"
                                type="password"
                                id="password"
                                autoComplete="current-password"
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
                                    <Link component={RouterLink} to="/signup" variant="body2">
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
            </div>
        )
    }
}

export default withStyles(styles)(Login);