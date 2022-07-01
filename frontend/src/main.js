// show at client
import { createApp } from 'vue'
import App from './App.vue'
import "./assets/css/bootstrap.min.css"
// import "./assets/js/bootstrap.min"

var app = createApp(App)

// import { Database } from 'sqlite3'


// new Database("./data.db", function (e) { console.log(e) }).all('SELECT * from record', function (err, rows) {
//     console.log(rows)
// })

// console.log(database)

app.mount('#app')
app.get()