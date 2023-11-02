import styled from "styled-components";

export const AppContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px ; 
`;

export const MovieContainer = styled.div`
width: 250px;    
background-color: #3b3ea1;
border-radius: 5px;
position: relative;
color: white;
height: 500px;
`;

export const MovieInfo = styled.div`

display: flex;
padding: 20px;
justify-content: space-between;
align-items: center;
`;

export const Poster = styled.img`
max-width: 100%;
`;


export const Over = styled.div`

position : absolute;
height: 100%;
top: 0; 
left :0;  
padding: 30px;
opacity: 60%;
background-color: black;
`;

export const MkTitle = styled.div`
font-size: larger;
font-weight: 400;
color: white;
`;

export const Titling = styled.h4`
margin: 0;
`;
export const Voting = styled.span`
margin-left: 3px;
`;