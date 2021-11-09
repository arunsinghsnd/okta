import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { CardActionArea } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    marginTop: 40,
    borderRadius: 20,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 3,
  },
  // contnet: {
  //   backgroundColor: "#c1e3e8",
  // },
});

const CardPreview = props => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={4}
      style={{ paddingLeft: "40px", paddingRight: "40px", marginTop: "10px" }}
      justify="center"
    >
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent className={classes.contnet}>
              <Typography variant="h5" component="h2" gutterBottom>
                OKTA URI
              </Typography>
              <LinkIcon style={{ fontSize: "50px" }} />

              <Typography className={classes.pos} color="textSecondary">
                URL:
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                https://arunkumarsingh.me
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {props.engine}
              </Typography>
            </CardContent>
            {/* <CardActions>
              <Button size="small">View More</Button>
            </CardActions> */}
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent className={classes.contnet}>
              <Typography variant="h5" component="h2" gutterBottom>
                OKTA URI
              </Typography>
              <LinkIcon style={{ fontSize: "50px" }} />

              <Typography className={classes.pos} color="textSecondary">
                URL:
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                https://arunkumarsingh.me
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {props.engine}
              </Typography>
            </CardContent>
            {/* <CardActions>
              <Button size="small">View More</Button>
            </CardActions> */}
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent className={classes.contnet}>
              <Typography variant="h5" component="h2" gutterBottom>
                OKTA URI
              </Typography>
              <LinkIcon style={{ fontSize: "50px" }} />

              <Typography className={classes.pos} color="textSecondary">
                URL:
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                https://arunkumarsingh.me
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {props.engine}
              </Typography>
            </CardContent>
            {/* <CardActions>
              <Button size="small">View More</Button>
            </CardActions> */}
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CardPreview;
