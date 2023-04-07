class Formatter {
  //add static methods here
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str){
    let regex = /[^a-zA-Z\d\s''-]/g
    if(str.match(regex)){
      return str.replace(regex, "")
    }else{
      return str
    }
  }

  static titleize(str){
    let notInclude = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "and", "from"];

    let strArr = str.split(" ");
    let strToArr = strArr.splice(1)
    const newArr = [];
    newArr.push(strArr[0].charAt(0).toUpperCase() + strArr[0].slice(1))
    strToArr.forEach(item => {
      if(item == "the"|| item == "a"|| item == "an"|| item =="but" || item =="of" || item =="and"|| item == "for"|| item =="at"|| item =="by"|| item =="and"|| item =="from"){
        newArr.push(item)
      }else{
        let capitalizeWord = item.charAt(0).toUpperCase() + item.slice(1)
        newArr.push(capitalizeWord)
      }
    });
    return newArr.join(" ")
  }
}

console.log(Formatter.capitalize("aslı"))
console.log(Formatter.sanitize("Ass&^"))
console.log(Formatter.titleize("a tale of two cities"))