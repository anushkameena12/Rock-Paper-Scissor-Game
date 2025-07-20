
        let score = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            losses: 0,
            ties: 0 
        };

        updateScoreElement();

        let isAutoPlaying = false;
        let intervalId;
        
        function autoPlay(){
            if(!isAutoPlaying) {
                intervalId = setInterval(() => {
                    const playerMove = computerPlay();
                    playGame(playerMove);     
                }, 1000);
                isAutoPlaying = true;
            }else{
                clearInterval(intervalId);
                isAutoPlaying = false;
            }
        }


        document.querySelector('.js-rock-button').
        addEventListener('click', () => {
            playGame('Rock');
        });

        document.querySelector('.js-paper-button').
        addEventListener('click', () => {
            playGame('Paper');
        });

        document.querySelector('.js-scissor-button').
        addEventListener('click', () => {
            playGame('Scissors');
        });

        document.body.addEventListener('keydown', (event) => {
            if(event.key === 'r' || event.key === 'R'){
                playGame('Rock');
            } else if(event.key === 'p' || event.key === 'P'){
                playGame('Paper');
            }else if(event.key === 's'|| event.key === 'S'){
                playGame('Scissors');
            }

        });
       



        function playGame(playerChoice){
                const computerChoice = computerPlay();
    
                let result = '';
                if(playerChoice === 'Scissors'){
                    if(computerChoice ==='Rock'){
                        result = 'You lose.';
                    }else if(computerChoice ==='Paper'){
                        result = 'You Win.';
                    }else if(computerChoice ==='Scissors'){
                        result = 'Tie.';
                    }
                } else if(playerChoice === 'Paper'){
                    
                    if(computerChoice ==='Rock'){
                        result = 'You win.';
                    }else if(computerChoice ==='Paper'){
                        result = 'Tie.';
                    }else if(computerChoice ==='Scissors'){
                        result = 'You lose.'; 
                    }
                } else if (playerChoice === 'Rock'){
                    
                    if(computerChoice ==='Rock'){
                        result = 'Tie.';
                    }else if(computerChoice ==='Paper'){
                        result = 'You lose.';
                    }else if(computerChoice ==='Scissors'){
                        result = 'You win.';
                    }
                }

                if(result == 'You win.'){
                    score.wins +=1;
                }else if(result == 'You lose.'){
                    score.losses +=1;
                }else if(result == 'Tie.'){
                    score.ties +=1;
                }
                localStorage.setItem('score', JSON.stringify(score));
                updateScoreElement();
                document.querySelector('.js-result')
                .innerHTML = result;

                document.querySelector('.js-moves').
                innerHTML = `You <img src="images/${playerChoice}-emoji.png" class="move-icon"> <img src="images/${computerChoice}-emoji.png" class="move-icon">Computer`;
            }


              


         function updateScoreElement() {
            document.querySelector('.js-score')
            .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
         }
        
        function computerPlay() {
            const randomNumber = Math.random();
            let computerChoice = '';
            if(randomNumber>=0 && randomNumber<=1/3){
                    computerChoice = 'Rock';

                }
                else if(randomNumber>1/3 && randomNumber<=2/3){
                    computerChoice = 'Paper';
                }
                else {
                    computerChoice = 'Scissors';
                }
               
                return computerChoice;


            }
            
        
        


