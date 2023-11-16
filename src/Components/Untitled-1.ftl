<style>
#level-1{
    display:none;
    margin:5px;
    padding:5px;
}
.parent-text {
color:red;
}

.parent-div {
    border:2px solid blue;
}

.childrens {
    display:flex;
    flex-direction:column;
    margin-left:25px!important;
    padding:5px;
    margin:5px;
    border:1px dotted black;
}



</style>


<button onClick="buttonToggel()">iTalent  Community</button>

<#assign count =  rest("2.0","/search?q=" + "select count(*) from nodes where depth=1"?url).data.count/>
<#assign resp =  rest("2.0","/search?q=" + "select title,id from nodes where depth=1 limit ${count}"?url)/>


<div id="level-1">
<#list resp.data.items as items>
<div id='${items.id}' onmouseover="mouseOverFunction('${items.id}')" class="parent-div">
<div id="divpc">
   <p class="parent-text">${items.title}</p>
   </div>
   </div>
</#list>
</div>


<script>

const buttonToggel = ()  => {
    const ParentLevelDivs = document.getElementById("level-1");
    console.log(ParentLevelDivs);
    if(ParentLevelDivs.style.display === "none"){
        ParentLevelDivs.style.display = "block";
    }
    else{
        ParentLevelDivs.style.display = "none";
    }
}

const mouseOverFunction = async(id) => {
    const response = await fetch("/api/2.0/search?q=SELECT * FROM nodes WHERE parent.id='"+ id +"' ");
    const responseJson = await response.json();

    
 

    const div = document.getElementById(id);
    
    responseJson.data.items.map(eachRes => {
        console.log(eachRes.length);
        if(!document.getElementById(eachRes.id)){
            const Childs = document.createElement("div");
            Childs.setAttribute('id',eachRes.id);
            Childs.textContent = eachRes.title;
            Childs.id = eachRes.id;
            Childs.className = "childrens";
            Childs.onmouseover = function (){
                mouseOverFunction(eachRes.id);
            }
            
            div.appendChild(Childs);
        }
         
    }) 
    

}

</script>


<#--  <@liaAddScript>
(function($){
    $("#italent-community").on("click",function () {
        $(".level-1").toggle();
    })

    $("#parentId").click(async function(){
        console.log("you clicked Here");


    });

})(LITHIUM.jQuery)

</@liaAddScript>  -->

