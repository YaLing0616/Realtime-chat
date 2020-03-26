import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from './styles';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: null,
            password: null,
            LoginError: ''
        };
    }

    submitLogin = (e) => {
        e.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.props.history.push('/Realtime-chat/dashboard');
            }, err => {
                switch (err.code) {
                    case 'auth/wrong-password':
                        this.setState({
                            LoginError: '密碼輸入錯誤！',
                        });
                        break;

                    case 'auth/invalid-email':
                        this.setState({
                            LoginError: '信箱格式輸入錯誤！',
                        });
                        break;
                    
                    case 'auth/user-not-found':
                        this.setState({
                            LoginError: '此信箱尚未註冊！',
                        });
                        break;
                
                    default:
                        break;
                }
                console.log(err);
            });
    }

    userTyping = (type, e) => {
        switch (type) {
            case 'email':
                this.setState({
                    email: e.target.value,
                });
                break;

            case 'password':
                this.setState({
                    password: e.target.value,
                });
                break;

            default:
                break;
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <main className={classes.main}>
                <CssBaseline></CssBaseline>
                <Paper className={classes.paper}>
                    <Typography component='h1' variant='h5'>
                        登入！
                    </Typography>
                    <form onSubmit={(e) => this.submitLogin(e)} className={classes.form}>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='login-email-input'>請輸入信箱</InputLabel>
                            <Input autoComplete='email' onChange={(e) => this.userTyping('email', e)} autoFocus id='login-email-input'></Input>
                        </FormControl>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='login-password-input'>請輸入密碼</InputLabel>
                            <Input type='password' onChange={(e) => this.userTyping('password', e)} id='login-password-input'></Input>
                        </FormControl>
                        <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>登入</Button>
                    </form>
                    {this.state.LoginError
                        ?
                        <Typography className={classes.errorText}>
                            {this.state.LoginError}
                        </Typography>
                        :
                        null
                    }
                    <Typography className={classes.noAccountHeader}>還沒有帳號？</Typography>
                    <Link className={classes.signUpLink} to='/Realtime-chat/signup'>馬上去註冊</Link>
                </Paper>
            </main>
        );
    }
}

export default withStyles(styles)(Login);