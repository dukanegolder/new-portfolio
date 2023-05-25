import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./css/portfolio.css";

function Portfolio() {
  return [
    <div>
      <h2 className="port-header">Portfolio</h2>
      <Row xs={1} md={2} xl={3} className="g-4">
        <Col className="cardsize">
          <a href="https://dukanegolder.github.io/weather-tracker/">
            <Card className="cards">
              <Card.Img
                variant="top"
                src="https://t3.ftcdn.net/jpg/01/02/60/62/240_F_102606204_KDhMUtFiEt4BL7ejj13bk6MLSj844DGF.jpg"
                width="400"
                height="300"
              />
              <Card.Body className="textbody">
                <Card.Title>Weather Tracker</Card.Title>
                <Card.Text>
                  This project is a simple and easy to use weather tracking
                  website that takes inputs of the cities names and pulls up a
                  five day forcast of the city that was searched.
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col className="cardsize">
          <a href="https://hogar-bazaar.herokuapp.com/login">
            <Card className="cards">
              <Card.Img
                variant="top"
                src="https://t4.ftcdn.net/jpg/02/34/75/81/240_F_234758174_rSyB296IupLS5MJ0MErC2NHF4c0CvqBc.jpg"
                width="400"
                height="300"
              />
              <Card.Body className="textbody">
                <Card.Title>Hogar Bazaar</Card.Title>
                <Card.Text>
                  Hogar Bazaar is an online marketplace for home goods that is
                  designed to provide users with a platform to buy and sell new,
                  old or custom made items.
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col className="cardsize">
          <a href="https://jate-text-editor11.herokuapp.com/">
            <Card className="cards">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1625535069654-cfeb8f829088?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGV4dCUyMGVkaXRvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                width="400"
                height="300"
              />
              <Card.Body className="textbody">
                <Card.Title>Jate Text Editor</Card.Title>
                <Card.Text>
                  This applications acts as a text editor that runs in the
                  browser that you can then install and use offline and will
                  save your previous typed lines in the editor.
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col className="cardsize">
          <a href="https://dukanegolder.github.io/movie-recommender/">
            <Card className="cards">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vdmllJTIwbmlnaHR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                width="400"
                height="300"
              />
              <Card.Body className="textbody">
                <Card.Title>Movie Recommender</Card.Title>
                <Card.Text>
                  For this project, I wanted to create a user friendly website
                  that would allow a user to view top rated movies, and filter
                  genre types. The user can make a search, as well as use the
                  given genre filters to help make an advised selection.
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col className="cardsize">
          <a href="https://dukanegolder.github.io/daily-planner/">
            <Card className="cards">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1514474959185-1472d4c4e0d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGRhaWx5JTIwcGxhbm5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                width="400"
                height="300"
              />
              <Card.Body className="textbody">
                <Card.Title>Daily Planner</Card.Title>
                <Card.Text>
                  This project is to provide the user with a daily planner. The
                  planner provides the current date and time in the header. The
                  day is then divided into hour sections from 8 am to 5 pm
                  (business hours).
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col className="cardsize">
          <a href="https://pure-spire-26458.herokuapp.com/">
            <Card className="cards">
              <Card.Img
                variant="top"
                src="https://plus.unsplash.com/premium_photo-1678766594018-d6716962c79c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z29sZnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                width="400"
                height="300"
              />
              <Card.Body className="textbody">
                <Card.Title>Match Point</Card.Title>
                <Card.Text>
                  The purpose of this app is to provide a social media platform
                  for individuals who want to find pick-up games or compete in
                  competitive leagues, events, and tournaments for different
                  sports. Users can create a profile to connect with teams and
                  leagues in their desired sports.
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
      </Row>
      ,
    </div>,
  ];
}

export default Portfolio;
