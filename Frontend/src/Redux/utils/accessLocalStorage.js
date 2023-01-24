
const loadData=(key)=>{
    try{
        let temp=JSON.parse(localStorage.getItem(key));
        return temp;
    }
    catch(e){
        return undefined;
    }

}



const saveData=(key,data)=>{
    localStorage.setItem(key,JSON.stringify(data));
}
export {loadData,saveData}