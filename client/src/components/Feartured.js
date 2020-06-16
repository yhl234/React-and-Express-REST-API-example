import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import sky from '../images/sky.jpg';
import aurora from '../images/aurora.jpg';
import waterfall from '../images/waterfall.jpg';

const Featured = ({ className }) => (
  <section className={className}>
    <h2>Featured</h2>
    <div className="cards">
      <Card>
        <CardMedia image={sky} title="Contemplative Reptile" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Aerial tramway
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            An aerial tramway, sky tram, cable car, ropeway or aerial tram is a
            type of aerial lift which uses one or two stationary ropes for
            support while a third moving rope provides propulsion
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardMedia image={aurora} title="Contemplative Reptile" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Aurora
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            An aurora, sometimes referred to as polar lights, northern lights,
            or southern lights , is a natural light display in the Earth's sky,
            predominantly seen in the high-latitude regions.
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardMedia image={waterfall} title="Contemplative Reptile" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Waterfall
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A waterfall is an area where water flows over a vertical drop or a
            series of steep drops in the course of a stream or river. Waterfalls
            also occur where meltwater drops over the edge of a tabular iceberg
            or ice shelf.
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardMedia image={sky} title="Contemplative Reptile" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Aerial tramway
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            An aerial tramway, sky tram, cable car, ropeway or aerial tram is a
            type of aerial lift which uses one or two stationary ropes for
            support while a third moving rope provides propulsion
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardMedia image={aurora} title="Contemplative Reptile" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Aurora
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            An aurora, sometimes referred to as polar lights, northern lights,
            or southern lights , is a natural light display in the Earth's sky,
            predominantly seen in the high-latitude regions.
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardMedia image={waterfall} title="Contemplative Reptile" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Waterfall
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A waterfall is an area where water flows over a vertical drop or a
            series of steep drops in the course of a stream or river. Waterfalls
            also occur where meltwater drops over the edge of a tabular iceberg
            or ice shelf.
          </Typography>
        </CardContent>
      </Card>
    </div>
  </section>
);

Featured.propTypes = {
  className: PropTypes.string,
};

export default styled(Featured)`
  padding: 50px;
  @media only screen and (max-width: 760px) {
    padding: 20px;
  }
  .cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .MuiCard-root {
    max-width: 300px;
    margin: 10px;
  }
  .MuiCardMedia-root {
    height: 200px;
  }
`;
