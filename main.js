const app = new Vue({
    el: '#root',
    data:{
        emails : []
    }
})

for(let i=0;i<10;i++){
    axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(resp =>{
            var data = resp.data.response
            console.log(data);
            app.emails.push(data)
        })
}        