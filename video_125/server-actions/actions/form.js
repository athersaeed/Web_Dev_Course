import fs from "fs/promises"


const submitAction = async (e) => {
    "use server"
    console.log(e.get("name"), e.get("address"))
    await fs.writeFile("ather.txt", `name is ${e.get("name")} and address is ${e.get("address")}`)
}

export default submitAction