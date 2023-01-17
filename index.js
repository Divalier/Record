function close(){
  document.getElementById("overfl").style.display="none";
  document.getElementById("addform").style.display="none";
  document.getElementById("nothing").style.display="none";
}

function add(){
  close();
  document.getElementById("overfl").style.display="block";
  document.getElementById("addform").style.display="block";
}

function closse(){
  close()
}



function exam(namee, number, amounte, categoriese, flowee, date, time, descriptione){
  let x = document.getElementById("container");
  const message =  document.createElement("div");
  message.classList.add("message");
  message.setAttribute('id', 'message')
  message.setAttribute('id', namee);
  message.setAttribute('id', number);
  message.setAttribute('id', categoriese);
  message.innerText = " i add something";
  x.appendChild(message);


  const period  =  document.createElement("div");
  period.classList.add("period");

  const datetim  =  document.createElement("div");
  datetim.classList.add("datetim");
  const datetimp =  document.createElement("p");
  datetimp.innerText= "date is " + "" + date + " time is" + time;
  datetim.appendChild(datetimp);
  period.appendChild(datetim);
  message.appendChild(period);

  const flowbr = document.createElement("div");
  flowbr.classList.add("flow")


  const  out = document.getElementById("out").innerHTML;
  const outr = document.createElement("div");
  outr.innerHTML = out;
  outr.classList.add("out");


  const inn = document.getElementById("in").innerHTML;
  const inbr = document.createElement("div");
  inbr.innerHTML = inn;
  inbr.classList.add("in");

  if (flowee == 3 ) {
    flowbr.appendChild(outr)
  }

  if (flowee == 4 ) {
    flowbr.appendChild(inbr)
  }

  period.appendChild(flowbr);





  const summary  =  document.createElement("div");
  summary.classList.add("summary");

  const tofrom  =  document.createElement("div");
  tofrom.classList.add("tofrom");

  const toto = document.createElement("div");
  toto.classList.add("toto");
  const totop = document.createElement("p");
  totop.innerText = "from:";
  toto.appendChild(totop);
  tofrom.appendChild(toto);
  summary.appendChild(tofrom);


  const name = document.createElement("div");
  name.classList.add("name");
  const namep = document.createElement("p");
  namep.innerText = namee;
  name.appendChild(namep);
  tofrom.appendChild(name);
  summary.appendChild(tofrom);




  const amount  =  document.createElement("div");
  amount.classList.add("amount");

  const amu = document.createElement("div");
  amu.classList.add("amu");
  const amup = document.createElement("p");
  amup.innerText = "amount :";
  amu.appendChild(amup);
  amount.appendChild(amu);
  summary.appendChild(amount);


  const fr = document.createElement("div");
  fr.classList.add("fr");
  const frp = document.createElement("p");
  frp.innerText = amounte;
  fr.appendChild(frp);
  amount.appendChild(fr);
  summary.appendChild(amount);


  const purpose  =  document.createElement("div");
  purpose.classList.add("purpose");
  const  purposep= document.createElement("p");
  purposep.innerText = descriptione;
  purpose.appendChild(purposep);
  summary.appendChild(purpose);


  const briefbr = document.createElement("div");
  briefbr.classList.add("brief")

  const rrcel = document.getElementById("rcell").innerHTML;
  const rrcelbr = document.createElement("div");
  rrcelbr.innerHTML = rrcel;
  rrcelbr.classList.add("Rcell");


  const tiggo = document.getElementById("tiggo").innerHTML;
  const tiggobr = document.createElement("div");
  tiggobr.innerHTML = tiggo;
  tiggobr.classList.add("airt");

  if (categoriese == 1 ) {
    briefbr.appendChild(rrcelbr)
  }

  if (categoriese == 2 ) {
    briefbr.appendChild(tiggobr)
  }



  const menus = document.getElementById("menus").innerHTML;
  const menusbr = document.createElement("div");
  menusbr.innerHTML = menus;
  menusbr.classList.add("menus")



  message.appendChild(summary);
  message.appendChild(briefbr);
  message.appendChild(menusbr);
}

function change() {
  let namee = document.forms["myForm"]["fname"].value;
  let numbere = document.forms["myForm"]["fnumber"].value;
  let amounte = document.forms["myForm"]["fmout"].value;
  let categoriese = document.forms["myForm"]["fcategories"].value;
  let flowee = document.forms["myForm"]["fflow"].value;
  let date = document.forms["myForm"]["fdate"].value;
  let time = document.forms["myForm"]["ftime"].value;
  let descriptione = document.forms["myForm"]["fdescription"].value;


  if (categoriese == 0 & flowee ==0) {
    alert( " please chose beteen MTN or Aiter")
  }
  else {
    exam( namee, numbere, amounte, categoriese, flowee, date, time, descriptione);
    close();
  }
}


function mtn(){
    document.getElementById("1").style.display= "block";
    document.getElementById("message").style.display= "none";
}


function tigo(){
    document.getElementById("2").style.display= "block";
    document.getElementById("message").style.display= "none";

}

function find(){
    document.getElementById(me).style.display= "block";
    document.getElementById("message").style.display= "none";
}


function remove(id){
  const first = id.parentElement;
  const second = first.parentElement;
  second.style.display = "none";
}

function update(id){
  confirm("This may lead to the loss of your data");
  const first = id.parentElement;
  const second = first.parentElement;
  second.style.display = "none";
  add()
}

function ex(){
  let tryme = document.getElementById("message").innerHTML;
  const remove  =  document.createElement("div");
  remove.innerHTML =tryme;
  let x = document.getElementById("container");
  x.appendChild(remove);
}

function home(){
  document.getElementById("message").style.display = "block";
}
