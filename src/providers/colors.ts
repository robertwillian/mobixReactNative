export const getColors = (type: string) : string[] => {
    switch(type) {
        case "normal": 
            return ["#878784","#dbdbda", "#000"]

        case "fighting": 
            return ["#96140d","#ec7575", "#FFF"]

        case "flying": 
            return ["#2acce3","#2affeb", "#000"]

        case "poison": 
            return ["#800a9d","#d955da", "#FFF"]

        case "ground": 
            return ["#993808","#e8753b", "#FFF"]

        case "rock": 
            return ["#915c0c","#e8a93b", "#FFF"]

        case "bug": 
            return ["#0fb810","#2aff55","#000"]

        case "ghost": 
            return ["#460b6b","#803be8", "#FFF"]

        case "steel": 
            return ["#08442f","#3be8a9", "#FFF"]

        case "fire": 
            return ["#FF6969","#FD9E5A","#FFF"]

        case "electric": 
            return ["#a48d11","#e6f20d", "#FFF"]

        case "grass": 
            return ["#4A7B42","#7CFFD0", "#FFF"]

        case "water": 
            return ["#5F29FF","#7CC0FF", "#FFF"]

        case "psychic": 
            return ["#440812","#e83b67", "#FFF"]

        case "ice": 
            return ["#6ac4c2","#f7f7f7", "#000"]

        case "dragon": 
            return ["#040e58","#2231cb", "#FFF"]

        case "dark": 
            return ["#101011","#1e2140", "#FFF"]

        case "fairy": 
            return ["#ff3af4","#f5c7e8", "#000"]

        case "unknown": 
            return ["#CCC", "#CCC", "#000"]

        case "shadow": 
            return ["#131313","#7800d9", "#FFF"]

        default: return ["#CCC", "#CCC", "#000"]
    }
}