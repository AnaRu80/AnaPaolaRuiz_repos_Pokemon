export const getPokemonId = (url) => url.split("/")[url.split("/").length - 2]


export const getColorType = (key) => {
    switch (key) {


        case "poison":
            return "purple"
            break;

        case "fire":
            return "red"
            break;

        case "water":
            return "blue"
            break;

        case "grass":
            return "green"
            break;

        case "electric":
            return "yellow"
            break;

        default:
            return "#808080aa"
            break;
    }
}

