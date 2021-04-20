import {
    AppBar,
    Box,
    Card,
    CardContent,
    CardHeader,
    Container,
    CssBaseline,
    Grid,
    IconButton,
    Paper,
    Toolbar,
    Typography,
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
import Image from "material-ui-image";
import React from "react";
import TinderCard from "react-tinder-card";
import useStyles from "./styles";

const persons = [
    {
        name: "Elon Musk",
        imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.yPByyNzsvw5Q7rLe0lKR0gEyDL%26pid%3DApi&f=1",
    },
    {
        name: "Jeff Bezos",
        imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.WNbrzQwph77vCsHmg4Wf_wHaFj%26pid%3DApi&f=1",
    },
    {
        name: "Elon Musk",
        imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.yPByyNzsvw5Q7rLe0lKR0gEyDL%26pid%3DApi&f=1",
    },
    {
        name: "Jeff Bezos",
        imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.WNbrzQwph77vCsHmg4Wf_wHaFj%26pid%3DApi&f=1",
    },
    {
        name: "Elon Musk",
        imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.yPByyNzsvw5Q7rLe0lKR0gEyDL%26pid%3DApi&f=1",
    },
    {
        name: "Jeff Bezos",
        imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.WNbrzQwph77vCsHmg4Wf_wHaFj%26pid%3DApi&f=1",
    },
];

export default function HomePage1() {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <AppBar color="white" elevation={0} position="relative">
                <Toolbar>
                    <Grid container justify="space-between" alignItems="center">
                        <IconButton>
                            <Person />
                        </IconButton>
                        <img src="https://external-content.duckduckgo.com/ip3/tinder.com.ico" className={classes.toolbarIcon}/>
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
                        <Grid item  >
                            <IconButton className={classes.button}>
                                <Refresh />
                            </IconButton>
                        </Grid>

                        <Grid item >
                            <IconButton className={classes.button}>
                                <Cancel />
                            </IconButton>
                        </Grid>

                        <Grid item >
                            <IconButton className={classes.button}>
                                <Star />
                            </IconButton>
                        </Grid>

                        <Grid item >
                            <IconButton className={classes.button}>
                                <Favorite />
                            </IconButton>
                        </Grid>

                        <Grid item >
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
