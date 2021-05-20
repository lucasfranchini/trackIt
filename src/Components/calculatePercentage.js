export default function calculatePercentage(setPercentage,today){
    for(let i=0; i<today.length;i++){
        let newpercentage=0;
        if(today[i].done){
            newpercentage += 100/today.length;
        }
        if(i+1===today.length){
            setPercentage(newpercentage);
        }
    }
    if(today.length===0){
        setPercentage(100);
    }
}