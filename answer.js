function outed(meet, boss) {
  let names = Object.keys(meet)
  let score = names.reduce((s,v) => s + meet[v], 0) + meet[boss]
  return score / names.length > 5 ? 'Nice Work Champ!' : 'Get Out Now!'
}

const outed =(meet,boss)=>{
    let totalNumbersOfPeople=Object.keys(meet).length
    let totalScore = 0
    for(let attendace in meet){
        attendace==boss ? totalScore+=meet[attendace]*2 :totalScore+=meet[attendace]
    }
    return Math.round(totalScore/totalNumbersOfPeople)>5 ? "Nice Work Champ" : "Get out now"
}
