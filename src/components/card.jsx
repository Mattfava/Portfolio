import React, { Component} from 'react';
import Card from 'react-bootstrap/Card';



class Tile extends Component{
    render(){
        return(
            
            <Card className = "card_body2" bg="light" border= "primary" style ={{width:'18rem', height:"30rem"}}>
                <Card.Img variant ="top" src={this.props.picture} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                    <Card.Link href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.title1}</Card.Link>
                    <Card.Link href={this.props.link2} target="_blank" rel="noopener noreferrer">{this.props.title2}</Card.Link>
                </Card.Body>
                </Card>

           
        )
    }
}

export default Tile;