import React, { Component} from 'react';
import Card from 'react-bootstrap/Card';




class Block extends Component{
    render() {
        return(
            <Card className= "card_body" border= "primary" style ={{width:'40rem', height:"15rem"}}>
                <Card.Body>
                    <Card.Title >Matthew Fava</Card.Title>
                    <Card.Text>Hi my name is Matthew Fava, I am a certified Full Stack Web Developer from the Rutgers Trilogy Bootcamp. I also have a Computational Mathematics Bachelor's Degree from Kean University. I have an interest in Software Development and React Front end Development. I have experience with React, Javascript, Node, Express, Javascript, Matlab, HTML, CSS, Jquery, MySQL, Microsoft Office, and Sony Vegas for video editing.</Card.Text>
                </Card.Body>
                </Card>
        )
    }  
    
}

export default Block;