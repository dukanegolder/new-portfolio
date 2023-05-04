import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./css/portfolio.css";

function Portfolio() {
  return [
    <Row xs={1} md={2} xl={3} className="g-4">
      <Col className="cardsize">
        <a href="https://dukanegolder.github.io/weather-tracker/">
          <Card className="cards">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1560017896-a6bf1e2acfb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYXRoZXIlMjBhcHB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
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
              src="https://images.unsplash.com/photo-1570135460237-510ca82c6781?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmF6YWFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
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
                This applications acts as a text editor that runs in the browser
                that you can then install and use offline and will save your
                previous typed lines in the editor.
              </Card.Text>
            </Card.Body>
          </Card>
        </a>
      </Col>
      <Col className="cardsize">
        <a href="https://dukanegolder.github.io/weather-tracker/">
          <Card className="cards">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1560017896-a6bf1e2acfb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYXRoZXIlMjBhcHB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body className="textbody">
              <Card.Title>Weather Tracker</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </a>
      </Col>
      <Col className="cardsize">
        <a href="https://dukanegolder.github.io/weather-tracker/">
          <Card className="cards">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1560017896-a6bf1e2acfb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYXRoZXIlMjBhcHB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body className="textbody">
              <Card.Title>Weather Tracker</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </a>
      </Col>
      <Col className="cardsize">
        <a href="https://dukanegolder.github.io/weather-tracker/">
          <Card className="cards">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1560017896-a6bf1e2acfb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYXRoZXIlMjBhcHB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body className="textbody">
              <Card.Title>Weather Tracker</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </a>
      </Col>
    </Row>,
  ];
}

export default Portfolio;
