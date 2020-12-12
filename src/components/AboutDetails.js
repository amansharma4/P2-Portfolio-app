import React from 'react'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
const AboutDetails =  () => {
    return (
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
    )
}

export default AboutDetails
