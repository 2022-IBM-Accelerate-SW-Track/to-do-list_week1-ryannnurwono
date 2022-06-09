import React, { Component } from 'react';
import "./About.css";
import profile from "../assets/profile.jpeg";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
;

export default class About extends Component {
  render() {
    return (
      <div>
         <div>
    <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          // Image goes here
          src = {profile}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Ryan James Nurwono</div>
        <div className = "brief_description"><p>Hi! I'm a rising sophomore EECS major at UC Berkeley. Here is my ranking of the top 10 NBA players of all time.</p>
        </div>
        <div className="brief_description">
          
        
        <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>1. Michael Jordan</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>6/6 in the NBA Finals</li>
              <li>Popularized basketball internationally</li>
              <li>"You and me? For my Big Mac?"</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>2. LeBron James</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>4x NBA Champion, 4x MVP</li>
              <li>Best All Around player in NBA history</li>
              <li>"Not two, not three, not four, not five, not six, not seven"</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>3. Kareem-Abdul Jabbar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
              <li>NBA's most points scored</li>
              <li>6x NBA Champion, 6x MVP</li>
              <li>That one opponent that spams one move the whole game</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>4. Magic Johnson</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
              <li>5x NBA Champion, Finals MVP rookie year</li>
              <li>Revolutionized Lakers Showtime</li>
              <li>Biohazard near mosquitoes</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>5. Larry Bird</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
              <li>3x NBA Champion, ROTY</li>
              <li>3 consecutive MVPs</li>
              <li>"But it is a black man's game, and it will be forever."</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>6. Shaquille O'Neal</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
              <li>4x NBA Champion, 3 consecutive Finals MVPs</li>
              <li>Most Dominant NBA Player ever</li>
              <li>AKA Sha'steal YoMeal</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>7. Stephen Curry</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
              <li>3x NBA Champion</li>
              <li>Greatest Shooter Ever</li>
              <li>3-1</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>8. Bill Russell</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
              <li>11x NBA Champion</li>
              <li>22.5 RPG in his career</li>
              <li>Bro played against plumbers</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>9. Kobe Bryant</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
              <li>5x NBA Champion</li>
              <li>81 Points in a game</li>
              <li>"Just get the rebound"</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>10. Alex Caruso</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No explanation needed
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div> 
      </div>
    </div>
  </div>
  </div>
      </div>

    )
  }
}