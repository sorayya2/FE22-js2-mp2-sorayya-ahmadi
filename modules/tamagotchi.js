class Tamagotchi {
    #hunger;
    #happiness;

    
  constructor(namn, typ) {
    this.namn = namn;
    this.typ = typ;
    this.#hunger = 10;
    this.#happiness = 10;
  }
  setHunger(updatedHungerStat) {return (this.#hunger = updatedHungerStat);
  }
  setHappiness(updatedHappynessStat) {return (this.#hunger = updatedHappinessStat);
  }


  getHunger() {return this.#hunger;
  }
  getHappiness() {return this.#happiness;
  }
  goesDownHunger() {setInterval(() => {}, 2000);
 }
 
 goesDownHappy() {setInterval(() => {}, 1000);
 }


  createTamagotchi(){
    const select = document.getElementById('select').value
    const input = document.getElementById('input').value
    const insideBtnutfodra = document.createElement('button')
    insideBtnutfodra.innerText = 'utfodra'
    const insideBtnspela = document.createElement('button')
    insideBtnspela.innerText = 'spela'
   


    let paraHappy = document.createElement("p");
    let container = document.createElement("div");
    let paraHungry = document.createElement("p");
    let name = document.createElement('h1')
    let tamgo = new Tamagotchi(input, select)
    let theHungryness = tamgo.getHunger();
    let theHappiness = tamgo.getHappiness();
    let intervalForHungryness = setInterval(function () {
      paraHungry.innerHTML = `hungrig: ${theHungryness--}`;
  
    
      if (theHungryness < 0) {
        clearInterval(intervalForHungryness)
        clearInterval(intervalForHappiness);
        const div = document.createElement('div')
        div.innerText = 'Din tamagotchi dog!'
        div.style.color = 'red'
        div.style.fontWeight = 'bold'
        div.style.fontSize = '24px'
        container.appendChild(div)
        theHungryness += 0
        insideBtnspela.disabled = true
        insideBtnutfodra.disabled = true
      }
    }, 2000);


    
    let intervalForHappiness = setInterval(function () {
        paraHappy.innerHTML = `uttråkad : ${theHappiness--}`;
    
        if (theHappiness < 0) {
          clearInterval(intervalForHappiness)
          clearInterval(intervalForHungryness);
          const div = document.createElement('div')
          div.innerText = 'Din tamagotchi är död!'
          div.style.color = 'orange'
          div.style.fontWeight = 'bold'
          div.style.fontSize = '24px'
          container.appendChild(div)
          theHappiness += 0
          insideBtnspela.disabled = true
          insideBtnutfodra.disabled = true
        }
      }, 1000);
  
      

      insideBtnspela.addEventListener('click', (e) => {
        e.preventDefault()
        if(theHappiness >= 10){
            const div = document.createElement('div')
          div.innerText = 'Din tamagotchi är Glad!'
          div.style.color = 'blue' 
          div.style.fontWeight = 'bold'
          div.style.fontSize = '24px'
          container.appendChild(div)
          theHappiness = 10
        } 
        else{theHappiness++}
    })
   
    

    insideBtnutfodra.addEventListener('click', (e) => {
        e.preventDefault()

        if(theHungryness >= 10){
            const div = document.createElement('div')
            div.innerText = 'Din tamagotchi är mätt!'
            div.style.color = 'black'
            div.style.fontWeight = 'bold'
            div.style.fontSize = '24px'
            container.appendChild(div)
            theHungryness = 10
        }
        else{theHungryness++}
    })


        if(select == 'katt'){
        name.innerText = `${input}: ${select}`
        document.body.append(container);
        const image = document.createElement('img')
        image.src  = 'https://img.freepik.com/free-vector/cute-cat-with-love-sign-hand-cartoon-illustration-animal-nature-concept-isolated-flat-cartoon-style_138676-3419.jpg?w=740&t=st=1677503141~exp=1677503741~hmac=05a3dc4cabef629609ad8072d0533b637ed5318dcd8a6e6b902415aa1103697d'
        image.style.width = '150px'
        image.style.height = '150px'
        container.append(image)
        container.append(name)
        container.append(insideBtnutfodra);
        container.append(insideBtnspela);
        container.append(paraHappy);
        container.append(paraHungry);
        container.classList.add("container");
        container.style.border = "6px solid black";
        container.style.backgroundColor = 'aquamarine'
        container.style.width = "400px";
        container.style.height = "360px";
    }
    
    
    else{
        name.innerText = `${input} : ${select}`
        document.body.append(container);
        const image = document.createElement('img')
        image.src  = 'https://img.freepik.com/free-vector/cute-teddy-bear-waving-hand-cartoon-icon-illustration_138676-2714.jpg?w=740&t=st=1677503206~exp=1677503806~hmac=1a481de153ee5147f84dbd9b4975c8b1b8d0c8740fbbd08a5767ed8df4bb80ba'
        image.style.width = '150px'
        image.style.height = '150px'
        container.append(image)
        container.append(name)
        container.append(insideBtnutfodra);
        container.append(insideBtnspela);
        container.append(paraHappy);
        container.append(paraHungry);
        container.classList.add("container2");
        container.style.border = "6px solid black";
        container.style.backgroundColor = 'rgb(248, 160, 234)'
        container.style.width = "400px";
        container.style.height = "360px";
    }

    tamgo.goesDownHunger()
    tamgo.goesDownHappy()
    console.log(tamgo)
  }
}
export { Tamagotchi };
