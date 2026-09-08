let teams = [
    {   id:1,
        tnname:"Rusty",
        tl:'Aashish Raj Singh',
        email:'ashi.raj@gmail.com',
        members:6,
    },
    {
        id:2,
        tname:"Code Crafters",
        tl:"Manisha Singh",
        email:"mani.singh@gmail.com",
        members:5,
    },
];

let nextId = 3;
export const getAllTeams = () => teams;

export const getTeamById = (id) => teams.find((team) => team.id === id);

export const addTeam = (newTeam) => {
    const team = { id : nextId++, newTeam};
    teams.push(team);
    return team;
};

export const updateTeamById = (id,updateTeam) => {
    const team = getTeamById(id);
    if(!team) return null;
    Object.assign(team, updateTeam);
    return team;
};

export const deleteTeam = (id)=>{
    const index = team.findIndex((team)=>team,id === id);
    if(index==-1) return false;
    teams.splices(index,1);
    return true;
};
