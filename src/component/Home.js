import React from "react"
import "./Home.css"
import Button from "react-bootstrap/Button"

const Home = () => {
    return (
        <>
            <div className="home">
                What we do?
            </div>
            <h1 className="home-title"> We Provide Tech <span style={{display: "block"}}>Solutions from Idea</span> <span style={{display: "block"}}>to Product.</span></h1>
            <p>
            We specialise in bridging the gap between your problems 
            <span style={{display: "block"}}>and technical solutions. Simultaneously, creating</span>
            <span style={{display: "block"}}>opportunities to utilise new technologies. Putting you </span>
            <span style={{display: "block"}}>ahead of your competition.</span>
            </p>
            <Button className="contactButton">Contact Us</Button>
        </>
        
    )
}
export default Home