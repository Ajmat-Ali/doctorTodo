let form = document.querySelector("form")
let tbody = document.querySelector("tbody")
let ary = [];

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let name = document.getElementById("name");
    let doctorId = document.getElementById("doctor_id");
    let specialization = document.getElementById("specialization");
    let experience = document.getElementById("experience");
    let email = document.getElementById("email");
    let mobile = document.getElementById("mobile");

    let obj ={};
    obj.name = name.value;
    obj.doctorId = doctorId.value;
    obj.specialization = specialization.value;
    obj.experience = experience.value;
    obj.email = email.value;
    obj.mobile = mobile.value;
   ary.push(obj)
   function dataShow(ary){
    tbody.innerHTML=null;
        ary.map((ele,ind)=>{
            let row = document.createElement("tr");

            let tdName = document.createElement("td")
            tdName.textContent=ele.name;

            let tdDoctorId = document.createElement("td")
            tdDoctorId.textContent=ele.doctorId;

            let tdSpecialization = document.createElement("td")
            tdSpecialization.textContent=ele.specialization;

            let tdExperience = document.createElement("td")
            tdExperience.textContent=ele.experience;

            let tdEmail = document.createElement("td")
            tdEmail.textContent=ele.email;

            let tdMobile = document.createElement("td")
            tdMobile.textContent=ele.mobile;

            let tdRole = document.createElement("td")
            if(ele.experience>5){
                tdRole.textContent="Senior";
            }
            else if(ele.experience>=2 && ele.experience<=5){
                tdRole.textContent="Junior";
            }
            else{
                tdRole.textContent="Trainee";
            }


            let tdDelete = document.createElement("td")
            let deleteButton = document.createElement("button");
            deleteButton.textContent="Delete"
            deleteButton.setAttribute("data-index",ind)

            tdDelete.append(deleteButton);

            row.append(tdName,tdDoctorId,tdSpecialization,tdExperience,tdEmail,tdMobile,tdRole,tdDelete)

            tbody.append(row);
    
            deleteButton.addEventListener("click",()=>{
                console.log(ind)
                let deleteRow = deleteButton.getAttribute("data-index");
                ary.splice(deleteRow,1)
                dataShow(ary);
            })
        })
   }
   dataShow(ary);
   let filter = document.getElementById("filter");

filter.addEventListener('change',(changeElement)=>{
    let filterAry = ary.filter((ele)=>{
        return  changeElement.target.value == ele.specialization;
          
      })
      dataShow(filterAry);
})
})


