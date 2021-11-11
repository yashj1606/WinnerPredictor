function teamNumber(team){
    if(team==="CSK"){
        return 1;
    }
    else if(team=="MI"){
        return 2;
    }
    else if(team=="RCB"){
        return 3;
    }
    else if(team=="DC"){
        return 2;
    }
    else if(team=="KXIP"){
        return 2;
    }
    else if(team=="RR"){
        return 2;
    }
    else if(team=="KKR"){
        return 2;
    }
    else if(team=="SRH"){
        return 2;
    }
};

function placeNumber(place){
    if(place==="Chennai"){
        return 1;
    }
    else if(place === "Mumbai"){
        return 2;
    }
    else if(place === "Bengaluru"){
        return 3;
    }
    else if(place === "Delhi"){
        return 4;
    }
    else if(place === "Dharamsala"){
        return 5;
    }
    else if(place === "Jaipur"){
        return 6;
    }
    else if(place === "Kolkata"){
        return 7;
    }
    else if(place === "Hyderabad"){
        return 8;
    }
}

function home_advantage(place){
    if(place==="Chennai"){
        return 10;
    }
    else if(place === "Mumbai"){
        return 7;
    }
    else if(place === "Bengaluru"){
        return 5;
    }
    else if(place === "Delhi"){
        return 4;
    }
    else if(place === "Dharamsala"){
        return 3;
    }
    else if(place === "Jaipur"){
        return 7;
    }
    else if(place === "Kolkata"){
        return 6;
    }
    else if(place === "Hyderabad"){
        return 5;
    }
}

function teamName(number){
    if(number===1){
        return "CSK";
    }
    else if(number===2){
        return "MI";
    }
    else if(number===3){
        return "RCB";
    }
    else if(number===4){
        return "DC";
    }
    else if(number===5){
        return "KXIP";
    }
    else if(number===6){
        return "RR";
    }
    else if(number===7){
        return "KKR";
    }
    else if(number===8){
        return "SRH";
    }
}

var prediction_array= [
    [0, 0.7, 0.8, 0.75, 0.85, 0.52, 0.56, 0.9 ],
    [0.3, 0, 0.65, 0.57, 0.67, 0.7, 0.8, 0.3],
    [0.2, 0.35, 0, 0.51, 0.56, 0.8, 0.54, 0.67],
    [0.25, 0.43, 0.49, 0, 0.63, 0.59, 0.78, 0.43],
    [0.15, 0.33, 0.44, 0.37, 0, 0.67, 0.47, 0.23],
    [0.48, 0.3, 0.2, 0.41, 0.33, 0, 0.56, 0.34],
    [0.44, 0.2, 0.46, 0.22, 0.53, 0.44, 0, 0.73],
    [0.1, 0.7, 0.33, 0.57, 0.77, 0.66, 0.27, 0]
]

function output(final_result){
    if(final_result.style.visibility === "hidden"){
        final_result.style.visibility="visible";
    }
}

function predict() {
    var team1= document.getElementById("team1").value;
    var team2=document.getElementById("team2").value;
    var place=document.getElementById("place").value;
    var final_result=document.getElementById("final-result");
    var a1=document.getElementById("winning-team");
    var b1=document.getElementById("winning-percentage");

    if(final_result.style.visibility === "visible"){
        final_result.style.visibility="hidden";
    }

    if(team1===team2)
    {
        alert("Both the teams cannot be same");
        return;
    }

    var winning_team,winning_percentage;
    var n=teamNumber(team1)-1,m=teamNumber(team2)-1;
    var t1_winning=prediction_array[n][m]*100,t2_winning=prediction_array[m][n]*100;
    var placeNum=placeNumber(place)-1;
    if(placeNum===n || placeNum===m){
        if(placeNum===n){
            var home_adv= home_advantage(place);
            t1_winning=t1_winning+(home_adv*t1_winning)/100;
        }
        else{
            var home_adv=home_advantage(place);
            t2_winning=t2_winning+(home_adv*t2_winning)/100;
        }
    }
    winning_percentage=Math.max(t1_winning,t2_winning);
    if(t1_winning>t2_winning)
    {
        winning_team=teamName(n+1);
    }
    else
    {
        winning_team=teamName(m+1);
    }

    a1.innerHTML = winning_team;
    b1.innerHTML = winning_percentage;

    setTimeout(output,2000,final_result);

}