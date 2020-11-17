class User{
    name
    win = 0
    usedTrials =0
    lose = 0
    constructor(name){
        this.name = name
    }
    getUserResult(){

    }

}
class Hangman1{
    // hello   -----  =>  --ll-
    constructor(gameWord, trials,user){
        this.gameWord = gameWord.toLowerCase().split('') 
        // hello  [h,e,l,l,o]
        this.user = user
        this.gameWordtest=[]
        this.trials = trials
        this.enteredWords = []
        this.status = 'play' 
        this.searchNum = this.gameWord.length
        this.gameWord.forEach(el=>{
            this.gameWordtest.push('-')
        })
    }
    set _gameWord(word){
        this.gameWord = word
    }
    get _gameWord(){
        return(this.gameWord)
    }
    checkLetter(guess){
        guess = guess.toLowerCase()
        const checkGuess = !this.enteredWords.includes(guess)
        if(checkGuess) {
            this.enteredWords.push(guess)
            if(this.gameWord.includes(guess)){
                this.gameWord.forEach((el, i)=>{
                    if(el == guess ){
                        //hello   --ll- 
                        this.gameWordtest[i] = guess
                        this.user.win++
                    }
                })     
            }
            else this.user.lose++
        }
        else this.status = 'char used before'
        console.log(this.gameWordtest)
    }
    getGameStatus(){

    }
}
let user = new User('marwa')
let newGame1 = new Hangman1('hello',5, user);
newGame1.checkLetter('l')

