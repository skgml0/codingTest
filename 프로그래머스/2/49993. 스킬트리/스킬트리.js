function solution(skill, skill_trees) {
    let count = 0;
    for(const arr of skill_trees){
        const validation = arr.split("").filter(alphabet => skill.includes(alphabet)).join('');
        console.log(skill.indexOf(validation,'skill.indexOf(validation'))
        if(skill.indexOf(validation)===0) {
            count+=1}
      }
    return count
}