import React, { Component } from "react";

import { GrFormAdd } from 'react-icons/gr';
import { BsDot } from 'react-icons/bs';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BiEditAlt } from 'react-icons/bi';



class App extends Component {
    constructor() {
        super()
        this.state = {
            value: "",
            todo: [

            ],

        }

        console.log("constructor")

    }

   
    componentDidMount() {
        this.setState({}) 
        let data = localStorage.getItem("Todo_List")
        console.log(data)

        if (data == null) {
            this.state.todo = []
        }
        else {
            this.state.todo = JSON.parse(data)
            this.setState({

            })
        }

     

    }







    handlechg = (val) => {
        this.setState({
            value: val
        })

    }


    
    setdata = () => {
        console.log(this.state.value)

        
        let obj = {
            title: this.state.value,
            s: 0
        }

        this.state.todo = [...this.state.todo, obj]

        
        localStorage.setItem("Todo_List", JSON.stringify(this.state.todo))

        this.setState({

            value: ""
        })

      

        console.log(this.state.todo)
    }

    
    edit = (ind) => {
        
        for (var i = 0; i < this.state.todo.length; i++) {
            this.state.todo[i].s = 0
        }

        this.state.todo[ind].s = 1
        

        this.setState({})



    }

    delete_data = (ind) => {
        this.state.todo.splice(ind, 1) 
        localStorage.setItem("Todo_List", JSON.stringify(this.state.todo))
        this.setState({})

    }

    
    setnewtext = (val, ind) => {
        this.state.todo[ind].title = val
        this.setState({})


    }

    update = (i) => {
        this.state.todo[i].s = 0

        localStorage.setItem("Todo_List", JSON.stringify(this.state.todo))

        this.setState({

        })
    }



    render() {
        console.log("render")

        return (
            <div style={{ textAlign: "center", backgroundColor: "gray" }}>
                <h1 style={{ display: "flex", justifyContent: "center", color: "white", backgroundColor: "brown", borderRadius: "10px" }}>  Todo List  </h1>
                <input value={this.state.value} onChange={(e) => this.handlechg(e.target.value)} type="text" />
                <button onClick={() => this.setdata()} >

                    < GrFormAdd color="red" />

                </button>

                {
                    this.state.todo.map((v, i) => {
                        return (

                            v.s == 0 ?
                               
                                <ol>

                                    <li key={i} style={{ listStyle: "none", margin: 10 + "px" }}>
                                        <i>
                                            <BsDot />
                                        </i>
                                        {v.title}

                                        <button onClick={() => this.edit(i)}>
                                            < BiEditAlt color="green"/>
                                        </button>

                                        <button onClick={() => this.delete_data(i)}  >

                                            < RiDeleteBinLine color="red" />
                                        </button>


                                    </li>
                                </ol>
                                :
                                <li key={i} style={{ listStyle: "none", margin: 12 + "px" }}>
                                    <i><BsDot /></i>
                                    <input type="text" value={v.title} onChange={(e) => this.setnewtext(e.target.value, i)} />
                                    <button onClick={() => this.update(i)}>update</button>


                                </li>




                        )
                    })
                }

            </div>
        )
    }

}

export default App
