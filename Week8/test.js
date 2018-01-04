

const newDiv = document.getElementById("output");
let responseData;


function getAllNames(user) {

var myXHR = new XMLHttpRequest();

myXHR.onreadystatechange = () => {


    if (myXHR.readyState === XMLHttpRequest.DONE && myXHR.status === 200) {

         responseData = JSON.parse(myXHR.responseText);


        console.log(responseData);

        var allNames = responseData.map(x => x.name);
       //console.log(allNames);
        
        for (let i = 0; i < allNames.length; i++) {
        }
        var forksNames = responseData.filter(value => value.forks > 0);

        var MoreThanOneForks = forksNames.map(v => v.name);
       // console.log(MoreThanOneForks);

//creating ul element 
        const newUl = document.createElement("ul");

        console.log(newDiv);
        newDiv.appendChild(newUl); 
        document.body.appendChild(newDiv);
       // console.log(newUl);


        

            for (let i = 0; i < responseData.length; i++) {

                const allData = responseData[i];
                const picOfUser = responseData[i].owner.avatar_url;
/// creating img element 
                var newImg = document.createElement("img");
                newImg.setAttribute("src", picOfUser);
               
                
              

 //creating li element
                let newLi = document.createElement("li");
//creating h2 element 
                var newH2 = document.createElement("h2");
                newLi.appendChild(newH2);

                console.log(newH2);

                newUl.appendChild(newLi);
            
                var create_An_Id_For_Li = newLi.setAttribute("id", "objId");

               document.getElementById("objId").innerHTML;
              
                newH2.innerHTML = (allData.name);

        }
        //// to print the pic out only one time 
        newDiv.appendChild(newImg);
            

        }
       
    }

    myXHR.open("GET", `https://api.github.com/users/${user}/repos`)
    myXHR.send();

}    





///// button function 

const button = document.getElementById("button");


button.onclick = event => {

    const userName = document.getElementById("input").value;

    event.preventDefault();

    getAllNames(userName);

    newDiv.innerHTML = "";      


};




