import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import React from "react";
import "./css/homepage.css";

function Home() {
  return (
    <div className="row">
      <div className="column">
        <h2 className="home-head">Get a taste</h2>
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
      </div>
      <div className="column">
        <div>
          <h2 className="home-head2">About Me</h2>
          <p className="home-about">
            Hi my name is Dukane Golder but you can call me Duke. I currently
            live in Utah with my wife, new baby boy, and two dogs. And although
            I love Utah and all it has to offer, I still consider Idaho my
            homes. Throguhout my life not only did I have a passion for sports
            like basketball, football, and golf, but I also enjoy creating and
            building. This passion is what led me to pursue an education and
            career in Computer programming. I am hardworking, driven, and hope
            to be able to help others create their vision.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
