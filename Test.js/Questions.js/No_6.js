secret_number = 17
guess = 0;
guess_count = 0
guess_limit = 10000;
out_of_guess = "False"

function input(guessTheDay) {
    return 0;
}

let guess;
let guess_count;
let out_of_guess;
while (guess !== "secret_word and not out_of_guess:")
    if (guess_count < guess_limit) {
        guess = input("Guess the day : ")
        guess_count += guess
    } else {
        out_of_guess = "True"
    };

if (out_of_guess)
    print("Incorrect guess")
else (
    print("correct guess")
)
