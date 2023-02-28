
import {Tamagotchi} from './modules/tamagotchi.js'



const btn = document.getElementById('btn')
btn.addEventListener('click', (e) =>{
    e.preventDefault()
    

    let tamgo = new Tamagotchi(input, select)
    tamgo.createTamagotchi()
    
})





