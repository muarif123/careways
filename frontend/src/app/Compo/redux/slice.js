"use client"

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
export const signup = createAsyncThunk('signup/api',async(obj)=>{
    var response = await axios.post('http://localhost:2000/api/signupinfo',obj)
    return response.data
})
export const login = createAsyncThunk('login/api',async(obj)=>{
    var response = await axios.post('http://localhost:2000/api/logininfo',obj)
    return response.data
})
export const uploads =createAsyncThunk('uploads/api',async(obj)=>{
    console.log(obj.formData,'product');
    var response = await axios.post('http://localhost:2000/api/productinfo',obj.formData,{
        headers:{
            Authorization:`Bearer: ${obj.token}`
        }
    })
    return response.data
})
export const getproducts = createAsyncThunk('getproducts/api',async()=>{
    var response = await axios.get('http://localhost:2000/api/getproductinfo')
    return response.data
})

export const addtocart = createAsyncThunk('addtocart/api',async(obj)=>{
    var response = await axios.post('http://localhost:2000/api/addcart',obj.item,{
       headers:{
        Authorization:`Bearer: ${obj.token}`
       }
    })
    console.log(response.data, "response.data");
    return response.data
})
export const getcart = createAsyncThunk('getcart/api',async(obj)=>{
    console.log(obj._id,'id');

    var response = await axios.get(`http://localhost:2000/api/getcartpr/${obj._id}`)
    return response.data
})
export const getcart2 = createAsyncThunk('getcart2/api',async()=>{
   

    var response = await axios.get('http://localhost:2000/api/getcartotal')
    return response.data
})
export const deletion = createAsyncThunk('deletion/api',async(obj)=>{
    console.log(obj.token,'deletion');
    var response = await axios.post(`http://localhost:2000/api/deletes/${obj.itemId}`,{},{
        headers:{
            Authorization:`Bearer: ${obj.token}`
        }
    })
    return response.data
})
export const clearcart = createAsyncThunk('clearcart/api',async(obj)=>{
    console.log('deletion');
    
    var response = await axios.get(`http://localhost:2000/api/clearcartpr/${obj._id}`)
    return response.data
    
   
})
export const  deleteprod = createAsyncThunk('deleteprod/api',async(obj)=>{
    console.log(obj.token,'deletion');
    var response = await axios.post(`http://localhost:2000/api/deleteproduc/${obj.itemid}`,{},{
        headers:{
            Authorization:`Bearer: ${obj.token}`
        }
    })
    return response.data
})
export const changer = createAsyncThunk('changer/api',async(obj)=>{
    var response = await axios.post('http://localhost:2000/api/changepas',obj.formdata,{
        headers:{
            Authorization:`Bearer: ${obj.token}`
        }
    })
    return response.data
})
export const updatepass = createAsyncThunk('updatepass/api',async(obj)=>{
    console.log(obj);
    var response = await axios.put('http://localhost:2000/api/updatepasser',obj)
    return response.data
})
export const edits = createAsyncThunk('edits/api',async(obj)=>{
    console.log(obj.formData,'tobeedit');
    var response = await axios.put(`http://localhost:2000/api/updateproduct/${obj.index}`,obj.formData,{
        headers:{
            Authorization:`Bearer: ${obj.token}`
        }
    })
    return response.data
})
export const updateimg1 = createAsyncThunk('updateimg1/api',async(obj)=>{
    console.log(obj.formData2);
 
    var response = await axios.put(`http://localhost:2000/api/updateimage1/${obj.index}`,obj.formData2,{
        headers:{
            Authorization:`Bearer: ${obj.token}`
        }
    })
    return response.data
})
export const updateimg2 = createAsyncThunk('updateimg2/api',async(obj)=>{
 
    var response = await axios.put(`http://localhost:2000/api/updateimage2/${obj.index}`,obj.formData3,{
        headers:{
            Authorization:`Bearer: ${obj.token}`
        }
    })
    return response.data
})
export const updateimg3 = createAsyncThunk('updateimg3/api',async(obj)=>{
    
    var response = await axios.put(`http://localhost:2000/api/updateimage3/${obj.index}`,obj.formData4,{
        headers:{
            Authorization:`Bearer: ${obj.token}`
        }
    })
    return response.data
})
export const getprdetail = createAsyncThunk('prdetail/api',async(index)=>{
    var response = await axios.get(`http://localhost:2000/api/getonedetail/${index}`)
    return response.data
})
export const getrelated = createAsyncThunk('getrelated/api',async(index)=>{
  
    var response = await axios.get(`http://localhost:2000/api/getcatego/${index}`)
    return response.data
})


export const searching = createAsyncThunk('searching/api',async(value)=>{
    
    var response = await axios.get(`http://localhost:2000/api/getquery/${value}`)
    console.log(response.data,'queryresulta');
    return response.data
})
export const filte = createAsyncThunk('filte/api',async(value)=>{
    console.log(value,'value');
    var response = await axios.get(`http://localhost:2000/api/getcateg/${value}`)
    console.log(response.data,'queryresulta');
    return response.data
})
export const uploadcar = createAsyncThunk('uploadcar/api',async(obj)=>{
    console.log(obj,'obj');
    var response = await axios.post('http://localhost:2000/api/sendcar',obj)
    return response.data
    

})
export const getcarousel = createAsyncThunk('getcarousel/api',async()=>{
    var response = await axios.get('http://localhost:2000/api/sendcarousels')
    return response.data
})
export const sendedcar = createAsyncThunk('sendedcar/api',async(obj)=>{
    console.log(obj,'obj');
    var response = await axios.put(`http://localhost:2000/api/geteditcar/${obj.index}`,obj.formdata)
    return response.data
    

})
export const getusersi = createAsyncThunk('getusersi/api',async()=>{
    var response = await axios.get('http://localhost:2000/api/getuserinfos')
    return response.data
})
export const updatestatus = createAsyncThunk('updatestatus/api',async(obj)=>{
    console.log(obj);
    var response = await axios.put('http://localhost:2000/api/updatestat',obj)
    return response.data
})
export const getlinks = createAsyncThunk('getlinks/api',async(obj)=>{
    console.log(obj);
    var response = await axios.post('http://localhost:2000/api/passmail',obj)
    return response.data
})

const addingslice = createSlice({
    name:'addingslice',
    initialState:{
        user:[],products:[],usercart:[],draw:false,query:[],presence:false,related:[],carfile:[],cart:[],indiv:[],lefti:false,links:[]
    },
    reducers:{
        increment:(state,action)=>{
            console.log(action.payload);
            return{
                ...state,indiv:state.indiv.map((item,index)=>item._id===action.payload?{...item,quantity:item.quantity+1}:item)
            }
        },
        decrement:(state,action)=>{
            return{
            ...state,indiv:state.indiv.map((item)=>{
                if(item._id===action.payload){
                    return{
                        ...item,quantity:item.quantity>0?item.quantity-1:0
                    }
                }
                else{
                    return item
                }
            })
               
            }
        },
        drawing:(state,action)=>{
            return{
                ...state,draw:true
            }
        },
        leftn:(state,action)=>{
            return{
                ...state,lefti:true
            }

        },
       
        rightn:(state,action)=>{
            return{
                ...state,lefti:false
            }

        },
        closing:(state,action)=>{
            return{
                ...state,draw:false
            }
        },
        sorting:(state,action)=>{
            console.log(action.payload,'payload');
            if(action.payload==='Low to high'){
                return{
                    ...state,query:state.query.slice().sort((a,b)=>a.price-b.price)
                }
            }
            if(action.payload==='High to low'){
                return{
                    ...state,query:state.query.slice().sort((a,b)=>b.price-a.price)
                }

            }
            else{
                return{
                    ...state
                }
            }
        }


    }
    ,extraReducers:(builders)=>{
        builders.addCase(signup.fulfilled,(state,action)=>{
            return{
                ...state,user:action.payload
            }
        })
        .addCase(login.fulfilled,(state,action)=>{
            return{
                ...state,user:action.payload
            }
        })
        .addCase(uploads.fulfilled,(state,action)=>{
            return{
                ...state,products:action.payload
            }
        })
        .addCase(getproducts.fulfilled,(state,action)=>{
            return{
                ...state,products:action.payload
            }
        })
        .addCase(addtocart.fulfilled,(state,action)=>{
            return{
              ...state,cart:action.payload
            }
        })
        .addCase(getlinks.fulfilled,(state,action)=>{
            return{
                ...state,links:action.payload
            }
        })
        .addCase(getcart.fulfilled,(state,action)=>{
            return{
                ...state,usercart:action.payload
            }
        })
        .addCase(clearcart.fulfilled,(state,action)=>{
            return{
                ...state,usercart:action.payload
            }
        })
        .addCase(getcart2.fulfilled,(state,action)=>{
            return{
                ...state,cart:action.payload
            }
        })
        .addCase(deletion.fulfilled,(state,action)=>{
            return{
                ...state,usercart:action.payload
            }
        })
        .addCase(deleteprod.fulfilled,(state,action)=>{
            return{
                ...state,products:action.payload
            }
        })
        .addCase(changer.fulfilled,(state,action)=>{
            return{
                ...state,user:action.payload
            }
        })
        .addCase(updatepass.fulfilled,(state,action)=>{
            return{
                ...state,user:action.payload
            }
        })
        .addCase(edits.fulfilled,(state,action)=>{
            return{
                ...state,products:action.payload
            }
        })
        .addCase(updateimg1.fulfilled,(state,action)=>{
            return{
                ...state,products:action.payload
            }
        })
        .addCase(updateimg2.fulfilled,(state,action)=>{
            return{
                ...state,products:action.payload
            }
        })
        .addCase(updateimg3.fulfilled,(state,action)=>{
            return{
                ...state,products:action.payload
            }
        })
        .addCase(getprdetail.fulfilled,(state,action)=>{
            return{
                ...state,indiv:action.payload
            }
        })
        .addCase(searching.fulfilled,(state,action)=>{
            return{
                ...state,query:action.payload
            }
        })
        .addCase(filte.fulfilled,(state,action)=>{
            if(action.payload){
                return{
                   ...state,presence:true,
                   query:action.payload
                }
            }
            else{

                return{
                    ...state,presence:false
                }
            }
        })
        .addCase(getrelated.fulfilled,(state,action)=>{
            return{
                ...state,related:action.payload
            }
        })
        .addCase(uploadcar.fulfilled,(state,action)=>{
            return{
                ...state,carfile:action.payload
            }
        })
        .addCase(getcarousel.fulfilled,(state,action)=>{
            return{
                ...state,carfile:action.payload
            }
        })
        .addCase(sendedcar.fulfilled,(state,action)=>{
            return{
                ...state,carfile:action.payload
            }
        })
        .addCase(getusersi.fulfilled,(state,action)=>{
            return{
                ...state,user:action.payload
            }
        })
        .addCase(updatestatus.fulfilled,(state,action)=>{
            return{
                ...state,cart:action.payload
            }
        })
        
       
    }
})
export const {increment,decrement,drawing,closing,sorting,leftn,rightn} = addingslice.actions
export default addingslice.reducer