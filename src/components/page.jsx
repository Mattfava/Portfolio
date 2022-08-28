import React, { Component} from 'react';
import Card from "../components/card";
import Titlecard from "../components/userdescription";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import image1 from "../images/Todo.PNG";
import image2 from "../images/bingo.PNG";
import image3 from "../images/VideoEditing.PNG";
import image4 from "../images/Portfolio.PNG";

class Page extends Component{
    render(){
        return(
            <Container fluid className='container'>
            
                <Titlecard />
            
               <Row xs={1} md={2} className="g-4">
            <Card picture={image1} title="React Todo List" title1="Webapp" title2="Github" description="This is a React Todo list with the ability to add, remove, and complete tasks that you add. At the moment tasks are hard coded in and do not save changes future developments would include the ability to permanently update the list where changes save upon closing the app." link = "https://mattfava.github.io/Todo/" link2="https://github.com/Mattfava/Todo"/>
            
            <Card picture={image2} title="Zoom Bingo" title1="Webapp" title2="Github" description="This is React based Bingo game with the ability to mark and unmark the boxes. Future developments would include the ability to save and select new topics from a database." link = "https://mattfava.github.io/zoomBingo/"  link2="https://github.com/Mattfava/zoomBingo"/>

            <Card picture={image4} title="React Portfolio" title1="Webapp" title2="Github" description="The page that you are currently on below is a link to the github repository. Future developments would include adding a hover/onclick effect to each card" link = "https://mattfava.github.io/Portfolio/"  link2="https://github.com/Mattfava/Portfolio"/>

            
            </Row>
            <Row xs={1} md={2} className="g-4">
            <Card picture={image3} title="Video Editing" title1="Youtube" title2="Video"description="This is a collection of my video editing experience with more to come" link = "https://www.youtube.com/user/MrWhosFava/videos" link2="https://www.youtube.com/watch?v=BeD0M5sm4Ko&ab_channel=MattFava"/>

            <Card picture="https://via.placeholder.com/150C/O https://placeholder.com/" title="Valorant 10man wheel" title1="Website" title2="Github" description="Upcoming project that will use a react-custom-roulette wheel to select a map for a valorant custom match" link = "https://mattfava.github.io/Todo/"  link2="https://github.com/Mattfava/Todo"/>
            </Row>
            </Container>

        )
    }
}
 export default Page;