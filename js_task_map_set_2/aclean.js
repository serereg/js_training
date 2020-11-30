function aclean(words)
{
    let map_of_sorted_words = new Map()
    words.forEach(element => {
        let word_sorted = (Array.from(element.toLowerCase()).sort()).toString();
        map_of_sorted_words.set(word_sorted, element);
    });
    let result = Array.from(map_of_sorted_words.values()); 
    console.log(result);
    return result;
}

export {aclean}