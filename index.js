console.log("JavaScript Got Attached");
var ctr=document.getElementById('center');
var btn=document.getElementById('button');
btn.addEventListener('click',getdata);
function ourtable(yourdata){
    ctr.style.display="flex";
    var table=document.getElementById('mytable');
    for(var i=0;i<yourdata.sessions.length;i++){
        var row=`<tr>
        <td>${yourdata.sessions[i].name}</th>
        <td>
            <Address>${yourdata.sessions[i].address}</Address>
        </td>
        <td>${yourdata.sessions[i].available_capacity_dose1}</td>
        <td>${yourdata.sessions[i].available_capacity_dose2}</td>
        <td>${yourdata.sessions[i].min_age_limit} +</td>
        <td>${yourdata.sessions[i].slots.length}</td>
        <td>${yourdata.sessions[i].vaccine}</td>
    </tr> `
    table.innerHTML+=row;
    }
}
function nodata(){
   alert("No data found");
}
function getdata(e){
    e.preventDefault(); // restrict to reload the current page
    var vals = date.value.split('-'); //split is dividing date into year , month, day
        var fulldate = vals[2]+"-"+vals[1]+"-"+vals[0];

    const api=`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode.value}&date=${fulldate}`;
    fetch(api).then((response)=>response.json()).then((data)=>
    {
        if(data.sessions.length==0){
            nodata();
        }
        else{
        ourtable(data);
        }
    })
    .catch((err)=>console.error(err));
    
}