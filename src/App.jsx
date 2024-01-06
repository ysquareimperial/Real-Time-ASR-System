import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Card, Col, Progress, Row } from "reactstrap";

function App() {
  return (
    <div className="">
      <Row style={{ height: "100vh" }} className="m-0">
        <Col md={6} style={{ borderRight: "Solid", borderColor: "#dde0e3" }}>
          <Row className="m-0">
            <h3 className="mb-3 mt-3">Choose file for transcription</h3>
            <Col md={3}>
              <Card className="p-3 menu d-flex align-items-center justify-content-center">
                Quavo 11-11.mp3
              </Card>
            </Col>
            <Col md={3}>
              <Card className="p-3 menu d-flex align-items-center justify-content-center">
                Young Thug Ecstasy.mp3
              </Card>
            </Col>
            <Col md={3}>
              <Card className="p-3 menu d-flex align-items-center justify-content-center">
                Future Worst Day.mp3
              </Card>
            </Col>
            <Col md={3}>
              <Card className="p-3 menu d-flex align-items-center justify-content-center">
                J.Cole A m a r i.mp3
              </Card>
            </Col>
            <div className="mt-3">
              <Progress animated className="my-3" value={50}>
                Extracting Audio
              </Progress>
              <Progress animated className="my-3" color="success" value={30}>
                Fetching Transcriptions
              </Progress>
            </div>
            <h6 className="mt-4 text-success">Transcription Completed</h6>
            <h6 className="">
              Use this session ID to get transcription: <b>21212</b>
            </h6>
          </Row>
        </Col>
        <Col md={6} className="p-4">
          <div className="result_div p-4">
            <h5>Transcription</h5>
            <form action="">
              <div>
                <label htmlFor="sessionID">Session ID</label>
                <input
                  type="text"
                  id="sessionID"
                  className="input"
                  placeholder="000000"
                />
              </div>
              <div className="mt-3">
                <label htmlFor="language">Choose Language</label>
                <select name="" id="language" className="input">
                  <option value="">English</option>
                  <option value="">French</option>
                  <option value="">Swahili</option>
                  <option value="">Chinese</option>
                </select>
              </div>
              <div className="mt-3">
                <button className="sub">Submit</button>
              </div>
              <h5 className="mt-3">Result</h5>
              <p>
                fasdfsdfsdk fasklfjasdkfjd fasdfasdf fasdfasd fasdfasd fasd
                fasdfsdfsdk fasklfjasdkfjd fasdfasdf fasdfasd fasdfasd
                fasdfasdfsdfsdk fasklfjasdkfjd fasdfasdf fasdfasd fasdfasd
                fasdfasdfsdfsdk fasklfjasdkfjd fasdfasdf fasdfasd fasdfasd
                fasdfasdfsdfsdk fasklfjasdkfjd fasdfasdf fasdfasd fasdfasd
                fasdfasdfsdfsdk fasklfjasdkfjd fasdfasdf fasdfasd fasdfasd fasd
              </p>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
