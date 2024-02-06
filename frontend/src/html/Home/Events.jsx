import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
  <div class="main-container">
      <div class="child-frame-a">
        <div class="child-frame-b">
          <div class="child-j-o-i-n">
            <div class="child-j-o-i-n-child"></div>
            <button class="communities-frame">
              <img
                class="communities-frame-child"
                alt=""
                src="./public/rectangle-25.svg"
              />

              <div class="joincom">Participate</div>
            </button>
          </div>
          <div class="triple-frame">
            <div class="triple-frame-child"></div>
            <button class="double-j-o-i-n-frame">
              <div class="double-j-o-i-n-frame-child"></div>
              <div class="join1">Participate</div>
            </button>
          </div>
        </div>
      </div>
      <div class="child-frame-a1">
        <div class="frame-parent">
          <div class="rectangle-container">
            <div class="frame-child"></div>
            <button class="rectangle-group1">
              <div class="frame-item"></div>
              <div class="join2">Participate</div>
            </button>
          </div>
          <div class="rectangle-container">
            <div class="frame-inner"></div>
            <button class="vector-parent">
              <img
                class="rectangle-icon"
                alt=""
                src="./public/rectangle-25.svg"
              />

              <div class="join3">Participate</div>
            </button>
          </div>
        </div>
      </div>
      <div class="child-frame-a2">
        <div class="frame-group">
          <button class="frame-button">
            <div class="rectangle-div"></div>
            <div class="my-communities">Already registered</div>
          </button>
          <div class="frame-div">
            <div class="frame-child1"></div>
            <button class="rectangle-parent1">
              <div class="frame-child2"></div>
              <div class="join4">Participate</div>
            </button>
          </div>
        </div>
        <div class="last-frame">
          <div class="last-frame-child"></div>
          <button class="new-frame">
            <img
              class="new-frame-child"
              alt=""
              src="./public/rectangle-25.svg"
            />

            <div class="join5">Participate</div>
          </button>
        </div>
      </div>
    </div>
  );
}
{/* <div>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
     <Card sx={{ maxWidth: 345 }}>
     <CardActionArea>
       <CardMedia
         component="img"
         height="140"
         image="/static/images/cards/contemplative-reptile.jpg"
         alt="green iguana"
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
           Lizard
         </Typography>
         <Typography variant="body2" color="text.secondary">
           Lizards are a widespread group of squamate reptiles, with over 6,000
           species, ranging across all continents except Antarctica
         </Typography>
       </CardContent>
     </CardActionArea>
     <CardActions>
       <Button size="small" color="primary">
         Share
       </Button>
     </CardActions>
   </Card>
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
    </CardActions>
  </Card>
  </div> */}

