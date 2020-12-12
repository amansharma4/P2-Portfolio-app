import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    minWidth: 350,
  },
  media: {
    height: 300,
  },
});
const ProjectDetails = ({ post }) => {
  const classes = useStyles();
  return (
    <div className="about">
      <div className="card">
        <a href={post.link}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={post.imageUrl}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {post.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </a>
      </div>
    </div>
  );
};
export default ProjectDetails;
