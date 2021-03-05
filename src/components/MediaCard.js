import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import axios from 'axios'


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const api = axios.create({
  baseURL: 'https://pagesmanagement.azurewebsites.net/'
})




export default function MediaCard(props) {
  const classes = useStyles();
    
  // 

  function sayHello() {

    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure you want to delete this page?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            api.delete('api/ResponsivePages/'+props.id);
            
          }
        },
        {
          label: 'No'
        }
      ]
    });
    

    //
  }

  

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

            <Link to={'/edit/'+props.id} > Edit  </Link>

            <Button  onClick={sayHello}>Delete</Button>

        </CardActions>
      </Card>                        
      

    
  );
}
