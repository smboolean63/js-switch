const giorno = "martedi";

switch (giorno) {
    case "lunedi":
    case "mercoledi":
    case "giovedi":
    case "venerdi":
        console.log("vado in palestra");
        break;
    case "martedi":
        console.log("vado a correre");
        break;
    default:
        console.log("guardo Netflix sul divano!");
}

if ( giorno === "lunedi" || giorno === "mercoledi" || giorno === "giovedi" || giorno === "venerdi") {
    console.log("vado in palestra");
} else if ( giorno === "martedi" ) {
    console.log("vado a correre");
} else {
    console.log("guardo Netflix sul divano!");
}