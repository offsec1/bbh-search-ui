import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import {Container, CssBaseline, Grid, Paper} from "@material-ui/core";
import MenuDrawer from "./components/MenuDrawer";
import Domains from "./components/Domains";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    appBarSpacer: {
        marginTop: theme.spacing(10)
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
}))

export default function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <MenuDrawer/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}>
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper classes={classes.paper}>
                                    <Domains/>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </main>
        </div>
    );
}