import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (

      <Card className={classes.root}  style={{marginTop:15,marginBottom: 15}}>
        <CardActionArea>
          <CardContent>
            
            <Typography gutterBottom variant="h5" component="h2">
              {props.title} 
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
              <br/>
              {props.published}
              <br/>
              {props.type}
              <br/>
              {props.active}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>

            

            <Link to="/create" > Create  </Link>

            <Link to={'/edit/'+props.id} > Edit  </Link>

            <Link to="/delete" > Delete  </Link>

        </CardActions>
      </Card>                        
      

    
  );
}
