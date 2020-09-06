import React from 'react';
import Button from '@material-ui/core/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '50px',
        maxWidth: 5000,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));
const Posts = (props) => {
    const { id, title, body } = props.posts;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div>
            <Card className={classes.root}>

                <CardHeader
                    avatar={
                        <Avatar alt="Remy Sharp" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISDxUQEBAQEBAPDw8PDw8PDw8PDw4OFRIWFhUVFRUYHSggGBolHRUVITEiJikrLi4uFx8zODMsNygtLi4BCgoKDg0OFxAQGCsfHR4rLTAtLSsrKy0tKystLSsuKysrLy0tLS0tLS0tLS0rLS0tLS0rLS03LS02KystLS0tK//AABEIAL4BCQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAADBAIFAQYHAAj/xABEEAACAQIDBAUKBAQFAgcAAAABAgADEQQSIQUxQVEGEyJhkQcUMnGBkqGxwdEVUlNyI0JighYzsvDxVJMXJENEc6LC/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECBAMFBv/EACoRAQACAgEDAwMEAwEAAAAAAAABAgMRBBIhMRNBUQUUImFxkbEyQoEj/9oADAMBAAIRAxEAPwDU6aQypMUxDqso0qaQypPIsMqwJAJJhYULM5IBBVmKw0hQIGvAF1EnlmEEJaUTCrCKswohVEANRWNqsXoxtYgxlk0WetJoIjERY9RGkVURhTYRBX7ROsrwsbxjXMAojDGWYZZmo4UXPs75RbXxpN1v7BJm2uy6033WFfHUk9Koo9shSx9F9FqoTyvY/GadiG7hfvOsq6qNe+nsubRdRzSHSmEDU0E1HZe0K1JSbhlJAAYkkEfSbBhsUK6jLoP5geB5S4lGkqSZmzncNFH1hSsNltoN0gRHpIZXs/3n5CDKw7eiPWx+X2gWiMIrJgCekSbQMQIJnIIq+I5QXXtGRimsMqyNMQ6rEBEWHVZBBDKIBkCSyySrCBYgDlieIMsnXSVOJbWOAyknB0zCS0ppDoIBIwkQGpxlIsgjCGICQiQQhUEDMIJOodJ6msHidBEaurb5BRJPB1amVGY/yqW8BCRDXtu7R/i5FOi6eo7yZVVqwYelYDee77mVWJxZZyxJsxJ7214chN68m+xqNSsKmLJXKb0KDoyis1vTJIsQLaCZ7Tru1UjfaAdg9A8RiVFQjqKR1U1B22HMLw9ssMb5N1UaVnJ9QAPgJ1StiaaIWYhVUXJJsFEpDtnC1b5KhP8AV1bhPY1rTPbJae8S1UpTxMOK7a2ccMQh4HebkX8ZHYW0LVMuliNbcxNh8o+HJUVRqtwpO/Q3sZoezH/ij1N4hSfpNOO26xLJlr02mHRbyBExhj2BffJmaIZZCq7l9R/1GCaFr8P2/UwR3RHCMWxNSMtK3EnWBpUhcxnzUwWAW7S3yxHopTjCQCRinGkwghlgUhlMAKsIIEGTBhoPV2ssoqz3aWmNfsylpm7QB2nCiDQQoEpKSRmmIukapiAGUSUwJ4xARDGKZiimHpmBrGm0Uxrw1NtIhjX1iMuzSn6V43qsKxAuXsg5anjLa81vpzrSQcmL+2xA+Zit4VXyS6PUPOUIw1CiayCmM7hs5qZ21zEtYWA0AXjN2wuzNq9YiVK4dAq9tDY0n03KwIIHfvlT5F6d1rFGC1aVbTOuZGpuo0YXB3rcEd/OdK2ljKrhqRqUqa5CKtSkj5kQjWxJ7J38JjyX1MxLfhp+MTDQX2ntGoMP1tSiaOMzrS6umqtUK3K3JuAGsTeFrbE2sSStSnlA0pl8QCe643W3X+U2vbNTBvSpUUfL1QRqOQNek6EFCtgbG4G+WNDGVmpdquiG2t8MA9j/AH2+E59UQ6zWZcX6SUMStOslRiUp2Lqar1AHKKxVS2tgdb/1TUNnP/EW+nbUE9xNj8CZ1DpjTvSdAc1yQWOhck3JM5TTOVyPyk+ImjDbcMvIp02dQoej4/OZMDgW7Ht+ev1hWM1QxSHiN4/avygmhMV6XsX/AEiDaEnCDbpVYhu1LWrulRU1MSjWDZhqI51ryGzk0lj1cnZ6KLDpALD05aB0hQYFTCAwAoMzmkAZkmIE9o1NJX4UaxjaLwWDEYk8ok5hRJWjSykcoiKII9h4AdacmtCFpiNU1iBVcLDU8LHEEKIjKPRsJSYpu1L7FtYTWsS/aMIDN5rvSprkL/T95sCGa/0jF6nqWTd0x+QvJttEUMc9FjYYhFKcP4ii9vaC3hOoYnrqQV6RprSqORXesrVGp3HZcBT2hew7hOE45CHVlJDKFZWGhVgNCDOwdBekoxGHRMVYNUUqWPoOd3H5THnr3i7fx8mvwlZ1VZV6zzzBg2v2MLUdiLHfci09s/rqlJq1d0IbN1QRDTIpjcxuTqeUtf8ADeGHaIuBrlLEqPYdJrnSrpAoPUYfWwsSNwnG+p8Q1TeGjdN+kLYd1SlkNRsxYOMwCWI3c5oFIknMd5JJ9Zj3Sy/nTZiSciXvEaO6bcdYisPLy3m1526Rsdr0FPNE/wBNvpGWlT0WxGbDgcUJU+rhLYC5miPDNPkPF+mfXbwgiYTEau37m+ZgjEqA8S3ZMqSY9tCppaIXgaywGL1taWeea7Q9ISyzGTo9jLDJBqsKonTTmKpkwYMSQgBA08WkBMPuhobVmOfWGwYimIN2j2EEQk2JKREzeMkljuGMQBjWGaAW9KM04rROkYQxSDKwggqZhDJNX7Sq2E19zrLfaZlBiMWq37WoPImPbPm5OPFqLT3NUzKTaovV9tvjCVNoN/IQO/Lr8SYu9bixuRmJOmtrznkl24fIpmmen2UWNoaKeYt9PoZ0Lyf7MFTABWF7MbeM0ytTzJTA3sDp/e0650I2f1eHA56zJyJ/HT1cFdW2q8XsqsBlWrUy8sx3RD8IyC5Gs6HUw4lRtDC5tANJj6php1E+HA+ndIri720empHsJH2lHh6nOdc6fdHaTUDUqNkKHsNxLHco53nKsRgClyDcfEeuelhvFqw8nPMUy9Mz5XvRHGZanVk+mLf3C9vhNzo+kJy/A1irg3ysCNeRGoM6bgKwcK43MA3qmisudo9wXPaPrPzMDVe2snftGVuOramMQVxNXM0jeCEYpUSYjEwouw9ctskxs7AceMsfNopk4gAJChJMJDKk6uGwAkmKcYWnJinAbK9XB4hdI/knhQvA9tZakS26WGHpkDdLqnszjaMrs3ui0OpRZTMWPKbANm909+G90eh1NfseUYw177pcfh3dI+ZEcIaLqZoHSNpFF04GFWp3GTKoNhpPPFOs7jPGrprwkiZ1G1H0kxluwN5Bv6uU1GqT8D9xLHauJzuzcybd3KVTtrbmDIl85a85ck3n3/pKrXyjvOkC9U5DxNgB+5j/AMTGIFyB/Sfh/wAxepUtTAGrMQL/AJRoNIpfQ/T6RXDE/J7AY7q69NsgqLSyqyk2zW368J1nZPSvAsg/i9Q1tUqgqB/cOyfGcewqcfX84zacr4ot5Z8n1TLiy2rXw7ku1aLC64igwPEVUP1lVtrpFhqKktWV2tpTpMHc+Gg9ZnISomCJy+2j5XP1y+vxrESc6QbZqYqpnfRAT1dMHRB9T3ymNONFZjLNNYiI1Dyr57XtNrTuZJPgqbeko9e4+Il1sbHLSC0yDlJsouSy3O8k8JXU1ub8OHfy+/tkatU7qe/i5+nOVt1plvExqVrUxoDMNb7r7hE2AY3MRwlRranN69++OIZW2/1LDU6Qh1EXptDqY1xc7hsUVMd/ERKgTMWlxeYbKiQ6JBIYZDOxJhZLJPBoRdd0AEVjmBpXnqeEZuEuNn7OIgUyglCGXDyyTAw6YLuglVDDTPm0uRg+6TGD7otn3UgwsycFeXowkkMLDY01w7N7p78L7vhNmGGmfNxA9S1j8L7pUdJ6fU0CdxfsD27/AIAzfuoE5x5TMX/FSiP5Ezt+5ibfAfGTaezLzck0wz+vZoVYxNvSHtjFUxGvU1HrE4vJxVSq+mp4ag/CAqjUf713xspp3ixnjR0Nxu1B5n/ZimX0nBtE4I/R6gvZhZNaQv2TfMuZfWN48PlBgwiXicyuskzHu9aYIk5ExsqJgqr2Un2D1mTYxeobsq8Llj7IOtK7kQqbW4W1gqt7cB8Yxl0iuIqDmPG8F07yFgzp4/OOoJX4FtN4ljTlPR8SKsMhgQJOkZS6jrJSKyUa19TqR3D0WbhLDBbJ7pe4TAKJ10qbKjC7MJ3y4wuyhylhSpAcI0kSdg0MABH6NEDhIKYQPEY4USYEAtWEFURKFtPASAqCTDiI2QJm0xnEx1ggGTIEzJqCQNQQDzNOI9Ksd12KqvwLsF/aDYfATrnSDHClhatQb1ptl/cdB8SJwnFVgDckAHiWtfxkWeV9RtM2rSP3AqmV1TVwO+/hrGqtXvuPZpKurXArakAAcTzkOOCk9/2XajhzjdeiBTOuoC/MfaU1LGC41G8cRDtjgSRmBuLbxw3Tnby9P6futL0n3SV7esTIeAzTwaU8qaz4kyGmC0EGmS0aOlhzAU7Z7ngNfV/sSVRpvPkw6LCtmxtZL00cdQr+g7Lvduag7hxIMU202cbj2y26YaYULatuO5eHt5wNZABoLTqnSzo3Qp4OviAB17uKnW1nKamoCy0qY0NwSNZy7EEW4QrOyz8e+C8VtP8ABPApp4/OPrTimzRfxPzmw7LwAqVFU7jvtbdOjbWs2nsrlkk3zcv8Oop33U71bQ+wzWto4E0qhHDge6OJd5w2rHcFZKRWSlJddpLGqYitOpDrUnZJpIVTFVqQqVIgZEkBBJUhFeSaYWTCyK1JIVRBSQEkIM1hIHECI9jm8iQYu+NtBjHQ0NmyDItFGx0E+PgFB5RcaUwgQb6lQD2KCfnackrb+bneTw9vATfPKRi79UOH8Q+3siaHcf74zlby8fkz/wC0y8mGUjX2kWBJnQ+gGLwS01oVciVsxs1VUCuSTazfe056Gm2dDui5xJ66rdaAOltDWbiB3czOGSY13d+BbP62scb38urN0cw7m70aLd7U6Z+k9/hfCf8ATYf/ALFLX4RKlmpqEpEoqiyqNVA9RldittYui1zR65OJonLU91jY+MyRlr8PqfQv53B3G9CsC3/taIPNEFM+K2lDi/JnhG1U1qf7KgYeDAzYNm9JqVbTMVfjTqKadQetTrLZMSDxErr+Jcrces/5Vif+Oa1/JcP5MQ4/fTU/EWi//hhU/wCpW3/xN951Rq3dBmuOUfqz8uX2WCf9P7c2wfkvUOrVazVEVgzUgmQOB/KWuSB6pd9IOkNXAKqLhKQoWyUTTZlp0wP5SuX0reybW2JHKV+2cFTxNFqNQdlxoeKMNzDvEXq9+87Xbi9OOYwx0y410g2u+JqtUdiFLXSmXZ1pi24X+wlBiKmnD2DdLLbOAqYes1GoLMht3MODDuIlNVUsco3sQo7ydBNldez5uIvbJPqeds7MfT2n5y+w9Y7wbEcpW4nZ3UV2pcFbs34qdRLHDrOkvSivdfYHbbro5LDv1MdxIGIW+U3tvtKvZ2DzG5Gk2ijSCraRvTTSLWjv4au2xn4SP4Q82piJC4ldR+nC6pvDh5WLVhFrzSxrJXhkqSrGIklxEBpbLVhFrSrWvJdbEelr18910rFqwq1IA/nkGMXFSS6yAZqLPIBzns0wYjhCqoi7rCO0Gxhs9NT6ZbOetTU0hmemT2bgFlI4X46CaBVRkbLUVkYcHBU+y++darjWRazLlYBgRYhgCCPVOc124ZeLW8793N9i4IVawVj2bjNblynW8NjAihEUBVACqNAAJpr9GKNJqmJV6osjMKQcdWtgTbdc6zVk6Y4mmbEI9vWvymPPhtaWzg5sPGr02j8p8y7Gu0OYjNPEqf5ZyLD+Udx6WHP9rr9RHaXlPtvw9TxQ/WZ/Qv8AD0/vME+7puJwNGqLPTB5G2o9R4RI7Kq0zfD1mIH/AKdW7D2NvE02l5VEG+jU8B956p5XFHo4aq3rKj6xxhv8CeVi9rQ3elthkNq6FP6t6H2ywXHIwuCJzVvKyjCz4dx3WB+s13aXT/W+GpPTJ3hyMngJUYLymeTi87dmq1l5xCriyveOd5yAeUWvbtU19Ycj/wDM2inRxFajTqdf1LuiuyFM+TML2BuIo4l5lX3uKIWfTbZ64rD9ag/jUQStt7pvZfqJzzoxgjVxStbsUSKjHhmHoDx19k3GlsysNGxtYg7wqU1BHtvaTweDp0VKUlyroTqSzHW5J4mbcGG1O1nl8r08uSMlY18qXpNhszCoO4N9IDZWHLm3jL+uoIIMQTDFL9WwF+BE6XifY6RHuuaCqgtxhOuvKEmrxIPqkau0Cg11nLolo66+zYM8xmmt/jU9+MGVFZRN4bIK0mK0r0qjmIVKnfNbIsUqQqtEqb98ZpuOcAaRocNFFqjnCrVEQNIYdTFEqDmIZag5xDRlTJQAfvmc8Q0ZkSYNKkYVhbhCZERsBoMydUQUUnBbFxIPLCuLiVOIqBLsxsqi5PdJV4juR6VY8JhygPaq6f2cftOcVVuZb7d2l11QtcW3KL7l4SqzDmJztO3kXyTe82/gPqxMimJPMOY8ZEsOY8ZBbmWCgg3QSZqDmPGQZxzHjA42CyReokaZhzHiIJyOY8RB3raS9FBnUN6JdQ37cwzfC87PcAWG4aD1TjDuPzDxE6vgsWHo03BHbpo3ioM7UlrpO4PO8UZtW/t+sy9Uc4s1Ua6jePkJ0dHneALyD1hzHjAGsOY8ZMrgwWlbjvRjBrDmPGV2OrC1rjxiEyVWEgkYcx4iFzDmPGCdvp7zWn+mnuLPebJ+RPcWGnpKwvNk/InurPebp+RPdWFnoALzdPyJ7qz3m6fkT3RCz0AH1CfkX3RPdQv5F90Qk9AB9Sv5V90SvxO0aKZhlzNTqUabhaZOU1HRRw19MGwlpFKmzaTP1jKS/Z1LuQMrq4sL2HaRTpvtAAHaFDKWAvYA26shtc+liN96bC3dADbeHClnU0wGVAXpEZmakKlhpwU/COHZVHMGyG4JPp1LEkudVvY61H385EbHo8A4sVIIrVwwIUoDfNe+U2vxFhwgA22nh/8A7qgIpOQzsgcAG2vZIOkiu06HFSvbqprSY/5dTq2a4Fgt7a98ar7NpOjIykrUN3HWVBnOULrY6iwGm6QfZNEm5U3zM3+ZUtdmDMLXtYsASu6+toACrtOguU5ey9U0g3VMAzhXNl07d8hGl4fEVaKtkZVuVLkdUWCp+ZiBZRv38p5tk0SLFCRnNQA1KhCOQRdBfsHtHdbnCNs+mSCQxIDC/WVO0pNyra9oXJ0NxAK9sdhAuYothmJ/8s11VVViSMtwMrKb98ap+bFGqZKarTzZy9IIUyi5uGFxprJLsiiFK5CQyujXqVGJV1VWFyb7lUd1tI0lBRmsP8xiz8cxIAO/uAgWlZXrUBRSvTpUqqVMhRlQZCjC4e4U9m3G0jWr0VzE4emyphjiVZBTYVFA1A08DxlnWwqsmTtKotYU3ekRbgChBt3RZtkUTvQ26nzfL1lUU+ptbLkDZfba8BpW0to0GKL1FNWdnDZlUKgVwl75b6lhYED2aSeJxtGmtUvhkzUQLIq026wlS4UG1g2VSSOAsY/+D0dOyxKsWualUliSD2iWu+qqbNfcJ4bGoZGplC6VCxdalSpVF2vmIzk5Scx3WgavqY/Dhqi9RTPUgX7KBncojhVFrHR11vxhBXp9m+FpjNW6hgBTLLUzW0Fu0NL35XjrbIokklPSXKRmcLbIEuFvYHKALjWw3zy7JpBlcBw1PNlPXVv5mzNm7XaJI1veAG8xpfpUv+2n2khhaf6ae4sKJmAB81p/pp7iz3mtP9NPcWGnoAHzSn+mnuL9pjzSn+nT9xftDz0AB5nT/Tp+4v2nvM6f6dP3F+0PPQAHmdL9Kn7i/ae8zpfpU/cX7Q89AP/Z" />
                    }

                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    className={classes.media}
                    image={"https://picsum.photos/800/800?random=" + id}
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {title}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <Link style={{ textDecoration: 'none' }} to={"/PostDetail/" + id}>
                        <Button variant="contained" color="primary">
                            See more
                        </Button>
                    </Link>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>details:</Typography>
                        <Typography paragraph>
                            {body}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>

        </div>
    );
};

export default Posts;