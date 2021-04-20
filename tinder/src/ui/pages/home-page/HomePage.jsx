import {
    AppBar,
    Container,
    CssBaseline,
    Grid,
    IconButton,
    Toolbar,
} from "@material-ui/core";
import {
    Cancel,
    Favorite,
    FlashOn,
    Forum,
    Person,
    Refresh,
    Star,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import fetchPersons from "../../../api/fetchPersons";
import useStyles from "./styles";

export default function HomePage() {
    const classes = useStyles();

    const [persons, setPersons] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetchPersons();
            setPersons(res.data);
        })();
    }, []);

    return (
        <>
            <CssBaseline />
            <AppBar color="white" elevation={0} position="relative">
                <Toolbar>
                    <Grid container justify="space-between" alignItems="center">
                        <IconButton>
                            <Person />
                        </IconButton>
                        <img
                            src="https://external-content.duckduckgo.com/ip3/tinder.com.ico"
                            className={classes.toolbarIcon}
                        />
                        <IconButton>
                            <Forum />
                        </IconButton>
                    </Grid>
                </Toolbar>
            </AppBar>

            <main>
                <Container maxWidth="sm">
                    <Grid container justify="center" className={classes.grid}>
                        {persons.map((e) => (
                            <Grid item className={classes.gridItem}>
                                <TinderCard>
                                    <div
                                        className={classes.card}
                                        style={{
                                            backgroundImage: `url(${e.imageUrl})`,
                                        }}
                                    ></div>
                                </TinderCard>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <Container className={classes.swipeButtons}>
                    <Grid container justify="space-evenly">
                        <Grid item>
                            <IconButton className={classes.button}>
                                <Refresh />
                            </IconButton>
                        </Grid>

                        <Grid item>
                            <IconButton className={classes.button}>
                                <Cancel />
                            </IconButton>
                        </Grid>

                        <Grid item>
                            <IconButton className={classes.button}>
                                <Star />
                            </IconButton>
                        </Grid>

                        <Grid item>
                            <IconButton className={classes.button}>
                                <Favorite />
                            </IconButton>
                        </Grid>

                        <Grid item>
                            <IconButton className={classes.button}>
                                <FlashOn />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </>
    );
}
