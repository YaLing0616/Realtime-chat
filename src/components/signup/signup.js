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

const firebase = require("firebase");

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            email: null,
            password: null,
            passwordConfirmation: null,
            signupError: ''
        };
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

            case 'passwordConfirmation':
                this.setState({
                    passwordConfirmation: e.target.value,
                });
                break;
    
            default:
                break;
        }
    }

    submitSignup = (e) => {
        e.preventDefault();
        if(!this.formIsValid()) {
            this.setState({
                signupError: '密碼確認錯誤，請重新輸入！',
            });
            return;
        }

        firebase
            .auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(authRes => {
                console.log(authRes);
                const userObj = {
                    uid: authRes.user.uid,
                    email: authRes.user.email,
                };
            firebase
                .firestore()
                .collection('users')
                .doc(this.state.email)
                .set(userObj)
                .then(() => {
                    this.props.history.push('/Realtime-chat/dashboard')
                }, dbError => {
                    console.log(dbError);
                    this.setState({
                        signupError: 'Failed to add user!'
                    });
                })
            }, authError => {
                console.log(authError);
                this.setState({
                    signupError: 'Failed to add user!'
                });
            })
    }

    formIsValid = () => this.state.password === this.state.passwordConfirmation;

    render() {
        const { classes } = this.props;
        return(
            <main className={classes.main}>
                <CssBaseline></CssBaseline>
                <Paper className={classes.paper}>
                    <Typography component='h1' variant='h5'>
                        註冊!
                    </Typography>
                    <form onSubmit={(e) => this.submitSignup(e)} className={classes.form}>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='signup-email-input'>請輸入信箱</InputLabel>
                            <Input autoComplete='email' onChange={(e) => this.userTyping('email', e)} autoFocus id='signup-email-input'></Input>
                        </FormControl>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='signup-password-input'>請輸入密碼</InputLabel>
                            <Input type='password' onChange={(e) => this.userTyping('password', e)} autoFocus id='signup-password-input'></Input>
                        </FormControl>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='signup-password-confirmation-input'>再次確認密碼</InputLabel>
                            <Input type='password' onChange={(e) => this.userTyping('passwordConfirmation', e)} autoFocus id='signup-password-confirmation-input'></Input>
                        </FormControl>
                        <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>送出</Button>
                    </form>
                    {this.state.signupError
                    ?
                        <Typography className={classes.errorText}>
                            {this.state.signupError}
                        </Typography>
                    :
                        null
                    }
                    <Typography className={classes.hasAccountHeader}>已經有帳號了？</Typography>
                    <Link className={classes.logInLink} to='/Realtime-chat/login'>Login</Link>
                </Paper>
            </main>
        );
    }
}

export default withStyles(styles)(SignUp);