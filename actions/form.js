"use server"
import fs from "fs/promises"
//import XlSX from "xlsx"

export const submitAction = async (e) => {
    console.log(e.get("name"), e.get("add"))
    let a = await fs.appendFile("golu.txt", `Name : ${e.get("name")}\nAddress : ${e.get("add")},\nPhone : ${e.get("phone")},\nEmail: ${e.get("email")},\nPassword : ${e.get("password")}\n\n`)

    

    
}



