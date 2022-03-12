import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projects.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

AOS.init();

function Projects() {
  return (
    <div className="projects">
      <h1 className="projects__title" data-aos="fade-left" data-aos-once="true" data-aos-duration="1000">Projects</h1>
      <div className='projects__wrapper'>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea href='https://vov44er.github.io/layout_miami/index.html'>
          <CardMedia
            component="img"
            height="140"
            image="./1.png"
            alt="Miami site"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Miami Condo Kings
            </Typography>
            <Typography variant="body1" color="primary">
              Used technologies : HTML | CSS
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea href='#'>
          <CardMedia
            component="img"
            height="140"
            image="./2.png"
            alt="Portfolio web-site"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Portfolio Website
            </Typography>
            <Typography variant="body1" color="primary">
              Used technologies : React
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea href='https://vov44er.github.io/layout_dia/'>
          <CardMedia
            component="img"
            height="140"
            image="./3.png"
            alt="Dia site"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dia layout
            </Typography>
            <Typography variant="body1" color="primary">
              Used technologies : HTML | CSS
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
    </div>
  );
}

export default Projects;