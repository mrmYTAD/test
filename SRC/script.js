const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        sidebar.classList.add('opened');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        sidebar.classList.remove('opened');
        menuOpen = false;
    }
});

const searchFun = () =>{
    let filter = document.getElementById('myInput').value.toUpperCase();

    let myTable = document.getElementById('myTable');

    let tr = myTable.getElementsByTagName('tr');
    
    for(var i=0; i<tr.length; i++){

            let td = tr[i].getElementsByTagName('td')[0];

            if(td){

                let textvlue = td.textContent || td.innerHTML

                if(textvlue.toUpperCase().indexOf(filter) > -1){

                    tr[i].style.display = "";

                } else {

                    tr[i].style.display = "none";
                }
            }

    }

    }