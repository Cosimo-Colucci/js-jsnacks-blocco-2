const array =
[
    "gino",
    "ginetta",
    "potter",
    "potteriani"
]
const { createApp } = Vue;

createApp({
    data() {
        return{
            nome: "array"
        }
    }
}).mount("#app")