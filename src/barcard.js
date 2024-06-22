import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function BarCard(props) {
    const [expanded, setExpanded] = React.useState(false);
    console.log(`Initializing barcard with propsp ${JSON.stringify(props)}`)
    const onClick = () => {
        setExpanded((prev) => !prev);
    };

    return (
    <Card sx={{margin: 1}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {props.location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.rating}⭐ ({props.ratingCount})
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={onClick}>
          View
        </Button>
      </CardActions>
      <div>
          <Collapse in={expanded}>
              <p>{props.description}</p>
          </Collapse>
          <Collapse in={expanded} collapsedSize={0}></Collapse>
      </div>
    </Card>
  );
}