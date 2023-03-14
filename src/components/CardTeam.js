import React from "react";
import { useParams } from "react-router-dom";
import TeamsData from "../data/TeamsData.json"

const CardTeam = () => {
  // get ID from url
  const params = useParams();
  const idTeam = params.teamId;
  const team = TeamsData[idTeam]
 
  return (
      <>
        <div className="display-data" style=
        {
          // set background colours for every club depend on colours club
          {backgroundColor: team.clubColors?.toLowerCase().includes('yellow') ? "yellow"
          : team.clubColors?.toLowerCase().includes('red') ? "red"
        : team.clubColors?.toLowerCase().includes('blue') ? "blue"
        : team.clubColors?.toLowerCase().includes('white') ? "white"
        : team.clubColors?.toLowerCase().includes('orange') ? "orange"
        : team.clubColors?.toLowerCase().includes('black') ? "black"
        : team.clubColors?.toLowerCase().includes('green') ? "green"
        : "white",
        color: team.clubColors?.toLowerCase().includes('blue') ? "white"
        : team.clubColors?.toLowerCase().includes('yellow') ? "black"
        : team.clubColors?.toLowerCase().includes('red') ? "white"
        : team.clubColors?.toLowerCase().includes('white') ? "black"
        : team.clubColors?.toLowerCase().includes('orange') ? "black"
        : team.clubColors?.toLowerCase().includes('black') ? "white"
        : team.clubColors?.toLowerCase().includes('green') ? "white"
        : "white" }}>
          <div className="main-info">
          <img src={team.crest} alt='logo' width='200px'/>
          <span className="founded-team"><br/>
          {team.founded && 'Club founded - ' + team.founded}</span>
          </div>
        <h1 className="name-team">{team.name}</h1>
        <div className="venue">{team.venue}</div>
        </div>
        </>
  );
};

export default CardTeam;