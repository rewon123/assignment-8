import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    text: {
        padding: theme.spacing(2, 2, 0),
    },
    paper: {
        marginTop: 50,
        marginBottom: 50,
        paddingBottom: 50,
    },
    list: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
}));

const Comment = (props) => {
    const { comment } = props;
    const { name, body, image } = comment;

    const classes = useStyles();
    return (
        <div>
            <React.Fragment >
                <ListSubheader className={classes.subheader}>Today</ListSubheader>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar alt="Profile Picture" src={image} />
                    </ListItemAvatar>
                    <ListItemText primary={name} secondary={body} />
                </ListItem>
            </React.Fragment>

        </div>
    );
};

export default Comment;