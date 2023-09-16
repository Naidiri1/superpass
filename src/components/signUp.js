
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Form, Button } from "react-bootstrap";
import "./style.css";
import logo from "../assets/logo.png";


function SignUp() {
 
  return (
    <div className=" background-img d-flex justify-content-center align-items-center ">
      <Card className=" bg-dark text-white text-center  mx-5" >
        <Card.Title className="text-center ">Sign Up </Card.Title>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card.Img
            src={logo}
            style={{ width: "100%", height: "500px" , objectFit: "cover"}}
          />
        </div>
        <Form  className="w-100 mb-5">
          <Form.Group controlId="userName" className="mb-6 mx-auto">
            <Form.Label>Username</Form.Label>
            <Form.Control
              placeholder="Username..."
              name="userName"
              type="usertName"
              id="userName"
            //   onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="password" className="mb-5 mx-auto ">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              placeholder="password..."
              name="password"
              type="password"
              id="password"
            //   onChange={handleChange}
            />
          </Form.Group>

     
          <div className="d-flex justify-content-center mt-3 ">
            <Button className ="btn" variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}

export default SignUp;