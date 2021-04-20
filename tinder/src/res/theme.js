import { createMuiTheme } from "@material-ui/core";

const Theme = createMuiTheme({
    overrides: {
        MuiAppBar: {
            color: "white",
            elevation: 0,
        },
    },
});

export default Theme;
