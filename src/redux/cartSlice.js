import { createSlice } from "@reduxjs/toolkit";
import car from './../images/website/picture (3).png'
import car2 from './../images/website/picture (2).png'
import car3 from './../images/website/picture (5).png'
import car4 from './../images/website/picture (4).png'
const myData=[
    {
        id:"1",
        CarName:"Audi",
        price:5000,
        src:car,
        color:'black',
        code:"58585",
        engineCapacity:"2400"
    },
    {
        id:"2",
        CarName:"Honda",
        price:5500,
        src:car2,
        color:'grey',
        code:"26987",
        engineCapacity:"3000"

    },

    {
        id:"3",
        CarName:"Volvo",
        price:4000,
        src:car3,
        color:'wihite',
        code:"47859",
        engineCapacity:"2500"
    },
    {
        id:"4",
        CarName:"BMW",
        price:6000,
        src:car4,
        color:'black',
        code:"87965",
        engineCapacity:"2800"


    },
];
const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cars:myData,
        cartStore:[]
    },

    reducers:{
        addToCart:(state,action)=>{
            state.cartStore.push(action.payload);
            state.InCart = true
        }
    }
});
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer