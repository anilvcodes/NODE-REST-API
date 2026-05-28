const express = require("express");
const cors = require("cors");
const app = express();
 
app.use(cors());
app.use(express.json());

let todos=[
 {
    id : 1,
    todos:" node learning",
    done:"true",

},
 {
    id : 2,
    todos:" docker learning",
    done:"false",

},
 {
    id : 3,
    todos:" docker learning",
    done:"false",

},
];

app.get("/todos" ,(req, res)=>{
    res.json(todos);
})


app.get("/todos/:id",(req,res)=>{
    const todo = todos.find (t=> t.id == req.params.id );



if(!todo){
    return res.status(404).json({
        msg:"todo not find"
    })
   
    
}
res.json(todo);

});

app.post("todos/",(req,res)=>{
    const{title,description}=req.body;
    if(!title || !description){
        return res.status(404).json({
            msg:" title and description are required "

        });
    }
 const newTodo={
    id:newDate(),
    title,
    description,
 }
 todos.push(newTodo);


  res.status(201).json({
    message: "Todo created successfully",
    todo: newTodo,
  });


})

app.put("todos/",(req,res)=>{
    
})


app.delete("todos/",(req,res)=>{

})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});