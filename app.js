//var urlUsers = 'https://randomuser.me/api/?results=10';
//var urlUsers= 'https://jsonplaceholder.typicode.com/users';
var urlUsers='http://34.226.226.84:3000';

function generateUrlPostUser(){
    let cert = document.getElementById("cert").value;
    let key = document.getElementById("key").value;
    let pass = document.getElementById("pass").value;
    let urlPostUser='http://34.226.226.84:3000/api/'+cert+'/'+key+'/'+pass+'';
    return urlPostUser;
};
function generateUrlDelteUser(){
    let cert = document.getElementById("certDelete").value;
    let urlDeletetUser='http://34.226.226.84:3000/api/'+cert+'';
    return urlDeletetUser;
};
function generateUrlPutUser(){
    let cert = document.getElementById("certPut").value;
    let Newcert = document.getElementById("NewcertPut").value;
    let urlPutUser='http://34.226.226.84:3000/api/'+cert+'/'+Newcert+'';
    return urlPutUser;
}
new Vue({
    el:'#main',
    created: function(){
        //this.deleteUser();
        this.getUsers(urlUsers);
        //this.postUsers();
        //this.postUsers();
    },
    data: {
        lists: []
    },
    methods: {
        getUsers: function(urlUsers){
            this.$http.get(urlUsers).then(function(response){
                this.lists=response.data.users;
            }).catch(e=>{
                console.log(e);
            });
        },
        postUsers: function(urlPostUser){
            this.$http.post(urlPostUser).then(function(response){
                console.log(response);
            }).catch(e=>{
                console.log(e);
            });
        },
        deleteUser: function(urlDeleteUser){
            this.$http.delete(urlDeleteUser).then(function(response){
                console.log(response);
            }).catch(e=>{
                console.log(e);
            });
        },
        putUser:function(urlPutUser){
            this.$http.put(urlPutUser).then(function(response){
                console.log(response);
            }).catch(e=>{
                console.log(e);
            });
        }
    },
});