function solution(name, yearning, photo) {
    let map = new Map();
    let result =[]
    for(i=0; i<name.length; i++){
        map.set(name[i],yearning[i])
    }

    for(j=0; j<photo.length; j++){
        let sum =0
        for(z=0; z<photo[j].length; z++){    
            const value = map.get(photo[j][z]) ?? 0
            sum += value
        }
        result.push(sum)
    }
    return result
}