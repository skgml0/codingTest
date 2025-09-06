function solution(genres, plays) {
    let dic ={}
    
    genres.forEach((v,i) => 
       dic[v] = (dic[v] || 0) + plays[i]    
    )
    let dupDic = {}
    const bestAlbum =  genres.map((g,i) =>  ({genre: g, play:plays[i], index: i}))
    .sort((a,b) => {
        if(a.genre !== b.genre) return dic[b.genre]-dic[a.genre];
        if(a.play !== b.play) return b.play -a.play;
        return a.index - b.index
    })
    // 장르별로 최대 2곡씩 선택
    const answer = []
    const genreCount = {}
    
    for (const song of bestAlbum){
        if (genreCount[song.genre] >=2) continue;
        answer.push(song.index);
        genreCount[song.genre] = (genreCount[song.genre]||0) +1;
    }
    return answer
}