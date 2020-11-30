import React from 'react';
import Button from '@material-ui/core/Button'
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from '@material-ui/core/Box';
import Copyright from "./Copyright";
import { withStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from 'react-router-dom';

const styles = {
        image:{
            margin: 0,
            backgroundImage: "url(https://mdbootstrap.com/img/Photos/Horizontal/Technology/full%20page/1.jpg)",
            backgroundRepeat:'no-repeat',
            backgroundSize: 'cover',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
        },
        textTittle:{
            textAlign: 'center',
            fontSize: '2rem',
            marginTop:'40%'
        },
        textRest:{
            textAlign: 'center',
            fontSize: '1rem',
            color: "#dc004e",
        }
    }


class Root extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.image}>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.textTittle}>
                        Привет!
                        <Box>
                            <Button className={classes.textRest} component={RouterLink} to="/login">
                                Вход
                            </Button>
                            <Button className={classes.textRest} component={RouterLink} to="/signup">
                                Регистрация
                            </Button>
                        </Box>
                        <Box mt={60}>
                            <Copyright/>
                        </Box>
                    </div>
                </Grid>
            </div>
        )
}}

export default withStyles(styles)(Root);