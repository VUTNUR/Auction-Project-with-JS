/* <h1>Auction Status App</h1>
<div class="cardcontainer">
    <div class="card">
        <div class="top">
             <div class="status-top">
                <div class="status">APPROVED</div>
                <span class="caseNo"><p>S230SKAN</p></span>
             </div>
             <div class="date">MAR 24, 2023, 5:03:24PM</div>
        </div>
        <div class="bottom">
            <div class="location">
                <b>Bellenduru spike lake</b>
            </div>
            <div class="location-address">
                <P>KHB Colony, Basaveshwar Nagar, Bengaluru, Karnataka, India</P>
            </div>
            <div class="price">₹ 0</div>
        </div>
    </div>
</div> */
async function fetchData(){
    let response= await fetch("https://gauravgitacc.github.io/postAppData/auctionData.json");
    let result= await response.json();
    console.log(result);
    appendTowebPage(result)
}
fetchData();

function appendTowebPage(result){
    let h1=document.createElement("h1");
    h1.innerText="Auction Status App"
    document.body.append(h1);
    const cardcontainerDiv =document.createElement("div");
    cardcontainerDiv.className="cardcontainer"
    for(let i=0; i<result.length;i++){
        let innerhtml =`<div class="card">
        <div class="top">
             <div class="status-top">
                <div class="status ${result[i].status.toLowerCase()}">${result[i].status}</div>
                <span class="caseNo"><p>${result[i].caseNumber}</p></span>
             </div>
             <div class="date">${result[i].date}</div>
        </div>
        <div class="bottom">
            <div class="location">
                <b>${result[i].fromLocation}</b>
            </div>
            <div class="location-address">
                <P>${result[i].toLocation}</P>
            </div>
            <div class="price">${result[i].fare}</div>
        </div>
        </div>`;
        const cardDiv= document.createElement("div")
        cardDiv.className="card"
        cardDiv.innerHTML=innerhtml;
        cardDiv.addEventListener("click", ()=>{
            document.cookie=`card=${JSON.stringify(result[i])}; path=/Auction-space-project/auction.html`
            window.location.href="http://127.0.0.1:5500/Auction-space-project/auction.html"
        })
        cardcontainerDiv.append(cardDiv);
    }
    document.body.append(cardcontainerDiv)
    
    
}
