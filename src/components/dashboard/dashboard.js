import React, { Component } from 'react';
import ChatList from '../chatlist/chatlist';
import firebase from 'firebase';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import styles from './styles';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            selectedChat: null, // the index of the chat that we currently on
            newChatFormVisible: false,
            email: null,
            chats: [],
        };
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(_usr => {
            if(!_usr) {
                this.props.history.push('/Realtime-chat/login');
            }else {
                firebase
                .firestore()
                .collection('chats')
                .where('users', 'array-contains', _usr.email)
                // 當資料表更新的時候會取得更新後的資料
                .onSnapshot(res => {
                    const chats = res.docs.map(_doc => _doc.data());
                    this.setState({
                        email: _usr.email,
                        chats: chats,
                    });
                    console.log(this.state);
                })
            }   
        })
    }

    newChatBtnClicked = () => {
        this.setState({
            selectedChat: null, 
            newChatFormVisible: true,
        });
    }

    selectChat = (chatIndex) => {

    }

    signOut = () => {
        firebase.auth().signOut()
    }

    render() {
        const { classes } = this.props;
        return(
            <div>
                <ChatList 
                    history={this.props.history} 
                    newChatBtnFn={this.newChatBtnClicked}
                    selectChatFn={this.selectChat}
                    chats={this.state.chats}
                    userEmail={this.state.email}
                    selectedChatIndex={this.state.selectedChat}
                />
                <Button 
                    onClick={this.signOut} 
                    className={classes.signOutBtn}
                >
                    登出
                </Button>
            </div>
        );
    }
}

export default withStyles(styles)(Dashboard);