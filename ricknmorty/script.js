document.querySelector("button").addEventListener("click",result)

var container = document.createElement("div");
container.className="container";

var row=document.createElement("div");
row.className="row";

async function result(){
    try {
        row.innerHTML="";
        var ask = document.getElementById("Shows").value; 
        var data1 = await fetch(`https://rickandmortyapi.com/api/character`);
        var res = await data1.json();
        var ag = {};
        res.results.forEach(agent => {
            ag[agent.name] = agent.id;
        });
        var data2=await fetch(`https://rickandmortyapi.com/api/character/${ag[ask]}`)
        var res2=await data2.json();
        var col= document.createElement("div");
        col.className='col-lg-4';
        col.innerHTML=`<div class="card" style="width: 20rem;">
        <img class="card-img-top" src="${res2.image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title" style="text-align:center;"><b>${res2.name}</b></h5>
          <h6 class="card-text" style="text-align:center;">${res2.species} (${res2.gender})</h6><br>
          <p class="card-text" style="text-align:justify;"><b>Status: </b>${res2.status}</p> 
          <p class="card-text" style="text-align:justify;"><b>Origin: </b>${res2.origin.name}</p>
          <p class="card-text" style="text-align:justify;"><b>Location: </b>${res2.location.name}</p> 
        </div>
        </div>`;
        row.append(col);
        container.append(row);
        document.body.append(container);
    } 
    
    catch (error) {
        console.log(error);
    }
}
