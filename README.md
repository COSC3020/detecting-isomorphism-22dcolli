# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Plagarism Statement

All exercises must contain the following statement:
“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”

## Note
I did not complete this excersise last semester, so I am attempting this completely from scratch. Ended up needing replit AI tool for one inner if statement and another syntax error both marked in the code. In addition, I also modified the logic used in my graph-representations which is also marked in the code.


## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

### Answer

I believe that the worst case for this algorithm would be that it would have to check everything before eventually deciding that the two graphs were not isomorphic. That means that it would complete the easy checks which needs to check the matrixes for both graphs for a $\Theta(V^2)$ with the "edgeCount" helper function. Then the recursive portion is mainly repsonsible for going through and checking each node and their potential neighbors using the "isPossible" helper function(which is $\Theta(V)$ alone), which would be $\Theta(V!)$ because essentially it is going through the potential permutations node by node. It should be noted the complexity for "isPossible" did not simply dissapear, but because it was used in the recursive backtracking, which itself had a higher order term $V!$, the $V$ from the helper is outpaced. That leaves an overall worst-case complexity of $\Theta(V^2*V!)$.

