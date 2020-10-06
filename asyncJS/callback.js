//Callbacks are very simple to implrment. 

const id =1 ;
getUser(id,(user)=>{
    console.log(user);
    getRepository(user.username,(repos)=>{
        console.log(repos);
        getCommits(repos[0],(commits)=>{
            console.log(commits);
        })
    })
})
function getUser(id,callback){
    console.log('fetching user.....');
    setTimeout(()=>{
        let user = {username:'Ashu',age:23};
        callback(user);
    },3000);

}
function getRepository(username,callback){
    console.log(`fetching repos for ${username}....`);
    setTimeout(()=>{
        let repos = ['repo1','repo2','repo3'];
        callback(repos);
    },2000);
}
function getCommits(repo,callback){
    console.log(`fetching commits for ${repo}...`);
    setTimeout(()=>{
        let commits = [
            {id:1234,message:"commit1"},
            {id:4567,message:"commit2"},
            {id:7890,message:"commit3"}
        ];
        callback(commits);
    },3000);
}
